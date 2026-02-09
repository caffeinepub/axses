import { useParallax } from '../../hooks/useParallax';
import { NeonButton } from '../site/NeonButton';
import { useHashRouter } from '../../router/useHashRouter';

export function HeroSection() {
  const parallaxOffset = useParallax(0.3);
  const { navigate } = useHashRouter();

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-between overflow-hidden py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: 'url(/assets/generated/axses-hero-cinematic-texture.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/25 to-background/90" />
      </div>

      <div className="container relative z-10 text-center px-4 pt-8 md:pt-16">
        <h1 className="hero-title mb-4 animate-fade-in">
          Axses
        </h1>
        <p className="text-base md:text-lg italic text-red-500 font-semibold mb-6 animate-fade-in-delay-1">
          Night Magic
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
          A Next-Gen Mobile Open World Experience
        </p>
        <NeonButton
          size="lg"
          onClick={() => navigate('/about')}
          className="animate-fade-in-delay-3"
        >
          Join the Journey
        </NeonButton>
      </div>

      <div className="container relative z-10 text-center px-4 pb-8 md:pb-12 animate-fade-in-delay-3">
        <div className="text-sm md:text-base text-muted-foreground space-y-1">
          <p className="font-semibold text-foreground">Developer: Rohan Kadam</p>
          <p>Solo Game Developer</p>
          <p>Studying FY BSc (Game Developer)</p>
          <p className="mt-3 font-medium text-foreground">Release Window: 2027–2028</p>
        </div>
      </div>
    </section>
  );
}
