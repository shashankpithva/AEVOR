export default function Footer() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-display)", fontSize: 18, letterSpacing: "0.18em", color: "rgba(255,255,255,0.70)" }}>AEVOR</span>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.20)" }}>© {new Date().getFullYear()} Aevor Studio. All rights reserved.</span>
        <a href="mailto:founder@aevor.tech" style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.30)", textDecoration: "none" }}>founder@aevor.tech</a>
      </div>
    </footer>
  );
}
