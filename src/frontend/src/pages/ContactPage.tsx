import { SiteLayout } from '../components/site/SiteLayout';
import { ContactForm } from '../components/contact/ContactForm';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import { SiDiscord, SiYoutube, SiX } from 'react-icons/si';

export function ContactPage() {
  const reveal = useRevealOnScroll();

  return (
    <SiteLayout>
      <section className="py-20 container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient text-center">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Have questions or feedback? We'd love to hear from you
          </p>

          <div
            ref={reveal.ref}
            className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-4 text-neon-primary">Connect With Us</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-neon-primary transition-colors"
                  >
                    <SiDiscord className="h-6 w-6" />
                    <span>Discord</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-neon-primary transition-colors"
                  >
                    <SiYoutube className="h-6 w-6" />
                    <span>YouTube</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-muted-foreground hover:text-neon-primary transition-colors"
                  >
                    <SiX className="h-6 w-6" />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-neon-accent">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
