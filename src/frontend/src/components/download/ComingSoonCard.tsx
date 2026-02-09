import { NeonCard } from '../site/NeonCard';
import { Bell } from 'lucide-react';
import { NeonButton } from '../site/NeonButton';

export function ComingSoonCard() {
  return (
    <NeonCard className="p-12 text-center" hover={false}>
      <div className="flex justify-center mb-6">
        <img
          src="/assets/generated/android-neon-icon.dim_512x512.png"
          alt="Android"
          className="h-24 w-24"
        />
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gradient">
        Coming Soon on Play Store
      </h2>
      <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        Axses is currently in development. Sign up to be notified when the game launches
        on the Google Play Store.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NeonButton size="lg" className="gap-2">
          <Bell className="h-5 w-5" />
          Notify Me
        </NeonButton>
      </div>
      <div className="mt-8 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Expected Release: <span className="text-foreground font-semibold">2026</span>
        </p>
      </div>
    </NeonCard>
  );
}
