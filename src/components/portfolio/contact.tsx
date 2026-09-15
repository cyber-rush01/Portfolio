import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel relative overflow-hidden rounded-[3rem] border border-foreground/10 p-8 md:p-12"
      >
        <div className="pointer-events-none absolute -top-40 -right-40 size-96 rounded-full bg-primary/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 size-96 rounded-full bg-cyan/10 blur-[100px]" />

        <div className="relative z-10 flex flex-col gap-12 md:flex-row md:gap-24">
          <div className="flex-1 space-y-8">
            <div>
              <p className="mb-3 text-xs font-bold tracking-widest text-primary uppercase">07 / Connection</p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Let's <span className="text-gradient-primary">connect</span>
              </h2>
              <p className="text-muted-foreground">
                Currently looking for opportunities to start a career and grow as an IT professional. Whether you have a role, a collaboration, or a question — say hello.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="glass-panel flex size-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <Mail className="size-5" />
                </div>
                <span className="font-medium break-all">{profile.email}</span>
              </a>
              <a
                href={profile.phoneHref}
                className="group flex items-center gap-4 text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="glass-panel flex size-12 items-center justify-center rounded-full transition-transform group-hover:scale-110">
                  <Phone className="size-5" />
                </div>
                <span className="font-medium">{profile.phone}</span>
              </a>
              <div className="group flex items-center gap-4 text-muted-foreground">
                <div className="glass-panel flex size-12 items-center justify-center rounded-full">
                  <MapPin className="size-5" />
                </div>
                <span className="font-medium">{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="glass-panel relative flex-1 rounded-[2rem] border border-foreground/10 p-8">
            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="h-12 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="h-12 w-full rounded-xl border border-foreground/10 bg-foreground/5 px-4 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help?"
                  className="min-h-[120px] w-full resize-none rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary font-bold text-primary-foreground shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-[transform,box-shadow] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-[0.96]"
              >
                {sent ? "Opening mail…" : "Send message"} <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
