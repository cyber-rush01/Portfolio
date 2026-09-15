import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { academicCerts, interestCerts } from "@/data/profile";

const cards = [
  {
    to: "/certificates/academic" as const,
    title: "Academic & Technical",
    subtitle: "Degree, capstone, Coursera, coding contests, and workshops.",
    count: academicCerts.length,
    icon: GraduationCap,
  },
  {
    to: "/certificates/interests" as const,
    title: "Achievements & Interests",
    subtitle: "Sports, cycling, and extracurricular recognition.",
    count: interestCerts.length,
    icon: Star,
  },
];

export function CertificatesSection() {
  return (
    <section id="certificates" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">06 / Proof</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          <span className="text-gradient-primary">Certificates</span>
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          Credentials that back the skills — pick a category to view.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={card.to}
                className="glass-panel group relative block overflow-hidden rounded-[2rem] border border-foreground/10 p-8 text-center transition-[transform,border-color] duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <span className="absolute top-5 right-5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1 font-mono text-[10px] font-semibold tracking-wide text-primary uppercase">
                  {card.count} items
                </span>
                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-2 text-xl font-extrabold tracking-tight text-foreground">{card.title}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{card.subtitle}</p>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-bold tracking-wide text-primary-foreground uppercase">
                  View certificates <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
