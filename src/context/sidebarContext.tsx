'use client';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface SidebarContextType {
  toggled: boolean;
  setToggled: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: SidebarContextType = {
  toggled: false,
  setToggled: () => {},
};

const SidebarContext = createContext<SidebarContextType>(defaultContextValue);

export function SidebarWrapper({ children }: { children: ReactNode }) {
  const [toggled, setToggled] = useState<boolean>(false);
  const contextValue = { toggled, setToggled };

  return (
    <SidebarContext.Provider value={contextValue}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
