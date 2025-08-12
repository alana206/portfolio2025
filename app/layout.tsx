import "./globals.css";

import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Repo Board",
  description: "Your GitHub repos in a clean dark layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-base-bg text-base-text antialiased">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <Header />
          <section className="mb-10 rounded-xl bg-base-panel p-6 shadow card">
            <h2 className="text-2xl font-bold mb-2 text-base-text">About Me</h2>
            <p className="text-base-sub mb-4">
              What Up, Im Alana, a passionate developer who loves building
              modern web applications and tools. I specialize in:
            </p>
            <ul className="list-disc pl-6 text-base-sub">
              <li>Frontend development (React, Next.js, Tailwind CSS)</li>
              <li>Backend APIs (Node.js, Express, REST, GraphQL)</li>
              <li>Full-stack projects</li>
              <li>Automation and scripting</li>
              <li>Open source contributions</li>
            </ul>
          </section>
          <main className="mt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
