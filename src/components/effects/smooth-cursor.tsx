import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function SmoothCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useSpring(0, { stiffness: 380, damping: 32, mass: 0.6 });
  const y = useSpring(0, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none");
    document.body.classList.add("cursor-none");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(Boolean(t?.closest("a, button, [role='button'], input, textarea")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-none");
      document.body.classList.remove("cursor-none");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: hovering ? 1.8 : 1,
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 22 } }}
    >
      <div className="size-3 rounded-full bg-primary-foreground shadow-[0_0_16px_rgba(139,92,246,0.8)]" />
    </motion.div>
  );
}
