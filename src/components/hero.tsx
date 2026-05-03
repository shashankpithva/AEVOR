import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 220, background: "linear-gradient(to top, #000008, transparent)", zIndex: 1 }} />
      </div>
      <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto", padding: "80px 24px 0", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ marginBottom: 32, display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "white", display: "inline-block" }} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
            Website-as-a-Service & AI Automations
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 8vw, 88px)", fontWeight: 700, lineHeight: 1.1, marginBottom: 24, backgroundImage: "linear-gradient(144.5deg, #ffffff 28%, rgba(255,255,255,0.32) 95%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Building the Web<br />for the AI Era.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7, maxWidth: 620, marginBottom: 40, color: "rgba(255,255,255,0.68)" }}>
          We craft precise, high-performance digital presences and intelligent workflows for ambitious founders and businesses. The future is automated and beautiful.
        </motion.p>
        <motion.a href="#contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, padding: "14px 32px", borderRadius: 999, background: "white", color: "black", textDecoration: "none", display: "inline-block" }}>
          Contact Us
        </motion.a>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)", margin: "8px auto 0" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
