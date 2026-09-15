import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { DotPattern } from "@/components/effects/dot-pattern";
import { HangingIdCard } from "@/components/effects/hanging-id-card";
import { TechMarquee } from "@/components/portfolio/tech-marquee";
import { profile } from "@/data/profile";

const socials = [
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Phone, href: profile.phoneHref, label: "Phone" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] flex-col overflow-hidden bg-background pt-12 md:pt-16"
    >
      <DotPattern />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center gap-12 px-6 pb-12 md:flex-row md:gap-20">
        <motion.div
          className="flex flex-1 flex-col items-center pt-8 text-center md:items-start md:pt-0 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <span className="glass-panel inline-flex items-center gap-2.5 rounded-full border border-foreground/10 px-4 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {profile.status}
              </span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="mb-2 text-5xl font-bold tracking-tight md:text-7xl">Hi, I'm</h1>
            <span className="aurora-name block pb-2 text-[clamp(2.4rem,6.5vw,5.5rem)] leading-none font-extrabold tracking-tight select-none">
              {profile.name}
            </span>
          </motion.div>

          <motion.p
            className="mb-3 max-w-xl text-sm font-semibold tracking-wide text-primary uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {profile.shortRole} · {profile.location}
          </motion.p>

          <motion.p
            className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {profile.tagline}{" "}
            <strong className="font-semibold text-foreground">No fluff. Just execution.</strong>
          </motion.p>

          <motion.div
            className="mb-10 flex w-full flex-wrap items-center justify-center gap-4 md:w-auto md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-[0.96]"
            >
              Start a conversation <ArrowRight className="size-4" />
            </a>
            <a
              href="#projects"
              className="glass-panel inline-flex h-12 items-center gap-2 rounded-full border border-foreground/10 px-7 font-semibold text-foreground transition-[transform,color,border-color] duration-200 hover:-translate-y-1 hover:border-primary/40 hover:text-primary active:scale-[0.96]"
            >
              View projects
            </a>
          </motion.div>

          <motion.div
            className="flex w-full items-center justify-center gap-5 md:w-auto md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="text-muted-foreground transition-[color,transform] duration-200 hover:-translate-y-1 hover:text-foreground"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex w-full max-w-md flex-1 items-center justify-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard ropeLength={75} cardWidth="w-72 sm:w-80">
            <div className="flex h-full w-full flex-col bg-card">
              <div className="relative flex flex-col items-center overflow-hidden bg-gradient-to-br from-primary via-indigo to-indigo px-5 pt-7 pb-6 text-primary-foreground">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-10 [background-size:12px_12px]" />
                <div className="relative mt-1 size-28 overflow-hidden rounded-full border border-white/50 bg-gradient-to-tr from-cyan via-primary to-primary p-1 shadow-2xl">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="size-full rounded-full object-cover contrast-105"
                    loading="eager"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const fallback = el.nextElementSibling as HTMLElement | null;
                      if (fallback) fallback.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden size-full items-center justify-center rounded-full bg-background/20 text-2xl font-extrabold">
                    {profile.initials}
                  </div>
                  <div className="absolute right-2 bottom-1 size-4 rounded-full border-2 border-white bg-emerald shadow-md" />
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center gap-3 bg-card p-5 text-center text-card-foreground">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                    {profile.name}
                  </h3>
                  <div className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                    {profile.role}
                  </div>
                </div>

                <div className="my-0.5 w-full border-t border-border/60" />

                <div className="grid w-full grid-cols-2 gap-2.5 rounded-xl border border-border/50 bg-muted/40 p-3 text-left">
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                      Specialty
                    </span>
                    <span className="text-xs font-bold text-foreground">Cyber · Data · Forensics</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                      Location
                    </span>
                    <span className="text-xs font-bold text-foreground">{profile.location}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                      Degree
                    </span>
                    <span className="text-xs font-bold text-foreground">BCA · Completed</span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                      Status
                    </span>
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald">
                      ● {profile.status}
                    </span>
                  </div>
                </div>

                <div className="mt-1 flex w-full flex-col items-center gap-1">
                  <div className="flex h-7 w-full items-end justify-center gap-[2.5px] rounded-lg border border-border/40 bg-white/90 px-3 py-0.5 dark:bg-black/40">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div
                        key={i}
                        className="rounded-[1px] bg-foreground"
                        style={{
                          width: i % 4 === 0 ? "3.5px" : i % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(i * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-between px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      {profile.badgeId}
                    </span>
                    <span className="text-[9px] font-semibold tracking-wider text-muted-foreground uppercase">
                      YIASCM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <TechMarquee />
      </div>
    </section>
  );
}
