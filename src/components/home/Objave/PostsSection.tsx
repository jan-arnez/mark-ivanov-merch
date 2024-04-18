'use client';
import SectionHeading from '@/src/components/ui/SectionHeading';

const PostsSection = () => {
  return (
    <section
      id="objave"
      className="w-full py-8 h-full min-h-screen flex xl:flex-row flex-col items-center"
    >
      <SectionHeading title="Objave" number="05" />
      <div className="container h-full flex items-center justify-center">
        <div className="text-center">Dodano kasneje...</div>
      </div>
    </section>
  );
};

export default PostsSection;
