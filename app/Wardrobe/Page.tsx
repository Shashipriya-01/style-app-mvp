"use client";

import { useRef, useState } from "react";

type ClothingItem = {
  id: number;
  name: string;
  category: string;
  image: string;
};

const categories = ["All", "Tops", "Bottoms", "Dresses", "Shoes", "Accessories"];

export default function WardrobePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeCategory, setActiveCategory] = useState("All");

  const [items, setItems] = useState<ClothingItem[]>([]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const [showUploadMenu, setShowUploadMenu] = useState(false);

  const handleUpload = (category: string) => {
    setShowUploadMenu(false);

    // Store the category temporarily so uploaded items are categorized correctly
    if (fileInputRef.current) {
      fileInputRef.current.dataset.category = category;
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    const category = event.target.dataset.category || "Tops";

    const newItems: ClothingItem[] = Array.from(files).map(
      (file, index) => ({
        id: Date.now() + index,
        name: file.name
          .replace(/\.[^/.]+$/, "")
          .replace(/[-_]/g, " "),
        category,
        image: URL.createObjectURL(file),
      })
    );

    setItems((previous) => [...previous, ...newItems]);

    // Reset input so the same image can be selected again
    event.target.value = "";
  };

  const toggleSelectedItem = (id: number) => {
    setSelectedItems((previous) =>
      previous.includes(id)
        ? previous.filter((itemId) => itemId !== id)
        : [...previous, id]
    );
  };

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#f5f2ed] text-[#171717]">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f5f2ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
          <button
            onClick={() => {
              window.location.href = "/results";
            }}
            className="text-sm tracking-wide text-black/60 transition hover:text-black"
          >
            ← Back
          </button>

          <div className="text-center">
            <h1 className="font-serif text-2xl tracking-tight md:text-3xl">
              My Wardrobe
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-black/45">
              Your personal closet
            </p>
          </div>

          <div className="w-[45px]" />
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-10 md:px-8 md:pt-14">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-black/45">
            Style starts with what you own
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Build looks from
            <br />
            <span className="italic">your wardrobe.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/60 md:text-lg">
            Add photos of your clothes and create personalized outfits using
            pieces already in your closet.
          </p>
        </div>
      </section>

      {/* UPLOAD CARD */}
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-[#171717] px-6 py-8 text-white md:px-10 md:py-10">
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">
              +
            </div>

            <h3 className="font-serif text-3xl md:text-4xl">
              Add something to your closet
            </h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/60 md:text-base">
              Take a photo or upload an image of a clothing piece you already
              own.
            </p>

            <button
              onClick={() => setShowUploadMenu(!showUploadMenu)}
              className="mt-7 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Add Clothing →
            </button>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-10 h-72 w-72 rounded-full border border-white/10" />

          {/* UPLOAD MENU */}
          {showUploadMenu && (
            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/10 bg-[#292929] p-4 shadow-2xl md:left-auto md:right-8 md:w-80">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
                Choose category
              </p>

              <div className="grid grid-cols-2 gap-2">
                {categories
                  .filter((category) => category !== "All")
                  .map((category) => (
                    <button
                      key={category}
                      onClick={() => handleUpload(category)}
                      className="rounded-xl bg-white/10 px-3 py-3 text-sm transition hover:bg-white/20"
                    >
                      {category}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="mx-auto max-w-6xl px-5 pt-10 md:px-8">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm transition ${
                activeCategory === category
                  ? "border-black bg-black text-white"
                  : "border-black/15 bg-transparent text-black/60 hover:border-black/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* WARDROBE GRID */}
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-8 md:px-8">
        {items.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-black/15 px-6 py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-black/5 text-2xl">
              👗
            </div>

            <h3 className="font-serif text-2xl">
              Your wardrobe is empty
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-black/50">
              Start by adding a few pieces you wear often. Your wardrobe will
              become the foundation for personalized outfit recommendations.
            </p>

            <button
              onClick={() => setShowUploadMenu(true)}
              className="mt-6 rounded-full bg-black px-6 py-3 text-sm text-white"
            >
              Add My First Piece
            </button>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-black/50">
              No {activeCategory.toLowerCase()} added yet.
            </p>

            <button
              onClick={() => setShowUploadMenu(true)}
              className="mt-4 rounded-full bg-black px-6 py-3 text-sm text-white"
            >
              Add {activeCategory}
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Your closet
                </p>

                <h3 className="mt-1 font-serif text-2xl">
                  {filteredItems.length}{" "}
                  {filteredItems.length === 1 ? "piece" : "pieces"}
                </h3>
              </div>

              {selectedItems.length > 0 && (
                <span className="text-sm text-black/50">
                  {selectedItems.length} selected
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {filteredItems.map((item) => {
                const isSelected = selectedItems.includes(item.id);

                return (
                  <button
                    key={item.id}
                    onClick={() => toggleSelectedItem(item.id)}
                    className={`group overflow-hidden rounded-[24px] border bg-white text-left transition ${
                      isSelected
                        ? "border-black ring-2 ring-black"
                        : "border-black/5 hover:-translate-y-1 hover:shadow-lg"
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#eeeae4]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {isSelected && (
                        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <p className="truncate text-sm capitalize">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-black/40">
                        {item.category}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </section>

      {/* OUTFIT BUILDER */}
      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8">
        <div className="rounded-[30px] border border-black/10 bg-white px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Outfit builder
            </p>

            <h3 className="mt-3 font-serif text-3xl md:text-4xl">
              Create a look from your pieces.
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Select the pieces you want to combine. Your personalized outfit
              generator will be connected here next.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f5f2ed] p-5">
              <span className="text-2xl">👕</span>
              <p className="mt-4 text-sm font-medium">Choose your pieces</p>
              <p className="mt-1 text-xs leading-5 text-black/45">
                Pick items from your closet.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f2ed] p-5">
              <span className="text-2xl">✨</span>
              <p className="mt-4 text-sm font-medium">Create combinations</p>
              <p className="mt-1 text-xs leading-5 text-black/45">
                Mix and match your wardrobe.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f2ed] p-5">
              <span className="text-2xl">♡</span>
              <p className="mt-4 text-sm font-medium">Save your looks</p>
              <p className="mt-1 text-xs leading-5 text-black/45">
                Keep outfits you love.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (selectedItems.length === 0) {
                alert("Select at least one wardrobe piece first.");
                return;
              }

              alert(
                "Outfit generation is coming next! Your selected pieces are ready."
              );
            }}
            className="mt-8 w-full rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition hover:bg-black/85"
          >
            Create Outfit From Selected Pieces ✨
          </button>
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
