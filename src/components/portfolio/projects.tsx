import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">03 / Builds</p>
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-left md:text-5xl">
          Selected <span className="text-gradient-primary">work</span>
        </h2>
        <p className="max-w-2xl text-center text-lg text-muted-foreground md:text-left">
          Academic and personal builds that apply technology to real problems.
        </p>
      </motion.div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-12">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative block overflow-hidden rounded-[2.25rem] border border-foreground/10 shadow-xl ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="absolute inset-0 bg-foreground">
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary-foreground uppercase backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-end justify-between gap-4 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <div className="z-10 max-w-2xl">
                  <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-primary-foreground drop-shadow-md md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-primary-foreground/80 md:text-base">
                    {project.subtitle}
                  </p>
                  <ul className="hidden space-y-1.5 sm:block">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-primary-foreground/75">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-sky" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="z-10 flex size-12 shrink-0 rotate-45 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:rotate-0 group-hover:bg-primary-foreground">
                  <ArrowUpRight className="size-6 text-primary-foreground transition-colors group-hover:text-background" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
