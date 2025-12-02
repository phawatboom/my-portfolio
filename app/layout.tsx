import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phawat | Portfolio",
  description: "A portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-900`}
      >
        <SiteHeader />

        {/* Main Content */}
        <main className="px-4 sm:px-5 py-8 sm:py-10">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t bg-white">
          <div className="max-w-6xl mx-auto px-5 py-5 text-xs text-gray-500 flex items-center justify-between">
            <p>&copy; {new Date().getFullYear()} Phawat. All rights reserved.</p>
            <p>AI, markets, and products.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
