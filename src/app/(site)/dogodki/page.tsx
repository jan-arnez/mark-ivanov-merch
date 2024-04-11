import Event from '@/types/Event';
import Link from 'next/link';
import { getEvents } from '../../../../sanity/sanity-utils';
import EventCard from '@/components/global/EventCard';

type Events = Event[] | [];

const Dogodki = async () => {
  const events: Events = await getEvents();

  return (
    <div className="container pt-28 min-h-screen space-y-8 pb-8">
      <div className="text-center text-5xl text-stone-900 font-fira-sans font-bold">
        Dogodki
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4">
        {events &&
          events.map((event) => (
            <Link
              href={`/dogodki/${event.slug}` || '/dogodki'}
              passHref
              key={event.slug}
            >
              <EventCard event={event} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Dogodki;
