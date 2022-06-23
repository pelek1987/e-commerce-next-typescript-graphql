import { ReactNode } from 'react'

interface MainProps {
    children: ReactNode;
}

export const Main = ({ children }: MainProps) => (
    <main className="flex-grow max-w-2xl mx-auto grid gap-6 sm:grid-cols-2 p-6 bg-teal-100 w-full">
        { children }
    </main>
)