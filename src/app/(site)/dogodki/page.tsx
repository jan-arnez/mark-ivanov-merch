'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EventCard from '@/src/components/ui/EventCard';
import { getEvents } from '@/sanity/sanity-utils';
import type Event from '@/src/types/Event';

type Events = Event[] | [];

const Dogodki = () => {
  const [events, setEvents] = useState<Events>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents: Events = await getEvents();
        setEvents(fetchedEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container pt-28 min-h-screen space-y-8 pb-8">
      <div className="text-center text-5xl text-stone-900 font-fira-sans font-bold">
        Dogodki
      </div>
      {events ? (
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4">
          {events.map((event) => (
            <Link
              href={`/dogodki/${event.slug}` || '/dogodki'}
              passHref
              key={event.slug}
            >
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center w-full">
          Trenutno še ni objavljenih dogodkov.
        </div>
      )}
    </div>
  );
};

export default Dogodki;
