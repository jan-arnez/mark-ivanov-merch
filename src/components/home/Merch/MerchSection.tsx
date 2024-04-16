import Heading from '@/src/components/ui/Heading';

const MerchSection = () => {
  return (
    <section
      id="merch"
      className="w-full min-h-max py-24 bg-brand-red flex xl:flex-row flex-col items-center gap-8 relative"
    >
      <div className="triangle-top -top-[1px]"></div>
      <Heading title="Merch" number="02" color="light" />
      <div className="container flex items-center justify-center text-white min-h-[400px]">
        Dodano kasneje...
      </div>
      <div className="triangle-bottom -bottom-[1px]"></div>
    </section>
  );
};

export default MerchSection;
