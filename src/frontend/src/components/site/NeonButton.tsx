import { Button } from '../ui/button';
import { type ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button>;

export function NeonButton({ className = '', ...props }: ButtonProps) {
  return (
    <Button
      className={`neon-button ${className}`}
      {...props}
    />
  );
}
