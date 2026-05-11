"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  BookOpenText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Flame,
  Github,
  Keyboard,
  ListTree,
  Maximize2,
  Minimize2,
  Minus,
  PanelsTopLeft,
  Pause,
  Play,
  Plus,
  Rows3,
  Search,
  Shield,
  Sparkles,
  Swords,
  Timer,
  X,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MeaningBox } from "@/components/MeaningBox";
import { ReaderLine } from "@/components/ReaderLine";
import type { ChapterContent, MetadataContent, ReaderLineContent } from "@/types/content";

type RashmirathiAppProps = {
  metadata: MetadataContent;
};

type ReadingMode = "scroll" | "page" | "reel";

type LoadState =
  | { status: "home" }
  | { status: "loading"; slug: string }
  | { status: "reader"; chapter: ChapterContent }
  | { status: "error"; slug: string };

type SearchResult = {
  chapter: ChapterContent;
  line: ReaderLineContent;
  lineIndex: number;
  text: string;
};

type LineGroup = {
  id: string;
  lines: ReaderLineContent[];
  startIndex: number;
  endIndex: number;
};

type ReaderFontScale = "small" | "medium" | "large";
type MeaningDensity = "compact" | "comfortable";
type SavedReadingPosition = {
  mode: ReadingMode;
  lineId?: string;
  pageIndex?: number;
  reelIndex?: number;
  visibleLineCount?: number;
};

const LINE_CHUNK_SIZE = 180;
const PAGE_GROUP_COUNT = 5;
const SEARCH_RESULT_LIMIT = 28;
const DINKAR_WIKIPEDIA_URL = "https://en.wikipedia.org/wiki/Ramdhari_Singh_Dinkar";
const CONTRIBUTION_REPO_URL = "https://github.com/Abhinav-143x/Rashmirathi-CodexV1";
const LAST_READ_PREFIX = "rashmirathi:last-read:";

function authorDisplay(author: string) {
  if (author.includes("दिनकर")) {
    return author;
  }

  return "रामधारी सिंह दिनकर";
}

function lineEndsThought(text: string) {
  return /[।?!;:]$/.test(text.trim());
}

function createLineGroups(lines: ReaderLineContent[], maxLines = 2): LineGroup[] {
  const groups: LineGroup[] = [];
  let pending: ReaderLineContent[] = [];
  let groupStart = 0;

  lines.forEach((line, index) => {
    if (pending.length === 0) {
      groupStart = index;
    }

    pending.push(line);

    if (pending.length >= maxLines || lineEndsThought(line.text)) {
      groups.push({
        id: pending.map((item) => item.id).join("-"),
        lines: pending,
        startIndex: groupStart,
        endIndex: index,
      });
      pending = [];
    }
  });

  if (pending.length > 0) {
    groups.push({
      id: pending.map((item) => item.id).join("-"),
      lines: pending,
      startIndex: groupStart,
      endIndex: lines.length - 1,
    });
  }

  return groups;
}

function centerInsideReel(element: HTMLElement) {
  const container = element.closest(".reel-reader") as HTMLElement | null;

  if (!container) {
    return false;
  }

  const top = element.offsetTop - (container.clientHeight - element.offsetHeight) / 2;
  container.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  return true;
}

function getCurrentReelButton() {
  const container = document.querySelector(".reel-reader") as HTMLElement | null;

  if (!container) {
    return null;
  }

  const buttons = Array.from(
    container.querySelectorAll<HTMLButtonElement>(".reel-card button[aria-expanded]"),
  );

  if (!buttons.length) {
    return null;
  }

  const containerRect = container.getBoundingClientRect();
  const centerY = containerRect.top + containerRect.height / 2;

  return buttons.reduce((closest, button) => {
    const closestRect = closest.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const closestDistance = Math.abs(closestRect.top + closestRect.height / 2 - centerY);
    const buttonDistance = Math.abs(buttonRect.top + buttonRect.height / 2 - centerY);

    return buttonDistance < closestDistance ? button : closest;
  }, buttons[0]);
}

function getCurrentReelIndex(container: HTMLElement) {
  const cards = Array.from(container.querySelectorAll<HTMLElement>(".reel-card"));

  if (!cards.length) {
    return 0;
  }

  const centerY = container.scrollTop + container.clientHeight / 2;

  return cards.reduce((closestIndex, card, index) => {
    const closest = cards[closestIndex];
    const closestDistance = Math.abs(closest.offsetTop + closest.offsetHeight / 2 - centerY);
    const cardDistance = Math.abs(card.offsetTop + card.offsetHeight / 2 - centerY);

    return cardDistance < closestDistance ? index : closestIndex;
  }, 0);
}

function scrollToReelCard(index: number, container?: HTMLElement | null) {
  const reelContainer =
    container ?? (document.querySelector(".reel-reader") as HTMLElement | null);

  if (!reelContainer) {
    return;
  }

  const cards = Array.from(reelContainer.querySelectorAll<HTMLElement>(".reel-card"));
  const nextIndex = Math.min(Math.max(index, 0), Math.max(cards.length - 1, 0));
  const target = cards[nextIndex];

  if (!target) {
    return;
  }

  reelContainer.scrollTo({ top: target.offsetTop, behavior: "smooth" });
}

function scrollReelByStep(direction: 1 | -1, container?: HTMLElement | null) {
  const reelContainer =
    container ?? (document.querySelector(".reel-reader") as HTMLElement | null);

  if (!reelContainer) {
    return;
  }

  const cards = Array.from(reelContainer.querySelectorAll<HTMLElement>(".reel-card"));
  const currentIndex = getCurrentReelIndex(reelContainer);
  const nextIndex = Math.min(Math.max(currentIndex + direction, 0), Math.max(cards.length - 1, 0));

  scrollToReelCard(nextIndex, reelContainer);
}

function scrollToNextReelCard() {
  scrollReelByStep(1);
}

function AuthorLink({ name, subtle = false }: { name: string; subtle?: boolean }) {
  return (
    <a
      href={DINKAR_WIKIPEDIA_URL}
      target="_blank"
      rel="noreferrer"
      className={`underline decoration-copper/45 underline-offset-4 transition hover:text-saffron hover:decoration-saffron focus:outline-none focus:ring-2 focus:ring-saffron ${
        subtle ? "text-parchment" : ""
      }`}
    >
      {name}
    </a>
  );
}

function ContributionLink({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={`${CONTRIBUTION_REPO_URL}#contributing`}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 border border-saffron/45 bg-saffron/12 font-display text-saffron shadow-[inset_0_1px_0_rgba(246,234,210,0.10)] transition hover:border-saffron hover:bg-saffron/18 hover:text-ash focus:outline-none focus:ring-2 focus:ring-saffron ${
        compact ? "min-h-11 px-3 text-sm" : "min-h-12 px-4 text-base"
      }`}
    >
      <Github className={compact ? "h-4 w-4" : "h-5 w-5"} />
      Contribute
    </a>
  );
}

function combineGroupField(
  lines: ReaderLineContent[],
  field: "meaning" | "english" | "transliteration",
) {
  return lines
    .map((line) => line[field]?.trim())
    .filter((value): value is string => Boolean(value))
    .join(" ");
}

function getSavedPosition(slug: string): SavedReadingPosition | null {
  try {
    const rawValue = window.localStorage.getItem(`${LAST_READ_PREFIX}${slug}`);
    return rawValue ? (JSON.parse(rawValue) as SavedReadingPosition) : null;
  } catch {
    return null;
  }
}

function saveReadingPosition(slug: string, position: SavedReadingPosition) {
  try {
    window.localStorage.setItem(`${LAST_READ_PREFIX}${slug}`, JSON.stringify(position));
  } catch {
    // Ignore private-mode/storage-denied failures; reading should never break.
  }
}

function ReadingGroupCard({
  group,
  variant,
  highlightedLineId,
  fontScale,
  meaningDensity,
}: {
  group: LineGroup;
  variant: "page" | "reel";
  highlightedLineId: string | null;
  fontScale: ReaderFontScale;
  meaningDensity: MeaningDensity;
}) {
  const isReel = variant === "reel";
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const isHighlighted = group.lines.some((line) => line.id === highlightedLineId);
  const combinedMeaning = combineGroupField(group.lines, "meaning");
  const combinedEnglish = combineGroupField(group.lines, "english");
  const combinedTransliteration = combineGroupField(group.lines, "transliteration");
  const reelFontClass =
    fontScale === "large"
      ? "text-[1.52rem] leading-[2.75rem] sm:text-[2rem] sm:leading-[3.5rem]"
      : fontScale === "small"
        ? "text-[1.12rem] leading-[2.05rem] sm:text-[1.48rem] sm:leading-[2.7rem]"
        : "text-[1.34rem] leading-[2.45rem] sm:text-[1.78rem] sm:leading-[3.2rem]";
  const pageFontClass =
    fontScale === "large"
      ? "text-[1.6rem] leading-[3rem] sm:text-[2rem] sm:leading-[3.6rem]"
      : fontScale === "small"
        ? "text-[1.22rem] leading-[2.3rem] sm:text-[1.5rem] sm:leading-[2.75rem]"
        : "text-[1.42rem] leading-[2.65rem] sm:text-[1.78rem] sm:leading-[3.25rem]";

  function toggleMeaning() {
    const nextOpen = !isOpen;
    setIsOpen(nextOpen);

    if (nextOpen) {
      window.requestAnimationFrame(() => {
        if (isReel && triggerRef.current && centerInsideReel(triggerRef.current)) {
          return;
        }

        cardRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      });
    }
  }

  return (
    <article
      ref={cardRef}
      className={`reading-group transition duration-300 ${
        isReel
          ? `reel-card flex min-h-full snap-center px-4 py-8 sm:px-7 ${
              isOpen ? "items-start" : "items-center"
            }`
          : "py-7 sm:py-9"
      } ${
        isHighlighted
          ? "rounded-[2px] bg-saffron/10 shadow-[inset_4px_0_0_rgba(241,167,47,0.82)]"
          : ""
      }`}
    >
      <div className={`group w-full ${isReel ? "mx-auto max-w-3xl" : ""}`}>
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={isOpen}
          onClick={toggleMeaning}
          className={`flex w-full cursor-pointer list-none items-start gap-4 text-left marker:hidden ${
            isReel
              ? "rounded-[2px] border border-saffron/15 bg-ink/74 p-5 shadow-2xl shadow-black/30"
              : ""
          }`}
        >
          <span className="mt-1 flex h-9 min-w-9 shrink-0 items-center justify-center rounded-full border border-saffron/30 bg-sindoor/15 px-3 font-latin text-xs text-saffron">
            {group.startIndex + 1}
            {group.endIndex > group.startIndex ? `-${group.endIndex + 1}` : ""}
          </span>
          <span
            className={`min-w-0 flex-1 font-semibold text-ash ${
              isReel ? reelFontClass : pageFontClass
            }`}
          >
            {group.lines.map((line) => (
              <span key={line.id} id={`line-${line.id}`} className="block">
                {line.text}
              </span>
            ))}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`mt-2 h-5 w-5 shrink-0 text-copper transition duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isOpen ? (
          <div
            className={`space-y-4 ${
              isReel ? "px-5 pb-2 pt-5" : "border-l border-saffron/20 pl-5 pt-5 sm:ml-14"
            }`}
          >
            <MeaningBox
              meaning={combinedMeaning}
              english={combinedEnglish}
              transliteration={combinedTransliteration}
              className="mt-0"
              density={meaningDensity}
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}

function normalizeSearch(value: string) {
  return value
    .toLocaleLowerCase("hi-IN")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchChapter(slug: string) {
  const response = await fetch(`/content/${slug}.json`);

  if (!response.ok) {
    throw new Error(`Unable to load ${slug}`);
  }

  return (await response.json()) as ChapterContent;
}

export function RashmirathiApp({ metadata }: RashmirathiAppProps) {
  const [state, setState] = useState<LoadState>({ status: "home" });
  const [visibleLineCount, setVisibleLineCount] = useState(LINE_CHUNK_SIZE);
  const [readingMode, setReadingMode] = useState<ReadingMode>("scroll");
  const [pageIndex, setPageIndex] = useState(0);
  const [highlightedLineId, setHighlightedLineId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchChapters, setSearchChapters] = useState<ChapterContent[]>([]);
  const [searchStatus, setSearchStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [isReelFullscreen, setIsReelFullscreen] = useState(false);
  const [isReelKeyboardEnabled, setIsReelKeyboardEnabled] = useState(true);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(false);
  const [autoScrollSeconds, setAutoScrollSeconds] = useState(8);
  const [autoScrollRemaining, setAutoScrollRemaining] = useState(8);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [readerFontScale, setReaderFontScale] = useState<ReaderFontScale>("medium");
  const [meaningDensity, setMeaningDensity] = useState<MeaningDensity>("comfortable");
  const [restoreLineId, setRestoreLineId] = useState<string | null>(null);

  const chapterCache = useRef(new Map<string, ChapterContent>());
  const touchStartX = useRef<number | null>(null);
  const reelTouchStartY = useRef<number | null>(null);
  const authorName = useMemo(() => authorDisplay(metadata.author), [metadata.author]);
  const trimmedSearchQuery = searchQuery.trim();

  const toggleReelFullscreen = useCallback(() => {
    const next = !isReelFullscreen;
    setIsReelFullscreen(next);

    if (next) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {});
    }
  }, [isReelFullscreen]);

  const toggleAutoScroll = useCallback(() => {
    setAutoScrollRemaining(autoScrollSeconds);
    setIsAutoScrollEnabled((enabled) => !enabled);
  }, [autoScrollSeconds]);

  const setFontScaleByStep = useCallback((direction: 1 | -1) => {
    setReaderFontScale((scale) => {
      const options: ReaderFontScale[] = ["small", "medium", "large"];
      const currentIndex = options.indexOf(scale);
      return options[Math.min(Math.max(currentIndex + direction, 0), options.length - 1)];
    });
  }, []);

  const handleReelTouchEnd = useCallback((endY: number) => {
    if (reelTouchStartY.current === null) {
      return;
    }

    const deltaY = endY - reelTouchStartY.current;
    reelTouchStartY.current = null;

    if (Math.abs(deltaY) < 70) {
      return;
    }

    scrollReelByStep(deltaY < 0 ? 1 : -1);
  }, []);

  const openChapter = useCallback(
    async (slug: string, push = true, targetLineId?: string) => {
      setState({ status: "loading", slug });
      setVisibleLineCount(LINE_CHUNK_SIZE);
      setPageIndex(0);
      setHighlightedLineId(targetLineId ?? null);

      try {
        const cachedChapter = chapterCache.current.get(slug);
        const chapter = cachedChapter ?? (await fetchChapter(slug));

        if (!cachedChapter) {
          chapterCache.current.set(slug, chapter);
        }

        const savedPosition = !targetLineId ? getSavedPosition(slug) : null;

        if (targetLineId) {
          const targetIndex = chapter.sections
            .flatMap((section) => section.lines)
            .findIndex((line) => line.id === targetLineId);

          if (targetIndex >= 0) {
            setVisibleLineCount(Math.max(LINE_CHUNK_SIZE, targetIndex + 36));
            setPageIndex(Math.floor(targetIndex / PAGE_GROUP_COUNT));
            setReadingMode("scroll");
          }
        } else if (savedPosition) {
          const groups = createLineGroups(chapter.sections.flatMap((section) => section.lines));
          const savedMode = savedPosition.mode ?? "scroll";

          setReadingMode(savedMode);
          setVisibleLineCount(savedPosition.visibleLineCount ?? LINE_CHUNK_SIZE);
          setPageIndex(Math.max(0, savedPosition.pageIndex ?? 0));
          setCurrentReelIndex(Math.max(0, savedPosition.reelIndex ?? 0));
          setRestoreLineId(savedPosition.lineId ?? groups[savedPosition.reelIndex ?? 0]?.lines[0]?.id ?? null);
        }

        setState({ status: "reader", chapter });

        if (push) {
          window.history.pushState({ slug }, "", `#${slug}`);
        }

        requestAnimationFrame(() => {
          if (targetLineId) {
            document.getElementById(`line-${targetLineId}`)?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          } else {
            window.scrollTo({ top: 0, behavior: "auto" });
          }
        });
      } catch {
        setState({ status: "error", slug });
      }
    },
    [],
  );

  const goHome = useCallback((push = true) => {
    setState({ status: "home" });
    setPageIndex(0);
    setHighlightedLineId(null);
    setIsReelFullscreen(false);
    setIsAutoScrollEnabled(false);

    if (push) {
      window.history.pushState({}, "", window.location.pathname);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    if (readingMode !== "reel" || state.status !== "reader") {
      setIsReelFullscreen(false);
      setIsAutoScrollEnabled(false);
    }
  }, [readingMode, state.status]);

  useEffect(() => {
    if (!isReelFullscreen) {
      setIsAutoScrollEnabled(false);
    }
  }, [isReelFullscreen]);

  useEffect(() => {
    setAutoScrollRemaining(autoScrollSeconds);
  }, [autoScrollSeconds]);

  useEffect(() => {
    if (!isReelFullscreen || readingMode !== "reel" || !isReelKeyboardEnabled) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }

      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        getCurrentReelButton()?.click();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isReelFullscreen, isReelKeyboardEnabled, readingMode]);

  useEffect(() => {
    if (!isReelFullscreen || readingMode !== "reel" || !isAutoScrollEnabled) {
      return;
    }

    const timer = window.setInterval(() => {
      setAutoScrollRemaining((remaining) => {
        if (remaining <= 1) {
          scrollToNextReelCard();
          return autoScrollSeconds;
        }

        return remaining - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [autoScrollSeconds, isAutoScrollEnabled, isReelFullscreen, readingMode]);

  useEffect(() => {
    const syncFullscreen = () => {
      if (!document.fullscreenElement) {
        setIsReelFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", syncFullscreen);
    return () => document.removeEventListener("fullscreenchange", syncFullscreen);
  }, []);

  useEffect(() => {
    if (state.status !== "reader" || !restoreLineId) {
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(`line-${restoreLineId}`);
      const reelCard = target?.closest(".reel-card") as HTMLElement | null;
      const reelContainer = target?.closest(".reel-reader") as HTMLElement | null;

      if (readingMode === "reel" && reelCard && reelContainer) {
        reelContainer.scrollTo({ top: reelCard.offsetTop, behavior: "auto" });
      } else {
        target?.scrollIntoView({ behavior: "auto", block: "center" });
      }

      setRestoreLineId(null);
    });
  }, [readingMode, restoreLineId, state.status]);

  useEffect(() => {
    const loadFromHash = () => {
      const slug = window.location.hash.replace("#", "");
      const exists = metadata.chapters.some((chapter) => chapter.slug === slug);

      if (exists) {
        void openChapter(slug, false);
      } else {
        goHome(false);
      }
    };

    loadFromHash();
    window.addEventListener("popstate", loadFromHash);
    window.addEventListener("hashchange", loadFromHash);

    return () => {
      window.removeEventListener("popstate", loadFromHash);
      window.removeEventListener("hashchange", loadFromHash);
    };
  }, [goHome, metadata.chapters, openChapter]);

  useEffect(() => {
    if (trimmedSearchQuery.length < 2) {
      setSearchStatus("idle");
      return;
    }

    let isCancelled = false;
    setSearchStatus(searchChapters.length ? "ready" : "loading");

    async function loadSearchIndex() {
      try {
        const chapters = await Promise.all(
          metadata.chapters.map(async (chapter) => {
            const cachedChapter = chapterCache.current.get(chapter.slug);

            if (cachedChapter) {
              return cachedChapter;
            }

            const loadedChapter = await fetchChapter(chapter.slug);
            chapterCache.current.set(chapter.slug, loadedChapter);
            return loadedChapter;
          }),
        );

        if (!isCancelled) {
          setSearchChapters(chapters);
          setSearchStatus("ready");
        }
      } catch {
        if (!isCancelled) {
          setSearchStatus("error");
        }
      }
    }

    if (!searchChapters.length) {
      void loadSearchIndex();
    }

    return () => {
      isCancelled = true;
    };
  }, [metadata.chapters, searchChapters.length, trimmedSearchQuery.length]);

  const searchResults = useMemo<SearchResult[]>(() => {
    const query = normalizeSearch(searchQuery);

    if (query.length < 2 || !searchChapters.length) {
      return [];
    }

    const terms = query.split(" ").filter(Boolean);
    const results: SearchResult[] = [];

    for (const chapter of searchChapters) {
      const lines = chapter.sections.flatMap((section) => section.lines);

      for (const [lineIndex, line] of lines.entries()) {
        const haystack = normalizeSearch(
          [chapter.title, line.text, line.meaning, line.english, line.transliteration]
            .filter(Boolean)
            .join(" "),
        );

        if (terms.every((term) => haystack.includes(term))) {
          results.push({ chapter, line, lineIndex, text: line.text });
        }

        if (results.length >= SEARCH_RESULT_LIMIT) {
          return results;
        }
      }
    }

    return results;
  }, [searchChapters, searchQuery]);

  function SearchPanel({ compact = false }: { compact?: boolean }) {
    const showResults = trimmedSearchQuery.length >= 2;

    return (
      <section
        className={`relative z-30 border border-saffron/24 bg-[linear-gradient(135deg,rgba(16,13,10,0.92),rgba(67,20,13,0.82))] shadow-[inset_0_1px_0_rgba(246,234,210,0.08)] ${
          compact ? "p-3" : "p-4"
        }`}
      >
        <label className="flex min-h-12 items-center gap-3 border border-saffron/22 bg-ink/55 px-3 focus-within:border-saffron focus-within:ring-2 focus-within:ring-saffron/35">
          <Search className="h-5 w-5 shrink-0 text-saffron" />
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="पंक्ति, अर्थ, English, transliteration खोजें"
            className="min-w-0 flex-1 bg-transparent font-devanagari text-base text-ash outline-none placeholder:text-ash/42"
            type="search"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="flex h-9 w-9 items-center justify-center text-ash/60 transition hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
              aria-label="Search clear करें"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </label>

        {showResults ? (
          <div className="mt-3 max-h-[min(26rem,52vh)] overflow-y-auto border border-saffron/18 bg-ink/72">
            {searchStatus === "loading" ? (
              <div className="px-4 py-5 font-display text-ash/70">खोज-सूची बन रही है...</div>
            ) : null}

            {searchStatus === "error" ? (
              <div className="px-4 py-5 font-display text-copper">खोज अभी लोड नहीं हो पाई।</div>
            ) : null}

            {searchStatus === "ready" && !searchResults.length ? (
              <div className="px-4 py-5 font-display text-ash/70">कोई मिलान नहीं मिला।</div>
            ) : null}

            {searchResults.map((result) => (
              <button
                key={`${result.chapter.slug}-${result.line.id}`}
                type="button"
                onClick={() => {
                  void openChapter(result.chapter.slug, true, result.line.id);
                }}
                className="block w-full border-b border-saffron/12 px-4 py-3 text-left transition last:border-b-0 hover:bg-saffron/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-saffron"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-sm text-saffron">{result.chapter.title}</span>
                  <span className="font-latin text-xs uppercase tracking-[0.14em] text-ash/45">
                    {result.lineIndex + 1}
                  </span>
                </div>
                <p className="mt-2 font-devanagari text-lg leading-8 text-ash">{result.text}</p>
                <p className="mt-1 line-clamp-2 font-devanagari text-sm leading-6 text-ash/58">
                  {result.line.meaning || result.line.english || result.line.transliteration}
                </p>
              </button>
            ))}
          </div>
        ) : null}
      </section>
    );
  }

  if (state.status === "reader") {
    const chapter = state.chapter;
    const lines = chapter.sections.flatMap((section) => section.lines);
    const readingGroups = createLineGroups(lines);
    const totalPages = Math.max(1, Math.ceil(readingGroups.length / PAGE_GROUP_COUNT));
    const boundedPageIndex = Math.min(pageIndex, totalPages - 1);
    const pageStart = boundedPageIndex * PAGE_GROUP_COUNT;
    const pageGroups = readingGroups.slice(pageStart, pageStart + PAGE_GROUP_COUNT);
    const currentReelGroup = readingGroups[currentReelIndex];

    let lineStartIndex = 0;
    const sections = chapter.sections
      .map((section) => {
        const startIndex = lineStartIndex;
        lineStartIndex += section.lines.length;
        return { ...section, startIndex };
      })
      .filter((section) => section.startIndex < visibleLineCount);

    const hasMoreLines = visibleLineCount < lines.length;
    const canGoPrevious = boundedPageIndex > 0;
    const canGoNext = boundedPageIndex < totalPages - 1;

    function goToPage(nextPage: number) {
      const clampedPage = Math.min(Math.max(nextPage, 0), totalPages - 1);
      const savedGroup = readingGroups[clampedPage * PAGE_GROUP_COUNT];

      setPageIndex(clampedPage);
      saveReadingPosition(chapter.slug, {
        mode: "page",
        lineId: savedGroup?.lines[0]?.id,
        pageIndex: clampedPage,
        reelIndex: currentReelIndex,
        visibleLineCount,
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function handlePageSwipe(endX: number) {
      if (touchStartX.current === null) {
        return;
      }

      const deltaX = endX - touchStartX.current;
      touchStartX.current = null;

      if (Math.abs(deltaX) < 56) {
        return;
      }

      if (deltaX < 0 && canGoNext) {
        goToPage(boundedPageIndex + 1);
      }

      if (deltaX > 0 && canGoPrevious) {
        goToPage(boundedPageIndex - 1);
      }
    }

    function saveCurrentPosition(nextMode = readingMode, nextReelIndex = currentReelIndex) {
      const group =
        nextMode === "reel"
          ? readingGroups[nextReelIndex]
          : nextMode === "page"
            ? pageGroups[0]
            : sections[0];
      const lineId = group?.lines?.[0]?.id;

      saveReadingPosition(chapter.slug, {
        mode: nextMode,
        lineId,
        pageIndex: boundedPageIndex,
        reelIndex: nextReelIndex,
        visibleLineCount,
      });
    }

    return (
      <main className="min-h-screen pb-8">
        <header className="reader-container pt-5 sm:pt-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => goHome()}
              className="relative z-30 inline-flex min-h-12 items-center gap-2 border border-saffron/35 bg-sindoor/45 px-4 font-display text-base text-ash/85 transition hover:border-saffron hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <ArrowLeft className="h-4 w-4" />
              सभी सर्ग
            </button>
            <ContributionLink compact />
          </div>

          <div className="mt-8 border-b border-saffron/22 pb-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center border border-saffron/45 bg-sindoor/45 text-saffron shadow-glow">
              <BookOpenText className="h-6 w-6" />
            </div>
            <p className="font-display text-base text-copper sm:text-lg">
              <AuthorLink name={authorName} />
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-ash sm:text-7xl">
              {chapter.title}
            </h1>
            <p className="mt-4 font-display text-base text-ash/64">
              {lines.length} पंक्तियां, स्पर्श पर सरल अर्थ
            </p>
          </div>
        </header>

        <div className="reader-container pt-6 sm:pt-8">
          <SearchPanel compact />

          <div className="mb-6 mt-4 border border-saffron/22 bg-[linear-gradient(90deg,rgba(125,30,28,0.52),rgba(16,13,10,0.78))] p-2 shadow-[inset_0_1px_0_rgba(246,234,210,0.08)]">
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                { id: "scroll" as const, label: "पंक्ति-दर-पंक्ति पाठ", icon: Rows3 },
                { id: "page" as const, label: "पृष्ठ पलटकर पाठ", icon: PanelsTopLeft },
                { id: "reel" as const, label: "रील पाठ", icon: ListTree },
              ].map((mode) => {
                const Icon = mode.icon;

                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => {
                      setReadingMode(mode.id);
                      saveCurrentPosition(mode.id);

                      if (mode.id !== "reel" && document.fullscreenElement) {
                        document.exitFullscreen?.().catch(() => {});
                      }
                    }}
                    className={`flex min-h-12 items-center justify-center gap-2 border px-3 font-display text-sm transition focus:outline-none focus:ring-2 focus:ring-saffron sm:text-base ${
                      readingMode === mode.id
                        ? "border-saffron bg-saffron/15 text-saffron"
                        : "border-transparent text-ash/68 hover:border-saffron/30 hover:text-ash"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {mode.label}
                  </button>
                );
              })}
            </div>
          </div>

          {readingMode === "scroll" ? (
            <>
              {sections.map((section) => (
                <section key={section.id} className="scroll-mt-8">
                  {section.title ? (
                    <h2 className="mb-2 mt-8 font-latin text-xs uppercase tracking-[0.26em] text-saffron/70">
                      {section.title}
                    </h2>
                  ) : null}
                  <div className="border-y border-saffron/18 bg-ink/35">
                    {section.lines
                      .slice(0, Math.max(0, visibleLineCount - section.startIndex))
                      .map((line, index) => (
                        <ReaderLine
                          key={line.id}
                          line={line}
                          index={section.startIndex + index}
                          highlighted={highlightedLineId === line.id}
                        />
                      ))}
                  </div>
                </section>
              ))}

              {hasMoreLines ? (
                <div className="py-8 text-center">
                  <button
                    type="button"
                    onClick={() => setVisibleLineCount((count) => count + LINE_CHUNK_SIZE)}
                    className="min-h-12 border border-saffron/35 bg-sindoor/45 px-5 font-display text-base text-ash transition hover:border-saffron hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
                  >
                    और पंक्तियां दिखाएं
                  </button>
                  <p className="mt-3 font-latin text-xs uppercase tracking-[0.16em] text-ash/45">
                    {Math.min(visibleLineCount, lines.length)} / {lines.length}
                  </p>
                </div>
              ) : null}
            </>
          ) : null}

          {readingMode === "page" ? (
            <section
              className="page-reader overflow-hidden border border-saffron/25 bg-[radial-gradient(circle_at_top_left,rgba(241,167,47,0.10),transparent_20rem),rgba(16,13,10,0.62)] shadow-glow"
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                handlePageSwipe(event.changedTouches[0]?.clientX ?? 0);
              }}
            >
              <div className="flex items-center justify-between border-b border-saffron/18 px-4 py-3 font-latin text-xs uppercase tracking-[0.16em] text-parchment/72">
                <span>
                  पृष्ठ {boundedPageIndex + 1} / {totalPages}
                </span>
                <span>
                  अंश {(pageGroups[0]?.startIndex ?? 0) + 1}-{(pageGroups.at(-1)?.endIndex ?? 0) + 1}
                </span>
              </div>

              <div className="page-leaf min-h-[64vh] px-5 py-3 sm:px-10 sm:py-6">
                {pageGroups.map((group) => (
                  <ReadingGroupCard
                    key={group.id}
                    group={group}
                    variant="page"
                    highlightedLineId={highlightedLineId}
                    fontScale={readerFontScale}
                    meaningDensity={meaningDensity}
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 border-t border-saffron/18">
                <button
                  type="button"
                  disabled={!canGoPrevious}
                  onClick={() => goToPage(boundedPageIndex - 1)}
                  className="flex min-h-14 items-center justify-center gap-2 border-r border-saffron/18 font-display text-base text-ash transition hover:bg-saffron/10 hover:text-saffron disabled:cursor-not-allowed disabled:text-ash/28"
                >
                  <ChevronLeft className="h-5 w-5" />
                  पिछला
                </button>
                <button
                  type="button"
                  disabled={!canGoNext}
                  onClick={() => goToPage(boundedPageIndex + 1)}
                  className="flex min-h-14 items-center justify-center gap-2 font-display text-base text-ash transition hover:bg-saffron/10 hover:text-saffron disabled:cursor-not-allowed disabled:text-ash/28"
                >
                  अगला
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </section>
          ) : null}

          {readingMode === "reel" ? (
            <section
              className={
                isReelFullscreen
                  ? "reel-fullscreen fixed inset-0 z-50 bg-ink px-3 py-3 sm:px-6 sm:py-5"
                  : ""
              }
            >
              <div
                className={`mb-3 flex flex-wrap items-center justify-between gap-3 border border-saffron/22 bg-[linear-gradient(90deg,rgba(125,30,28,0.56),rgba(16,13,10,0.88))] px-3 py-2 shadow-[inset_0_1px_0_rgba(246,234,210,0.08)] ${
                  isReelFullscreen ? "sticky top-0 z-10" : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="font-latin text-[0.66rem] uppercase tracking-[0.24em] text-copper">
                    Reel Reader
                  </p>
                  <p className="truncate font-display text-lg text-ash">{chapter.title}</p>
                  <p className="mt-1 font-latin text-xs uppercase tracking-[0.16em] text-ash/48">
                    {currentReelIndex + 1} / {readingGroups.length}
                    {currentReelGroup ? ` · ${currentReelGroup.startIndex + 1}-${currentReelGroup.endIndex + 1}` : ""}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  {isReelFullscreen ? (
                    <>
                      <div className="flex min-h-11 items-center border border-saffron/20 bg-ink/45">
                        <button
                          type="button"
                          onClick={() => setFontScaleByStep(-1)}
                          className="flex h-10 w-10 items-center justify-center text-ash/64 transition hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
                          aria-label="Font छोटा करें"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-12 text-center font-latin text-xs uppercase tracking-[0.14em] text-saffron">
                          {readerFontScale === "large" ? "L" : readerFontScale === "small" ? "S" : "M"}
                        </span>
                        <button
                          type="button"
                          onClick={() => setFontScaleByStep(1)}
                          className="flex h-10 w-10 items-center justify-center text-ash/64 transition hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
                          aria-label="Font बड़ा करें"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          setMeaningDensity((density) =>
                            density === "compact" ? "comfortable" : "compact",
                          )
                        }
                        className="flex min-h-11 items-center gap-2 border border-saffron/20 bg-ink/45 px-3 font-display text-sm text-ash/70 transition hover:border-saffron/35 hover:text-saffron focus:outline-none focus:ring-2 focus:ring-saffron"
                      >
                        अर्थ {meaningDensity === "compact" ? "Compact" : "Comfort"}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsReelKeyboardEnabled((enabled) => !enabled)}
                        className={`flex min-h-11 items-center gap-2 border px-3 font-display text-sm transition focus:outline-none focus:ring-2 focus:ring-saffron ${
                          isReelKeyboardEnabled
                            ? "border-saffron/40 bg-saffron/12 text-saffron"
                            : "border-saffron/20 bg-ink/45 text-ash/58"
                        }`}
                      >
                        <Keyboard className="h-4 w-4" />
                        Enter/Space {isReelKeyboardEnabled ? "On" : "Off"}
                      </button>
                      <button
                        type="button"
                        onClick={toggleAutoScroll}
                        className={`flex min-h-11 items-center gap-2 border px-3 font-display text-sm transition focus:outline-none focus:ring-2 focus:ring-saffron ${
                          isAutoScrollEnabled
                            ? "border-saffron/40 bg-saffron/12 text-saffron"
                            : "border-saffron/20 bg-ink/45 text-ash/62"
                        }`}
                      >
                        {isAutoScrollEnabled ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4" />
                        )}
                        Auto {isAutoScrollEnabled ? `${autoScrollRemaining}s` : "Off"}
                      </button>
                      <label className="flex min-h-11 items-center gap-2 border border-saffron/20 bg-ink/45 px-3 font-latin text-xs uppercase tracking-[0.14em] text-ash/60">
                        <Timer className="h-4 w-4 text-copper" />
                        <input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          value={autoScrollSeconds}
                          onChange={(event) => {
                            const value = Number(event.target.value.replace(/\D/g, ""));
                            setAutoScrollSeconds(Math.min(Math.max(value || 2, 2), 60));
                          }}
                          className="w-14 bg-transparent text-center font-display text-sm normal-case tracking-normal text-ash outline-none"
                          aria-label="Auto scroll seconds"
                        />
                        <span className="normal-case tracking-normal text-ash/58">sec</span>
                      </label>
                    </>
                  ) : null}
                  <button
                    type="button"
                    onClick={toggleReelFullscreen}
                    className="flex min-h-11 shrink-0 items-center gap-2 border border-saffron/35 bg-saffron/10 px-3 font-display text-sm text-saffron transition hover:border-saffron hover:bg-saffron/15 focus:outline-none focus:ring-2 focus:ring-saffron"
                  >
                    {isReelFullscreen ? (
                      <Minimize2 className="h-4 w-4" />
                    ) : (
                      <Maximize2 className="h-4 w-4" />
                    )}
                    {isReelFullscreen ? "Exit" : "Fullscreen"}
                  </button>
                </div>
              </div>

              <div
                className={`reel-reader overflow-y-auto border border-saffron/22 bg-ink/50 ${
                  isReelFullscreen ? "h-[calc(100vh-5.9rem)]" : "h-[calc(100vh-15rem)]"
                }`}
                onScroll={(event) => {
                  const nextIndex = getCurrentReelIndex(event.currentTarget);
                  setCurrentReelIndex(nextIndex);
                  saveCurrentPosition("reel", nextIndex);
                }}
                onTouchStart={(event) => {
                  reelTouchStartY.current = event.touches[0]?.clientY ?? null;
                }}
                onTouchEnd={(event) => {
                  handleReelTouchEnd(event.changedTouches[0]?.clientY ?? 0);
                }}
              >
                {readingGroups.map((group) => (
                  <ReadingGroupCard
                    key={group.id}
                    group={group}
                    variant="reel"
                    highlightedLineId={highlightedLineId}
                    fontScale={readerFontScale}
                    meaningDensity={meaningDensity}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-ink">
      <section className="relative isolate min-h-screen overflow-hidden px-4 py-5 sm:px-8 sm:py-8">
        <Image
          src="/images/karna-kurukshetra.jpg"
          alt=""
          priority
          fill
          sizes="(min-width: 640px) 58vw, 100vw"
          className="battle-art pointer-events-none absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center opacity-40 sm:w-[62%] sm:opacity-76"
        />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#100d0a_0%,rgba(16,13,10,0.98)_34%,rgba(41,13,10,0.84)_66%,rgba(16,13,10,0.45)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-sindoor/35 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-ink to-transparent" />
        <div className="pointer-events-none absolute left-0 top-24 hidden h-[62vh] w-1 bg-gradient-to-b from-saffron via-copper to-transparent lg:block" />

        <div className="mx-auto grid min-h-[calc(100vh-2.5rem)] w-full max-w-7xl content-between gap-10">
          <header className="relative z-20 flex items-center justify-between gap-4 border-b border-saffron/28 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center border border-saffron/55 bg-sindoor/50 text-saffron shadow-glow">
                <BookOpenText className="h-6 w-6" />
              </div>
              <p className="font-display text-base text-parchment sm:text-lg">
                <AuthorLink name={authorName} subtle />
              </p>
            </div>
            <span className="hidden items-center gap-2 border border-copper/35 bg-sindoor/25 px-3 py-2 font-latin text-xs uppercase tracking-[0.18em] text-saffron sm:inline-flex">
              <Swords className="h-4 w-4" />
              रणभूमि पाठ
            </span>
          </header>

          <div className="relative z-20 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.68fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 border border-saffron/30 bg-saffron/10 px-3 py-2 font-latin text-xs uppercase tracking-[0.18em] text-saffron">
                <Flame className="h-4 w-4" />
                Karna Kavya
              </p>
              <h1 className="mt-5 font-display text-7xl font-semibold leading-[0.98] text-ash sm:text-8xl lg:text-9xl">
                {metadata.title}
              </h1>
              <p className="mt-6 max-w-2xl font-display text-2xl leading-10 text-ash/84 sm:text-3xl sm:leading-[3rem]">
                रण, तेज, दान और नियति की महागाथा। कर्ण के जीवन को राजसी, स्पष्ट और शांत पाठ में पढ़िए।
              </p>
              <div className="mt-8 flex flex-wrap gap-3 font-latin text-xs uppercase tracking-[0.14em] text-parchment/70">
                <span className="border border-copper/35 bg-ink/60 px-3 py-2">7 Sargas</span>
                <span className="border border-copper/35 bg-ink/60 px-3 py-2">3632 Lines</span>
                <span className="border border-copper/35 bg-ink/60 px-3 py-2">Search Ready</span>
              </div>
              <div className="mt-6">
                <ContributionLink />
              </div>
            </div>

            <div className="grid gap-4">
              <SearchPanel />

              <nav aria-label="सर्ग सूची" className="relative z-30 grid gap-3">
                {metadata.chapters.map((chapter, index) => (
                  <a
                    key={chapter.slug}
                    href={`#${chapter.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      void openChapter(chapter.slug);
                    }}
                    className="group relative z-30 grid min-h-20 grid-cols-[3.2rem_minmax(0,1fr)_2.4rem] items-center gap-4 border border-saffron/28 bg-[linear-gradient(90deg,rgba(125,30,28,0.72),rgba(16,13,10,0.88))] px-4 py-4 shadow-[inset_0_1px_0_rgba(246,234,210,0.10)] backdrop-blur-sm transition duration-200 hover:border-saffron hover:bg-saffron/10 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-saffron"
                  >
                    <span className="font-latin text-sm uppercase tracking-[0.18em] text-saffron">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl text-ash sm:text-4xl">{chapter.title}</span>
                    <span className="flex h-10 w-10 items-center justify-center border border-saffron/28 bg-ink/45 text-saffron">
                      <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <footer className="relative z-20 flex flex-wrap items-center justify-between gap-3 border-t border-saffron/20 pt-4 font-latin text-xs text-ash/50">
            <span className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4 text-copper" />
              Karna in Kurukshetra, Wikimedia Commons public domain.
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-saffron" />
              Search, page, scroll, reel
            </span>
            <a
              href={`${CONTRIBUTION_REPO_URL}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-saffron transition hover:text-ash focus:outline-none focus:ring-2 focus:ring-saffron"
            >
              <Github className="h-4 w-4" />
              Contribution guide
            </a>
          </footer>
        </div>
      </section>

      {state.status === "loading" ? (
        <div className="fixed inset-x-4 bottom-4 z-40 border border-saffron/35 bg-ink/95 px-4 py-3 font-display text-ash shadow-glow">
          सर्ग खुल रहा है...
        </div>
      ) : null}

      {state.status === "error" ? (
        <div className="fixed inset-x-4 bottom-4 z-40 border border-saffron/35 bg-sindoor/95 px-4 py-3 font-display text-ash shadow-glow">
          सर्ग लोड नहीं हो पाया। कृपया फिर से दबाइए।
        </div>
      ) : null}
    </main>
  );
}
