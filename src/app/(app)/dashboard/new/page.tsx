import { createProject } from "@/actions/project.actions";

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen bg-[#F8FAFC]">
      {/* Title */}
      <h1 className="text-3xl font-bold text-[#0F172A] mb-6">
        Submit Project
      </h1>

      {/* Form Container Card */}
      <form 
        action={createProject} 
        className="space-y-5 border border-[#E2E8F0] bg-[#FFFFFF] rounded-xl p-8 shadow-sm"
      >
        {/* Project Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-2">
            Project Name
          </label>
          <input 
            type="text" 
            name="name" 
            placeholder="e.g. Acme Analytics dashboard" 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg placeholder-[#64748B]/50 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" 
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
            placeholder="Describe what your project does, its target audience, and key features..." 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg placeholder-[#64748B]/50 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all resize-y" 
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
            placeholder="https://yourproject.com" 
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg placeholder-[#64748B]/50 focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all" 
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
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] p-3 rounded-lg focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35] transition-all cursor-pointer" 
            required
          >
            <option value="" className="text-[#64748B]/50">Select Category</option>
            <option value="SAAS">SAAS</option>
            <option value="AI">AI</option>
            <option value="WEB">WEB</option>
            <option value="MOBILE">MOBILE</option>
            <option value="TOOL">TOOL</option>
            <option value="OTHER">OTHER</option>
          </select>
        </div>

        {/* Form Action Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-[#FF6B35] hover:bg-[#E85A2A] text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
          > 
            Create Project 
          </button>
        </div>
      </form>
    </div>
  );
}