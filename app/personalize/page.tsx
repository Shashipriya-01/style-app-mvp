"use client";

import { useState } from "react";

export default function Personalize() {
  const [step, setStep] = useState(1);
  const [occasion, setOccasion] = useState("");

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

  const [selectedStyle, setSelectedStyle] = useState("");

  if (step === 2) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#faf7f2",
          color: "#2d2926",
          fontFamily: "Arial, sans-serif",
          padding: "50px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setStep(1)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "#8a7d72",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <p
            style={{
              marginTop: "45px",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8a7d72",
            }}
          >
            STEP 2 OF 4
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "44px",
              lineHeight: "1.15",
              fontWeight: "500",
              marginTop: "25px",
            }}
          >
            What feels most like you?
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6f665f",
              marginTop: "15px",
            }}
          >
            Choose the style you naturally feel drawn to.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginTop: "40px",
            }}
          >
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                style={{
                  padding: "22px 16px",
                  borderRadius: "14px",
                  border:
                    selectedStyle === style
                      ? "2px solid #2d2926"
                      : "1px solid #ddd5ce",
                  background:
                    selectedStyle === style ? "#eee8e0" : "white",
                  color: "#2d2926",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                {style}
              </button>
            ))}
          </div>

          {selectedStyle && (
            <button
              onClick={() => setStep(3)}
              style={{
                width: "100%",
                marginTop: "35px",
                padding: "17px",
                borderRadius: "30px",
                border: "none",
                background: "#2d2926",
                color: "white",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Continue →
            </button>
          )}
        </div>
      </main>
    );
  }

  if (step === 3) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#faf7f2",
          color: "#2d2926",
          fontFamily: "Arial, sans-serif",
          padding: "50px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <button
            onClick={() => setStep(2)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "#8a7d72",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <p
            style={{
              marginTop: "45px",
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8a7d72",
            }}
          >
            STEP 3 OF 4
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "44px",
              lineHeight: "1.15",
              fontWeight: "500",
              marginTop: "25px",
            }}
          >
            Let&apos;s understand your colors.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6f665f",
              marginTop: "15px",
            }}
          >
            This will help us suggest colors that complement your overall
            look.
          </p>

          <div
            style={{
              marginTop: "40px",
              padding: "25px",
              borderRadius: "16px",
              background: "white",
              border: "1px solid #ddd5ce",
            }}
          >
            <p style={{ margin: 0, fontSize: "16px" }}>
              In the next version, this step will use your photo to help
              personalize your color palette.
            </p>
          </div>

          <button
            onClick={() => setStep(4)}
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "17px",
              borderRadius: "30px",
              border: "none",
              background: "#2d2926",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Continue →
          </button>
        </div>
      </main>
    );
  }

  if (step === 4) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#faf7f2",
          color: "#2d2926",
          fontFamily: "Arial, sans-serif",
          padding: "50px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "650px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#8a7d72",
            }}
          >
            STEP 4 OF 4
          </p>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "44px",
              lineHeight: "1.15",
              fontWeight: "500",
              marginTop: "25px",
            }}
          >
            Almost there.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#6f665f",
              marginTop: "15px",
            }}
          >
            Your personalized style recommendations are ready to be created.
          </p>

          <div
            style={{
              marginTop: "40px",
              padding: "25px",
              borderRadius: "16px",
              background: "white",
              border: "1px solid #ddd5ce",
            }}
          >
            <p>
              <strong>Your occasion:</strong> {occasion}
            </p>

            <p>
              <strong>Your style:</strong> {selectedStyle}
            </p>
          </div>

          <button
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "17px",
              borderRadius: "30px",
              border: "none",
              background: "#2d2926",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Create My Style Guide ✨
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf7f2",
        color: "#2d2926",
        fontFamily: "Arial, sans-serif",
        padding: "50px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#8a7d72",
          }}
        >
          STEP 1 OF 4
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "44px",
            lineHeight: "1.15",
            fontWeight: "500",
            marginTop: "25px",
          }}
        >
          Let&apos;s get to know your style.
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#6f665f",
            marginTop: "15px",
          }}
        >
          First, tell us what you&apos;re usually dressing for.
        </p>

        <div
          style={{
            display: "grid",
            gap: "14px",
            marginTop: "40px",
          }}
        >
          {occasions.map((option) => (
            <button
              key={option}
              onClick={() => setOccasion(option)}
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: "14px",
                border:
                  occasion === option
                    ? "2px solid #2d2926"
                    : "1px solid #ddd5ce",
                background: occasion === option ? "#eee8e0" : "white",
                color: "#2d2926",
                fontSize: "16px",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {occasion && (
          <button
            onClick={() => setStep(2)}
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "17px",
              borderRadius: "30px",
              border: "none",
              background: "#2d2926",
              color: "white",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Continue →
          </button>
        )}
      </div>
    </main>
  );
            }
