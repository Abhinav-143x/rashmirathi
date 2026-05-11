import { notFound } from "next/navigation";
import { AudioBar } from "@/components/AudioBar";
import { ChapterHeader } from "@/components/ChapterHeader";
import { ReaderLine } from "@/components/ReaderLine";
import { getChapter, getChapterSlugs, getMetadata } from "@/lib/content";

type SargaPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getChapterSlugs().map((slug) => ({ slug }));
}

export default async function SargaPage({ params }: SargaPageProps) {
  const { slug } = await params;
  const chapter = await getChapter(slug);
  const metadata = getMetadata();

  if (!chapter) {
    notFound();
  }

  const lines = chapter.sections.flatMap((section) => section.lines);
  let sectionStartIndex = 0;
  const sections = chapter.sections.map((section) => {
    const startIndex = sectionStartIndex;
    sectionStartIndex += section.lines.length;
    return { ...section, startIndex };
  });

  return (
    <main className="min-h-screen pb-8">
      <ChapterHeader title={chapter.title} author={metadata.author} lineCount={lines.length} />

      <div className="reader-container pt-6 sm:pt-8">
        {sections.map((section) => (
          <section key={section.id} className="scroll-mt-8">
            {section.title ? (
              <h2 className="mb-2 mt-8 font-latin text-xs uppercase tracking-[0.26em] text-saffron/70">
                {section.title}
              </h2>
            ) : null}
            <div className="border-y border-saffron/18 bg-ink/35">
              {section.lines.map((line, index) => (
                <ReaderLine key={line.id} line={line} index={section.startIndex + index} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <AudioBar src={chapter.audio} title={chapter.title} />
    </main>
  );
}
