import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";

import { rootMetadata } from "@/lib/metadata";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = {
  themeColor: "#1a1a2e",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
