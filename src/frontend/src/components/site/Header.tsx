import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { routes } from '../../router/routes';
import { useHashRouter } from '../../router/useHashRouter';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';

export function Header() {
  const { currentRoute, navigate } = useHashRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a
          href="#/"
          className="flex items-center space-x-3"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
        >
          <img
            src="/assets/generated/axses-logo.dim_1024x512.png"
            alt="Axses"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <a
              key={route.path}
              href={`#${route.path}`}
              onClick={(e) => {
                e.preventDefault();
                navigate(route.path);
              }}
              className={`text-sm font-medium transition-colors hover:text-neon-primary ${
                currentRoute === route.path
                  ? 'text-neon-primary'
                  : 'text-foreground/80'
              }`}
            >
              {route.label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {routes.map((route) => (
                <SheetClose asChild key={route.path}>
                  <a
                    href={`#${route.path}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(route.path);
                      setIsOpen(false);
                    }}
                    className={`text-lg font-medium transition-colors hover:text-neon-primary ${
                      currentRoute === route.path
                        ? 'text-neon-primary'
                        : 'text-foreground/80'
                    }`}
                  >
                    {route.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
