// app/layout.tsx
import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

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
          <main className="mt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {/* Placeholder for a logo or avatar */}
        <div className="h-8 w-8 rounded-xl bg-white/5 ring-1 ring-white/10" />
        <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
      </div>
      <nav className="flex items-center gap-3 text-sm text-base-sub">
        <Link
          href="/"
          className="rounded-xl border border-base-border px-3 py-1.5 hover:bg-base-hover"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-base-border pt-6 text-center text-xs text-base-sub">
      <p>Built with Next.js and Tailwind</p>
    </footer>
  );
}
