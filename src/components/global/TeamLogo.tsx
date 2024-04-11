import Image from 'next/image';
import walterWolfLogo from '../../../public/vectors/walter-wolf-logo.svg';

const TeamLogo = () => {
  return (
    <div className="w-fit px-12 h-12 mx-auto shifted flex items-center justify-center">
      <Image
        src={walterWolfLogo}
        alt="Walter Wolf Racing"
        className="w-max h-8"
      />
    </div>
  );
};

export default TeamLogo;
