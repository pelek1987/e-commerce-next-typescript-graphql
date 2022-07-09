import { ReactNode } from "react";

// grid gap-6 sm:grid-cols-2

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className="flex-grow max-w-7xl mx-auto p-4 w-full">{children}</main>
);
