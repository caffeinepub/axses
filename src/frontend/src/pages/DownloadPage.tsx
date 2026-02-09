import { SiteLayout } from '../components/site/SiteLayout';
import { ComingSoonCard } from '../components/download/ComingSoonCard';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export function DownloadPage() {
  const reveal = useRevealOnScroll();

  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Download
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Get ready to experience Axses on your Android device
          </p>

          <div
            ref={reveal.ref}
            className={`transition-all duration-1000 ${
              reveal.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <ComingSoonCard />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-neon-primary">Minimum</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Android 8.0 or higher</li>
                  <li>• 6GB RAM</li>
                  <li>• 3GB free storage</li>
                  <li>• OpenGL ES 3.0 support</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-neon-accent">Recommended</h3>
                <ul className="text-sm text-muted-foreground space-y-1 text-left">
                  <li>• Android 10.0 or higher</li>
                  <li>• 8GB RAM</li>
                  <li>• 5GB free storage</li>
                  <li>• Snapdragon 730 or equivalent</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
