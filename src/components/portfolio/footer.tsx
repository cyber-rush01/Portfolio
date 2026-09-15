import { ArrowUp, Github, Heart, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { MorphingText } from "@/components/effects/morphing-text";
import { morphingTexts, profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Phone, href: profile.phoneHref, label: "Phone" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Github, href: profile.github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative z-10 w-full overflow-hidden rounded-t-[3rem] border-t border-black/5 bg-card/60 pt-16 pb-28 shadow-2xl backdrop-blur-2xl md:pb-36 dark:border-white/10">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[350px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-black/5 pb-8 md:flex-row dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative size-10 rounded-xl bg-gradient-to-tr from-primary via-primary to-sky p-px shadow-lg">
              <div className="flex size-full items-center justify-center rounded-[11px] bg-background">
                <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-xs font-extrabold tracking-tighter text-transparent">
                  {profile.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base leading-none font-extrabold tracking-tight text-foreground">
                {profile.name}
              </span>
              <span className="mt-0.5 text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                {profile.role}
              </span>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel flex cursor-pointer items-center gap-2 rounded-full border border-black/5 px-5 py-2.5 text-xs font-bold text-foreground shadow-sm transition-colors hover:border-primary/40 hover:text-primary dark:border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3.5" />
          </motion.button>
        </div>

        <div className="my-2 flex flex-col items-center justify-center rounded-3xl border border-black/5 bg-black/[0.015] px-6 py-12 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.02]">
          <span className="mb-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-extrabold tracking-widest text-primary uppercase shadow-sm">
            Secure & Build
          </span>
          <MorphingText
            texts={morphingTexts}
            className="min-h-[70px] text-center text-3xl text-foreground md:text-5xl lg:text-6xl"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 border-t border-black/5 py-6 text-sm font-semibold text-muted-foreground md:gap-12 dark:border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition-transform duration-200 hover:scale-105 hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-black/5 pt-6 text-xs text-muted-foreground md:flex-row dark:border-white/10">
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="glass-panel flex size-10 items-center justify-center rounded-full border border-black/5 text-muted-foreground shadow-sm transition-transform hover:scale-110 hover:border-primary/40 hover:text-foreground dark:border-white/10"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-1.5 text-center font-medium md:text-right">
            <span>© {new Date().getFullYear()} {profile.name}. Crafted with</span>
            <Heart className="inline-block size-3.5 fill-rose-500 text-rose-500" />
            <span>intent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
