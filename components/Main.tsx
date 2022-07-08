import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
  <main className="flex-grow max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 p-6 w-full">
    {children}
  </main>
);
