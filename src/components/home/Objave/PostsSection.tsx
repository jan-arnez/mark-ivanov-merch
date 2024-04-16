import Heading from '@/src/components/ui/Heading';

const PostsSection = () => {
  return (
    <section
      id="objave"
      className="w-full py-8 h-full min-h-screen flex xl:flex-row flex-col items-center"
    >
      <Heading title="Objave" number="05" />
      <div className="container flex items-center justify-center min-h-[600px]">
        Dodano kasneje...
      </div>
    </section>
  );
};

export default PostsSection;
