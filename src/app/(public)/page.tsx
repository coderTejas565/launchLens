import Link from "next/link";
import { getProjects } from "@/actions/project.actions";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Projects
      </h1>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="border rounded-lg p-4 hover:shadow transition"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {project.name}
              </h2>

              <span className="text-sm px-2 py-1 border rounded">
                {project.category}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {project.description}
            </p>

            <p className="text-blue-500 text-sm mt-2">
              Visit →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}