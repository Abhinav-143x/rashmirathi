type MeaningBoxProps = {
  meaning?: string;
  english?: string;
  transliteration?: string;
  className?: string;
  density?: "compact" | "comfortable";
};

export function MeaningBox({
  meaning,
  english,
  transliteration,
  className = "",
  density = "comfortable",
}: MeaningBoxProps) {
  const isCompact = density === "compact";

  return (
    <div
      className={`mt-4 grid border-l-2 border-saffron bg-ash/[0.06] text-ash/78 ${
        isCompact ? "gap-2 px-3 py-2 text-[0.96rem] leading-7" : "gap-3 px-4 py-3 text-[1.02rem] leading-8"
      } ${className}`}
    >
      <section>
        <p className="font-latin text-[0.68rem] uppercase tracking-[0.18em] text-saffron/80">
          सरल अर्थ
        </p>
        <p>{meaning || "इस पंक्ति का सरल अर्थ अभी जोड़ा जाना है."}</p>
      </section>

      <section>
        <p className="font-latin text-[0.68rem] uppercase tracking-[0.18em] text-saffron/80">
          English
        </p>
        <p className="font-latin leading-7 text-ash/76">
          {english || "English translation pending."}
        </p>
      </section>

      <section>
        <p className="font-latin text-[0.68rem] uppercase tracking-[0.18em] text-saffron/80">
          Roman Hindi
        </p>
        <p className="font-latin leading-7 text-parchment/85">{transliteration || "Pending."}</p>
      </section>
    </div>
  );
}
