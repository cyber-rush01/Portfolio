import { Link } from "@tanstack/react-router";
import { ArrowLeft, Award } from "lucide-react";
import { motion } from "framer-motion";

export type CertItem = {
  id: string;
  title: string;
  issuer: string;
  meta: string;
  summary: string;
};

export function CertGallery({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro: string;
  items: readonly CertItem[];
}) {
  return (
    <section className="mx-auto min-h-[70vh] max-w-5xl px-6 pt-32 pb-24">
      <Link
        to="/"
        hash="certificates"
        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" /> Back to portfolio
      </Link>
      <h1 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        <span className="text-gradient-primary">{heading}</span>
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-muted-foreground">{intro}</p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel rounded-[1.75rem] border border-foreground/10 p-7"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                <Award className="size-6" />
              </div>
              <span className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                {item.meta}
              </span>
            </div>
            <h2 className="mb-1 text-xl font-extrabold tracking-tight text-foreground">{item.title}</h2>
            <p className="mb-3 text-sm font-semibold text-primary">{item.issuer}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
