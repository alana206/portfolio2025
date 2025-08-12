export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-xl bg-white/5 ring-1 ring-white/10" />
        <h1 className="text-lg font-semibold tracking-tight">Projects</h1>
      </div>
      <nav className="flex items-center gap-3 text-sm text-base-sub">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-base-border px-3 py-1.5 hover:bg-base-hover"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}
