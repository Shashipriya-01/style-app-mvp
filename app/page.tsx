"use client";

import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (started) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#faf7f2",
          color: "#2d2926",
          padding: "50px 24px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ maxWidth: "650px", margin: "0 auto" }}>
          <button
            onClick={() => setStarted(false)}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: "15px",
              color: "#6f665f",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "42px",
              lineHeight: "1.15",
              marginTop: "45px",
              marginBottom: "15px",
            }}
          >
            Let&apos;s personalize your style
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.6",
              color: "#6f665f",
            }}
          >
            Tell us a little about yourself so we can understand your style,
            colors and preferences.
          </p>

          <div style={{ marginTop: "40px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              What are you dressing for?
            </label>

            <select
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "12px",
                border: "1px solid #ddd5ce",
                background: "white",
                fontSize: "16px",
              }}
            >
              <option>Everyday / Casual</option>
              <option>Work</option>
              <option>College</option>
              <option>Dates / Social events</option>
              <option>Special occasions</option>
            </select>
          </div>

          <div style={{ marginTop: "30px" }}>
            <label
              style={{
                display: "block",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              What style feels most like you?
            </label>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {["Minimal", "Elegant", "Trendy", "Classic"].map((style) => (
                <button
                  key={style}
                  style={{
                    padding: "18px",
                    background: "white",
                    border: "1px solid #ddd5ce",
                    borderRadius: "12px",
                    fontSize: "16px",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {style}
                </button>
              ))}
            </div>
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
            Continue
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#8a7d72",
            marginBottom: "25px",
          }}
        >
          YOUR PERSONAL STYLE GUIDE
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(44px, 8vw, 72px)",
            lineHeight: "1.05",
            fontWeight: "500",
            margin: 0,
          }}
        >
          Discover what looks
          <br />
          best on <i>you.</i>
        </h1>

        <p
          style={{
            maxWidth: "600px",
            margin: "30px auto 0",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#6f665f",
          }}
        >
          Personalized outfit, color, accessory and styling recommendations
          designed around your features, lifestyle and personality.
        </p>

        <button
          onClick={() => setStarted(true)}
          style={{
            marginTop: "35px",
            padding: "17px 32px",
            borderRadius: "30px",
            border: "none",
            background: "#2d2926",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Start Personalization →
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            color: "#9a8f87",
          }}
        >
          Takes less than 2 minutes
        </p>
      </div>
    </main>
  );
          }
