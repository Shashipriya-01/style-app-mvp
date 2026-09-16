"use client";

import { useSearchParams } from "next/navigation";

export default function Results() {
  const params = useSearchParams();

  const occasion = params.get("occasion") || "Everyday / Casual";
  const style = params.get("style") || "Classic";

  return (
    <main className="page">
      <div className="container">

        <p className="eyebrow">YOUR PERSONAL STYLE GUIDE</p>

        <h1>Your style,<br />personalized.</h1>

        <p className="intro">
          Here&apos;s your starting point based on your preferences.
        </p>

        <section className="card">
          <p className="label">YOUR STYLE PROFILE</p>

          <h2>{style}</h2>

          <p>
            Created for <strong>{occasion}</strong>.
          </p>
        </section>

        <section className="section">
          <p className="label">COLORS TO EXPLORE</p>

          <h2>Build your color palette</h2>

          <p>
            Start with versatile shades that work beautifully with your
            personal style.
          </p>

          <div className="colors">
            <div className="color one">Cream</div>
            <div className="color two">Taupe</div>
            <div className="color three">Brown</div>
            <div className="color four">Black</div>
          </div>
        </section>

        <section className="section">
          <p className="label">OUTFIT IDEAS</p>

          <h2>Looks made for you</h2>

          <div className="outfits">
            <div className="outfit">
              <span>LOOK 01</span>
              <h3>Effortless Classic</h3>
              <p>Clean layers · relaxed trousers · simple accessories</p>
            </div>

            <div className="outfit">
              <span>LOOK 02</span>
              <h3>Polished Everyday</h3>
              <p>Structured top · straight-leg bottoms · refined details</p>
            </div>

            <div className="outfit">
              <span>LOOK 03</span>
              <h3>Soft Statement</h3>
              <p>Elegant silhouette · complementary colors · minimal jewelry</p>
            </div>
          </div>
        </section>

        <section className="closet">
          <p className="label">YOUR WARDROBE</p>

          <h2>Style what you already own.</h2>

          <p>
            Take photos of your clothes and create personalized outfits
            using pieces already in your closet.
          </p>

          <button
            onClick={() => alert("Wardrobe feature coming next!")}
          >
            Build an Outfit From My Closet →
          </button>
        </section>

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #faf7f2;
          color: #2d2926;
          padding: 50px 22px 80px;
          font-family: Arial, sans-serif;
        }

        .container {
          max-width: 680px;
          margin: auto;
        }

        .eyebrow {
          color: #8a7d72;
          font-size: 12px;
          letter-spacing: 4px;
          margin-bottom: 28px;
        }

        h1 {
          font-family: Georgia, serif;
          font-size: 52px;
          line-height: 1.05;
          font-weight: 500;
          margin: 0 0 24px;
        }

        .intro {
          color: #706861;
          font-size: 19px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .card {
          background: white;
          border: 1px solid #ddd5ce;
          border-radius: 20px;
          padding: 28px;
          margin-bottom: 55px;
        }

        .label {
          color: #8a7d72;
          font-size: 12px;
          letter-spacing: 3px;
          margin-bottom: 12px;
        }

        h2 {
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          margin: 8px 0 14px;
        }

        .card p:not(.label) {
          color: #706861;
          font-size: 17px;
        }

        .section {
          margin-bottom: 55px;
        }

        .section > p:not(.label) {
          color: #706861;
          font-size: 17px;
          line-height: 1.6;
        }

        .colors {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 24px;
        }

        .color {
          height: 100px;
          border-radius: 16px;
          display: flex;
          align-items: flex-end;
          padding: 15px;
          font-size: 14px;
        }

        .one {
          background: #eee5d6;
        }

        .two {
          background: #c7b7a3;
        }

        .three {
          background: #806b58;
          color: white;
        }

        .four {
          background: #292725;
          color: white;
        }

        .outfits {
          display: grid;
          gap: 14px;
          margin-top: 25px;
        }

        .outfit {
          background: white;
          border: 1px solid #ddd5ce;
          border-radius: 18px;
          padding: 24px;
        }

        .outfit span {
          font-size: 11px;
          letter-spacing: 2px;
          color: #8a7d72;
        }

        .outfit h3 {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          margin: 12px 0 8px;
        }

        .outfit p {
          color: #706861;
          line-height: 1.5;
          margin: 0;
        }

        .closet {
          background: #2d2926;
          color: white;
          border-radius: 22px;
          padding: 30px;
        }

        .closet .label {
          color: #cfc5bc;
        }

        .closet h2 {
          font-size: 32px;
        }

        .closet p:not(.label) {
          color: #ddd5ce;
          line-height: 1.6;
          font-size: 16px;
        }

        button {
          width: 100%;
          margin-top: 20px;
          padding: 17px;
          border: none;
          border-radius: 30px;
          background: white;
          color: #2d2926;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 45px;
          }
        }
      `}</style>
    </main>
  );
}
