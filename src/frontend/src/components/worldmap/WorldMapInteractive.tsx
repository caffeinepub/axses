import { useState } from 'react';
import { NeonCard } from '../site/NeonCard';
import { Building2, Home, Waves, Mountain, Train, Route } from 'lucide-react';

const worldLocations = [
  {
    icon: Building2,
    title: 'City',
    description: 'A bustling small city featuring 10-15 buildings with 2-3 fully explorable interiors. The heart of commerce and activity in the Axses world.',
    color: 'text-neon-primary',
  },
  {
    icon: Home,
    title: 'Town',
    description: 'A charming town with 5-8 buildings offering a quieter atmosphere. Perfect for resupply and discovering hidden secrets.',
    color: 'text-neon-accent',
  },
  {
    icon: Route,
    title: 'Highways',
    description: 'Well-maintained highway systems connecting all major locations. Experience high-speed driving across the open world.',
    color: 'text-neon-secondary',
  },
  {
    icon: Waves,
    title: 'River',
    description: 'A main river system flowing through the landscape, creating natural boundaries and scenic routes for exploration.',
    color: 'text-neon-primary',
  },
  {
    icon: Mountain,
    title: 'Mountains',
    description: 'Low-poly mountain ranges providing stunning vistas and strategic vantage points. Navigate challenging terrain for rewards.',
    color: 'text-neon-accent',
  },
  {
    icon: Train,
    title: 'Train Line',
    description: 'A visual train line adding life to the world. Watch trains pass by as you explore the surrounding areas.',
    color: 'text-neon-secondary',
  },
];

export function WorldMapInteractive() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {worldLocations.map((location, index) => {
        const Icon = location.icon;
        const isActive = activeIndex === index;

        return (
          <NeonCard
            key={index}
            className={`p-6 cursor-pointer transition-all duration-300 ${
              isActive ? 'ring-2 ring-neon-primary shadow-neon-lg' : ''
            }`}
            onClick={() => setActiveIndex(isActive ? null : index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Icon className={`h-12 w-12 mb-4 ${location.color}`} />
            <h3 className="text-xl font-bold mb-3">{location.title}</h3>
            <p
              className={`text-muted-foreground leading-relaxed transition-all duration-300 ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}
            >
              {location.description}
            </p>
          </NeonCard>
        );
      })}
    </div>
  );
}
