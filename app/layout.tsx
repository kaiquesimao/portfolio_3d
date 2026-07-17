import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import "react-vertical-timeline-component/style.min.css";
import {
  PAGE_TITLE,
  SITE_NAME,
  SITE_URL,
  seoByLocale,
} from "./src/constants/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: seoByLocale.pt.description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.webmanifest",
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" dir="ltr" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
