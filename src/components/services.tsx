import { motion } from "framer-motion";

const services = [
  { num: "01", title: "Website-as-a-Service", desc: "Beautifully crafted, fast-delivered web presences. We design, build, and maintain your digital storefront so you can focus on your product." },
  { num: "02", title: "AI Automations", desc: "Intelligent workflows that save founders hours every week. We automate the repetitive, giving you leverage to scale faster." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ staggerChildren: 0.15 }}>
          <div style={{ display: "flex", gap: 80, marginBottom: 80, flexWrap: "wrap" }}>
            <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} style={{ flex: 1, minWidth: 260 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", display: "block", marginBottom: 20 }}>Capabilities</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.2, color: "white" }}>Designed for momentum.</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: 0.15 }}
              style={{ flex: 1, minWidth: 260, fontFamily: "var(--font-sans)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.48)", display: "flex", alignItems: "flex-end" }}>
              We operate at the intersection of high-end design and pragmatic automation. Aevor exists to build systems that look stunning and work tirelessly.
            </motion.p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {services.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                style={{ padding: "40px", borderRadius: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", cursor: "default" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontSize: 18 }}>◈</div>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.20)" }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "rgba(255,255,255,0.90)", marginBottom: 16 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.46)" }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
