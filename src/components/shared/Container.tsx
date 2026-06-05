// shared/Container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Set the max-width of the container. Default is 'xl' (7xl) */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Remove horizontal padding. Default is false. */
  clean?: boolean;
}

const sizes = {
  sm: 'max-w-3xl',    // For blog posts or narrow forms
  md: 'max-w-5xl',    // For feature sections
  lg: 'max-w-6xl',    // For grids
  xl: 'max-w-7xl',    // Standard layout (LaunchLens Default)
  full: 'max-w-full', // Edge-to-edge with padding
};

export const Container = ({ 
  children, 
  className = "", 
  size = 'xl', 
  clean = false 
}: ContainerProps) => {
  return (
    <div
      className={`
        mx-auto w-full
        ${sizes[size]}
        ${clean ? 'px-0' : 'px-4 sm:px-6 lg:px-8'}
        ${className}
      `.trim()}
    >
      {children}
    </div>
  );
};

export default Container;