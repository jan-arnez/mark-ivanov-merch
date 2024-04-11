import EventsSection from '@/components/home-sections/EventsSection';
import HeroSection from '@/components/home-sections/HeroSection';
import PostsSection from '@/components/home-sections/PostsSection';
import ShopSection from '@/components/home-sections/ShopSection';
import TeamSection from '@/components/home-sections/TeamSection';
import AchievementsSection from '@/components/home-sections/AchievementsSection';
import { getLatestEvents } from '../../../sanity/sanity-utils';

export default async function Home() {
  const events = getLatestEvents();
  return (
    <>
      <HeroSection />
      <EventsSection eventsPromise={events} />
      <ShopSection />
      <AchievementsSection />
      <TeamSection />
      <PostsSection />
    </>
  );
}
