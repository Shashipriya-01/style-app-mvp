export default function Home() {
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

        <a
          href="/personalize"
          style={{
            display: "inline-block",
            marginTop: "35px",
            padding: "17px 32px",
            borderRadius: "30px",
            background: "#2d2926",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Start Personalization →
        </a>

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
