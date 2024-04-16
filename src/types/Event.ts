import { PortableTextBlock } from 'sanity';

type Event = {
  title: string;
  slug: string;
  _createdAt: string;
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  body: PortableTextBlock[];
};

export default Event;
