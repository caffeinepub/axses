import { SiteLayout } from '../components/site/SiteLayout';
import { FeatureCards } from '../components/features/FeatureCards';

export function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Features
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Everything you need for an immersive mobile open-world experience
          </p>
          <FeatureCards />
        </div>
      </section>
    </SiteLayout>
  );
}
