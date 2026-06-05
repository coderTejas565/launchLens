import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Navigation Sidebar */}
      <aside className="w-full md:w-64 bg-[#FFFFFF] border-b md:border-b-0 md:border-r border-[#E2E8F0] p-6 shrink-0">
        {/* App Branding / Title */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl font-bold text-[#0F172A] tracking-tight flex items-center gap-2">
            <span className="w-2 h-6 bg-[#FF6B35] rounded-full inline-block"></span>
            Dashboard
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <Link
            href="/dashboard"
            className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] md:border-0 md:hover:bg-[#F8FAFC] transition-colors"
          >
            Overview
          </Link>
          
          <Link
            href="/projects"
            className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
          >
            Explore Projects
          </Link>

          <Link
            href="/dashboard/new"
            className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
          >
            + Submit New
          </Link>
        </nav>
      </aside>

      {/* Main Content Area Container */}
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="py-4 md:py-2">
          {children}
        </div>
      </main>
    </div>
  );
}