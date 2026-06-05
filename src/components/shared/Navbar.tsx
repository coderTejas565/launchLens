import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-slate-900"
        >
          LaunchLens
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/projects">
            Projects
          </Link>

          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link
            href="/dashboard/new"
            className="bg-orange-500 text-white px-4 py-2 rounded-lg"
          >
            Submit Project
          </Link>
        </nav>
      </div>
    </header>
  );
}