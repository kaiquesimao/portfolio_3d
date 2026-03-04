import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import "react-vertical-timeline-component/style.min.css";
import "devicon/devicon.min.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaique | Portfólio",
  description: "Portfólio 3D com projetos, experiência e contato.",
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
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
