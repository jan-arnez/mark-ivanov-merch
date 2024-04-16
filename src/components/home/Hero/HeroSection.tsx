import Image from 'next/image';
import Button from '@/src/components/ui/Button';
import walterWolfLogo from '@/public/vectors/walter-wolf-logo.svg';
import HeroSectionVideo from './HeroSectionVideo';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="md:h-4/5 min-h-[600px] h-full w-full relative"
    >
      <HeroSectionVideo />
      <Content />
      <div className="triangle-bottom -bottom-[1px] z-30"></div>
    </section>
  );
};

export default HeroSection;

const Content = () => {
  return (
    <div className="container pt-28 pb-12 h-full w-full flex justify-center items-center relative z-20">
      <div className="text-center text-white">
        <TeamLogo />
        <div className="sm:text-8xl text-7xl font-black font-fira-sans uppercase">
          Mark Ivanov
        </div>
        <div className="flex flex-wrap gap-2 items-center justify-center py-6">
          <Button href="/trgovina" variant="brand-red">
            Trgovina
          </Button>
          <Button href="#dogodki" variant="white">
            Izvedi več
          </Button>
        </div>
      </div>
    </div>
  );
};

const TeamLogo = () => {
  return (
    <div className="w-fit px-12 h-12 mx-auto shifted flex items-center justify-center">
      <Image
        src={walterWolfLogo}
        alt="Walter Wolf Racing"
        className="w-max h-8"
        priority
      />
    </div>
  );
};
