import { motion } from "framer-motion";
import { Code2, Database, Fingerprint, Shield } from "lucide-react";
import { MagicCard } from "@/components/effects/magic-card";
import { services } from "@/data/profile";

const icons = [Shield, Database, Fingerprint, Code2];

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">02 / Arsenal</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gradient-primary md:text-5xl">
          What I do
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Tools and disciplines I use to engineer secure systems, analyze data, and build functional applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <MagicCard className="h-full rounded-[2rem] border border-border/80 bg-card/80 p-8">
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-sm">
                  <Icon className="size-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-foreground">{service.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{service.description}</p>
              </MagicCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
