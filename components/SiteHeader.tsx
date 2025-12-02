"use client";

import Link from "next/link";
import { useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Courses" },
  { href: "/resources", label: "Resources" },
];

const extraLinks = [
  { href: "/life", label: "Life OS" },
  { href: "/collections", label: "Collections" },
  { href: "/knowledge", label: "Knowledge Map" }, // future
];

const mobileTopLinks = primaryLinks.slice(0, 3); // Home, About, Projects
const mobileHiddenLinks = [
  ...primaryLinks.slice(3), // Courses, Resources
  ...extraLinks,            // Life OS, Collections, Knowledge Map
];

export function SiteHeader() {
  const [showExtras, setShowExtras] = useState(false); // desktop +
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile menu

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: logo / name */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.35em] text-slate-900 uppercase"
        >
          Phawat
        </Link>

        {/* Center: desktop nav (all 5 + + button + extras) */}
        <nav className="hidden flex-1 items-center justify-center overflow-x-hidden md:flex">
          <div className="inline-flex items-center gap-6 whitespace-nowrap text-sm font-medium text-slate-800">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative pb-1 transition-colors hover:text-slate-950"
              >
                {link.label}
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1px] origin-center scale-x-0 bg-slate-900 transition-transform duration-400 ease-out group-hover:scale-x-100" />
              </Link>
            ))}

            {/* Desktop toggle for extra sections */}
            <button
              type="button"
              onClick={() => setShowExtras((v) => !v)}
              aria-label="Toggle more sections"
              className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
            >
              {showExtras ? "−" : "+"}
            </button>

            {/* Extra links: horizontal expand, no height change */}
            <div
              className={`flex items-center gap-6 overflow-hidden text-sm transition-[max-width,opacity,transform] duration-300 ease-out ${
                showExtras
                  ? "max-w-[420px] opacity-100 translate-x-0"
                  : "max-w-0 opacity-0 -translate-x-2"
              }`}
            >
              {extraLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative pb-1 text-slate-600 transition-colors hover:text-slate-950"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1px] origin-center scale-x-0 bg-slate-900 transition-transform duration-400 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Center: mobile mini nav (Home / About / Projects) */}
        <nav className="flex flex-1 items-center justify-center gap-4 text-sm font-medium text-slate-800 md:hidden">
          {mobileTopLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative pb-0.5 transition-colors hover:text-slate-950"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-[1px] origin-center scale-x-0 bg-slate-900 transition-transform duration-400 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Right side: desktop icons, mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Desktop icons */}
          <div className="hidden items-center gap-4 text-slate-800 md:flex">
            <a
              href="mailto:pboomhtsaengs3@gmail.com"
              aria-label="Email Phawat"
              className="hover:text-amber-700"
            >
              {/* Envelope icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
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
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/phawat-boom-saengsri-087a6223b/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-amber-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          {/* Mobile hamburger (icons are moved into menu on mobile) */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-xs font-semibold text-slate-800 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMobileOpen ? "×" : "≡"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu (rest + social) */}
      {isMobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-800">
            {/* Hidden nav links on mobile */}
            {mobileHiddenLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="py-1"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 border-t border-slate-100 pt-3 text-[13px] text-slate-500">
              Connect
            </div>
            <div className="mt-1 flex gap-4 pb-1 text-slate-800">
              <a
                href="mailto:pboomhtsaengs3@gmail.com"
                aria-label="Email Phawat"
                className="hover:text-amber-700"
              >
                ✉️
              </a>
              <a
                href="https://github.com/phawatboom"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="hover:text-amber-700"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/phawat-boom-saengsri-087a6223b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="hover:text-amber-700"
              >
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
