import Image from 'next/image';
import Link from 'next/link';
import signature from '@/public/vectors/mark-signature.svg';

const Signature = ({ className }: { className?: string }) => {
  return (
    <Link href="/" passHref>
      <Image
        src={signature}
        alt="Mark Ivanov Signature"
        height={60}
        width={155}
        className={className}
        priority
      />
    </Link>
  );
};

export default Signature;
