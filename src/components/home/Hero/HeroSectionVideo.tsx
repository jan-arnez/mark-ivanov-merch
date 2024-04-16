import Image from 'next/image';
import fallbackImage from '@/public/images/mark-ivanov-fallback.png';
import { Suspense } from 'react';

const HeroSectionVideo = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="w-full h-full absolute z-10 bg-brand-blue opacity-90"></div>
      <Suspense
        fallback={
          <Image
            src={fallbackImage}
            alt="Mark Ivanov"
            className="object-cover h-full w-full"
            priority
          />
        }
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="object-cover h-full w-full hidden md:block backdrop-blur-md"
        >
          <source src="/videos/mark-ivanov-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Suspense>
      )
      <div className="h-full w-full md:hidden">
        <Image
          src={fallbackImage}
          alt="Mark Ivanov"
          className="object-cover h-full w-full"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSectionVideo;
