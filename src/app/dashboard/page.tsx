import Link from "next/link";
import { getProjects } from "@/actions/project.actions";
import { deleteProject } from "@/actions/project.actions";

export default async function DashboardPage() {
    const projects = await getProjects();

      return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <Link
          href="/dashboard/new"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          + New Project
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="border p-4 rounded">
          <p className="text-sm text-gray-500">
            Total Projects
          </p>
          <p className="text-2xl font-bold">
            {projects.length}
          </p>
        </div>

        <div className="border p-4 rounded">
          <p className="text-sm text-gray-500">
            Categories Used
          </p>
          <p className="text-2xl font-bold">
            {new Set(projects.map(p => p.category)).size}
          </p>
        </div>

        <div className="border p-4 rounded">
          <p className="text-sm text-gray-500">
            Latest Project
          </p>
          <p className="text-sm font-semibold">
            {projects[0]?.name || "None"}
          </p>
        </div>
      </div>
      <div className="grid gap-4">
        {projects.map((project) => (
            <div key={project.id} className="border rounded p-4 flex justify-between items-center">
                <div>
                    <h2 className="font-semibold text-lg">
                        {project.name}
                        </h2>
                        <p className="text-sm text-gray-600">
                            {project.category}
                            </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href={`/projects/${project.id}`} className="text-blue-500 text-sm">
                                View
                                </Link>
                                <Link href={`/dashboard/edit/${project.id}`} className="text-green-600 text-sm">
                                Edit
                                </Link>
                                <form action={deleteProject.bind(null, project.id)}>
                                    <button type="submit" className="text-red-500 text-sm">
                                        Delete
                                        </button>
                                        </form>
                                        </div>
                                        </div>
                                    ))}
                                    </div>
                                    </div>
                                    );
                                }