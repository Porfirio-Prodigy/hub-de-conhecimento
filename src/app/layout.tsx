import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hub de Conhecimento - Programação, Economia e Idiomas",
  description: "O Hub de Conhecimento reúne artigos, tutoriais e recursos sobre programação, finanças, economia e aprendizado de idiomas. Conteúdo organizado para estudo e referência rápida.",
  keywords: [
    "programação",
    "economia",
    "finanças",
    "idiomas",
    "aprendizado",
    "tutoriais",
    "WordPress",
    "tecnologia",
    "educação",
    "conhecimento"
  ],
  authors: [{ name: "Hub de Conhecimento" }],
  creator: "Hub de Conhecimento",
  publisher: "Hub de Conhecimento",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://www.hubdeconhecimento.com",
  },
  openGraph: {
    title: "Hub de Conhecimento - Programação, Economia e Idiomas",
    description: "Aprenda programação, finanças, economia e idiomas com artigos, tutoriais e recursos didáticos. Conteúdo otimizado para estudo e inteligência artificial.",
    url: "https://www.hubdeconhecimento.com",
    siteName: "Hub de Conhecimento",
    images: [
      {
        url: "/logo.svg",
        width: 300,
        height: 120,
        alt: "Logo Hub de Conhecimento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub de Conhecimento - Programação, Economia e Idiomas",
    description: "Conteúdo didático e organizado sobre programação, finanças, economia e idiomas, otimizado para aprendizado rápido e inteligência artificial.",
    images: ["/logo.svg"],
  },
  metadataBase: new URL("https://www.hubdeconhecimento.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
