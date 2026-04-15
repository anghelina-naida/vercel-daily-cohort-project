import type { ReactNode } from "react";

import { Footer } from "@/app/components/layout/Footer";
import { Header } from "@/app/components/layout/Header";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1500px] flex-1 flex-col gap-12 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
        {children}
      </main>
      <Footer />
    </div>
  );
}
