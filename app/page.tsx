// app/page.tsx
export default function HomePage() {
  return (
    <section className="mb-10 rounded-xl bg-base-panel p-6 shadow card">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="text-base-sub mb-4">
        What up, I’m Alana, a passionate developer who loves building modern web
        applications and tools. I specialize in:
      </p>
      <ul className="list-disc pl-6 text-base-sub">
        <li>Frontend development (React, Next.js, Tailwind CSS)</li>
        <li>Backend APIs (Node.js, Express, REST, GraphQL)</li>
        <li>Full‑stack projects</li>
        <li>Automation and scripting</li>
        <li>Open source contributions</li>
      </ul>
    </section>
  );
}
