import * as React from 'react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { VibeCard } from './vibe-card';
import type { Vibe } from '../types';

interface VibeCategoryRowProps {
  title: string;
  vibes: Vibe[];
}

export function VibeCategoryRow({ title, vibes }: VibeCategoryRowProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (vibes.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-medium lowercase">{title}</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scroll('left')}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">scroll left</span>
          </Button>
          <Button variant="outline" size="icon" onClick={() => scroll('right')}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">scroll right</span>
          </Button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {vibes.map((vibe) => (
          <div
            key={vibe.id}
            className="min-w-[250px] snap-start md:min-w-[280px] lg:min-w-[300px]"
          >
            <VibeCard vibe={vibe} />
          </div>
        ))}
      </div>
    </div>
  );
}
