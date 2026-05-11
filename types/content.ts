export type ChapterMeta = {
  slug: string;
  title: string;
};

export type MetadataContent = {
  title: string;
  author: string;
  chapters: ChapterMeta[];
};

export type ReaderLineContent = {
  id: string;
  text: string;
  meaning?: string;
  english?: string;
  transliteration?: string;
  startTime?: number;
  endTime?: number;
};

export type ChapterSection = {
  id: number;
  title?: string;
  lines: ReaderLineContent[];
};

export type ChapterContent = {
  slug: string;
  title: string;
  audio?: string;
  sections: ChapterSection[];
};
