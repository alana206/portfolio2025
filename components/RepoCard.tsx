import Link from "next/link";

// Define Repo type inline since ../lib/github is missing
export type Repo = {
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

function formatTimeAgo(date: string) {
  const delta = Date.now() - new Date(date).getTime();
  const sec = Math.floor(delta / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  if (day > 0) return `${day}d ago`;
  if (hr > 0) return `${hr}h ago`;
  if (min > 0) return `${min}m ago`;
  return `just now`;
}

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Link
      href={repo.html_url}
      target="_blank"
      className="card card-hover block p-6 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="truncate text-lg font-bold text-white">{repo.name}</h3>
        <span className="text-sm text-gray-400">
          {formatTimeAgo(repo.updated_at)}
        </span>
      </div>
      {repo.description && (
        <p className="mt-3 text-sm text-gray-300 line-clamp-2">
          {repo.description}
        </p>
      )}
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
        {repo.language && (
          <span className="rounded-full bg-gray-700 px-3 py-1 text-xs font-medium text-gray-200">
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <StarIcon className="h-4 w-4 text-yellow-400" />{" "}
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <ForkIcon className="h-4 w-4 text-gray-500" /> {repo.forks_count}
        </span>
      </div>
    </Link>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .75l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01L12 .75z" />
    </svg>
  );
}

function ForkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        d="M7 3a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6zM7 9a3 3 0 100 6 3 3 0 000-6zm10 0a3 3 0 100 6 3 3 0 000-6z"
        fill="none"
      />
      <path d="M7 6v6a5 5 0 005 5h2v-2h-2a3 3 0 01-3-3V6H7zm10 0v6a3 3 0 01-3 3h-2v2h2a5 5 0 005-5V6h-2z" />
    </svg>
  );
}
