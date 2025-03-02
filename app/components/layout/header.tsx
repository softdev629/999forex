import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

import Logo from "~/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-secondary to-muted px-5">
      <div className="container flex h-16 items-center justify-between py-4 mx-auto">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8 md:h-10" />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex text-white">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 text-white">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-secondary border-muted">
                <ul className="grid w-[400px] gap-3 p-4">
                  {aboutUsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10 text-white"
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 text-white">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-secondary border-muted">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {productsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10 text-white"
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 text-white">
                Trading Instruments
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-secondary border-muted">
                <ul className="grid w-[400px] gap-3 p-4">
                  {tradingInstrumentsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 focus:bg-white/10 text-white"
                        >
                          <div className="text-sm font-medium leading-none">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/fxero-invest"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10 focus:bg-white/10 text-white`}
              >
                FXERO Invest
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/market-analysis"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10 focus:bg-white/10 text-white`}
              >
                Market Analysis
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/education"
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/10 focus:bg-white/10 text-white`}
              >
                Education
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/login"
                className="px-6 py-2 text-sm text-white font-medium bg-gradient-to-b from-[#970020] to-[#4A010F] border-3 rounded-full border-[#FEDC4B] hover:opacity-80 transition-opacity"
              >
                Login
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden p-2">
            <Menu className="h-6 w-6 text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-secondary p-0">
            <SheetTitle className="text-white"></SheetTitle> 
            <SheetDescription></SheetDescription>
            <div className="flex flex-col space-y-4 p-4">
              {/* About Us Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-white">About Us</h2>
                {aboutUsLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block text-sm text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Products Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-white">Products</h2>
                {productsLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block text-sm text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Trading Instruments Section */}
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-white">Trading Instruments</h2>
                {tradingInstrumentsLinks.map((item) => (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="block text-sm text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              {/* Direct Links */}
              <Link
                to="/fxero-invest"
                className="block text-lg font-bold text-white hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                FXERO Invest
              </Link>
              <Link
                to="/market-analysis"
                className="block text-lg font-bold text-white hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Market Analysis
              </Link>
              <Link
                to="/education"
                className="block text-lg font-bold text-white hover:text-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>

              {/* Login Button */}
              <Link
                to="/login"
                className="inline-block px-6 py-2 text-sm text-white font-medium bg-gradient-to-b from-[#970020] to-[#4A010F] border-3 rounded-full border-[#FEDC4B] hover:opacity-80 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const aboutUsLinks = [
  {
    title: "Why FXERO",
    href: "/about-us",
    description: "Why FXERO is the best choice for your business.",
  },
  {
    title: "Awards",
    href: "/awards",
    description: "See the awards we have won.",
  },
  {
    title: "News and Events",
    href: "/about/news-and-events",
    description: "Stay up to date with the latest news and events.",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description: "Get in touch with us.",
  },
  {
    title: "FQAs",
    href: "/about/faqs",
    description: "Find answers to your questions.",
  },
];

const productsLinks = [
  {
    title: "Web Application",
    href: "/products/web-application",
    description:
      "Access advanced trading features through our intuitive web platform.",
  },
  {
    title: "Mobile",
    href: "/products/mobile",
    description:
      "Trade on-the-go with our powerful mobile trading application.",
  },
  {
    title: "Trading View Charts",
    href: "/products/trading-view-charts",
    description:
      "Advanced technical analysis with professional-grade charting tools.",
  },
  {
    title: "MT4 to Fxero API",
    href: "/products/mt4-to-fxero-api",
    description:
      "Seamlessly connect MetaTrader 4 to our advanced trading infrastructure.",
  },
  {
    title: "MT5 to Fxero API",
    href: "/products/mt5-to-fxero-api",
    description: "Integrate MetaTrader 5 with our robust trading ecosystem.",
  },
  {
    title: "FXERO API",
    href: "/products/fxero-api",
    description:
      "Build custom trading solutions with our comprehensive REST API.",
  },
];

const tradingInstrumentsLinks = [
  {
    title: "Forex",
    href: "/trading-instruments/forex",
    description:
      "Trade major, minor and exotic currency pairs with competitive spreads.",
  },
  {
    title: "Crypto",
    href: "/trading-instruments/crypto",
    description:
      "Access 24/7 cryptocurrency trading with leading digital assets.",
  },
  {
    title: "Stocks",
    href: "/trading-instruments/stocks",
    description:
      "Invest in global companies with commission-free stock trading.",
  },
  {
    title: "Metals",
    href: "/trading-instruments/metals",
    description:
      "Trade precious metals like Gold and Silver with tight spreads.",
  },
  {
    title: "Stock CFDs",
    href: "/trading-instruments/stock-cfds",
    description:
      "Trade global stocks with leverage and no ownership requirements.",
  },
  {
    title: "Commodities",
    href: "/trading-instruments/commodities",
    description:
      "Access energy, agricultural and industrial commodity markets.",
  },
];

export default Header;
