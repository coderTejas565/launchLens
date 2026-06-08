// components/Hero.tsx
import { Container, Button } from '@/components/shared';
import { HeroPreview } from './HeroPreview';
import { Rocket, MessageSquare, ArrowRight } from 'lucide-react';
import Link from "next/link";

export const Hero = () => (
  <section className="relative pt-20 pb-28 bg-[#F8FAFC] overflow-hidden">
    
    {/* Stable Spotlight Grid & Orange Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-70" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#FF6B35]/10 via-[#FF6B35]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

    <Container className="relative grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      {/* Left Content Column */}
      <div className="lg:col-span-7 flex flex-col items-start relative z-10">
        
        {/* Combined Trust Metrics & Live Global Activity Bar */}
        <div className="inline-flex flex-wrap items-center gap-2 bg-white border border-slate-200/80 rounded-full p-1.5 pr-4 text-xs font-semibold text-slate-800 mb-8 shadow-sm group hover:border-slate-300 transition-all duration-200 select-none">
          {/* Project Count Badge */}
          <span className="inline-flex items-center gap-1 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full px-3 py-1 font-bold">
            <Rocket size={12} fill="currentColor" />
            5,000+ Shared
          </span>
          {/* Live Activity Split Feed Indicator */}
          <span className="w-[1px] h-3.5 bg-slate-200 mx-1 hidden sm:block" />
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <MessageSquare size={12} className="text-slate-400" />
            <b className="text-slate-900 font-bold">12.4k</b> total reviews written
          </span>
        </div>

        {/* Hero Headlines */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          Build Better Projects. <br />
          <span className="bg-gradient-to-r from-[#FF6B35] via-[#FF7E4E] to-[#E85A2A] bg-clip-text text-transparent">
            Get Real Feedback.
          </span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
          Submit your live build or staging link, collect structured, objective feedback from fellow developers, and discover exactly what to optimize before your launch.
        </p>

        {/* CTA Buttons Layout */}
        <div className="mt-8 flex flex-wrap gap-3.5 w-full sm:w-auto">
             <Link href="/dashboard/new">
          <Button 
            variant="gradient" 
            size="lg"
            className="rounded-full font-bold shadow-lg shadow-orange-500/10 px-8 hover:scale-[1.02]"
            rightIcon={<ArrowRight size={16} />}
            >
            Submit Project
          </Button>
              </Link>

              <Link href="/projects">
          <Button 
            variant="secondary" 
            size="lg"
            className="rounded-full font-bold bg-white/80 border-slate-200/60 hover:bg-white text-slate-700 hover:text-slate-900 px-8"
            >
            Browse Projects
          </Button>
              </Link>
        </div>

        {/* Minimal Bottom Trust Check Pills */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold uppercase tracking-wider text-slate-400 border-t border-slate-200/50 pt-6 w-full max-w-xl">
          {['Free to submit', 'Structured insights', 'Built for makers'].map((pill) => (
            <div key={pill} className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/40" />
              <span>{pill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Preview Wrapper Area (Completely Clean & Unlocked) */}
      <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
        
        {/* Clean, undisturbed container space for HeroPreview */}
        <div className="relative w-full max-w-md transform hover:scale-[1.01] transition-transform duration-500">
          
          {/* Subtle backlighting ring to support depth profiles */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 via-purple-500/5 to-transparent rounded-3xl blur-2xl -z-10" />
          
          <HeroPreview />
          
        </div>

      </div>
    </Container>
  </section>
);