import { motion } from "framer-motion";
import {
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  GraduationCap,
  Rocket,
  Server,
  Sparkles,
} from "lucide-react";
import { MagicCard } from "@/components/effects/magic-card";
import { education, technicalSkills, traits, tools } from "@/data/profile";

export function EducationSection() {
  const edu = education[0];

  return (
    <section id="education" className="mx-auto max-w-7xl space-y-20 px-6 py-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">05 / Record</p>
          <div className="mb-3 flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-md">
              <GraduationCap className="size-6" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Academic <span className="text-gradient-primary">background</span>
            </h2>
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Theoretical foundation and applied labs that power practical engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MagicCard className="h-full rounded-[2.25rem] border border-border/80 bg-card/80 p-8 shadow-xl md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary shadow-sm">
                <GraduationCap className="size-7" />
              </div>
              <span className="inline-flex w-max items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-3.5 py-1.5 text-xs font-extrabold text-emerald shadow-sm">
                <Sparkles className="size-3.5" />
                {edu.badge}
              </span>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">{edu.degree}</h3>
            <div className="mt-2 mb-6 flex flex-wrap items-center gap-4 border-b border-border/60 pb-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5 font-bold text-foreground">
                <Building2 className="size-3.5 text-primary" /> {edu.school}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-mono font-bold text-primary">
                <Calendar className="size-3.5" /> {edu.year}
              </span>
            </div>
            <ul className="grid gap-3.5 md:grid-cols-2">
              {edu.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="font-medium text-foreground/90">{detail}</span>
                </li>
              ))}
            </ul>
          </MagicCard>
        </motion.div>
      </div>

      <motion.div
        id="skills"
        className="space-y-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
            <Code2 className="size-5" />
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">Expertise & skills</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-foreground/15 p-8 shadow-xl">
            <div className="mb-8 flex items-center justify-between border-b border-border/60 pb-4">
              <h4 className="flex items-center gap-2 text-xl font-bold text-foreground">
                <Server className="size-5 text-primary" /> Technical arsenal
              </h4>
              <span className="rounded-full border border-border/50 bg-muted/60 px-3 py-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Proficiency
              </span>
            </div>
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name} className="space-y-2.5">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-foreground">{skill.name}</span>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-xs font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full border border-border/40 bg-muted/60 p-px">
                    <motion.div
                      className="relative h-full rounded-full bg-gradient-to-r from-primary via-primary to-sky shadow-[0_0_12px_rgba(139,92,246,0.5)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 + i * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute top-0 right-0 bottom-0 w-2 rounded-full bg-primary-foreground shadow-[0_0_8px_#fff]" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel flex flex-col justify-between rounded-[2rem] border border-foreground/15 p-8 shadow-xl">
            <div>
              <div className="mb-8 flex items-center justify-between border-b border-border/60 pb-4">
                <h4 className="flex items-center gap-2 text-xl font-bold text-foreground">
                  <Brain className="size-5 text-primary" /> Focus & traits
                </h4>
                <span className="rounded-full border border-border/50 bg-muted/60 px-3 py-1 text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Core
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {traits.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 border-t border-border/60 pt-6">
              <div className="flex items-start gap-3.5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 shadow-sm">
                <div className="mt-0.5 shrink-0 rounded-xl bg-primary/20 p-2 text-primary">
                  <Rocket className="size-5" />
                </div>
                <div>
                  <strong className="mb-0.5 block text-sm font-bold text-foreground">
                    Constant learner
                  </strong>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Continuously building practical skills in security, forensics, and data — ready for the next role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
