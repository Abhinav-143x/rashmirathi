import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, "content");
const PUBLIC_CONTENT_DIR = path.join(ROOT, "public", "content");

const independentVowels = new Map([
  ["अ", "a"],
  ["आ", "aa"],
  ["इ", "i"],
  ["ई", "ee"],
  ["उ", "u"],
  ["ऊ", "oo"],
  ["ऋ", "ri"],
  ["ए", "e"],
  ["ऐ", "ai"],
  ["ओ", "o"],
  ["औ", "au"],
]);

const consonants = new Map([
  ["क", "k"],
  ["ख", "kh"],
  ["ग", "g"],
  ["घ", "gh"],
  ["ङ", "ng"],
  ["च", "ch"],
  ["छ", "chh"],
  ["ज", "j"],
  ["झ", "jh"],
  ["ञ", "ny"],
  ["ट", "t"],
  ["ठ", "th"],
  ["ड", "d"],
  ["ढ", "dh"],
  ["ण", "n"],
  ["त", "t"],
  ["थ", "th"],
  ["द", "d"],
  ["ध", "dh"],
  ["न", "n"],
  ["प", "p"],
  ["फ", "ph"],
  ["ब", "b"],
  ["भ", "bh"],
  ["म", "m"],
  ["य", "y"],
  ["र", "r"],
  ["ल", "l"],
  ["व", "v"],
  ["श", "sh"],
  ["ष", "sh"],
  ["स", "s"],
  ["ह", "h"],
  ["ळ", "l"],
  ["क्ष", "ksh"],
  ["त्र", "tr"],
  ["ज्ञ", "gy"],
]);

const nuktaConsonants = new Map([
  ["क़", "q"],
  ["ख़", "kh"],
  ["ग़", "gh"],
  ["ज़", "z"],
  ["ड़", "r"],
  ["ढ़", "rh"],
  ["फ़", "f"],
  ["य़", "y"],
]);

const matras = new Map([
  ["ा", "aa"],
  ["ि", "i"],
  ["ी", "ee"],
  ["ु", "u"],
  ["ू", "oo"],
  ["ृ", "ri"],
  ["े", "e"],
  ["ै", "ai"],
  ["ो", "o"],
  ["ौ", "au"],
]);

const marks = new Map([
  ["ं", "n"],
  ["ँ", "n"],
  ["ः", "h"],
  ["ऽ", ""],
  ["।", "."],
  ["॥", "."],
]);

function nextCluster(text, index) {
  const tri = text.slice(index, index + 3);
  if (consonants.has(tri)) {
    return [tri, index + 3];
  }

  const pair = text.slice(index, index + 2);
  if (nuktaConsonants.has(pair)) {
    return [pair, index + 2];
  }

  return [text[index], index + 1];
}

function transliterate(text) {
  let output = "";

  for (let index = 0; index < text.length; ) {
    const [char, nextIndex] = nextCluster(text, index);

    if (independentVowels.has(char)) {
      output += independentVowels.get(char);
      index = nextIndex;
      continue;
    }

    const consonant = consonants.get(char) ?? nuktaConsonants.get(char);
    if (consonant) {
      const next = text[nextIndex];

      if (next === "्") {
        output += consonant;
        index = nextIndex + 1;
        continue;
      }

      if (matras.has(next)) {
        output += consonant + matras.get(next);
        index = nextIndex + 1;
        continue;
      }

      output += `${consonant}a`;
      index = nextIndex;
      continue;
    }

    if (matras.has(char)) {
      output += matras.get(char);
      index = nextIndex;
      continue;
    }

    if (marks.has(char)) {
      output += marks.get(char);
      index = nextIndex;
      continue;
    }

    output += char;
    index = nextIndex;
  }

  return output
    .replace(/\baur\b/g, "aur")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function enrichLine(line) {
  return {
    ...line,
    english: line.english ?? "",
    transliteration: line.transliteration || transliterate(line.text),
  };
}

for (const fileName of readdirSync(CONTENT_DIR).filter((name) => /^sarga-\d+\.json$/.test(name))) {
  const sourcePath = path.join(CONTENT_DIR, fileName);
  const chapter = JSON.parse(readFileSync(sourcePath, "utf8"));

  chapter.sections = chapter.sections.map((section) => ({
    ...section,
    lines: section.lines.map(enrichLine),
  }));

  const content = `${JSON.stringify(chapter, null, 2)}\n`;
  writeFileSync(sourcePath, content);
  writeFileSync(path.join(PUBLIC_CONTENT_DIR, fileName), content);
}

console.log("Added/updated english and transliteration fields for all sarga lines.");
