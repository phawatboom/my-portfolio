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
        {/* Navigation */}
        <nav className="border-b bg-white">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 px-5 py-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-[0.18em] uppercase">
                Phawat
              </span>
            </Link>

            {/* Centered nav links */}
            <div className="flex-1 flex justify-center">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-medium">
                <Link href="/" className="hover:text-amber-700">
                  Home
                </Link>
                <Link href="/about" className="hover:text-amber-700">
                  About
                </Link>
                <Link href="/projects" className="hover:text-amber-700">
                  Projects
                </Link>
                <Link href="/courses" className="hover:text-amber-700">
                  Courses
                </Link>
                <Link href="/resources" className="hover:text-amber-700">
                  Resources
                </Link>
                <Link href="/life" className="hover:text-amber-700">
                  Life OS
                </Link>
                <Link href="/collections" className="hover:text-amber-700">
                  Collections
                </Link>
              </div>
            </div>

            {/* Social icons on the right */}
            <div className="flex items-center space-x-3 text-gray-700">
              <a
                href="mailto:pboomhtsaengs3@gmail.com"
                aria-label="Email Phawat"
                className="hover:text-amber-700"
              >
                {/* refined outline envelope icon so it is not a solid square */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M5 7.5l7 5 7-5" />
                </svg>
              </a>
              <a
                href="https://github.com/phawatboom"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="hover:text-amber-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.222-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.486 17.523 2 12 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/phawat-saengsiripongpun/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-amber-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M4.983 3.5C4.983 4.604 4.088 5.5 2.983 5.5 1.879 5.5.983 4.604.983 3.5.983 2.395 1.879 1.5 2.983 1.5c1.105 0 2 .895 2 2Zm.017 3.75H1v13h4V7.25Zm5.5 0H7.5v13h4v-6.93c0-1.838.852-2.92 2.337-2.92 1.41 0 2.163.996 2.163 2.92V20.25h4v-7.78C20 8.829 18.262 7 15.63 7c-1.862 0-3.215.825-3.88 2.021h-.05V7.25Z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>

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
