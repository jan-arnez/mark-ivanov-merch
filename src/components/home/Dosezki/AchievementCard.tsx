import Button from '@/src/components/ui/Button';
import type Achievement from '@/src/types/Achievement';

const AchievementsCard: React.FC<Pick<Achievement, 'year' | 'slug'>> = ({
  year,
  slug,
}) => {
  return (
    <section
      id="dosezki"
      className="min-h-[350px] w-full h-full bg-brand-blue relative"
    >
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
    </section>
  );
};

export default AchievementsCard;
