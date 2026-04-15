import type { ReactNode } from "react";

import type { Metadata } from "next";

import { rootMetadata } from "@/lib/metadata";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = rootMetadata;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
