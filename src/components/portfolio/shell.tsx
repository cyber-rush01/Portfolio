import type { ReactNode } from "react";
import { SmoothCursor } from "@/components/effects/smooth-cursor";
import { Header } from "@/components/portfolio/header";
import { Footer } from "@/components/portfolio/footer";

export function PortfolioShell({
  children,
  dock,
}: {
  children: ReactNode;
  dock?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent selection:bg-primary/30 selection:text-foreground">
      <SmoothCursor />
      <Header />
      <main className="flex w-full flex-col border-none pt-10">{children}</main>
      <Footer />
      {dock}
    </div>
  );
}
