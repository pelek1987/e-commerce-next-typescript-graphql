import { Navigation } from "./Navigation";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
    return (
    <header className="max-w-2xl mx-auto w-full">
        <Navigation>
            <NavigationLink label="Home" url="/" />
            <NavigationLink label="About" url="/about" />
        </Navigation>
    </header>
    )
}
