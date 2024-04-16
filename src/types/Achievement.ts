import { PortableTextBlock } from 'sanity';

type Achievement = {
  title: string;
  year: number;
  slug: string;
  body: PortableTextBlock[];
};

export default Achievement;
