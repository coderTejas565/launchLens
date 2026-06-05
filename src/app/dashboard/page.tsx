import Link from "next/link";
import { getProjects } from "@/actions/project.actions";
import { deleteProject } from "@/actions/project.actions";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#0F172A]">
          Dashboard
        </h1>

        <Link
          href="/dashboard/new"
          className="bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-medium px-4 py-2 rounded-lg transition-colors shadow-sm text-sm"
        >
          + New Project
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5 rounded-xl shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
            Total Projects
          </p>
          <p className="text-3xl font-bold text-[#0F172A]">
            {projects.length}
          </p>
        </div>

        <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5 rounded-xl shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
            Categories Used
          </p>
          <p className="text-3xl font-bold text-[#0F172A]">
            {new Set(projects.map(p => p.category)).size}
          </p>
        </div>

        <div className="border border-[#E2E8F0] bg-[#FFFFFF] p-5 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
              Latest Project
            </p>
            <p className="text-base font-semibold text-[#0F172A] truncate">
              {projects[0]?.name || "None"}
            </p>
          </div>
        </div>
      </div>

      {/* Project Admin List */}
      <div className="space-y-3">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-4 flex justify-between items-center shadow-sm hover:border-[#E2E8F0]/80 transition-all"
          >
            <div>
              <h2 className="font-semibold text-base text-[#0F172A]">
                {project.name}
              </h2>
              <p className="text-xs text-[#64748B] mt-0.5 bg-[#F8FAFC] px-2 py-0.5 border border-[#E2E8F0] rounded inline-block">
                {project.category}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Link 
                href={`/projects/${project.id}`} 
                className="text-sm font-medium text-[#64748B] hover:text-[#0F172A] px-3 py-1.5 rounded-md hover:bg-[#F8FAFC] transition-colors"
              >
                View
              </Link>
              
              <Link 
                href={`/dashboard/edit/${project.id}`} 
                className="text-sm font-medium text-[#FF6B35] hover:text-[#E85A2A] px-3 py-1.5 rounded-md hover:bg-[#FF6B35]/5 transition-colors"
              >
                Edit
              </Link>
              
              <form action={deleteProject.bind(null, project.id)}>
                <button 
                  type="submit" 
                  className="text-sm font-medium text-[#EF4444] hover:text-[#b91c1c] px-3 py-1.5 rounded-md hover:bg-[#EF4444]/5 transition-colors cursor-pointer"
                >
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