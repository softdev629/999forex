import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "~/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#2B2534] via-[#312D3E] to-[#312D3E]">
      <div className="max-w-[1500px] mx-auto pt-10 sm:pt-20 pb-5 px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-8">
          {/* First column - Logo and social */}
          <div className="col-span-2 sm:col-span-6 lg:col-span-4">
            <img src={Logo} alt="Logo" className="mb-6 max-w-[150px]" />
            <p className="text-white/60 text-sm sm:text-base">
              999.forex proprietary technology, widely recognized for industry
              innovation, delivers ultra-low latency execution, high capacity
              and robust, consistent exchange performance.
            </p>
            <div className="text-primary mt-5">
              Follow us on :
              <div className="flex gap-3 mt-3">
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Second column - Markets */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 sm:mb-10">Markets</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <li>Forex</li>
              <li>Crypto</li>
              <li>Commodities</li>
              <li>Stocks CFDs</li>
              <li>Metals</li>
            </ul>
          </div>

          {/* Third column - Trading Platforms */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 sm:mb-10">Trading Platforms</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <li>Web platform</li>
              <li>Fxero API</li>
              <li>TV charts</li>
              <li>MT4 to Fxero API</li>
              <li>MT5 to Fxero API</li>
            </ul>
          </div>

          {/* Fourth column - Strategies */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 sm:mb-10">Strategies</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <li>High frequency trading</li>
              <li>News trading</li>
              <li>Super trend</li>
              <li>Copy trading</li>
            </ul>
          </div>

          {/* Fifth column - Market Analysis */}
          <div className="col-span-1 sm:col-span-3 lg:col-span-2">
            <h4 className="text-white font-bold mb-6 sm:mb-10">Market Analysis</h4>
            <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <li>Forex Market news</li>
              <li>Crypto analysis</li>
              <li>Economic calendar</li>
              <li>Live Technical analysis</li>
            </ul>
          </div>
        </div>

        {/* Footer text sections */}
        <div className="space-y-6 sm:space-y-10 mt-8 sm:mt-10 text-sm sm:text-base">
          <p className="text-white/60 text-xs sm:text-base">
            FXERO brings intelligent, driven, and curious minds from the trading
            industry together to collaborate and solve quantitative finance and
            technical problems. FXERO brings best trading experience for traders.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            Risk Warning: Trading Forex and Leveraged Financial Instruments
            involves significant risk and can result in the loss of your invested
            capital. You should not invest more than you can afford to lose and
            should ensure that you fully understand the risks involved. Trading
            leveraged products may not be suitable for all investors. Trading
            non-leveraged products such as stocks also involves risk as the value
            of a stock can fall as well as rise, which could mean getting back
            less than you originally put in. Past performance is no guarantee of
            future results. Before trading, please take into consideration your
            level of experience, investment objectives and seek independent
            financial advice if necessary. Please read FXERO's full Risk
            Disclosure.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            FXERO Ltd does not direct its website and services to any individual
            in any country in which the use of its website and services are
            prohibited by local laws or regulations. When accessing this website
            from a country in which its use may or may not be prohibited, it is
            the user's responsibility to ensure that any use of the website or
            services adheres to local laws or regulations. Raw Trading Ltd does
            not affirm that the information on its website is suitable for all
            jurisdictions.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            Copyright © 2025 FXERO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
