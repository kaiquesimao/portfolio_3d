import type { Metadata } from "next";
import "./globals.css";
import "react-phone-number-input/style.css";
import "react-vertical-timeline-component/style.min.css";
import "devicon/devicon.min.css";

export const metadata: Metadata = {
  title: "Kaique | Portfólio",
  description: "Portfólio 3D com projetos, experiência e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
