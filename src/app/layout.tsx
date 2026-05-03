import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";

import { rootMetadata } from "@/lib/metadata";

import "./globals.css";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = {
  themeColor: "#1a1a2e",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
