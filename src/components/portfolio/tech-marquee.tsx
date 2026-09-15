import { techMarquee } from "@/data/profile";

export function TechMarquee() {
  const loop = [...techMarquee, ...techMarquee];

  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden border-y border-foreground/10 bg-foreground/[0.02] py-6">
      <div className="relative flex w-full items-center overflow-hidden">
        <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-[marquee_35s_linear_infinite] items-center whitespace-nowrap hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="group mx-3 flex shrink-0 items-center gap-3 rounded-full border border-foreground/10 bg-background/80 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-[transform,border-color] hover:scale-105 hover:border-primary/50"
            >
              <img
                src={tech.icon}
                alt=""
                className="size-5 object-contain transition-transform duration-300 group-hover:scale-110 dark:brightness-110"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xs tracking-wide md:text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
