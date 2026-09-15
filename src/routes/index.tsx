import { createFileRoute } from "@tanstack/react-router";
import { PortfolioShell } from "@/components/portfolio/shell";
import { HeroSection } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about";
import { ServicesSection } from "@/components/portfolio/services";
import { ProjectsSection } from "@/components/portfolio/projects";
import { JourneySection } from "@/components/portfolio/journey";
import { EducationSection } from "@/components/portfolio/education";
import { CertificatesSection } from "@/components/portfolio/certificates";
import { ContactSection } from "@/components/portfolio/contact";
import { DockNav } from "@/components/portfolio/dock-nav";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <PortfolioShell dock={<DockNav />}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <JourneySection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </PortfolioShell>
  );
}
