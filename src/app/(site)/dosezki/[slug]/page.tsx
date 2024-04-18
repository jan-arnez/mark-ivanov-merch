import { PortableText } from '@portabletext/react';
import { getSingleAchievement } from '@/sanity/sanity-utils';
import portableTextComponents from '@/src/utils/portableText';
import SocialMediaBar from '@/src/components/ui/SocialMediaBar';

const Dosezki = async ({ params }: { params: { slug: string } }) => {
  const achievement = await getSingleAchievement(params.slug);
  return (
    <div className="pt-20 min-h-screen">
      {achievement && (
        <div className="container max-w-[960px] py-8 portable-text">
          <PortableText
            value={achievement.body}
            components={portableTextComponents}
          />
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <SocialMediaBar />
            <div className="font-medium">Sledi mi na družabnih omrežjih</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dosezki;
