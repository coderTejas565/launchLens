import Link from "next/link";
import { getProjects } from "@/actions/project.actions";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Projects
          </h1>

          <p className="text-sm text-gray-500">
            0 Projects
          </p>
        </div>

        <div className="border rounded-lg p-8 text-center">
          <p className="text-gray-500">
            No projects have been submitted yet.
          </p>

          <Link
            href="/dashboard/new"
            className="inline-block mt-4 border px-4 py-2 rounded hover:bg-gray-100"
          >
            Submit First Project
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <p className="text-sm text-gray-500">
          {projects.length} Projects
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="border rounded-lg p-5 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">
                {project.name}
              </h2>

              <span className="text-xs px-2 py-1 border rounded">
                {project.category}
              </span>
            </div>

            <p className="text-gray-600 mt-3">
              {project.description.length > 120
                ? `${project.description.slice(0, 120)}...`
                : project.description}
            </p>

            <p className="text-blue-500 text-sm mt-4">
              View Details →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}