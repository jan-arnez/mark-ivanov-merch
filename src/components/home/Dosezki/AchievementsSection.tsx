'use client';
import { useEffect, useState } from 'react';
import AchievementsCard from './AchievementCard';
import Heading from '@/src/components/ui/Heading';
import { getAchievements } from '@/sanity/sanity-utils';
import type Achievement from '@/src/types/Achievement';

const Loader = () => (
  <div className="h-full container xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col flex flex-col gap-4 w-full pb-8 animate-pulse">
    <div className="min-h-[350px] w-full h-full bg-gray-300" />
    <div className="min-h-[350px] w-full h-full bg-gray-300" />
    <div className="min-h-[350px] w-full h-full bg-gray-300" />
    <div className="min-h-[350px] w-full h-full bg-gray-300" />
  </div>
);

const AchievementsSection = () => {
  const [achievements, setAchievements] = useState<Achievement[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const fetchedAchievements = await getAchievements();
        setAchievements(fetchedAchievements);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div
      id="dosezki"
      className="h-max w-full relative py-24 flex xl:flex-row flex-col items-center space-y-8"
    >
      <Heading title="Dosežki" number="03" />

      {loading ? (
        <Loader />
      ) : (
        <div className="h-full container xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col flex flex-col gap-4 w-full pb-8">
          {achievements.map((achievement) => (
            <AchievementsCard
              key={achievement.slug}
              year={achievement.year}
              slug={achievement.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AchievementsSection;
