// components/shared/Card.tsx
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Changes borders, dynamic surface physics, and structural layouts. */
  variant?: 'default' | 'interactive' | 'muted' | 'glass' | 'bento' | 'spotlight' | 'feature';
  className?: string;
}

export const Card = ({
  children,
  variant = 'default',
  className = "",
  ...props
}: CardProps) => {

  const baseStyles = "bg-white border rounded-2xl transition-all duration-300 overflow-hidden relative";

  const variants = {
    // 1. Core Default Styles
    default: "border-slate-200/80 shadow-sm bg-white",
    
    // Legacy support layout styles
    interactive: "border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5 cursor-pointer bg-white",
    muted: "bg-slate-50/70 border-slate-200/60 shadow-none",

    // 2. Modern 2026 Glassmorphic Layout
    glass: "bg-white/60 backdrop-blur-md border-white/40 shadow-sm backdrop-saturate-150",

    // 3. Asymmetrical Bento Configuration (Structural Foundation)
    bento: "border-slate-200/70 shadow-sm bg-white hover:border-[#FF6B35]/30 hover:shadow-md hover:scale-[1.01] transition-transform duration-300 rounded-3xl",

    // 4. Spotlight Interactive Mesh
    spotlight: "border-slate-200/80 bg-white hover:border-[#FF6B35]/25 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-b hover:from-[#FF6B35]/5 hover:to-transparent group",

    // 5. Featured Hero Highlight Card
    feature: "border-slate-200/70 bg-white shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300/80 group"
  };

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${className}
      `.trim()}
      {...props}
    >
      {/* Decorative Layer specific to spotlight mechanics to support internal gradients */}
      {variant === 'spotlight' && (
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FF6B35]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      
      {children}
    </div>
  );
};

// --- Structural Helper Sub-Components (Compound Sub-Elements) ---

interface CompoundProps {
  children: React.ReactNode;
  className?: string;
}

Card.Header = ({ children, className = "" }: CompoundProps) => (
  <div className={`px-6 py-4 border-b border-slate-100/80 flex items-center justify-between gap-4 relative z-10 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = "" }: CompoundProps) => (
  <div className={`p-6 relative z-10 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = "" }: CompoundProps) => (
  <div className={`px-6 py-4 bg-slate-50/40 border-t border-slate-100/80 flex items-center justify-between gap-4 relative z-10 ${className}`}>
    {children}
  </div>
);

export default Card;