// components/shared/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  /** Changes internal coloring matrices, border strengths, and animation behaviors. */
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'trending' | 'new' | 'featured' | 'ai' | 'popular';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Badge = ({
  children,
  variant = 'default',
  icon,
  onClick,
  className = ""
}: BadgeProps) => {

  const baseStyles = "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium select-none border transition-all duration-200 shadow-sm";
  
  const variants = {
    // Standard Utility Variants
    default: "bg-slate-100 text-slate-800 border-slate-200/80 shadow-none",
    primary: "bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/20",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
    warning: "bg-amber-50 text-amber-700 border-amber-200/60",
    danger: "bg-rose-50 text-rose-700 border-rose-200/60",

    // Modern 2026 Launch & Product Label Variants
    // 🔥 High contrast, vibrating brand gradient layer
    trending: "bg-gradient-to-r from-[#FF6B35] to-[#FF8A5B] text-white border-transparent animate-pulse shadow-orange-500/10",
    
    // ✨ Clean cyan freshness indicating brand new releases
    new: "bg-cyan-50 text-cyan-700 border-cyan-200/60 font-semibold",
    
    // 🌟 Premium royal dark element to pull extreme focal attention
    featured: "bg-slate-900 text-slate-50 border-slate-800 tracking-wide font-semibold",
    
    // 🧠 Deep tech electric spectrum layout matching AI toolkits
    ai: "bg-purple-500/10 text-purple-600 border-purple-500/20 backdrop-blur-sm font-semibold",
    
    // 📈 Indigo/blue tone highlighting high-velocity interaction values
    popular: "bg-blue-50 text-blue-700 border-blue-200/60 font-semibold"
  };

  const interactiveStyles = onClick 
    ? "cursor-pointer hover:scale-105 active:scale-95 hover:shadow-md" 
    : "";

  return (
    <span
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${interactiveStyles}
        ${className}
      `.trim()}
    >
      {icon && <span className="inline-flex shrink-0 w-3 h-3 items-center justify-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

export default Badge;