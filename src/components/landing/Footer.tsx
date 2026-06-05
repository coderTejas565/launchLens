// components/Footer.tsx
import { Container } from "@/components/shared";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Explore Projects", href: "#" },
      { label: "Trending Stream", href: "#" },
      { label: "Leaderboard", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Guidelines", href: "#" },
      { label: "Tech Stack Index", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "#" },
      { label: "Discord Server", href: "#" },
      { label: "Maker Showcases", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Safety", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-white border-t border-slate-100 py-16">
    <Container>
      {/* Upper Grid Matrix Area */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12">
        
        {/* Brand Information Column Group (Spans 2 columns on desktop) */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#FF6B35] flex items-center justify-center text-white text-xs font-bold shadow-sm">
              L
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              LaunchLens
            </span>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            The destination for independent product builders to collect engineering validation, reviews, and tracking metrics.
          </p>
        </div>

        {/* Dynamic Structural Columns Iteration Mapping */}
        {FOOTER_LINKS.map((group) => (
          <div key={group.title} className="flex flex-col space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {group.title}
            </h4>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 hover:text-[#FF6B35] transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Horizontal Rights Reserved Attribution Baseline */}
      <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
        <p>© 2026 LaunchLens Inc. All rights reserved.</p>
        <p className="flex items-center gap-1">
          <span>Designed with absolute speed</span>
        </p>
      </div>
    </Container>
  </footer>
);