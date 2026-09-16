"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="page">
      <div className="hero">
        <div className="badge">✨ Your personal style assistant</div>

        <h1>
          Your style.
          <br />
          <span>Elevated.</span>
        </h1>

        <p className="subtitle">
          Discover colors, outfits and accessories that complement
          your personal style.
        </p>

        {!started ? (
          <button
            className="button"
            onClick={() => setStarted(true)}
          >
            Get Started →
          </button>
        ) : (
          <div className="card">
            <h2>Let's discover your style.</h2>

            <p>
              In the next step, we'll learn about your preferences
              and create personalised recommendations.
            </p>
<button className="button" onClick={() => setStarted(true)}>
            
              Start Personalisation →
            </button>
          </div>
        )}
      </div>

      <div className="features">
        <div>
          <span>🎨</span>
          <h3>Colours</h3>
          <p>Find colours that complement you.</p>
        </div>

        <div>
          <span>👗</span>
          <h3>Outfits</h3>
          <p>Discover looks for every occasion.</p>
        </div>

        <div>
          <span>💍</span>
          <h3>Accessories</h3>
          <p>Add the finishing touches.</p>
        </div>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #fff8f5, #f8f1ff);
          color: #29232a;
          font-family: Arial, sans-serif;
          padding: 40px 20px;
        }

        .hero {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
          padding: 70px 20px 50px;
        }

        .badge {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 30px;
          background: white;
          font-size: 14px;
          margin-bottom: 25px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.06);
        }

        h1 {
          font-size: clamp(48px, 10vw, 88px);
          line-height: 0.95;
          margin: 0;
          letter-spacing: -4px;
        }

        h1 span {
          font-style: italic;
        }

        .subtitle {
          max-width: 560px;
          margin: 28px auto;
          font-size: 19px;
          line-height: 1.6;
          color: #6d626b;
        }

        .button {
          border: none;
          background: #29232a;
          color: white;
          padding: 16px 28px;
          border-radius: 40px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }

        .button:hover {
          transform: translateY(-2px);
        }

        .card {
          max-width: 520px;
          margin: 30px auto;
          padding: 35px;
          background: white;
          border-radius: 25px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.08);
        }

        .card h2 {
          margin-top: 0;
          font-size: 28px;
        }

        .card p {
          color: #6d626b;
          line-height: 1.6;
        }

        .features {
          max-width: 900px;
          margin: 20px auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .features div {
          background: rgba(255,255,255,0.8);
          padding: 28px 20px;
          border-radius: 22px;
          text-align: center;
        }

        .features span {
          font-size: 30px;
        }

        .features h3 {
          margin-bottom: 8px;
        }

        .features p {
          color: #6d626b;
          line-height: 1.5;
          font-size: 14px;
        }

        @media (max-width: 650px) {
          .features {
            grid-template-columns: 1fr;
          }

          .hero {
            padding-top: 40px;
          }
        }
      `}</style>
    </main>
  );
}
