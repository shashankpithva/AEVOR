import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        paddingTop: scrolled ? 12 : 24, paddingBottom: scrolled ? 12 : 24,
        background: scrolled ? "rgba(0,0,8,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: "0.18em", color: "white", textDecoration: "none" }}>
          AEVOR
        </a>
        <div style={{ display: "flex", gap: 32, fontFamily: "var(--font-sans)" }}>
          {["Services","Work","About","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >{l}</a>
          ))}
        </div>
        <a href="#contact" style={{
          fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 14,
          padding: "8px 20px", borderRadius: 999,
          border: "1px solid rgba(255,255,255,0.20)",
          background: "rgba(255,255,255,0.04)", color: "white",
          textDecoration: "none", transition: "all 0.3s",
        }}>Get in Touch</a>
      </div>
    </motion.nav>
  );
}
