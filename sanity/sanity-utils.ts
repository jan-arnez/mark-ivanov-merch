import Event from '@/types/Event';
import { groq } from 'next-sanity';
import { client } from './lib/client';
import Achievement from '@/types/Achievement';

export async function getEvents(): Promise<Event[]> {
  return client.fetch(
    groq`*[_type == "event"] | order(_createdAt desc){
        title,
        _createdAt,
        "slug": slug.current,
        mainImage,
        body
    }`
  );
}

export async function getLatestEvents(): Promise<Event[]> {
  return client.fetch(
    groq`*[_type == "event"] | order(_createdAt desc)[0...4] {
          title,
          _createdAt,
          "slug": slug.current,
          mainImage,
          body
      }`
  );
}

export async function getSingleEvent(slug: string): Promise<Event> {
  const query = `*[_type == "event" && slug.current == $slug]{
    title,
    _createdAt,
    "slug": slug.current,
    mainImage,
    body
  }`;
  const params = { slug };
  const result = await client.fetch(query, params);
  return result[0];
}

export async function getAchievements(): Promise<Achievement[]> {
  return client.fetch(
    groq`*[_type == "achievements"] | order(year asc) [0...4] {
          title,
          year,
          "slug": slug.current,
          body
      }`
  );
}

export async function getSingleAchievement(slug: string): Promise<Achievement> {
  const query = `*[_type == "achievements" && slug.current == $slug]{
    title,
    year,
    "slug": slug.current,
    body
    }`;
  const params = { slug };
  const result = await client.fetch(query, params);
  return result[0];
}
