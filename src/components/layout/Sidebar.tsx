import classNames from 'classnames';
import Link from 'next/link';
import { useCallback } from 'react';
import { useSidebarContext } from '@/src/context/sidebarContext';
import SocialMediaBar from '../ui/SocialMediaBar';

type SidebarElementProps = {
  href: string;
  text: string;
};

const Sidebar = () => {
  const { toggled } = useSidebarContext();
  const animationClass = toggled
    ? 'translate-x-0 ease-out'
    : 'translate-x-full ease-in';

  return (
    <aside
      className={classNames(
        'fixed top-0 right-0 h-screen w-full md:w-3/4 lg:w-2/3 xl:w-1/3 bg-white z-40 transition-transform duration-500',
        animationClass
      )}
    >
      <div className="pt-24 pb-4 px-4 sm:px-8 sm:pt-28 h-full relative">
        <h2 className="pb-4 text-4xl font-bold text-center md:text-left text-brand-blue">
          Vsebina
        </h2>
        <ul className="text-stone-400 transition-colors duration-1000">
          <SidebarElement href="/" text="Domov" />
          <SidebarElement href="/dogodki" text="Dogodki" />
          <SidebarElement href="/trgovina" text="Trgovina" />
          <SidebarElement href="/za-sponzorje" text="Za sponzorje" />
          <SidebarElement href="/kontakt" text="Kontakt" />
        </ul>
        <div className="absolute sm:bottom-8 sm:right-8 sm:left-8 bottom-4 right-4 left-4 p-6 flex justify-center">
          <SocialMediaBar />
        </div>
      </div>
    </aside>
  );
};

const SidebarElement: React.FC<SidebarElementProps> = ({ href, text }) => {
  const { setToggled } = useSidebarContext();
  const toggle = useCallback(() => {
    setToggled((prev) => !prev);
  }, [setToggled]);

  return (
    <li className="border-b border-gray-200 overflow-hidden">
      <Link href={href}>
        <div
          onClick={toggle}
          className="h-14 flex items-center text-2xl hover:text-brand-blue hover:translate-x-2 transition-all"
        >
          {text}
        </div>
      </Link>
    </li>
  );
};

export default Sidebar;
