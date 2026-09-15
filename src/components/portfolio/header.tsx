import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { profile } from "@/data/profile";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certs", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

function scrollToId(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setShowHeader(!(y > last && y > 80));
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (isHome) {
      scrollToId(href);
      return;
    }
    window.location.href = `/${href}`;
  };

  return (
    <AnimatePresence>
      {showHeader ? (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.35 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 right-0 left-0 z-50 flex justify-center px-4"
        >
          <div className="glass-panel flex w-full max-w-7xl items-center justify-between rounded-[2rem] px-6 py-4 shadow-xl">
            <Link to="/" className="group flex cursor-pointer items-center gap-3 select-none">
              <div className="relative size-9 rounded-xl bg-gradient-to-tr from-primary via-primary to-sky p-px shadow-lg transition-transform duration-300 group-hover:scale-105">
                <div className="flex size-full items-center justify-center rounded-[11px] bg-background">
                  <span className="bg-gradient-to-r from-primary to-sky bg-clip-text text-xs font-extrabold tracking-tighter text-transparent">
                    {profile.initials}
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm leading-none font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {profile.name}
                </span>
                <span className="mt-0.5 text-[9px] font-bold tracking-widest text-muted-foreground uppercase">
                  Portfolio
                </span>
              </div>
            </Link>

            <nav className="hidden flex-1 justify-center md:flex">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name} className="group relative text-sm font-medium text-muted-foreground">
                    <button type="button" onClick={() => go(item.href)} className="cursor-pointer hover:text-foreground">
                      {item.name}
                    </button>
                    <span className="absolute -bottom-2 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-[width] duration-300 group-hover:w-full" />
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                className="p-2 text-foreground transition-colors hover:text-primary md:hidden"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {open ? (
              <motion.div
                initial={{ clipPath: "circle(0px at 90% 5%)" }}
                animate={{ clipPath: "circle(1500px at 90% 5%)" }}
                exit={{ clipPath: "circle(0px at 90% 5%)" }}
                transition={{ type: "spring", stiffness: 40, damping: 18 }}
                className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-2xl md:hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute top-8 right-8 text-foreground"
                  aria-label="Close menu"
                >
                  <X size={32} />
                </button>
                <ul className="flex flex-col items-center space-y-10">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <button
                        type="button"
                        onClick={() => go(item.href)}
                        className="cursor-pointer text-4xl font-bold text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.header>
      ) : null}
    </AnimatePresence>
  );
}
