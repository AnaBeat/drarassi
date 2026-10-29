import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Fernanda Rassi Alvarenga | Saúde da Mulher",
  description:
    "Conheça uma abordagem individualizada para o fortalecimento do assoalho pélvico e o cuidado com a saúde íntima feminina, com a Dra. Fernanda Rassi Alvarenga, ginecologista e obstetra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
