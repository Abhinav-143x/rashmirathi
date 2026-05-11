import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const SOURCE_URL = "https://rashmirathipoem.blogspot.com/2016/09/blog-post.html";
const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");
const PUBLIC_CONTENT_DIR = path.join(ROOT, "public", "content");

const chapterTitleByNumber = new Map([
  ["1", "प्रथम सर्ग"],
  ["2", "द्वितीय सर्ग"],
  ["3", "तृतीय सर्ग"],
  ["4", "चतुर्थ सर्ग"],
  ["5", "पंचम सर्ग"],
  ["6", "षष्ठ सर्ग"],
  ["7", "सप्तम सर्ग"],
]);

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)))
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function htmlToText(html) {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, "\n")
      .replace(/<style[\s\S]*?<\/style>/gi, "\n")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/(p|div|h1|h2|h3|h4|li)>/gi, "\n")
      .replace(/<[^>]+>/g, "")
  )
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n");
}

function cleanLine(line) {
  return line
    .trim()
    .replace(/^["“”]+|["“”]+$/g, "")
    .replace(/\s+/g, " ");
}

function readExistingAnnotations(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.json`);
  if (!existsSync(filePath)) {
    return new Map();
  }

  const chapter = JSON.parse(readFileSync(filePath, "utf8"));
  const annotations = new Map();

  for (const section of chapter.sections ?? []) {
    for (const line of section.lines ?? []) {
      if (line.text) {
        annotations.set(line.text, {
          meaning: line.meaning ?? "",
          english: line.english ?? "",
          transliteration: line.transliteration ?? "",
        });
      }
    }
  }

  return annotations;
}

function makeSections(lines, slug, existingAnnotations) {
  const sections = [];
  let sectionLines = [];
  let sectionId = 1;
  let lineId = 1;

  function flushSection() {
    if (sectionLines.length === 0) {
      return;
    }

    sections.push({
      id: sectionId,
      lines: sectionLines,
    });
    sectionId += 1;
    sectionLines = [];
  }

  for (const line of lines) {
    if (!line) {
      flushSection();
      continue;
    }

    const annotation = existingAnnotations.get(line);

    sectionLines.push({
      id: `${slug}-${lineId}`,
      text: line,
      meaning: annotation?.meaning ?? "",
      english: annotation?.english ?? "",
      transliteration: annotation?.transliteration ?? "",
    });
    lineId += 1;
  }

  flushSection();
  return sections;
}

function parseChapters(text) {
  const lines = text.split("\n").map(cleanLine);
  const chapters = [];
  let current = null;

  for (const line of lines) {
    const heading = line.match(/^([1-7])\.\s*(.+सर्ग)$/);

    if (heading) {
      if (current) {
        chapters.push(current);
      }

      const [, number, rawTitle] = heading;
      current = {
        number,
        slug: `sarga-${number}`,
        title: chapterTitleByNumber.get(number) ?? rawTitle,
        lines: [],
      };
      continue;
    }

    if (!current) {
      continue;
    }

    if (line === "INTERNET BLOG") {
      if (current) {
        chapters.push(current);
        current = null;
      }
      continue;
    }

    if (
      /^\d+>>$/.test(line) ||
      /^\d{2}:\d{2}$/.test(line) ||
      line.includes("Posted by") ||
      line.includes("Newer Post") ||
      line.includes("Older Post") ||
      line.includes("Email This") ||
      line.includes("Labels:") ||
      line.includes("comments:") ||
      line.includes("ReplyDelete") ||
      line.includes("Subscribe to:") ||
      line.includes("Post Comments") ||
      line.includes("Home") ||
      line.includes("AMAZON") ||
      line.includes("FLIPKART")
    ) {
      continue;
    }

    current.lines.push(line);
  }

  if (current) {
    chapters.push(current);
  }

  return chapters.filter((chapter) => chapter.lines.some(Boolean));
}

async function main() {
  mkdirSync(CONTENT_DIR, { recursive: true });
  mkdirSync(PUBLIC_CONTENT_DIR, { recursive: true });

  const response = await fetch(SOURCE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch source: ${response.status} ${response.statusText}`);
  }

  const html = await response.text();
  const chapters = parseChapters(htmlToText(html));

  if (chapters.length === 0) {
    throw new Error("No chapters were found in the source page.");
  }

  const metadata = {
    title: "रश्मिरथी",
    author: "रामधारी सिंह दिनकर",
    chapters: chapters.map((chapter) => ({
      slug: chapter.slug,
      title: chapter.title,
    })),
  };

  const metadataJson = `${JSON.stringify(metadata, null, 2)}\n`;
  writeFileSync(path.join(CONTENT_DIR, "metadata.json"), metadataJson);
  writeFileSync(path.join(PUBLIC_CONTENT_DIR, "metadata.json"), metadataJson);

  for (const chapter of chapters) {
    const existingAnnotations = readExistingAnnotations(chapter.slug);
    const audioPath = `/audio/${chapter.slug}.mp3`;
    const chapterJson = {
      slug: chapter.slug,
      title: chapter.title,
      ...(existsSync(path.join(ROOT, "public", audioPath)) ? { audio: audioPath } : {}),
      sections: makeSections(chapter.lines, chapter.slug, existingAnnotations),
    };

    const chapterContent = `${JSON.stringify(chapterJson, null, 2)}\n`;

    writeFileSync(path.join(CONTENT_DIR, `${chapter.slug}.json`), chapterContent);
    writeFileSync(path.join(PUBLIC_CONTENT_DIR, `${chapter.slug}.json`), chapterContent);
  }

  console.log(
    `Imported ${chapters.length} chapters and ${chapters.reduce(
      (total, chapter) => total + chapter.lines.filter(Boolean).length,
      0
    )} lines.`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
