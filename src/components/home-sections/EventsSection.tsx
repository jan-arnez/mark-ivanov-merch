'use client';
import Event from '@/types/Event';
import Button from '../global/Button';
import Heading from '../global/Heading';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import EventCard from '../global/EventCard';

interface EventsSectionProps {
  eventsPromise: Promise<Event[]>;
}

const EventsSection = ({ eventsPromise }: EventsSectionProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventsPromise.then(setEvents);
  }, [eventsPromise]);

  return (
    <div
      id="dogodki"
      className="h-max min-h-screen w-full relative py-8 flex xl:flex-row flex-col items-center gap-8"
    >
      <Heading title="Dogodki" number="01" />
      <div className="container h-full">
        <div className="xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col flex flex-col gap-4  w-full pb-8">
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
        <Button href="/dogodki" variant="brand-red" className="mx-auto">
          Oglej si vse dogodke
        </Button>
      </div>
    </div>
  );
};

export default EventsSection;
