import classNames from 'classnames';
import Image from 'next/image';
import { formatDate } from '@/src/utils/formateDate';
import type Event from '@/src/types/Event';
import { urlForImage } from '@/sanity/lib/image';

type EventProps = {
  className?: string;
  event: Event;
};

const EventCard: React.FC<EventProps> = ({ className, event }) => {
  const imageUrl = urlForImage(event.mainImage.asset);
  const imageAlt = event.mainImage.alt;
  const formattedDate = formatDate(new Date(event._createdAt));

  return (
    <div
      className={classNames(
        'w-full h-full relative overflow-hidden event-card',
        className
      )}
    >
      <div className="absolute w-full h-full bg-gradient-to-t from-brand-blue to-transparent overflow-hidden z-10"></div>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 33vw"
        loading="lazy"
        quality={70}
        className="z-0 absolute object-cover object-center"
      />
      <div className="w-full h-full p-6 min-h-[300px] flex items-end relative z-20">
        <div className="space-y-2 w-full">
          <div className="text-lg text-white">{formattedDate}</div>
          <div className="h-[1px] w-full bg-gradient-to-r from-brand-red to-white/0" />
          <div className="font-fira-sans text-2xl font-medium text-white">
            {event.title}
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
