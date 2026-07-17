import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import "react-vertical-timeline-component/style.min.css";
import JsonLd from "./src/components/JsonLd";
import {
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "./src/constants/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" dir="ltr" suppressHydrationWarning>
      <body className={poppins.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
