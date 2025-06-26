import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Página principal do portfolio",
};

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html className="h-full" lang="pt-BR">
      <body className={inter.className}>
        <div
          className="
          dark:bg-zinc-900 dark:text-white 
          min-h-screen p-4 mb-8
          sm: overflow-x-hidden
        "
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
