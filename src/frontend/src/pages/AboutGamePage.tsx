import { SiteLayout } from '../components/site/SiteLayout';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { NeonCard } from '../components/site/NeonCard';
import { MapPin, Building2, Mountain, Waves, Smartphone, Gauge } from 'lucide-react';

export function AboutGamePage() {
  const section1 = useRevealOnScroll();
  const section2 = useRevealOnScroll();

  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            About Axses
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            A Free Fire style open-world mobile game designed for the next generation of mobile gaming
          </p>

          <div ref={section1.ref} className={`prose prose-invert max-w-none mb-16 transition-all duration-1000 ${
            section1.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg leading-relaxed">
              Axses is an ambitious mobile open-world game that brings the excitement of console gaming
              to your Android device. Built with cutting-edge optimization techniques, Axses delivers
              a massive, immersive world that runs smoothly on modern mobile hardware.
            </p>
            <p className="text-lg leading-relaxed">
              Set in a sprawling 4km x 4km world, players will explore diverse environments ranging from
              bustling cities to serene natural landscapes. Every corner of the map is crafted to deliver
              an authentic open-world experience while maintaining the performance standards mobile gamers expect.
            </p>
          </div>

          <div ref={section2.ref} className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
            section2.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <NeonCard className="p-6">
              <MapPin className="h-10 w-10 mb-4 text-neon-primary" />
              <h3 className="text-xl font-bold mb-2">4km x 4km Map</h3>
              <p className="text-muted-foreground">
                A massive semi-open world with intelligent chunk streaming that loads only what you need,
                keeping performance smooth and storage efficient.
              </p>
            </NeonCard>

            <NeonCard className="p-6">
              <Building2 className="h-10 w-10 mb-4 text-neon-accent" />
              <h3 className="text-xl font-bold mb-2">City & Town</h3>
              <p className="text-muted-foreground">
                Explore a detailed small city with 10-15 buildings and a charming town with 5-8 structures,
                connected by highways and filled with life.
              </p>
            </NeonCard>

            <NeonCard className="p-6">
              <Waves className="h-10 w-10 mb-4 text-neon-secondary" />
              <h3 className="text-xl font-bold mb-2">Rivers & Mountains</h3>
              <p className="text-muted-foreground">
                Navigate through natural landscapes featuring a main river system and low-poly mountains
                that create a stunning backdrop for your adventures.
              </p>
            </NeonCard>

            <NeonCard className="p-6">
              <Mountain className="h-10 w-10 mb-4 text-neon-primary" />
              <h3 className="text-xl font-bold mb-2">Diverse Environments</h3>
              <p className="text-muted-foreground">
                From sparse forests to open highways, every environment is optimized for mobile while
                maintaining visual appeal and gameplay variety.
              </p>
            </NeonCard>

            <NeonCard className="p-6">
              <Smartphone className="h-10 w-10 mb-4 text-neon-accent" />
              <h3 className="text-xl font-bold mb-2">Optimized for 8GB RAM</h3>
              <p className="text-muted-foreground">
                Specifically designed to run smoothly on modern Android devices with 8GB RAM, with
                playable performance on 6GB RAM devices.
              </p>
            </NeonCard>

            <NeonCard className="p-6">
              <Gauge className="h-10 w-10 mb-4 text-neon-secondary" />
              <h3 className="text-xl font-bold mb-2">Performance First</h3>
              <p className="text-muted-foreground">
                Targeting 30-45 FPS with baked lighting, texture atlases, and smart asset management
                to ensure a smooth gaming experience.
              </p>
            </NeonCard>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
