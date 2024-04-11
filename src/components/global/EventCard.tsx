import { formatDate } from '@/utils/formateDate';
import Image from 'next/image';
import Event from '@/types/Event';
import { urlForImage } from '../../../sanity/lib/image';

type EventProps = {
  className?: string;
  event: Event;
};

const EventCard = ({ className, event }: EventProps) => {
  const date = new Date(event._createdAt);
  return (
    <div
      id="event-card"
      className={`w-full h-full relative overflow-hidden ${className}`}
    >
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent z-10"></div>
      <Image
        src={urlForImage(event.mainImage.asset)}
        alt={event.mainImage.alt}
        height={400}
        width={800}
        className="absolute object-cover h-full w-full z-0"
      />
      <div className="w-full h-full p-6 min-h-[300px] flex items-end relative z-20">
        <div className="space-y-2 w-full">
          <div className="text-lg text-white">{formatDate(date)}</div>
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
