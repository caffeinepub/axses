import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { Image, Video } from 'lucide-react';

export function GalleryPlaceholders() {
  const screenshotsReveal = useRevealOnScroll();
  const videosReveal = useRevealOnScroll();

  return (
    <div className="space-y-16">
      <div ref={screenshotsReveal.ref}>
        <h2 className="text-3xl font-bold mb-8 text-center">Screenshots</h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            screenshotsReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={`screenshot-${index}`}
              className="relative aspect-video rounded-lg overflow-hidden border border-neon-primary/20 bg-accent/10 group cursor-pointer hover:border-neon-primary/40 transition-all"
              style={{
                backgroundImage: 'url(/assets/generated/gallery-placeholder.dim_1280x720.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Image className="h-12 w-12 text-neon-primary" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">Screenshot {index}</p>
                <p className="text-xs text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={videosReveal.ref}>
        <h2 className="text-3xl font-bold mb-8 text-center">Videos</h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
            videosReveal.isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          {[1, 2, 3, 4].map((index) => (
            <div
              key={`video-${index}`}
              className="relative aspect-video rounded-lg overflow-hidden border border-neon-accent/20 bg-accent/10 group cursor-pointer hover:border-neon-accent/40 transition-all"
              style={{
                backgroundImage: 'url(/assets/generated/gallery-placeholder.dim_1280x720.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Video className="h-12 w-12 text-neon-accent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-medium">Gameplay Video {index}</p>
                <p className="text-xs text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
