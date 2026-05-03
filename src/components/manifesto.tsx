import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const words = ["Design","is","not","just","what","it","looks","like","—","Design","is","how","it","works.","We","build","tools","that","give","founders","their","time","back."];
const highlighted = new Set(["Design","works.","founders"]);

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const y = useSpring(useTransform(scrollYProgress, [0,1], [40,-40]), { stiffness: 60, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0,0.15,0.85,1], [0,1,1,0]);

  return (
    <section ref={ref} style={{ padding: "160px 0", borderTop: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(100,60,200,0.06), transparent)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        <motion.div style={{ y, opacity, textAlign: "center" }}>
          <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(180,160,255,0.5)", display: "block", marginBottom: 40 }}>
            Our belief
          </motion.span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,4vw,48px)", lineHeight: 1.4 }}>
            {words.map((w, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.038 }}
                style={{ display: "inline-block", marginRight: "0.25em", color: highlighted.has(w) ? "#ffffff" : "rgba(255,255,255,0.65)" }}>
                {w}
              </motion.span>
            ))}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
