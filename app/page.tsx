"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <main className="min-h-screen bg-[#faf7f2] px-6 py-12 text-[#2d2926]">
        <div className="mx-auto max-w-2xl">
          <button
            onClick={() => setStarted(false)}
            className="mb-10 text-sm text-[#6f665f] hover:underline"
          >
            ← Back
          </button>

          <h1 className="text-4xl font-semibold tracking-tight">
            Let&apos;s personalize your style
          </h1>

          <p className="mt-3 text-[#6f665f]">
            Tell us a little about yourself so we can understand your style,
            colors and preferences.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium">
                What are you dressing for?
              </label>
              <select className="w-full rounded-xl border border-[#ddd5ce] bg-white p-4 outline-none">
                <option>Everyday / Casual</option>
                <option>Work</option>
                <option>College</option>
                <option>Dates / Social events</option>
                <option>Special occasions</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                What style feels most like you?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["Minimal", "Elegant", "Trendy", "Classic"].map((style) => (
                  <button
                    key={style}
                    className="rounded-xl border border-[#ddd5ce] bg-white p-4 text-left hover:border-[#2d2926]"
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <button className="w-full rounded-full bg-[#2d2926] py-4 font-medium text-white hover:opacity-90">
              Continue
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#2d2926]">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8a7d72]">
          Your personal style guide
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Discover what looks best on <em className="font-normal">you.</em>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f665f]">
          Personalized outfit, color, accessory and styling recommendations
          designed around your features, lifestyle and personality.
        </p>

        <button
          onClick={() => setStarted(true)}
          className="mt-10 rounded-full bg-[#2d2926] px-8 py-4 font-medium text-white transition hover:scale-[1.02] hover:opacity-90"
        >
          Start Personalization →
        </button>

        <p className="mt-5 text-sm text-[#9a8f87]">
          Takes less than 2 minutes
        </p>
      </div>
    </main>
  );
}                    
