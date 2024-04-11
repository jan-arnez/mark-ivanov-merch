import Heading from '../global/Heading';

const ShopSection = () => {
  return (
    <div className="w-full h-3/4 min-h-[600px] py-12 bg-stone-950 relative flex lg:flex-row flex-col items-center gap-8">
      <div className="triangle-top -top-[1px]"></div>
      <Heading title="Merch" number="02" color="light" />
      <div className="container">
        <div className="grid grid-cols-4 gap-4">
          <div className="w-full h-full bg-white aspect-4/5"></div>
          <div className="w-full h-full bg-white aspect-4/5"></div>
          <div className="w-full h-full bg-white aspect-4/5"></div>
          <div className="w-full h-full bg-white aspect-4/5"></div>
        </div>
      </div>
      <div className="triangle-bottom -bottom-[1px]"></div>
    </div>
  );
};

export default ShopSection;
