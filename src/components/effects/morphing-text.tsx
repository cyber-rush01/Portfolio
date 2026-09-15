import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function MorphingText({
  texts,
  className,
  morphTime = 1.5,
  cooldownTime = 0.7,
}: {
  texts: string[];
  className?: string;
  morphTime?: number;
  cooldownTime?: number;
}) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!texts.length) return;
    const elts = { text1: text1Ref.current, text2: text2Ref.current };
    if (!elts.text1 || !elts.text2) return;

    let animationFrameId = 0;
    let time = Date.now();
    let morph = 0;
    let cooldown = cooldownTime;
    let index = 0;

    elts.text1.textContent = texts[index % texts.length];
    elts.text2.textContent = texts[(index + 1) % texts.length];

    const setMorph = (fraction: number) => {
      if (!elts.text1 || !elts.text2) return;
      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const inv = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const now = Date.now();
      const dt = (now - time) / 1000;
      time = now;
      cooldown -= dt;

      if (cooldown <= 0) {
        morph += dt;
        let fraction = morph / morphTime;
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
        setMorph(Math.max(fraction, 0.0001));
        if (morph >= morphTime) {
          index = (index + 1) % texts.length;
          elts.text1!.textContent = texts[index % texts.length];
          elts.text2!.textContent = texts[(index + 1) % texts.length];
          morph = 0;
        }
      } else {
        morph = 0;
        if (elts.text1 && elts.text2) {
          elts.text2.style.filter = "";
          elts.text2.style.opacity = "100%";
          elts.text1.style.filter = "";
          elts.text1.style.opacity = "0%";
        }
      }
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [texts, morphTime, cooldownTime]);

  const longest = texts.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center font-extrabold tracking-tight select-none",
        className,
      )}
    >
      <span ref={text1Ref} className="absolute inset-0 flex items-center justify-center text-center" />
      <span ref={text2Ref} className="absolute inset-0 flex items-center justify-center text-center" />
      <span className="pointer-events-none px-2 py-1 opacity-0">{longest}</span>
    </div>
  );
}
