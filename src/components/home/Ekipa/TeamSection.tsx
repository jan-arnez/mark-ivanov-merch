'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Heading from '@/src/components/ui/Heading';
import { getTeam } from '@/sanity/sanity-utils';
import { urlForImage } from '@/sanity/lib/image';
import type Team from '@/src/types/Team';

const Loader = () => {
  return (
    <>
      <div className="w-full h-full max-w-[400px] md:max-w-none aspect-square bg-stone-300 animate-pulse"></div>
      <div className="w-full h-full max-w-[400px] md:max-w-none aspect-square bg-stone-300 animate-pulse"></div>
      <div className="w-full h-full max-w-[400px] md:max-w-none aspect-square bg-stone-300 animate-pulse"></div>
      <div className="w-full h-full max-w-[400px] md:max-w-none aspect-square bg-stone-300 animate-pulse"></div>
    </>
  );
};

const TeamSection = () => {
  const [team, setTeam] = useState<Team[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const fetchedTeam = await getTeam();
        setTeam(fetchedTeam);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch team:', error);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div
      id="ekipa"
      className="w-full min-h-max py-24 bg-brand-blue flex xl:flex-row flex-col items-center gap-8 relative"
    >
      <div className="triangle-top -top-[1px]"></div>
      <Heading title="Ekipa" number="04" color="light" />
      <div className="container">
        <div className="sm:grid lg:grid-cols-4 sm:grid-cols-2 flex flex-wrap gap-4 items-center justify-center">
          {loading ? (
            <Loader />
          ) : (
            team.map((person: Team) => (
              <TeamCard
                key={person.name}
                image={person.image}
                name={person.name}
                role={person.role}
              />
            ))
          )}
        </div>
      </div>
      <div className="triangle-bottom -bottom-[1px]"></div>
    </div>
  );
};

export default TeamSection;

const TeamCard = ({ image, role, name = 'Ime Priimek' }: Team) => {
  return (
    <div className="w-full h-full max-w-[400px] md:max-w-none aspect-square relative">
      <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
        <div className="pb-0 text-white font-medium text-2xl">{name}</div>
        <p>{role}</p>
      </div>
      <Image
        src={urlForImage(image.asset)}
        alt={image.alt}
        width={400}
        height={400}
        loading="lazy"
        quality={70}
        className="absolute w-full h-full object-cover object-center z-0"
      />
      <div className="absolute w-full h-full bg-gradient-to-t from-brand-red via-transparent to-transparent z-10" />
    </div>
  );
};
