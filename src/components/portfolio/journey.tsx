import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bike, Briefcase, GraduationCap, Rocket } from "lucide-react";
import { journey } from "@/data/profile";

const icons = [Rocket, Briefcase, GraduationCap, Bike];

export function JourneySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 28 });
  const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">04 / Path</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
          Career <span className="text-gradient-primary">journey</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          An evolving path of study, building, and discipline.
        </p>
      </motion.div>

      <div ref={ref} className="relative mx-auto max-w-3xl">
        <div className="absolute top-0 left-4 h-full w-px bg-primary/20 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          className="absolute top-0 left-4 w-px origin-top bg-primary md:left-1/2 md:-translate-x-1/2"
          style={{ height }}
        />

        <div className="space-y-10">
          {journey.map((event, i) => {
            const Icon = icons[i];
            const right = i % 2 === 1;
            return (
              <motion.article
                key={event.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid grid-cols-1 gap-4 pl-12 md:grid-cols-2 md:pl-0 ${right ? "" : ""}`}
              >
                <div
                  className={`absolute top-5 left-4 size-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_12px_rgba(139,92,246,0.8)] md:left-1/2`}
                />
                <div className={`${right ? "md:col-start-2" : "md:col-start-1 md:pr-10 md:text-right"}`}>
                  <div className="glass-panel rounded-3xl border border-foreground/10 p-6 text-left shadow-lg">
                    <div className={`mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase ${right ? "" : "md:justify-end"}`}>
                      <Icon className="size-4" />
                      {event.year}
                    </div>
                    <h3 className="text-xl font-extrabold tracking-tight text-foreground">{event.title}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{event.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
