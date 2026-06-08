import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Dashboard Sidebar Navigation panel */}
      <aside className="w-64 bg-[#FFFFFF] border-r border-[#E2E8F0] p-6 shrink-0 flex flex-col justify-between">
        <div>
          {/* Subtle Workspace Title */}
          <div className="mb-8 px-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
              Workspace
            </p>
          </div>

          {/* Navigation Links List */}
          <nav className="space-y-1.5 flex flex-col">
            <Link 
              href="/dashboard" 
              className="group flex items-center gap-3 px-4 py-2.5 text-sm font-semibold rounded-lg bg-[#FF6B35]/5 text-[#FF6B35] border border-[#FF6B35]/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Dashboard
            </Link>

            <Link 
              href="/dashboard/new" 
              className="group flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#64748B] transition-colors"></span>
              Create Project
            </Link>
          </nav>
        </div>

        {/* Global Hub Redirect Footer link */}
        <div className="pt-4 border-t border-[#E2E8F0]">
          <Link 
            href="/projects" 
            className="flex items-center justify-between px-4 py-2 text-xs font-medium text-[#64748B] hover:text-[#0F172A] rounded-md hover:bg-[#F8FAFC] transition-colors"
          >
            <span>← Back to Public Grid</span>
          </Link>
        </div>
      </aside>

      {/* Main Panel Content Window wrapper */}
      <main className="flex-1 p-8 overflow-y-auto max-w-7xl">
        {children}
      </main>
    </div>
  );
}