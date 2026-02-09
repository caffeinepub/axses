import { SiDiscord, SiYoutube, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/assets/generated/axses-logo.dim_1024x512.png"
              alt="Axses"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              A Next-Gen Mobile Open World Experience
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-neon-primary">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-primary transition-colors"
                aria-label="Discord"
              >
                <SiDiscord className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-primary transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-neon-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-sm text-muted-foreground">
              © 2026. Built with <Heart className="inline h-4 w-4 text-neon-accent fill-neon-accent" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
