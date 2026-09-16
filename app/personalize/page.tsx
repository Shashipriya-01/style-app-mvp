"use client";

import { useState } from "react";

export default function Personalize() {
  const [step, setStep] = useState(1);

  const [occasion, setOccasion] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
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

  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
  };

  // STEP 1
  if (step === 1) {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <p style={stepStyle}>STEP 1 OF 4</p>

          <h1 style={headingStyle}>
            Let&apos;s get to know your style.
          </h1>

          <p style={descriptionStyle}>
            First, tell us what you&apos;re usually dressing for.
          </p>

          <div style={optionsStyle}>
            {occasions.map((option) => (
              <button
                key={option}
                onClick={() => setOccasion(option)}
                style={{
                  ...optionButtonStyle,
                  border:
                    occasion === option
                      ? "2px solid #2d2926"
                      : "1px solid #ddd5ce",
                  background:
                    occasion === option ? "#eee8e0" : "white",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          {occasion && (
            <button
              onClick={() => setStep(2)}
              style={continueButtonStyle}
            >
              Continue →
            </button>
          )}
        </div>
      </main>
    );
  }

  // STEP 2
  if (step === 2) {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <button
            onClick={() => setStep(1)}
            style={backButtonStyle}
          >
            ← Back
          </button>

          <p style={stepStyle}>STEP 2 OF 4</p>

          <h1 style={headingStyle}>
            What feels most like you?
          </h1>

          <p style={descriptionStyle}>
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
                    selectedStyle === style
                      ? "#eee8e0"
                      : "white",
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
              style={continueButtonStyle}
            >
              Continue →
            </button>
          )}
        </div>
      </main>
    );
  }

  // STEP 3 - PHOTO
  if (step === 3) {
    return (
      <main style={pageStyle}>
        <div style={containerStyle}>
          <button
            onClick={() => setStep(2)}
            style={backButtonStyle}
          >
            ← Back
          </button>

          <p style={stepStyle}>STEP 3 OF 4</p>

          <h1 style={headingStyle}>
            Let&apos;s personalize this to you.
          </h1>

          <p style={descriptionStyle}>
            Add a photo so we can understand your coloring and create
            recommendations that feel more personal to you.
          </p>

          {!photo ? (
            <label
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "240px",
                marginTop: "40px",
                padding: "30px",
                borderRadius: "18px",
                border: "1px dashed #cfc5bc",
                background: "white",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "48px",
                  marginBottom: "15px",
                }}
              >
                📸
              </span>

              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Take a photo or upload one
              </span>

              <span
                style={{
                  marginTop: "8px",
                  fontSize: "14px",
                  color: "#8a817a",
                }}
              >
                A clear, natural-light photo works best
              </span>

              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={handlePhotoChange}
                style={{ display: "none" }}
              />
            </label>
          ) : (
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  overflow: "hidden",
                  borderRadius: "18px",
                  background: "white",
                  border: "1px solid #ddd5ce",
                }}
              >
                <img
                  src={photo}
                  alt="Your uploaded photo"
                  style={{
                    display: "block",
                    width: "100%",
                    maxHeight: "420px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <label
                style={{
                  display: "block",
                  marginTop: "15px",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#6f665f",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Choose a different photo

                <input
                  type="file"
                  accept="image/*"
                  capture="user"
                  onChange={handlePhotoChange}
                  style={{ display: "none" }}
                />
              </label>

              <button
                onClick={() => setStep(4)}
                style={continueButtonStyle}
              >
                Continue →
              </button>
            </div>
          )}

          <p
            style={{
              marginTop: "25px",
              fontSize: "13px",
              lineHeight: "1.5",
              color: "#9a918a",
              textAlign: "center",
            }}
          >
            Your photo will be used to personalize your style
            recommendations.
          </p>
        </div>
      </main>
    );
  }

  // STEP 4
  return (
    <main style={pageStyle}>
      <div style={containerStyle}>
        <p style={stepStyle}>STEP 4 OF 4</p>

        <h1 style={headingStyle}>
          Almost there.
        </h1>

        <p style={descriptionStyle}>
          We have what we need to create your personalized style guide.
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
            <strong>Occasion:</strong> {occasion}
          </p>

          <p>
            <strong>Style:</strong> {selectedStyle}
          </p>

          <p>
            <strong>Photo:</strong>{" "}
            {photo ? "Added ✓" : "Not added"}
          </p>
        </div>

        <button
          style={continueButtonStyle}
        >
          Create My
