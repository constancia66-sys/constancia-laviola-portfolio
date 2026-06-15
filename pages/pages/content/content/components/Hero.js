import profile from "../content/profile.json";

export default function Hero() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: 60,
      background: "#111",
      color: "white"
    }}>
      <h1>{profile.name.en}</h1>
      <h2>{profile.role.en}</h2>
      <p>{profile.tagline.en}</p>

      <p style={{ marginTop: 20, opacity: 0.6 }}>
        25+ years | Brazil • Spain • International
      </p>
    </div>
  );
}
