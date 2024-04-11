import Heading from '../global/Heading';

const TeamSection = () => {
  return (
    <div className="w-full h-3/4 min-h-[600px] py-12 bg-stone-950 relative flex lg:flex-row flex-col items-center gap-8">
      <div className="triangle-top -top-[1px]"></div>
      <Heading title="Ekipa" number="04" color="light" />
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-full aspect-square border-2 border-white"></div>
          <div className="w-full h-full aspect-square border-2 border-white"></div>
          <div className="w-full h-full aspect-square border-2 border-white"></div>
          <div className="w-full h-full aspect-square border-2 border-white"></div>
        </div>
      </div>
      <div className="triangle-bottom -bottom-[1px]"></div>
    </div>
  );
};

export default TeamSection;
