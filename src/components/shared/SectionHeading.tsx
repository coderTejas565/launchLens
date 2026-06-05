// shared/SectionHeading.tsx
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Centers all text blocks. Default is false. */
  centered?: boolean;
  /** Controls layout sizing steps. Default is 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Renders a minimal primary brand colored underline block. */
  withAccent?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  size = 'md',
  withAccent = false,
  className = ""
}: SectionHeadingProps) => {

  const titleSizes = {
    sm: "text-2xl font-bold tracking-tight sm:text-3xl",
    md: "text-3xl font-bold tracking-tight sm:text-4xl",
    lg: "text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
  };

  const subtitleSizes = {
    sm: "mt-2.5 text-sm sm:text-base text-slate-500",
    md: "mt-4 text-base sm:text-lg text-slate-600 max-w-2xl",
    lg: "mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl"
  };

  return (
    <div 
      className={`
        mb-12 flex flex-col
        ${centered ? 'text-center items-center' : 'text-left items-start'}
        ${className}
      `.trim()}
    >
      {/* Title Text */}
      <h2 className={`text-slate-900 leading-tight ${titleSizes[size]}`}>
        {title}
      </h2>

      {/* Decorative Accent Line */}
      {withAccent && (
        <div className="w-12 h-1 bg-[#FF6B35] rounded-full mt-3.5" />
      )}

      {/* Subtitle Text */}
      {subtitle && (
        <p className={`leading-relaxed ${subtitleSizes[size]} ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;