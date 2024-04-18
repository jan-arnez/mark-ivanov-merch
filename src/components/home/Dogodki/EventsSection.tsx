'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/src/components/ui/Button';
import SectionHeading from '@/src/components/ui/SectionHeading';
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
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <section
      id="dogodki"
      className="h-max min-h-screen w-full relative py-24 flex xl:flex-row flex-col items-center justify-center space-y-8"
    >
      <SectionHeading title="Dogodki" number="01" />
      <div className="container flex flex-col items-center gap-8 w-full">
        {loading ? (
          <Loader />
        ) : events.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 w-full xl:grid-cols-2 xl:grid-rows-[auto_auto]">
            {events.slice(0, 4).map((event) => (
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
          <div className="flex items-center justify-center w-full h-full xl:min-h-[600px] min-h-[300px] border">
            Trenutno še ni objavljenih dogodkov.
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
