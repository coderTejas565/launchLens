import Link from "next/link";
import { getProjects } from "@/actions/project.actions";

export const revalidate = 60;

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <div className="max-w-5xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#0F172A]">
            Projects
          </h1>

          <p className="text-sm text-[#64748B]">
            0 Projects
          </p>
        </div>

        <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-12 text-center shadow-sm">
          <p className="text-[#64748B] text-lg">
            No projects have been submitted yet.
          </p>

          <Link
            href="/dashboard/new"
            className="inline-block mt-6 bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Submit First Project
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Projects
        </h1>

        <p className="text-sm font-medium text-[#64748B]">
          {projects.length} Projects
        </p>
      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group block border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-6 hover:shadow-md hover:border-[#FF6B35]/30 transition-all duration-200"
          >
            <div className="flex justify-between items-start gap-4">
              <h2 className="text-xl font-semibold text-[#0F172A] group-hover:text-[#FF6B35] transition-colors">
                {project.name}
              </h2>

              <span className="text-xs px-2.5 py-1 font-medium bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] rounded-full shrink-0">
                {project.category}
              </span>
            </div>

            <p className="text-[#64748B] mt-3 leading-relaxed text-sm">
              {project.description.length > 120
                ? `${project.description.slice(0, 120)}...`
                : project.description}
            </p>

            <p className="text-[#FF6B35] group-hover:text-[#E85A2A] font-medium text-sm mt-4 inline-flex items-center gap-1 transition-colors">
              View Details 
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}