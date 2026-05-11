"use client";

import { ChevronDown } from "lucide-react";
import { MeaningBox } from "@/components/MeaningBox";
import type { ReaderLineContent } from "@/types/content";

type ReaderLineProps = {
  line: ReaderLineContent;
  index: number;
  highlighted?: boolean;
  variant?: "default" | "reel";
};

export function ReaderLine({ line, index, highlighted = false, variant = "default" }: ReaderLineProps) {
  const isReel = variant === "reel";

  return (
    <article
      id={`line-${line.id}`}
      className={`reader-line scroll-mt-28 border-b border-saffron/15 transition duration-300 last:border-b-0 ${
        isReel
          ? "flex min-h-full snap-start items-center px-4 py-8 sm:px-8"
          : "py-5 sm:py-6"
      } ${
        highlighted
          ? "bg-saffron/12 shadow-[inset_4px_0_0_rgba(241,167,47,0.82)]"
          : ""
      }`}
    >
      <details
        className={`group w-full ${isReel ? "mx-auto max-w-3xl" : ""}`}
        onToggle={(event) => {
          const details = event.currentTarget as HTMLDetailsElement;

          if (details.open) {
            window.requestAnimationFrame(() => {
              const target = isReel ? details.querySelector("summary") : details.closest("article");

              target?.scrollIntoView({
                behavior: "smooth",
                block: isReel ? "center" : "nearest",
              });
            });
          }
        }}
      >
        <summary className="flex cursor-pointer list-none items-start gap-4 text-left marker:hidden">
          <span
            className={`mt-1 flex shrink-0 items-center justify-center rounded-full border border-saffron/30 bg-sindoor/15 font-latin text-xs text-saffron ${
              isReel ? "h-10 w-10" : "h-8 w-8"
            }`}
          >
            {index + 1}
          </span>
          <span
            className={`min-w-0 flex-1 font-medium text-ash ${
              isReel
                ? "text-[1.8rem] leading-[3.2rem] sm:text-[2.45rem] sm:leading-[4.35rem]"
                : "text-[1.35rem] leading-[2.45rem] sm:text-[1.58rem] sm:leading-[2.9rem]"
            }`}
          >
            {line.text}
          </span>
          <ChevronDown
            aria-hidden="true"
            className="mt-2 h-5 w-5 shrink-0 text-copper transition duration-200 group-open:rotate-180"
          />
        </summary>
        <div id={`meaning-${line.id}`} className="pl-12 sm:pl-14">
          <MeaningBox
            meaning={line.meaning}
            english={line.english}
            transliteration={line.transliteration}
          />
        </div>
      </details>
    </article>
  );
}
