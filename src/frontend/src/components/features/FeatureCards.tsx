import { NeonCard } from '../site/NeonCard';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { Globe, Car, Users, Palette, Download, Zap } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Massive Open World',
    description: 'Explore a vast 4km x 4km semi-open world with cities, towns, highways, and natural landscapes. Every location is crafted for exploration and adventure.',
  },
  {
    icon: Car,
    title: 'Smooth Driving System',
    description: 'Experience realistic vehicle physics with responsive controls. Drive through the city streets or cruise along highways with intuitive mobile controls.',
  },
  {
    icon: Users,
    title: 'NPC Traffic & Pedestrians',
    description: 'Encounter 20-30 dynamic NPCs and up to 15 active vehicles that bring the world to life. Watch as the city breathes with activity around you.',
  },
  {
    icon: Palette,
    title: 'Stylized Graphics',
    description: 'Enjoy beautiful, optimized graphics inspired by Free Fire and PUBG Lite. Baked lighting and texture atlases ensure stunning visuals without compromising performance.',
  },
  {
    icon: Download,
    title: 'In-Game Downloadable World',
    description: 'Start playing quickly with a small initial download, then seamlessly download additional zones as you explore. Built with Unity Addressables for modular content delivery.',
  },
  {
    icon: Zap,
    title: 'Optimized Performance',
    description: 'Engineered for 8GB RAM Android devices with 30-45 FPS target. Smart chunk streaming loads only what you need, keeping your device running smoothly.',
  },
];

export function FeatureCards() {
  const reveal = useRevealOnScroll();

  return (
    <div
      ref={reveal.ref}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
        reveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <NeonCard
            key={index}
            className="p-6 transition-all duration-300"
          >
            <Icon className="h-12 w-12 mb-4 text-neon-primary" />
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </NeonCard>
        );
      })}
    </div>
  );
}
