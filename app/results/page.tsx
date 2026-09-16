"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {
  const [occasion, setOccasion] = useState("Everyday");
  const [style, setStyle] = useState("Effortless");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const occasionParam = params.get("occasion");
    const styleParam = params.get("style");

    if (occasionParam) {
      setOccasion(occasionParam);
    }

    if (styleParam) {
      setStyle(styleParam);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f5f0] px-6 py-10 text-[#292522]">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#8b7565]">
            Your Personal Style Guide
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Your Style, Curated
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-[#756b64]">
            We've created a starting point based on your preferences.
          </p>
        </div>

        {/* Selection Summary */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-5 text-xl font-semibold">
            Your preferences
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl bg-[#f6f1eb] p-5">
              <p className="text-xs uppercase tracking-widest text-[#9a887b]">
                Occasion
              </p>

              <p className="mt-2 text-lg font-medium">
                {occasion}
              </p>
            </div>

            <div className="rounded-2xl bg-[#f6f1eb] p-5">
              <p className="text-xs uppercase tracking-widest text-[#9a887b]">
                Style
              </p>

              <p className="mt-2 text-lg font-medium">
                {style}
              </p>
            </div>

          </div>
        </section>

        {/* Style Guide */}
        <section className="space-y-5">

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee4da]">
                👗
              </div>

              <h2 className="text-xl font-semibold">
                Outfit Direction
              </h2>
            </div>

            <p className="leading-7 text-[#6f6660]">
              Build your look around clean, comfortable pieces that feel
              natural to you. Keep the outfit polished without making it
              feel overdone.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee4da]">
                🎨
              </div>

              <h2 className="text-xl font-semibold">
                Colour Direction
              </h2>
            </div>

            <p className="leading-7 text-[#6f6660]">
              Start with versatile neutrals and add one or two colours that
              complement your overall appearance. The goal is harmony rather
              than too many competing shades.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eee4da]">
                ✨
              </div>

              <h2 className="text-xl font-semibold">
                Finishing Touches
              </h2>
            </div>

            <p className="leading-7 text-[#6f6660]">
              Keep accessories intentional. One statement piece or a few
              subtle details can elevate the outfit without overpowering
              your personal style.
            </p>
          </div>

        </section>

        {/* Wardrobe Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => {
              window.location.href = "/wardrobe";
            }}
            className="w-full rounded-full bg-[#292522] px-8 py-4 text-base font-medium text-white transition hover:opacity-90 sm:w-auto"
          >
            Explore My Wardrobe →
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-[#9a8e85]">
          Your style guide will become more personalized as you add more
          information.
        </p>

      </div>
    </main>
  );
}
