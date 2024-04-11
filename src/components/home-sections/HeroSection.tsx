import Button from '../global/Button';
import TeamLogo from '../global/TeamLogo';

const HeroSection = () => {
  return (
    <div className="md:h-4/5 min-h-[600px] h-full w-full relative">
      <div className="absolute w-full h-full bg-stone-950/80 z-10"></div>
      <Video />
      <Content />
      <div className="triangle-bottom -bottom-[1px] z-30"></div>
    </div>
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

const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute object-cover h-full w-full"
    >
      <source src="/videos/mark-ivanov-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
