import { useId } from "react";
import { cn } from "@/lib/utils";

export function DotPattern({
  width = 16,
  height = 16,
  className,
  glow = true,
}: {
  width?: number;
  height?: number;
  className?: string;
  glow?: boolean;
}) {
  const id = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
        aria-hidden="true"
        className={cn(
          "absolute inset-0 h-full w-full fill-foreground/30 [mask-image:radial-gradient(ellipse_at_center,white_55%,transparent_90%)]",
          className,
        )}
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={1} cy={1} r={1} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      {glow ? (
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px] dark:bg-primary/35" />
      ) : null}
    </div>
  );
}
