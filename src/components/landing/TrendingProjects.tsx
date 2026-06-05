// components/TrendingProjects.tsx
import {
  Container,
  SectionHeading,
  Card,
  Badge,
  Button,
} from "@/components/shared";
import { Eye, MessageSquare, Flame, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  { 
    name: "FormVerse", 
    cat: "SaaS", 
    views: "2.4k", 
    count: 52, 
    desc: "Production-grade form builder optimized for conversion funnels.",
    image: "bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent",
    isHot: true
  },
  { 
    name: "TaskFlow", 
    cat: "Productivity", 
    views: "1.8k", 
    count: 28, 
    desc: "Minimalist task manager engineered for ultra-fast asynchronous teams.",
    image: "bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent",
    isHot: false
  },
  { 
    name: "DevLint", 
    cat: "Dev Tools", 
    views: "4.2k", 
    count: 104, 
    desc: "AI-powered abstract syntax tree analyzer checking runtime faults.",
    image: "bg-gradient-to-br from-[#FF6B35]/10 via-amber-500/5 to-transparent",
    isHot: true
  },
];

export const TrendingProjects = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <Container>
      
      {/* Structural Header with Actions Link */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeading 
          title="Trending Projects" 
          subtitle="See what builders are shipping and reviewing right now."
          className="mb-0"
        />
        <div className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[#FF6B35] cursor-pointer hover:underline group">
          <span>Explore leaderboard</span>
          <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Feature Grid Architecture */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((p) => (
          <Card 
            key={p.name} 
            variant="interactive" 
            className="flex flex-col group p-0 overflow-hidden border-slate-200/70"
          >
            {/* Project Preview Window Mock */}
            <div className={`w-full h-48 ${p.image} relative border-b border-slate-100 flex items-center justify-center p-6`}>
              
              {/* Top Row Badges */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                <Badge variant="default" className="bg-white/90 backdrop-blur-md border-slate-200/50 shadow-sm font-medium">
                  {p.cat}
                </Badge>
                {p.isHot && (
                  <Badge 
                    variant="primary" 
                    className="bg-[#FF6B35] text-white border-transparent font-semibold shadow-sm animate-pulse flex items-center gap-1 px-3 py-1"
                    icon={<Flame size={12} fill="currentColor" />}
                  >
                    Trending
                  </Badge>
                )}
              </div>

              {/* Minimal Abstract Framework UI Block Mock */}
              <div className="w-full max-w-[180px] bg-white border border-slate-200/60 rounded-xl p-3 shadow-sm transform scale-95 group-hover:scale-100 transition-transform duration-300">
                <div className="w-8 h-2 bg-slate-200 rounded mb-2" />
                <div className="w-12 h-1.5 bg-slate-100 rounded mb-1" />
                <div className="w-6 h-1.5 bg-slate-100 rounded" />
              </div>
            </div>

            {/* Project Meta Information Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-xl text-slate-900 tracking-tight mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {p.name}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              {/* Multi-Metric Live Status Bar Row */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-slate-500 font-medium text-xs">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Eye size={14} className="text-slate-400" />
                    {p.views} views
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-slate-400" />
                    {p.count} feedback
                  </span>
                </div>
                
                <span className="text-xs font-semibold text-[#FF6B35] tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Review &rarr;
                </span>
              </div>
            </div>

          </Card>
        ))}
      </div>

    </Container>
  </section>
);