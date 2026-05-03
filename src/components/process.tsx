import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "We align on vision, aesthetics, and technical requirements. No fluff, just precision.", icon: "⟡" },
  { num: "02", title: "Architecture", desc: "Crafting the blueprint. Visual language meets system design for maximum leverage.", icon: "◈" },
  { num: "03", title: "Execution", desc: "Rapid development cycles. You see progress weekly, not monthly.", icon: "⬡" },
  { num: "04", title: "Launch", desc: "Deployment, optimization, and handover. Flawless execution down to the last pixel.", icon: "✦" },
];

function Card({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.94 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      style={{ padding: 24, borderRadius: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", cursor: "default" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4 + index, repeat: Infinity }}
          style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "rgba(255,255,255,0.7)" }}>
          {step.icon}
        </motion.div>
        <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>{step.num}</span>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "rgba(255,255,255,0.9)", marginBottom: 12 }}>{step.title}</h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>{step.desc}</p>
      <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
        style={{ marginTop: 24, height: 1, background: "linear-gradient(to right, rgba(180,160,255,0.5), transparent)", transformOrigin: "left" }} />
    </motion.div>
  );
}

export default function Process() {
  return (
    <section style={{ padding: "120px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}
          style={{ textAlign: "center", marginBottom: 80 }}>
          <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(180,160,255,0.6)", display: "block", marginBottom: 16 }}>The Methodology</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,48px)", color: "white" }}>How we work</h2>
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ width: 64, height: 1, background: "linear-gradient(to right, transparent, rgba(180,160,255,0.6), transparent)", margin: "16px auto 0" }} />
        </motion.div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {steps.map((s, i) => <Card key={i} step={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
