// components/AudienceSection.tsx
import { Container, Card, SectionHeading } from '@/components/shared';
import { Code2, Palette, Terminal, Check } from 'lucide-react';

const AUDIENCES = [
  {
    icon: Code2,
    title: "Developers",
    desc: "Stress-test your system architecture, API performance, and code scaling limitations.",
    benefits: ["Isolate runtime exceptions", "Optimize load velocities", "Validate framework choices"],
    highlight: "hover:border-blue-500/30 hover:bg-gradient-to-b hover:from-blue-50/20 hover:to-transparent"
  },
  {
    icon: Palette,
    title: "Designers",
    desc: "Audit UI presentation layers, design systems consistency, and core interactive onboarding flows.",
    benefits: ["Review typography pairing", "Verify structural contrast", "Uncover layout friction"],
    highlight: "hover:border-purple-500/30 hover:bg-gradient-to-b hover:from-purple-50/20 hover:to-transparent"
  },
  {
    icon: Terminal,
    title: "Founders",
    desc: "Validate product-market fit, subscription funnel conversions, and critical business assumptions.",
    benefits: ["Collect qualitative analytics", "Gauge customer conversion", "Refine distribution models"],
    highlight: "hover:border-[#FF6B35]/30 hover:bg-gradient-to-b hover:from-[#FF6B35]/5 hover:to-transparent"
  }
];

export const AudienceSection = () => (
  <section className="py-24 bg-[#F8FAFC] border-y border-slate-200/60 relative overflow-hidden">
    
    {/* Subtle Decorative Ambient Mesh */}
    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-100/50 to-transparent pointer-events-none" />

    <Container>
      
      {/* Structural Central Section Header */}
      <SectionHeading
        title="Built For Every Builder"
        subtitle="LaunchLens unites cross-functional expertise to ensure your technical deployment is market-ready."
        centered
      />

      {/* Modern 3-Column Spotlight Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
        {AUDIENCES.map((audience, idx) => {
          const IconComponent = audience.icon;
          return (
            <Card
              key={idx}
              className={`
                p-8 flex flex-col justify-between rounded-3xl bg-white border-slate-200/80
                transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg
                group relative overflow-hidden ${audience.highlight}
              `.trim()}
            >
              <div>
                {/* Structural Floating Icon Token */}
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/60 flex items-center justify-center shadow-sm text-slate-700 group-hover:text-[#FF6B35] group-hover:border-[#FF6B35]/20 group-hover:shadow-md transition-all duration-300">
                  <IconComponent size={22} className="transition-transform group-hover:scale-110" />
                </div>

                {/* Typography Blocks */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-6 group-hover:text-[#FF6B35] transition-colors duration-200">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {audience.desc}
                </p>

                {/* Custom Highlight Check-Benefit Row Grid */}
                <ul className="mt-8 space-y-3.5 pt-6 border-t border-slate-100">
                  {audience.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs font-semibold text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </Card>
          );
        })}
      </div>

    </Container>
  </section>
);