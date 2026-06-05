// components/shared/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) => {

  // Style presets
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35]/50 select-none cursor-pointer active:scale-[0.98] disabled:scale-100 disabled:cursor-not-allowed disabled:pointer-events-none";
  
  const variants = {
    // 1. High contrast solid primary brand action item
    primary: "bg-[#FF6B35] text-white hover:bg-[#E85A2A] shadow-sm disabled:bg-slate-100 disabled:text-slate-400",
    
    // 2. Refined modern secondary item to match documentation interfaces
    secondary: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm disabled:bg-slate-50 disabled:text-slate-400 disabled:border-slate-100",
    
    // 3. Low-impact layout interactive block for menu configurations
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 shadow-none disabled:text-slate-400",
    
    // 4. Premium cinematic multi-stop linear gradient matching trends
    gradient: "bg-gradient-to-r from-[#FF6B35] via-[#FF7E4E] to-[#E85A2A] text-white shadow-md shadow-orange-500/10 hover:opacity-95 hover:shadow-lg hover:shadow-orange-500/15 disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 disabled:shadow-none"
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5 h-8",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2 h-10",
    lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5 h-12"
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `.trim()}
      {...props}
    >
      {/* Loading Spinner Core Component Layer */}
      {isLoading && (
        <svg className="animate-spin h-4 w-4 text-current shrink-0" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}

      {/* Render Icons and Children Dynamically based on Processing Flag */}
      {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span className="truncate leading-none">{children}</span>
      {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
};

export default Button;