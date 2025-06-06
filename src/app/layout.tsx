import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppProvider from "@/redux/Provider";
import Header from "@/components/header/Header";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Landing Page Example",
  description: "Built with Next.js and Poppins font",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <AppProvider>

      <body className="antialiased  bg-gradient-to-l from-[var(--gradient-from)] to-[var(--gradient-to)] text-gray-900 scroll-smooth">
        <Header/>

        {children}
      </body>
      </AppProvider>
    </html>
  );
}
