import { PortableText } from '@portabletext/react';
import { getSingleEvent } from '../../../../../sanity/sanity-utils';
import { urlForImage } from '../../../../../sanity/lib/image';
import Image from 'next/image';
import { formatDate } from '@/utils/formateDate';

// Popravi izgled
const Dogodek = async ({ params }: { params: { slug: string } }) => {
  const event = await getSingleEvent(params.slug);
  const createdAt = new Date(event._createdAt);

  return (
    <div className="pt-20 min-h-screen">
      <div className="min-h-[300px] max-h-[500px] w-full overflow-hidden z-20 relative">
        <div className="absolute w-full h-full z-20">
          <div className="container w-full h-full flex items-center relative">
            <div className="font-bold text-6xl font-fira-sans text-white text-center w-full ">
              {event.title}
            </div>
            <div className="absolute bottom-4 right-0 text-lg font-fira-sans text-white text-right">
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
        <div className="absolute w-full h-full bg-stone-950/50 z-10" />
      </div>
      <div className="container max-w-[960px] py-8">
        <PortableText value={event.body} />
      </div>
    </div>
  );
};

export default Dogodek;
