import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  FolderKanban,
  GraduationCap,
  Home,
  Send,
  User,
} from "lucide-react";

const items = [
  { icon: Home, label: "Home", id: "hero" },
  { icon: User, label: "About", id: "about" },
  { icon: FolderKanban, label: "Projects", id: "projects" },
  { icon: GraduationCap, label: "Education", id: "education" },
  { icon: Award, label: "Certs", id: "certificates" },
  { icon: Send, label: "Contact", id: "contact" },
];

export function DockNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-3 left-0 right-0 z-[999] hidden md:block"
        >
          <div className="mx-auto flex w-max items-end gap-2 rounded-2xl border border-foreground/10 bg-card/80 px-3 py-2 shadow-2xl backdrop-blur-xl">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  title={item.label}
                  onClick={() =>
                    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative flex size-11 items-center justify-center rounded-xl border border-foreground/10 bg-background/70 text-foreground transition-transform duration-200 hover:-translate-y-2 hover:scale-110 hover:border-primary/40 hover:text-primary"
                >
                  <Icon size={18} />
                  <span className="pointer-events-none absolute -top-8 rounded-md bg-foreground px-2 py-0.5 text-[10px] font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
