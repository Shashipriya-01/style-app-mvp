export default function Personalize() {
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
          {[
            "Everyday / Casual",
            "Work",
            "College",
            "Dates & Social Events",
            "Special Occasions",
          ].map((option) => (
            <button
              key={option}
              style={{
                width: "100%",
                padding: "18px 20px",
                borderRadius: "14px",
                border: "1px solid #ddd5ce",
                background: "white",
                color: "#2d2926",
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
          }
