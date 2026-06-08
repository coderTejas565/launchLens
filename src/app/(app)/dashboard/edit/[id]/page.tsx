import { getProjectById } from "@/actions/project.actions";
import { updateProject } from "@/actions/project.actions";

type Props = {
    params: {id: string}
}

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

    if (!project) {
        return (
          <div className="max-w-2xl mx-auto p-6 min-h-screen bg-[#F8FAFC] flex items-center justify-center">
            <div className="border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 text-center shadow-sm max-w-sm">
              <p className="text-[#EF4444] font-semibold mb-2">Error</p>
              <p className="text-[#64748B]">Project not found or has been removed.</p>
            </div>
          </div>
        )
    }

    return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0F172A] mb-6">
        Edit Project
      </h1>

      {/* Form Card Container */}
      <form 
        action={updateProject.bind(null, project.id)} 
        className="space-y-5 border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 shadow-sm"
      >
        {/* Project Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Project Name
          </label>
          <input 
            name="name" 
            defaultValue={project.name} 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Description
          </label>
          <textarea 
            name="description" 
            defaultValue={project.description} 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all resize-y"
            rows={4}
            required
          />
        </div>

        {/* Project URL */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Project URL
          </label>
          <input 
            type="url"
            name="url" 
            defaultValue={project.url} 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all"
            required
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Category
          </label>
          <select 
            name="category" 
            defaultValue={project.category} 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all cursor-pointer"
            required
          >
            <option value="SAAS">SAAS</option>
            <option value="AI">AI</option>
            <option value="WEB">WEB</option>
            <option value="MOBILE">MOBILE</option>
            <option value="TOOL">TOOL</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>

        {/* Submit Actions Button */}
        <div className="pt-2">
          <button 
            type="submit"
            className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            Update Project
          </button>
        </div>
      </form>
    </div>
  );
}