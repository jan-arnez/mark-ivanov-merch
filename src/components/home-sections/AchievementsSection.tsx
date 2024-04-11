'use client';
import Achievement from '@/types/Achievement';
import { getAchievements } from '../../../sanity/sanity-utils';
import Heading from '../global/Heading';
import { useEffect, useState } from 'react';
import AchievementsCard from './AchievementCard';

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState<Achievement[] | []>([]);

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
      id="dosezki"
      className="lg:h-full lg:min-h-screen w-full relative py-8 flex xl:flex-row flex-col items-center gap-9"
    >
      <Heading title="Dosežki" number="03" />

      <div className="h-full container xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col flex flex-col gap-4 w-full pb-8">
        {achievements.map((achievement) => (
          <AchievementsCard
            key={achievement.slug}
            year={achievement.year}
            slug={achievement.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
