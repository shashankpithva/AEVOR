export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "#000008" }}>
      <div className="text-center">
        <h1 className="text-6xl mb-4" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.8)" }}>
          404
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.4)" }}>
          Page not found.
        </p>
        <a href="/" className="mt-6 inline-block text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
          Go home
        </a>
      </div>
    </div>
  );
}
