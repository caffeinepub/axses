import { SiteLayout } from '../components/site/SiteLayout';
import { WorldMapInteractive } from '../components/worldmap/WorldMapInteractive';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export function WorldMapPage() {
  const reveal = useRevealOnScroll();

  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            World Map
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Discover the diverse locations and environments of Axses
          </p>

          <div
            ref={reveal.ref}
            className={`relative mb-12 transition-all duration-1000 ${
              reveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative rounded-lg overflow-hidden border border-neon-primary/20 shadow-neon">
              <img
                src="/assets/generated/axses-world-map.dim_1600x900.png"
                alt="Axses World Map"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>

          <WorldMapInteractive />
        </div>
      </section>
    </SiteLayout>
  );
}
