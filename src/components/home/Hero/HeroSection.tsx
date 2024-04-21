import Image from 'next/image';
import Button from '@/src/components/ui/Button';
import walterWolfLogo from '@/public/vectors/walter-wolf-logo.svg';
import signWWR from '@/public/images/wwr-logo.png';
import markLogo from '@/public/images/ivanov-font.png';
import HeroSectionVideo from './HeroSectionVideo';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="md:h-4/5 min-h-[600px] h-full w-full relative overflow-hidden"
    >
      <HeroSectionVideo />
      <Content />
      <div className="triangle-bottom -bottom-[1px] z-30"></div>
    </section>
  );
};

const Content = () => {
  return (
    <div className="container pt-28 pb-12 h-full w-full flex justify-center items-center relative z-20">
      <div className="text-center text-white">
        <TeamLogo />
        <Logo />
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
    <div className="w-fit px-12 h-max mx-auto flex flex-col gap-2 items-center justify-center mb-4">
      <Image
        src={signWWR}
        alt="Walter Wolf Racing"
        className="w-max h-20"
        priority
      />
      <Image
        src={walterWolfLogo}
        alt="Walter Wolf Racing"
        className="w-max h-8"
        priority
      />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="w-fit px-12 md:h-20 h-16  mx-auto flex items-center justify-center">
      <Image
        src={markLogo}
        alt="Mark Ivanov"
        className="w-full md:h-20 h-16 min-w-max"
        priority
      />
    </div>
  );
};

export default HeroSection;