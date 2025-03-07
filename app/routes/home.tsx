import type { Route } from "./+types/home";

import HeroImage from "~/assets/images/hero-image.png";
import TrustPilotStars from "~/assets/images/trustpilot-stars.png";
import TrustLogoWhite from "~/assets/images/trust-logo-white.png";
import LinkGooglePlay from "~/assets/images/link-google-play.png";
import LinkAppStore from "~/assets/images/link-app-store.png";
import AppScanner from "~/assets/images/app-scanner.png";
import SuperHero from "~/assets/images/super-hero.png";
import Hero1 from "~/assets/images/hero-1.png";
import Hero2 from "~/assets/images/hero-2.png";
import Hero3 from "~/assets/images/hero-3.png";
import SuperPC from "~/assets/images/super-pc.png";
import TradingChart from "~/assets/images/trading-chart.png";
import VideoPlay from "~/assets/images/video-play.png";
import MoneyUI from "~/assets/images/money-ui.png";
import SwapUI from "~/assets/images/swap-ui.png";
import TradeUI from "~/assets/images/trade-ui.png";
import GraphicsBefore from "~/assets/images/bg-graphics-before.png";
import SleekUI from "~/assets/images/sleek-ui.png";
import ImgSectionLast from "~/assets/images/img-section-last.png";

import { Input } from "~/components/ui/input";
import { ChevronRight, Layers, MessageCircle, Pizza, Zap } from "lucide-react";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="bg-yellow-gradient">
      <section className="bg-yellow-gradient">
        <div className="relative px-4 sm:px-6 flex flex-col md:flex-row">
          <div className="flex-1">
            <div className="pt-8 sm:pt-34 md:pt-20">
              <div className="flex gap-2 text-gray-gradient font-bold text-sm sm:text-base">
                <span>Excellent</span>
                <img
                  src={TrustPilotStars}
                  alt="Trustpilot Stars"
                  className="h-5 sm:h-auto"
                />
                <img
                  src={TrustLogoWhite}
                  alt="Trustpilot Logo"
                  className="h-5 sm:h-auto"
                />
                <span>Trustpilot</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl md:w-100 lg:text-[48px] lg:w-120 sm:text-[64px] max-w-full sm:w-150 font-bold mt-6 sm:mt-0">
              Enjoy Technology Enjoy Investing.
            </h2>
            <p className="text-gray-gradient max-w-full sm:w-140 lg:w-120 md:w-100 text-lg sm:text-2xl mt-4">
              Build your HFT strategies with 999.forex's free API Raw Spreads From
              0.0 pips
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {/* <img
                src={LinkGooglePlay}
                alt="Link Google Play"
                className="h-12 sm:h-auto"
              />
              <img
                src={LinkAppStore}
                alt="Link App Store"
                className="h-12 sm:h-auto"
              />
              <img
                src={AppScanner}
                alt="App Scanner"
                className="h-12 sm:h-auto"
              /> */}
            </div>

            <div className="mt-8 sm:mt-10 pb-10 sm:pb-25 md:pb-10">
              <div className="relative max-w-[500px] md:max-w-[400px]">
                <Input
                  type="email"
                  placeholder="satoshi@gmail.com"
                  className="h-12 sm:h-14 pl-4 sm:pl-6 pr-24 sm:pr-32 text-base sm:text-lg bg-white rounded-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Link
                  to="https://trade.999.forex/register/"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-gradient text-white cursor-pointer rounded-xl border-none px-3 sm:px-4 py-2 text-xs sm:text-sm"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <img
            src={HeroImage}
            alt="Hero Image"
            className="flex-1 md:max-w-1/2"
          />
        </div>
      </section>

      <section className="bg-section-img mt-10 sm:mt-20 relative pt-8 py-10 sm:py-20">
        <div className="pt-20 sm:pt-37 px-4 sm:px-6">
          <div className="bg-gradient-to-b from-[#970020] to-[#4A010F] border-8 rounded-full border-[#FFB803] text-primary text-3xl sm:text-5xl font-bold w-fit mx-auto px-3 py-2 relative">
            Reasons why we are the best ?
            <img
              src={SuperHero}
              alt="Super Hero"
              className="absolute translate-y-[-90%] top-0 left-[50%] translate-x-[-50%] w-20 sm:w-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-15 sm:mt-25 gap-10 sm:items-center md:items-baseline md:flex-wrap sm:justify-center">
            <div className="flex flex-1 gap-5">
              <img
                src={Hero1}
                alt="Hero 1"
                className="w-16 h-16 sm:w-25 sm:h-25"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Trade on Global <br /> markets
                </h3>
                <p className="text-sm">
                  Forex, Crypto Currency, Commodities, Stocks CFDs
                  Trading and Investing
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-5">
              <img
                src={Hero2}
                alt="Hero 2"
                className="w-16 h-16 sm:w-25 sm:h-25"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Segregated funds <br /> Protection of investment
                </h3>
                <p className="text-sm">
                  We are committed to providing a trusted and reliable trading environment for all our clients
                </p>
              </div>
            </div>

            <div className="flex flex-1 gap-5">
              <img
                src={Hero3}
                alt="Hero 3"
                className="w-16 h-16 sm:w-25 sm:h-25"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Unparalleled <br /> trading conditions
                </h3>
                <p className="text-sm">
                  Trade with fast execution and tight spreads. Supports
                  all algo trading strategies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-section-img mt-10 sm:mt-20 relative">
        <div className="px-4 sm:px-6 flex flex-col md:flex-row items-center pt-20 md:py-0">
          <div className="flex-1">
            <div className="px-5 md:pr-25">
              <h2 className="text-3xl sm:text-5xl font-bold">
                Leaders in zero- commission
              </h2>
              <h3 className="mt-4 sm:mt-6 text-base sm:text-lg">
                An award winning and leading provider of online foreign
                exchange(FX) trading, stocks, CFD trading, Crypto and related
                services worldwide.
              </h3>
              <ul className="pl-6 sm:pl-9 flex flex-col gap-2 mt-4">
                <li className="flex text-xs sm:text-base">
                  <ChevronRight className="pr-2" /> Deposit & trade Crypto
                </li>
                <li className="flex text-xs sm:text-base">
                  <ChevronRight className="pr-2" /> Trading solutions and resources for all
                  experience levels
                </li>
                <li className="flex text-xs sm:text-base">
                  <ChevronRight className="pr-2" /> World-class customer support
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link
                  to="https://trade.999.forex/register/"
                  className="bg-red-gradient text-white flex-1 border-none px-4 py-2 text-sm text-center rounded"
                >
                  Open an Account
                </Link>
                <Link
                  to="https://trade.999.forex/register/"
                  className="flex-1 border-2 border-solid [border-image:linear-gradient(180deg,_#970020_0%,_#4A010F_100%)_1] text-red-gradient rounded-xl px-4 py-2 text-sm text-center"
                >
                  Open Free Demo Account
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src={SuperPC} alt="Super PC" className="w-full" />
          </div>
        </div>
      </section>

      <section className="bg-section-img mt-10 sm:mt-20 relative py-10 sm:py-20">
        <div className="px-4 sm:px-6">
          <img src={TradingChart} alt="Trading Chart" className="w-full" />
        </div>
      </section>

      <section className="py-10 sm:py-20">
        <div className="flex flex-col sm:flex-row px-4 sm:px-6">
          <div className="flex-1 sm:pr-25 flex flex-col justify-center mb-8 sm:mb-0">
            <h2 className="text-3xl sm:text-5xl font-bold">
              Discover 10 Years of 999.forex
            </h2>
            <p className="mt-6 text-base md:text-xl">
              "At 999.forex, we've been serving our clients for over 10 years.
              In that time, the world of Forex trading has changed a lot."
            </p>
            <p className="text-base md:text-xl mt-9">
              Watch our video to learn more about 999.forex history.
            </p>
          </div>
          <div className="flex-1">
            <img src={VideoPlay} alt="Video Play" className="w-full px-5" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex md:flex-row flex-col-reverse">
          <div className="flex-1">
            <img src={MoneyUI} className="px-5" alt="Money UI" />
          </div>
          <div className="flex-1 md:pl-25 px-5">
            <h2 className="text-3xl md:text-5xl font-bold">
              In-Depth Daily Market Analysis
            </h2>
            <p className="mt-10 text-base md:text-xl">
              At 999.forex, we believe that the best trader is an educated one. We
              analyse and explain the price movements of the global markets,
              giving traders all the in-depth knowledge they need to make their
              next move.
            </p>
            <p className="my-10 text-base md:text-xl">
              Keep on top of the latest forex news, including updates on popular
              currencies such as the GBP, USD and EUR, commodities markets and
              more from our very own FX market specialists.
            </p>
            <Link
              to="/market-analysis"
              className="text-red-gradient font-bold text-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-section-img">
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <div className="xl:pr-60 px-5 md:pr-20 lg:pr-40">
              <h2 className="text-3xl md:text-5xl font-bold">Super-fast elegant UI</h2>
              <p className="my-10 text-base md:text-xl">
                999.forex's super-fast flagship trading platform with elegant UI,
                Inbuild strategies, streaming market data, advanced charts.
                Experience the way of trading.
              </p>
              <Link
                to="/web-application"
                className="text-red-gradient font-bold text-base md:text-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <img src={SwapUI} className="px-5" alt="Swap UI" />
          </div>
        </div>
      </section>

      <section className="mt-20 bg-[radial-gradient(50%_50%_at_50%_50%,_#FC3700_0%,_#B32700_0.01%,_#801C00_100%)] py-20 relative">
        <img
          src={GraphicsBefore}
          alt="Graphics Before"
          className="absolute top-0 left-0 opacity-50 w-full h-full"
        />
        <div className="flex lg:flex-row flex-col relative z-10 justify-center items-center">
          <div className="flex-1 px-5">
            <img src={TradeUI} alt="Trade UI" />
          </div>

          <div className="flex-1">
            <div className="px-5 md:px-25">
              <h2 className="text-yellow-gradient text-3xl md:text-5xl font-bold tracking-[-1.58px] leading-15">
                One-click trade & Place TP/SL from charts
              </h2>
              <p className="my-10 text-base md:text-xl text-white tracking-[-0.66px] leading-10">
                Hundreds of indicators, studies, and tools on a powerful and
                customisable charting interface. Extensive historical data for
                forex, crypto, stocks and metals from 20+ exchanges. Nobody else
                offers as much data as we do.
              </p>
              <Link
                to="/web-application"
                className="text-yellow-gradient font-bold text-base md:text-xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="flex md:flex-row flex-col">
          <div className="md:flex-1 flex flex-col justify-center">
            <div className="xl:pr-60 px-5 md:pr-20 lg:pr-40">
              <h2 className="text-3xl md:text-5xl font-bold">Sleek User Interface</h2>
              <p className="mt-10 text-base md:text-xl">
                With a sleek and carefully designed UI, buying, selling,
                analysing, and managing your portfolio, everything's just a
                click away.
              </p>

              <div className="flex gap-4 items-center mt-15">
                <div className="w-15 h-15 flex items-center justify-center bg-[linear-gradient(180deg,_#970020_0%,_#4A010F_100%)] rounded-xl">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <p className="text-red-gradient font-bold text-sm md:text-base">
                  Easy to Customize <br />
                  Components
                </p>
              </div>

              <div className="flex gap-4 items-center mt-10 mb-15">
                <div className="w-15 h-15 flex items-center justify-center bg-gray-gradient rounded-xl">
                  <Zap className="w-5 h-5 fill-primary stroke-0" />
                </div>
                <p className="text-red-gradient font-bold text-sm md:text-base">
                  User Friendly <br />
                  Interface
                </p>
              </div>

              <Link
                to="https://trade.999.forex/register/"
                className="bg-red-gradient px-9 py-5 rounded text-white text-sm inline-block mb-10"
              >
                TRY FOR FREE
              </Link>
            </div>
          </div>
          <div className="md:flex-1">
            <img src={SleekUI} alt="Sleek UI" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-gradient py-20">
        <div className="px-5">
          <h2 className="text-3xlmd:text-5xl font-bold text-center">
            Learn Forex trading has never <br /> been easier.
          </h2>
          <img
            src={ImgSectionLast}
            alt="Img Section Last"
            className="mt-20 mx-auto"
          />
          <div className="flex justify-between mt-25 md:flex-row flex-col md:gap-0 gap-10 px-5 md:pl-0">
            <div className="flex gap-6">
              <div className="w-15 h-15 flex justify-center items-center bg-gray-gradient rounded-full">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">999.forex Raw spread</h4>
                <p className="text-sm md:text-base">
                  Enjoy spreads as low as 0.0 pips^ with deep <br /> liquidity
                  and no requotes.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-15 h-15 flex justify-center items-center bg-gray-gradient rounded-full">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Fast and reliable</h4>
                <p className="text-sm md:text-base">
                  Fast execution, 99.9% fill rate*, and no <br />
                  dealing desk intervention.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-15 h-15 flex justify-center items-center bg-gray-gradient rounded-full">
                <Pizza className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold">Globally Markets</h4>
                <p className="text-sm md:text-base">
                  Trade on US stocks, Europe stocks and HK
                  <br /> stocks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
