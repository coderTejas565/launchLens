// components/HeroPreview.tsx
import { Card, Badge } from '@/components/shared';
import { Sparkles, MessageSquare, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const HeroPreview = () => (
  <div className="w-full max-w-xl mx-auto grid grid-cols-3 gap-4 p-2">
    
    {/* Block 1: Main Featured Project (Spans 2 columns, 2 rows) */}
    <div className="col-span-2 row-span-2 group">
      <Card className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-3">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">FormVerse</h3>
              <p className="text-xs text-slate-500 font-medium">formverse.io</p>
            </div>
            <Badge variant="primary" className="rounded-full bg-[#FF6B35]/10 text-[#FF6B35] border-transparent font-semibold">
              SaaS
            </Badge>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Production-grade form builder optimized for high-conversion startup funnels.
          </p>
        </div>

        {/* Quick Review Snippet */}
        <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 text-emerald-600">
              <CheckCircle2 size={12} /> Live Sentiment
            </span>
            <span className="text-amber-500">⭐ 4.8</span>
          </div>
          <p className="text-xs text-slate-600 italic">"Onboarding flow takes less than 30 seconds."</p>
        </div>
      </Card>
    </div>

    {/* Block 2: AI Tech Tag / Category Tracker (Spans 1 column) */}
    <div className="col-span-1 group">
      <Card className="h-full rounded-3xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center text-center gap-2">
        <div className="w-9 h-9 rounded-2xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center shadow-sm">
          <Sparkles size={16} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-800">AI Verified</div>
          <div className="text-[10px] text-slate-400 font-medium mt-0.5">Automated Audits</div>
        </div>
      </Card>
    </div>

    {/* Block 3: Dev Ecosystem Status (Spans 1 column) */}
    <div className="col-span-1 group">
      <Card className="h-full rounded-3xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col items-center justify-center text-center gap-2">
        <div className="w-9 h-9 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
          <ShieldCheck size={16} />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-800">Production</div>
          <div className="text-[10px] text-slate-400 font-medium mt-0.5">Vercel Edge Ready</div>
        </div>
      </Card>
    </div>

    {/* Block 4: Feedback Activity & Counts (Spans 3 columns across bottom) */}
    <div className="col-span-3 group">
      <Card className="rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 flex items-center justify-center shadow-sm">
            <MessageSquare size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 leading-none">Feedback Velocity</h4>
            <p className="text-xs text-slate-500 mt-1">52 Structured Submissions Received</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-[#FF6B35] bg-[#FF6B35]/5 py-1.5 px-3 rounded-xl border border-[#FF6B35]/10">
          <span>Analyze</span>
          <ArrowUpRight size={14} />
        </div>
      </Card>
    </div>

  </div>
);