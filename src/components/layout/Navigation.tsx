'use client';
import { useCallback } from 'react';
import Logo from './Logo';
import Sidebar from './Sidebar';
import {
  SidebarWrapper,
  useSidebarContext,
} from '@/src/context/sidebarContext';

const Navigation = () => {
  return (
    <SidebarWrapper>
      <Overlay />
      <Sidebar />
      <header className="h-20 bg-white border-b-[1px] fixed top-0 left-0 right-0 z-50">
        <div className="h-full container flex items-center justify-between gap-y-8">
          <Logo />
          <SidebarIcon />
        </div>
      </header>
    </SidebarWrapper>
  );
};

const Overlay = () => {
  const { toggled, setToggled } = useSidebarContext();
  const toggle = useCallback(() => {
    setToggled((prev) => !prev);
  }, [setToggled]);

  return (
    <div
      onClick={toggle}
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${
        toggled ? 'opacity-100' : 'opacity-0 scale-0'
      }`}
      aria-hidden="true"
    />
  );
};

const SidebarIcon = () => {
  const { setToggled } = useSidebarContext();
  const toggle = useCallback(() => {
    setToggled((prev) => !prev);
  }, [setToggled]);

  return (
    <button
      onClick={toggle}
      className="p-1 rounded-md transition-colors"
      aria-label="Toggle Sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 cursor-pointer text-brand-blue hover:text-brand-blue/70 active:text-brand-blue/50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
        />
      </svg>
    </button>
  );
};

export default Navigation;
