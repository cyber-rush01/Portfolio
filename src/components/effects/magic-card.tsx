import { useCallback, type HTMLAttributes, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type MagicCardProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

export function MagicCard({
  children,
  className,
  gradientSize = 280,
  gradientColor = "rgba(139, 92, 246, 0.12)",
  gradientFrom = "#8b5cf6",
  gradientTo = "#38bdf8",
  ...props
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const spotlight = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 75%)`;
  const border = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 70%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-8 shadow-sm backdrop-blur-md transition-[box-shadow,transform] duration-300 hover:-translate-y-1.5 hover:shadow-2xl",
        className,
      )}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          padding: "1.5px",
          maskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskImage: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />
      <div className="relative z-10 flex h-full w-full flex-col justify-between">{children}</div>
    </div>
  );
}
