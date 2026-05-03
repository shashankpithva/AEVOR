import { useEffect, useRef } from "react";

interface Star {
  x: number; y: number; radius: number;
  opacity: number; opacityDir: number;
  speed: number; color: string;
}
const COLORS = ["255,255,255","200,220,255","220,200,255","255,230,200"];

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: Star[] = [];
    let raf = 0;
    let shootTimer = 0;
    let shoot: { x:number;y:number;vx:number;vy:number;len:number;opacity:number } | null = null;

    const init = (w: number, h: number) => {
      stars = Array.from({ length: Math.floor((w * h) / 4000) }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        radius: Math.random() * 1.4 + 0.2,
        opacity: Math.random(), opacityDir: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.004 + 0.001,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.opacity += s.speed * s.opacityDir;
        if (s.opacity >= 1) { s.opacity = 1; s.opacityDir = -1; }
        if (s.opacity <= 0.05) { s.opacity = 0.05; s.opacityDir = 1; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.opacity.toFixed(3)})`;
        ctx.fill();
        if (s.radius > 1.1 && s.opacity > 0.7) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${s.color},${(s.opacity * 0.12).toFixed(3)})`;
          ctx.fill();
        }
      }
      shootTimer++;
      if (shootTimer > 240 && !shoot) {
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.4;
        shoot = { x: Math.random() * w * 0.7, y: Math.random() * 300,
          vx: Math.cos(angle) * 14, vy: Math.sin(angle) * 14,
          len: 80 + Math.random() * 60, opacity: 1 };
        shootTimer = 0;
      }
      if (shoot) {
        const g = ctx.createLinearGradient(
          shoot.x - shoot.vx * (shoot.len / 14),
          shoot.y - shoot.vy * (shoot.len / 14),
          shoot.x, shoot.y);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(1, `rgba(255,255,255,${shoot.opacity})`);
        ctx.save(); ctx.strokeStyle = g; ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(shoot.x - shoot.vx * (shoot.len/14), shoot.y - shoot.vy * (shoot.len/14));
        ctx.lineTo(shoot.x, shoot.y);
        ctx.stroke(); ctx.restore();
        shoot.x += shoot.vx; shoot.y += shoot.vy; shoot.opacity -= 0.025;
        if (shoot.opacity <= 0 || shoot.x > w || shoot.y > h) shoot = null;
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(raf); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "fixed", inset: 0, width: "100%", height: "100%",
      zIndex: 0, pointerEvents: "none",
      background: "radial-gradient(ellipse at 20% 30%, #0d0a1a 0%, #080810 40%, #000000 100%)",
    }} />
  );
}
