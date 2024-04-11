import { PortableText } from '@portabletext/react';
import { getSingleAchievement } from '../../../../../sanity/sanity-utils';

const Dosezki = async ({ params }: { params: { slug: string } }) => {
  const achievement = await getSingleAchievement(params.slug);
  return (
    <>
      {achievement && (
        <div className="pt-28 container min-h-screen max-w-[960px]">
          <PortableText value={achievement.body} />
        </div>
      )}
    </>
  );
};

export default Dosezki;
