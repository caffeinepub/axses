import { type ReactNode } from 'react';

interface SiteLayoutProps {
  children: ReactNode;
  className?: string;
}

export function SiteLayout({ children, className = '' }: SiteLayoutProps) {
  return (
    <div className={`site-layout ${className}`}>
      {children}
    </div>
  );
}
