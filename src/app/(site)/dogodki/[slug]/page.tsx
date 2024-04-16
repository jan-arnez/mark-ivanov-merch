import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { formatDate } from '@/src/utils/formateDate';
import portableTextComponents from '@/src/utils/portableText';
import { urlForImage } from '@/sanity/lib/image';
import { getSingleEvent } from '@/sanity/sanity-utils';

const Dogodek = async ({ params }: { params: { slug: string } }) => {
  const event = await getSingleEvent(params.slug);
  const createdAt = new Date(event._createdAt);

  return (
    <div className="pt-20 min-h-screen">
      <div className="h-[400px] w-full overflow-hidden z-20 relative">
        <div className="absolute w-full h-full z-20">
          <div className="container w-full h-full flex flex-col justify-center gap-4 items-center relative text-white text-center">
            <div className="font-bold text-6xl font-fira-sans w-full">
              {event.title}
            </div>
            <div className="text-lg font-fira-sans">
              <span className="font-medium"> Objavljeno: </span>
              {formatDate(createdAt)}
            </div>
          </div>
        </div>
        <Image
          src={urlForImage(event.mainImage.asset)}
          alt={event.mainImage.alt}
          width={1920}
          height={600}
          className="absolute w-full h-full object-cover object-center z-0 backdrop-blur-md"
        />
        <div className="absolute w-full h-full bg-gradient-to-t from-stone-950 to-stone-950/20 z-10" />
      </div>
      <div className="container max-w-[960px] py-8 portable-text">
        <PortableText value={event.body} components={portableTextComponents} />
      </div>
    </div>
  );
};

export default Dogodek;
