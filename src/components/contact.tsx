import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "160px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", display: "block", marginBottom: 24 }}>Get started</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,6vw,64px)", color: "white", marginBottom: 24 }}>Ready to build?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.46)", marginBottom: 48 }}>
            Whether you need a cutting-edge web presence or custom AI workflows, we're here to help you scale efficiently.
          </p>
          <motion.a href="mailto:founder@aevor.tech" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, padding: "16px 36px", borderRadius: 999, background: "white", color: "black", textDecoration: "none", display: "inline-block" }}>
            founder@aevor.tech →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
