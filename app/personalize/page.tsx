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

  function handlePhotoChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
  }

  return (
    <main style={pageStyle}>
      <div style={containerStyle}>

        {/* STEP 1 */}
        {step === 1 && (
          <>
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
                      occasion === option
                        ? "#eee8e0"
                        : "white",
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
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
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

            <div style={styleGrid}>
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  style={{
                    ...styleButtonStyle,
                    border:
                      selectedStyle === style
                        ? "2px solid #2d2926"
                        : "1px solid #ddd5ce",
                    background:
                      selectedStyle === style
                        ? "#eee8e0"
                        : "white",
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
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
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
              Add a photo so we can understand your coloring
              and create recommendations that feel more personal
              to you.
            </p>

            {!photo ? (
              <label style={photoBoxStyle}>
                <span style={cameraIconStyle}>📸</span>

                <span style={photoTitleStyle}>
                  Take a photo or upload one
                </span>

                <span style={photoSubtitleStyle}>
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
              <>
                <div style={photoPreviewContainerStyle}>
                  <img
                    src={photo}
                    alt="Your uploaded photo"
                    style={photoPreviewStyle}
                  />
                </div>

                <label style={changePhotoStyle}>
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
              </>
            )}

            <p style={privacyStyle}>
              Your photo will be used to personalize your
              style recommendations.
            </p>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <button
              onClick={() => setStep(3)}
              style={backButtonStyle}
            >
              ← Back
            </button>

            <p style={stepStyle}>STEP 4 OF 4</p>

            <h1 style={headingStyle}>
              Almost there.
            </h1>

            <p style={descriptionStyle}>
              We have what we need to create your personalized
              style guide.
            </p>

            <div style={summaryStyle}>
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
              onClick={() => alert("Style Guide coming next!")}
              style={continueButtonStyle}
            >
              Create My Style Guide ✨
            </button>
          </>
        )}

      </div>
    </main>
  );
}

/* PAGE */

const pageStyle = {
  minHeight: "100vh",
  background: "#faf7f2",
  color: "#2d2926",
  fontFamily: "Arial, sans-serif",
  padding: "50px 24px",
};

const containerStyle = {
  maxWidth: "650px",
  margin: "0 auto",
};

/* TEXT */

const stepStyle = {
  fontSize: "13px",
  letterSpacing: "3px",
  textTransform: "uppercase" as const,
  color: "#8a7d72",
};

const headingStyle = {
  fontFamily: "Georgia, serif",
  fontSize: "44px",
  lineHeight: "1.15",
  fontWeight: "500",
  marginTop: "25px",
};

const descriptionStyle = {
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#6f665f",
  marginTop: "15px",
};

/* BUTTONS */

const optionsStyle = {
  display: "grid",
  gap: "14px",
  marginTop: "40px",
};

const optionButtonStyle = {
  width: "100%",
  padding: "18px 20px",
  borderRadius: "14px",
  color: "#2d2926",
  fontSize: "16px",
  textAlign: "left" as const,
  cursor: "pointer",
};

const styleGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "14px",
  marginTop: "40px",
};

const styleButtonStyle = {
  padding: "22px 16px",
  borderRadius: "14px",
  color: "#2d2926",
  fontSize: "16px",
  cursor: "pointer",
};

const continueButtonStyle = {
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
