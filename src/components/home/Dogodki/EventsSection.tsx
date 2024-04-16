'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/src/components/ui/Button';
import Heading from '@/src/components/ui/Heading';
import EventCard from '@/src/components/ui/EventCard';
import { getLatestEvents } from '@/sanity/sanity-utils';
import type Event from '@/src/types/Event';

const Loader = () => (
  <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 xl:grid-rows-[auto_auto] animate-pulse">
    <div className="row-span-2 w-full h-full p-6 min-h-[300px] bg-gray-300" />
    <div className="w-full h-full p-6 min-h-[300px] bg-gray-300" />
    <div className="w-full h-full p-6 min-h-[300px] bg-gray-300" />
  </div>
);

const EventsSection = () => {
  const [events, setEvents] = useState<Event[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getLatestEvents();
        setEvents(fetchedEvents);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section
      id="dogodki"
      className="h-max min-h-screen w-full relative py-8 flex xl:flex-row flex-col items-center justify-center space-y-8"
    >
      <Heading title="Dogodki" number="01" />
      <div className="container flex flex-col items-center gap-8 w-full">
        {loading ? (
          <div className="flex justify-center items-center h-full w-full">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 xl:grid-rows-[auto_auto]">
            {events.length > 0 && (
              <Link
                href={`/dogodki/${events[0].slug}` || '/dogodki'}
                passHref
                key={events[0].slug}
                className="xl:row-span-2"
              >
                <EventCard event={events[0]} />
              </Link>
            )}
            {events.slice(1).map((event) => (
              <Link
                href={`/dogodki/${event.slug}` || '/dogodki'}
                passHref
                key={event.slug}
              >
                <EventCard event={event} />
              </Link>
            ))}
          </div>
        )}
        <Button href="/dogodki" variant="brand-red" className="mx-auto">
          Oglej si vse dogodke
        </Button>
      </div>
    </section>
  );
};

export default EventsSection;
