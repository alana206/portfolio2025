import { getRepos } from "./lib/github";
import RepoCard from "../components/RepoCard";

export default async function Page() {
  const username = process.env.NEXT_PUBLIC_GH_USERNAME || "your-username";
  const repos = await getRepos(username);

  return (
    <section>
      <h2 className="sr-only">Repositories</h2>
      {repos.length === 0 ? (
        <p className="text-base-sub">
          No repos found. Check your username in .env.local.
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((r) => (
            <li key={r.id}>
              <RepoCard
                repo={{
                  ...r,
                  description: r.description ?? undefined,
                  language: r.language ?? undefined,
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
