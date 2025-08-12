export type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  archived: boolean;
};

export async function getRepos(username: string): Promise<Repo[]> {
  const url = `https://api.github.com/users/${username}/repos?sort=updated&per_page=18&type=owner`;
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(url, { headers, next: { revalidate: 300 } });
  if (!res.ok) {
    // graceful failure if rate-limited or user not found
    console.error("GitHub fetch failed", res.status);
    return [];
  }
  const data = (await res.json()) as Repo[];

  // filter out archived and sort newest updated first
  const cleaned = data
    .filter((r) => !r.archived)
    .sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

  return cleaned;
}
