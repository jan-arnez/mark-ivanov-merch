import Image from 'next/image';
import Link from 'next/link';
import signature from '@/public/vectors/mark-signature.svg';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Image
        src={signature}
        alt="Mark Ivanov Logo"
        height={60}
        width={155}
        priority
      />
    </Link>
  );
};

export default Logo;
