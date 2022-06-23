import { ReactNode } from "react"

interface NavigationProps {
    children: ReactNode[]
}

export const Navigation = ({children} : NavigationProps) => {
    return (
        <nav className="bg-gray-700 px-4 py-2 text-white">
            { children }
        </nav>
    )
}