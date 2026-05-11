import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { ChapterContent, MetadataContent } from "@/types/content";

const contentDirectory = path.join(process.cwd(), "content");

export function getMetadata(): MetadataContent {
  const filePath = path.join(contentDirectory, "metadata.json");
  return JSON.parse(readFileSync(filePath, "utf8")) as MetadataContent;
}

export function getChapterSlugs() {
  return getMetadata().chapters.map((chapter) => chapter.slug);
}

export async function getChapter(slug: string): Promise<ChapterContent | null> {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "");
  const filePath = path.join(contentDirectory, `${safeSlug}.json`);

  if (!existsSync(filePath)) {
    return null;
  }

  return JSON.parse(readFileSync(filePath, "utf8")) as ChapterContent;
}
