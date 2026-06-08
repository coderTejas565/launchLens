// components/Navbar.tsx
import { Container, Button } from '@/components/shared';
import Link from "next/link";

export const Navbar = () => (
  // Fixed wrapper to handle position without disrupting layout flow
  <div className="sticky top-0 z-50 w-full pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
    <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-sm pointer-events-auto transition-all duration-300">
      <Container className="h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-8">
          <Link  href="/" className="text-xl font-bold tracking-tighter text-[#FF6B35] transition-transform active:scale-95">
            LaunchLens
          </Link >
          
          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a  href="#categories" className="hover:text-slate-900 transition-colors">Categories</a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">How it Works</a>
            <Link  href="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
            <a href="#feedback" className="hover:text-slate-900 transition-colors">Feedback</a>
          </div>
        </div>

        {/* Right: CTA Button */}
        <div>
            <Link href="/dashboard/new">
          <Button className="py-2 px-4 sm:px-5 text-sm rounded-full font-medium shadow-sm transition-all duration-200 hover:shadow-md">
            Post Project
          </Button>
            </Link>
        </div>


      </Container>
    </nav>
  </div>
);