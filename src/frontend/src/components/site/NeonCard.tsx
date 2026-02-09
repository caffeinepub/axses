import { type ReactNode, type HTMLAttributes } from 'react';

interface NeonCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function NeonCard({ children, className = '', hover = true, ...props }: NeonCardProps) {
  return (
    <div
      className={`neon-card ${hover ? 'neon-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
