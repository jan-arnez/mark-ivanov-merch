'use client';
import Achievement from '@/types/Achievement';
import AchievementsCard from './AchievementCard';
import { getAchievements } from '../../../sanity/sanity-utils';
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = () => {
  const [achievements, setAchievements] = useState<Achievement[] | []>([]);
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const fetchedAchievements = await getAchievements();
        setAchievements(fetchedAchievements);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div
      className="w-full flex items-center overflow-hidden md:h-full h-full max-h-[400px] min-h-[300px] bg-red-200"
      ref={emblaRef}
    >
      <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col flex flex-col gap-4  w-full pb-8">
        {achievements.map((achievement, index) => (
          <AchievementsCard title={achievement.title} key={index} />
        ))}
      </div>
    </div>
  );
};
