import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold">
        Project Not Found
      </h1>

      <p className="mt-4">
        The project you're looking for doesn't exist.
      </p>

      <Link
        href="/projects"
        className="inline-block mt-6"
      >
        Back to Projects
      </Link>
    </div>
  );
}