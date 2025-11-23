// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Phawat",
  description: "Get in touch for collaborations or opportunities.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6">Contact me</h1>
      <p className="text-lg text-gray-700 mb-4">
        Feel free to reach out if you would like to discuss opportunities,
        projects, or collaborations.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        Email is usually the fastest way to reach me.
      </p>
      <a
        href="mailto:pboomhtsaengs3@gmail.com"
        className="inline-block text-amber-600 underline text-lg hover:text-amber-600"
      >
        pboomhtsaengs3@gmail.com
      </a>
    </div>
  );
}
