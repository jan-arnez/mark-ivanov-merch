import Achievement from '@/types/Achievement';
import Button from '../global/Button';

const AchievementsCard = ({
  year = new Date().getFullYear(),
  slug,
}: Pick<Achievement, 'year' | 'slug'>) => {
  return (
    <div className="min-h-max w-full h-full bg-stone-950 relative">
      <div className="absolute w-full h-full z-10 flex flex-col items-center justify-center">
        <div className="lg:text-7xl sm:text-5xl text-4xl font-fira-sans font-bold text-white text-center">
          SEZONA
        </div>
        <div className="lg:text-9xl sm:text-8xl text-7xl font-fira-sans font-bold text-brand-gold text-center">
          {year}
        </div>
        <Button href={`/dosezki/${slug}`} variant="white" className="mt-8">
          Oglej si rezultate
        </Button>
      </div>
      <div className="absolute w-full h-full bg-pattern z-0"></div>
    </div>
  );
};

export default AchievementsCard;
