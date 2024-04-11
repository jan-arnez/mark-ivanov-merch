'use client';
import { Dispatch, SetStateAction, useState } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  return (
    <>
      <Overlay toggled={toggled} setToggled={setToggled} />
      <Menu toggled={toggled} />
      <div className="h-20 bg-white border-b-[1px] fixed top-0 left-0 right-0 z-50">
        <div className="h-full container flex items-center justify-between gap-y-8">
          <Logo />
          <MenuIcon setToggled={setToggled} />
        </div>
      </div>
    </>
  );
};

export default Navigation;

const Menu = ({ toggled }: { toggled: boolean }) => {
  const animationClass = toggled
    ? 'translate-x-0 md:border-l-[1px] ease-out'
    : 'translate-x-full ease';
  return (
    <div
      className={`fixed top-0 right-0 xl:w-1/3 lg:w-2/3 md:w-3/4 w-full h-full bg-white z-40 transition-transform duration-500 origin-right ${animationClass}`}
    >
      <div className="sm:pt-28 sm:px-8 px-6 pt-24 pb-8 h-full">
        <div className="h-full w-full bg-green-50"></div>
      </div>
    </div>
  );
};

const Overlay = ({
  toggled,
  setToggled,
}: {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
}) => {
  const animationClass = toggled
    ? 'opacity-100 scale-full'
    : 'opacity-0 scale-0';
  return (
    <div
      onClick={() => setToggled(false)}
      className={`fixed top-0 left-0 w-screen h-screen overflow-hidden select-none bg-black/50 z-40 transition-opacity duration-500 ${animationClass}`}
    />
  );
};

const MenuIcon = ({
  setToggled,
}: {
  setToggled: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setToggled((prev) => !prev)}
      className="p-1 rounded-md transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer text-brand-blue active:text-brand-blue/50 hover:text-brand-blue/70"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </div>
  );
};
