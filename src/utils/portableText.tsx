import imageUrlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

type ImageProps = {
  value: {
    alt?: string;
    asset: {
      _ref: string;
    };
  };
};

const builder = imageUrlBuilder(client);

function urlFor(sourceRef: string) {
  return builder.image(sourceRef).url();
}

const ImageComponent = ({ value }: ImageProps) => {
  const { width, height } = getImageDimensions(value.asset);
  const src = urlFor(value.asset._ref);
  const alt = value.alt;
  return (
    <Image
      src={src}
      alt={alt || 'Default alt text'}
      height={height}
      width={width}
      loading="lazy"
      className="w-full max-w-screen overflow-hidden"
    />
  );
};

const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};

export default portableTextComponents;
