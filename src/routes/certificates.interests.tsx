import { createFileRoute } from "@tanstack/react-router";
import { CertGallery } from "@/components/portfolio/cert-gallery";
import { PortfolioShell } from "@/components/portfolio/shell";
import { interestCerts } from "@/data/profile";

export const Route = createFileRoute("/certificates/interests")({
  component: InterestCertsPage,
});

function InterestCertsPage() {
  return (
    <PortfolioShell>
      <CertGallery
        heading="Achievements & Interests"
        intro="Sports, cycling, and extracurricular recognition beyond the classroom."
        items={interestCerts}
      />
    </PortfolioShell>
  );
}
