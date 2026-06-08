// components/RecentFeedback.tsx
import { Container, SectionHeading, Card } from '@/components/shared';
import { MessageSquare } from 'lucide-react';

const RECENT_FEEDBACK = [
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Great onboarding experience and clean UI. The layout makes total sense.",
    project: "FormVerse",
    author: "Alex M."
  },
  {
    stars: "⭐⭐⭐⭐",
    comment: "Would love dark mode support. Performance is blazing fast though.",
    project: "TaskFlow",
    author: "Sarah K."
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "The API documentation is incredibly clear. Exactly what a developer needs.",
    project: "DevLint",
    author: "Tejas"
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    comment: "Amazing concept! It helped us catch three critical UX flaws before our launch.",
    project: "AuthSnap",
    author: "Marcus D."
  },
  {
    stars: "⭐⭐⭐⭐",
    comment: "The feedback loops are tight. Objective criticism from real technical makers.",
    project: "QueryDB",
    author: "Elena R."
  }
];

// Duplicate items to ensure a seamless infinite loop mask width
const MARQUEE_ITEMS = [...RECENT_FEEDBACK, ...RECENT_FEEDBACK];

export const RecentFeedback = () => (
  <section id="feedback" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-100">
    <Container>
      <SectionHeading 
        title="Live Feedback Stream" 
        subtitle="See what raw, objective insights builders are sharing right now across the ecosystem." 
        centered
      />
    </Container>

    {/* Marquee Wrapper with side fading mask overlays */}
    <div className="relative mt-4 flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
      
      {/* Track Container running on infinite CSS Keyframes */}
      <div className="flex gap-6 py-4 animate-marquee whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {MARQUEE_ITEMS.map((fb, idx) => (
          <Card 
            key={idx} 
            className="w-[380px] shrink-0 flex flex-col justify-between bg-white border-slate-200/70 p-6 shadow-sm hover:border-[#FF6B35]/30 transition-colors rounded-2xl select-none"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-amber-500 text-xs tracking-tight">{fb.stars}</div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium bg-slate-50 border border-slate-100 rounded-md px-2 py-0.5">
                  <MessageSquare size={10} className="text-slate-400" /> Review
                </div>
              </div>
              <p className="text-slate-700 font-medium text-sm leading-relaxed whitespace-normal">
                "{fb.comment}"
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="font-bold text-slate-900 bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                {fb.project}
              </span>
              <span className="text-slate-400 font-medium">— {fb.author}</span>
            </div>
          </Card>
        ))}
      </div>

    </div>
  </section>
);