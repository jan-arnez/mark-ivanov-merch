import Link from 'next/link';
import SocialMediaBar from '../ui/SocialMediaBar';
import Logo from './Signature';

const Footer = () => {
  return (
    <div className="bg-brand-blue text-white text-center">
      <div className="container py-8 flex flex-col gap-4 items-center">
        <FooterNav />
        <SocialMediaBar />
      </div>
      <div className="py-4 space-y-2">
        <div>
          &copy;{new Date().getFullYear()} Mark Ivanov. Vse pravice pridržane
        </div>
        <div className="text-sm text-stone-400">
          Website created by{' '}
          <a
            href="https://www.linkedin.com/in/jan-arnez/"
            className="underline"
          >
            Jan Arnež
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterNav = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Logo className="invert pb-4" />

      <ul className="text-white mx-auto w-full hidden sm:flex items-center justify-center gap-4 py-4 ">
        <li>
          <Link href="/" className="hover:underline">
            Domov
          </Link>
        </li>
        <li>
          <Link href="/dogodki" className="hover:underline">
            Dogodki
          </Link>
        </li>
        <li>
          <Link href="/trgovina" className="hover:underline">
            Trgovina
          </Link>
        </li>
        <li>
          <Link href="/za-sponzorje" className="hover:underline">
            Za sponzorje
          </Link>
        </li>
        <li>
          <Link href="/kontakt" className="hover:underline">
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  );
};
