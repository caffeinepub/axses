import { HeroSection } from '../components/home/HeroSection';
import { SiteLayout } from '../components/site/SiteLayout';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { NeonCard } from '../components/site/NeonCard';
import { Map, Users, Zap } from 'lucide-react';

export function HomePage() {
  const section1 = useRevealOnScroll();
  const section2 = useRevealOnScroll();

  return (
    <SiteLayout>
      <HeroSection />

      <section ref={section1.ref} className="py-20 container">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${
            section1.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <NeonCard className="p-6 text-center">
            <Map className="h-12 w-12 mx-auto mb-4 text-neon-primary" />
            <h3 className="text-xl font-bold mb-2">Massive World</h3>
            <p className="text-muted-foreground">
              Explore a 4km x 4km open world with cities, towns, and natural landscapes
            </p>
          </NeonCard>

          <NeonCard className="p-6 text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-neon-accent" />
            <h3 className="text-xl font-bold mb-2">Living World</h3>
            <p className="text-muted-foreground">
              Experience dynamic NPC traffic, pedestrians, and a world that feels alive
            </p>
          </NeonCard>

          <NeonCard className="p-6 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-neon-secondary" />
            <h3 className="text-xl font-bold mb-2">Optimized</h3>
            <p className="text-muted-foreground">
              Built for 8GB RAM phones with smooth performance and stylized graphics
            </p>
          </NeonCard>
        </div>
      </section>

      <section ref={section2.ref} className="py-20 bg-accent/5">
        <div className="container">
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
              section2.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              The Future of Mobile Gaming
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Axses brings console-quality open-world gameplay to your mobile device.
              With cutting-edge optimization and stunning stylized graphics, experience
              a world like never before.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
