import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio showcasing my projects and skills",
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
        {/* Navigation */}
        <nav className="p-5 bg-white shadow-md flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <div className="space-x-4">
            <Link href="/" className="text-lg hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-blue-500">
              About
            </Link>
            <Link href="/projects" className="text-lg hover:text-blue-500">
              Projects
            </Link>
            <Link href="/contact" className="text-lg hover:text-blue-500">
              Contact
            </Link>
            <Link href="/resources" className="text-lg hover:text-blue-500">
              Resources
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-10">{children}</main>

        {/* Footer */}
        <footer className="text-center py-5 bg-gray-800 text-white">
          <p>&copy; {new Date().getFullYear()} Phawat. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
