// components/CTASection.tsx
import { Container, Button } from '@/components/shared';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const CTASection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <Container>
      {/* Refined, cleaner high-end gradient layout */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#FF6B35] to-[#FF8A5B] p-10 md:p-16 text-center text-white overflow-hidden shadow-xl shadow-orange-500/10 border border-orange-500/20">
        
        {/* Safe, stable ambient background layout dots (bypasses complex masking) */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          
          {/* Top Micro-Badge - Enhanced Contrast */}
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase mb-6 shadow-sm">
            <Sparkles size={12} fill="currentColor" className="text-amber-200" />
            <span>Join 10k+ active builders</span>
          </div>

          {/* Primary Headline Section */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Share Your Project?
          </h2>
          
          {/* Context Subtitle Description */}
          <p className="text-orange-50/90 text-sm md:text-base font-medium mt-4 mb-8 leading-relaxed max-w-lg">
            Stop shipping into an empty void. Bring your build to LaunchLens and transform raw feedback into explosive growth updates.
          </p>

          {/* Corrected Button Core Props Mapping */}
          <Link href="/dashboard">
          <Button 
            variant="secondary"
            size="lg"
            className="rounded-full !bg-white !text-slate-900 font-bold shadow-lg shadow-orange-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
            rightIcon={<ArrowRight size={16} />}
            >
            Get Started
          </Button>
        </Link>

        </div>
      </div>
    </Container>
  </section>
);