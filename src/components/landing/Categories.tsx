// components/Categories.tsx
import { Container, SectionHeading, Card } from '@/components/shared';
import { Layout, Brain, Smartphone, Code, Shield, GraduationCap, Cpu, FolderOpen, ArrowUpRight } from 'lucide-react';

const BENTO_CATEGORIES = [
  { name: "SaaS", count: 142, icon: Layout, colSpan: "md:col-span-2", bg: "bg-blue-50/50 text-blue-600 border-blue-100" },
  { name: "AI", count: 98, icon: Brain, colSpan: "md:col-span-1", bg: "bg-purple-50/50 text-purple-600 border-purple-100" },
  { name: "Web", count: 234, icon: Cpu, colSpan: "md:col-span-1", bg: "bg-amber-50/50 text-amber-600 border-amber-100" },
  { name: "Mobile", count: 64, icon: Smartphone, colSpan: "md:col-span-2", bg: "bg-emerald-50/50 text-emerald-600 border-emerald-100" },
  { name: "Developer Tools", count: 112, icon: Code, colSpan: "md:col-span-2", bg: "bg-indigo-50/50 text-indigo-600 border-indigo-100" },
  { name: "Productivity", count: 45, icon: Shield, colSpan: "md:col-span-1", bg: "bg-rose-50/50 text-rose-700 border-rose-100" },
  { name: "Education", count: 37, icon: GraduationCap, colSpan: "md:col-span-1", bg: "bg-cyan-50/50 text-cyan-600 border-cyan-100" },
  { name: "Other", count: 19, icon: FolderOpen, colSpan: "md:col-span-2", bg: "bg-slate-50 text-slate-600 border-slate-200/60" },
];

export const Categories = () => (
  <section className="py-24 bg-white border-b border-slate-100">
    <Container>
      
      {/* Centered Heading */}
      <SectionHeading 
        title="Explore Categories" 
        subtitle="Find custom-tailored builds matching your tech stack or native engineering interests."
        centered
      />

      {/* Bento Grid Layout Configuration */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
        {BENTO_CATEGORIES.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <Card
              key={cat.name}
              variant="interactive"
              className={`p-6 flex flex-col justify-between min-h-[140px] group ${cat.colSpan} border-slate-200/70 rounded-3xl`}
            >
              {/* Top Row: Contextual Structural Icon & Navigation Arrow */}
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${cat.bg} shadow-sm`}>
                  <IconComponent size={20} />
                </div>
                
                {/* Micro Action Indicator */}
                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 items-center justify-center flex opacity-0 group-hover:opacity-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Bottom Row: Text Blocks & Item Counters */}
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#FF6B35] transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">
                    Browse active builds
                  </p>
                </div>
                
                {/* Live Count Micro Badge */}
                <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 group-hover:border-slate-200/80 transition-colors">
                  {cat.count} projects
                </span>
              </div>
            </Card>
          );
        })}
      </div>

    </Container>
  </section>
);