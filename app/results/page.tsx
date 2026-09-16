"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setOccasion(params.get("occasion") || "Everyday");
    setStyle(params.get("style") || "Effortless");
  }, []);

  const goToWardrobe = () => {
    window.location.href = "/wardrobe";
  };

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#171717]">
      {/* HEADER */}
      <header className="border-b border-black/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-8">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="text-sm text-black/50 hover:text-black"
          >
            ← Start Over
          </button>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-black/40">
              Your Personal
            </p>

            <h1 className="font-serif text-2xl">
              Style Guide
            </h1>
          </div>

          <div className="w-[70px]" />
        </div>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-12 md:px-8 md:pt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-black/40">
          Your results
        </p>

        <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
          Your style,
          <br />
          <span className="italic">made personal.</span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-black/55">
          Based on your preferences, here are some style directions created
          especially for you.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs">
            {occasion}
          </span>

          <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs">
            {style}
          </span>
        </div>
      </section>

      {/* LOOKS */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">

          {/* LOOK 01 */}
          <div className="rounded-[28px] border border-black/10 bg-white p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Look 01
            </p>

            <h3 className="mt-5 font-serif text-3xl">
              Effortless Classic
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/55">
              Clean silhouettes · neutral tones · timeless pieces
            </p>

            <div className="mt-8 h-px bg-black/10" />

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-black/35">
              Style direction
            </p>

            <p className="mt-2 text-sm leading-6 text-black/60">
              Structured basics paired with relaxed, polished details.
            </p>
          </div>

          {/* LOOK 02 */}
          <div className="rounded-[28px] border border-black/10 bg-white p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Look 02
            </p>

            <h3 className="mt-5 font-serif text-3xl">
              Modern Ease
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/55">
              Structured top · straight-leg bottoms · refined details
            </p>

            <div className="mt-8 h-px bg-black/10" />

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-black/35">
              Style direction
            </p>

            <p className="mt-2 text-sm leading-6 text-black/60">
              Simple proportions with subtle statement pieces.
            </p>
          </div>

          {/* LOOK 03 */}
          <div className="rounded-[28px] border border-black/10 bg-white p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Look 03
            </p>

            <h3 className="mt-5 font-serif text-3xl">
              Soft Statement
            </h3>

            <p className="mt-4 text-sm leading-6 text-black/55">
              Elegant silhouette · complementary colors · minimal jewelry
            </p>

            <div className="mt-8 h-px bg-black/10" />

            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-black/35">
              Style direction
            </p>

            <p className="mt-2 text-sm leading-6 text-black/60">
              Feminine balance with understated accessories and thoughtful
              color choices.
            </p>
          </div>

        </div>
      </section>

      {/* WARDROBE SECTION */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 md:px-8">
        <div className="overflow-hidden rounded-[32px] bg-[#171717] px-6 py-10 text-white md:px-10 md:py-14">

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-white/40">
              Your wardrobe
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Turn your own clothes
              <br />
              into <span className="italic">your looks.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Take photos of your clothes and create personalized outfits
              using pieces already in your closet.
            </p>

            <button
              onClick={goToWardrobe}
              className="mt-8 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Build an Outfit From My Closet
              <span className="ml-3">→</span>
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 px-5 py-8 text-center">
        <p className="text-xs tracking-wide text-black/35">
          Your style. Your wardrobe. Your way.
        </p>
      </footer>
    </main>
  );
      }
