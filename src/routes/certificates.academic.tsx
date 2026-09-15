import { createFileRoute } from "@tanstack/react-router";
import { CertGallery } from "@/components/portfolio/cert-gallery";
import { PortfolioShell } from "@/components/portfolio/shell";
import { academicCerts } from "@/data/profile";

export const Route = createFileRoute("/certificates/academic")({
  component: AcademicCertsPage,
});

function AcademicCertsPage() {
  return (
    <PortfolioShell>
      <CertGallery
        heading="Academic & Technical"
        intro="Degree, capstone collaboration, and technical programmes that back the skill set."
        items={academicCerts}
      />
    </PortfolioShell>
  );
}
