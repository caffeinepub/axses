import { SiteLayout } from '../components/site/SiteLayout';
import { GalleryPlaceholders } from '../components/gallery/GalleryPlaceholders';

export function GalleryPage() {
  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Get a glimpse of the Axses world
          </p>
          <GalleryPlaceholders />
        </div>
      </section>
    </SiteLayout>
  );
}
