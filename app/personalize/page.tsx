"use client";

import { useState } from "react";

export default function Personalize() {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [style, setStyle] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const occasions = [
    "Everyday / Casual",
    "Work",
    "College",
    "Dates & Social Events",
    "Special Occasions",
  ];

  const styles = [
    "Minimal",
    "Elegant",
    "Classic",
    "Trendy",
    "Feminine",
    "Edgy",
  ];

  const choosePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <main className="page">
      <div className="box">

        {step > 1 && (
          <button className="back" onClick={() => setStep(step - 1)}>
            ← Back
          </button>
        )}

        {step === 1 && (
          <>
            <p className="step">STEP 1 OF 4</p>

            <h1>Let&apos;s get to know your style.</h1>

            <p className="description">
              First, tell us what you&apos;re usually dressing for.
            </p>

            <div className="options">
              {occasions.map((item) => (
                <button
                  key={item}
                  className={occasion === item ? "option selected" : "option"}
                  onClick={() => setOccasion(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {occasion && (
              <button className="continue" onClick={() => setStep(2)}>
                Continue →
              </button>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <p className="step">STEP 2 OF 4</p>

            <h1>What feels most like you?</h1>

            <p className="description">
              Choose the style you naturally feel drawn to.
            </p>

            <div className="grid">
              {styles.map((item) => (
                <button
                  key={item}
                  className={style === item ? "style selected" : "style"}
                  onClick={() => setStyle(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {style && (
              <button className="continue" onClick={() => setStep(3)}>
                Continue →
              </button>
            )}
          </>
        )}

        {step === 3 && (
          <>
            <p className="step">STEP 3 OF 4</p>

            <h1>Let&apos;s personalize this to you.</h1>

            <p className="description">
              Add a clear photo in natural light so we can personalize your
              colors and styling recommendations.
            </p>

            {!photo ? (
              <label className="photoBox">
                <span className="camera">📸</span>
                <strong>Take a photo or upload one</strong>
                <small>A clear, natural-light photo works best</small>

                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={choosePhoto}
                  hidden
                />
              </label>
            ) : (
              <>
                <img
                  src={photo}
                  alt="Uploaded photo"
                  className="preview"
                />

                <label className="change">
                  Choose a different photo
                  <input
                    type="file"
                    accept="image/*"
                    capture="user"
                    onChange={choosePhoto}
                    hidden
                  />
                </label>

                <button className="continue" onClick={() => setStep(4)}>
                  Continue →
                </button>
              </>
            )}
          </>
        )}

        {step === 4 && (
          <>
            <p className="step">STEP 4 OF 4</p>

            <h1>Almost there.</h1>

            <p className="description">
              Your personalized style recommendations are ready to be created.
            </p>

            <div className="summary">
              <p>
                <strong>Your occasion:</strong> {occasion}
              </p>

              <p>
                <strong>Your style:</strong> {style}
              </p>

              <p>
                <strong>Your photo:</strong> {photo ? "Added ✓" : "Not added"}
              </p>
            </div>

            <button
  className="continue"
  onClick={() => {
    window.location.href =
      `/results?occasion=${encodeURIComponent(occasion)}&style=${encodeURIComponent(style)}`;
  }}
>
  Create My Style Guide ✨
</button>
          </>
        )}

      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #faf7f2;
          color: #2d2926;
          padding: 50px 24px;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .box {
          max-width: 650px;
          margin: auto;
        }

        .step {
          color: #8a7d72;
          font-size: 13px;
          letter-spacing: 4px;
          margin-bottom: 28px;
        }

        h1 {
          font-family: Georgia, serif;
          font-size: 48px;
          line-height: 1.12;
          font-weight: 500;
          margin: 0 0 24px;
        }

        .description {
          color: #6f665f;
          font-size: 19px;
          line-height: 1.6;
          margin-bottom: 38px;
        }

        .options {
          display: grid;
          gap: 14px;
        }

        .option,
        .style {
          background: white;
          border: 1px solid #ddd5ce;
          color: #2d2926;
          border-radius: 15px;
          padding: 20px;
          font-size: 17px;
          text-align: left;
          cursor: pointer;
        }

        .style {
          text-align: center;
        }

        .selected {
          border: 2px solid #2d2926;
          background: #eee8e0;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .continue {
          width: 100%;
          margin-top: 32px;
          padding: 18px;
          border: none;
          border-radius: 30px;
          background: #2d2926;
          color: white;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
        }

        .back {
          background: none;
          border: none;
          padding: 0;
          margin-bottom: 35px;
          color: #77706a;
          font-size: 16px;
          cursor: pointer;
        }

        .photoBox {
          min-height: 240px;
          background: white;
          border: 1px dashed #cfc5bc;
          border-radius: 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
          padding: 25px;
          box-sizing: border-box;
        }

        .camera {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .photoBox strong {
          font-size: 18px;
        }

        .photoBox small {
          margin-top: 10px;
          color: #8a817a;
          font-size: 14px;
        }

        .preview {
          width: 100%;
          max-height: 430px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }

        .change {
          display: block;
          text-align: center;
          margin-top: 15px;
          color: #6f665f;
          text-decoration: underline;
          cursor: pointer;
        }

        .summary {
          background: white;
          border: 1px solid #ddd5ce;
          border-radius: 18px;
          padding: 25px;
          font-size: 17px;
          line-height: 1.5;
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 43px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
