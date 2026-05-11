import { ArrowLeft, BookOpenText } from "lucide-react";
import Link from "next/link";

type ChapterHeaderProps = {
  title: string;
  author: string;
  lineCount: number;
};

export function ChapterHeader({ title, author, lineCount }: ChapterHeaderProps) {
  const authorName = author.replace("दिनकर", "‘दिनकर’");

  return (
    <header className="reader-container pt-5 sm:pt-8">
      <Link
        href="/"
        prefetch={false}
        className="relative z-30 inline-flex min-h-12 items-center gap-2 border border-saffron/35 bg-sindoor/45 px-4 font-display text-base text-ash/85 transition hover:border-saffron hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
      >
        <ArrowLeft className="h-4 w-4" />
        सभी सर्ग
      </Link>

      <div className="mt-8 border-b border-saffron/22 pb-8">
        <div className="mb-5 flex h-12 w-12 items-center justify-center border border-saffron/45 bg-sindoor/45 text-saffron shadow-glow">
          <BookOpenText className="h-6 w-6" />
        </div>
        <p className="font-display text-base text-copper sm:text-lg">{authorName}</p>
        <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ash sm:text-7xl">
          {title}
        </h1>
        <p className="mt-4 font-display text-base text-ash/64">
          {lineCount} पंक्तियां, स्पर्श पर सरल अर्थ
        </p>
      </div>
    </header>
  );
}
