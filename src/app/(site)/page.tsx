import HeroSection from '@/src/components/home/Hero/HeroSection';
import { getLatestEvents } from '../../../sanity/sanity-utils';
import EventsSection from '@/src/components/home/Dogodki/EventsSection';
import MerchSection from '@/src/components/home/Merch/MerchSection';
import AchievementsSection from '@/src/components/home/Dosezki/AchievementsSection';
import PostsSection from '@/src/components/home/Objave/PostsSection';
import TeamSection from '@/src/components/home/Ekipa/TeamSection';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <EventsSection />
      <MerchSection />
      <AchievementsSection />
      <TeamSection />
      <PostsSection />
    </>
  );
}
