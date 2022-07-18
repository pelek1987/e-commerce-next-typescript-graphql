import { CartBar } from "./Cart/CartBar";
import { Navigation } from "./Navigation";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto w-full flex items-center justify-between bg-gray-700 px-4">
      <Navigation>
        <NavigationLink label="Home" url="/" />
        <NavigationLink label="About" url="/about" />
      </Navigation>
      <CartBar />
    </header>
  );
};
