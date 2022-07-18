import { ReactNode } from "react";

interface NavigationProps {
  children: ReactNode[];
}

export const Navigation = ({ children }: NavigationProps) => {
  return <nav className="py-2 text-white">{children}</nav>;
};
