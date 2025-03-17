import { Link } from "react-router";
import type { Route } from "./+types/home";

import MultiAssets from "~/assets/images/multi-assets.png";
import Conference from "~/assets/images/conference.png";
import SleekUI2 from "~/assets/images/sleek-ui-2.png";
import AccountUI from "~/assets/images/account-ui.png";

import { Zap } from "lucide-react";
import { Layers } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us" },
    { name: "description", content: "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in." },
  ];
}

export default function AboutUs() {
  return (
    <div className="bg-yellow-gradient flex flex-col gap-10 md:gap-20">
      <section className="bg-yellow-gradient py-20 sm:py-50">
        <div className="flex justify-center">
          <div className="md:w-1/2 flex flex-col items-center text-center px-10">
            <h2 className="text-4xl md:text-6xl font-bold ">
              Why Choose 999.forex
            </h2>
            <p className="mt-4 text-sm md:text-base">
              Putting our clients first since 2007. For more than 14 years,
              we've been empowering clients by helping them take control of
              their financial lives.
            </p>
            <Link
              to="/contact-us"
              className="mt-10 bg-[radial-gradient(50%_50%_at_50%_50%,_#FC3700_0%,_#B32700_0.01%,_#801C00_100%)] text-white flex-1 border-none px-12 py-4 text-sm text-center rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-yellow-gradient">
        <div className="flex flex-col-reverse md:flex-row py-5 md:py-15 gap-10">
          <div className="flex-1 px-10">
            <img src={MultiAssets} alt="Multi Assets" />
          </div>
          <div className="flex-1 flex flex-col-reverse md:flex-col">
            <div className="md:w-10/12 px-10">
              <h2 className="text-3xl md:text-5xl font-bold">
                World class Trading Platforms
              </h2>
              <p className="mt-4 text-sm md:text-base">
                999.forex's super-fast flagship trading platform with elegant UI,
                streaming market data, advanced charts
              </p>
              <p className="mt-4 text-sm md:text-base">
                Trade from Python, Trading view
                using our free API
              </p>
            </div>
            <img src={Conference} alt="Conference" />
          </div>
        </div>
      </section>

      <section className="bg-yellow-gradient py-10 md:py-20">
        <div className="flex md:flex-row flex-col px-10">
          <div className="md:flex-1 flex flex-col justify-center">
            <div className="xl:pr-60 md:pr-20 lg:pr-40">
              <h2 className="text-3xl md:text-5xl font-bold">
                Sleek User Interface
              </h2>
              <p className="mt-10 text-sm md:text-base">
                With a sleek and carefully designed UI, buying, selling,
                analysing, and managing your portfolio, everything's just a
                click away.
              </p>

              <div className="flex gap-4 items-center mt-15">
                <div className="w-15 h-15 flex items-center justify-center bg-red-gradient rounded-xl">
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
                to="https://t.me/triple9fx_bot"
                className="bg-red-gradient px-9 py-5 rounded text-white text-sm inline-block mb-10"
              >
                TRY FOR FREE
              </Link>
            </div>
          </div>
          <div className="md:flex-1">
            <img src={SleekUI2} alt="Sleek UI" />
          </div>
        </div>
      </section>

      <section className="bg-red-gradient py-10 md:py-20">
        <div className="flex flex-col md:flex-row px-10 gap-10">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl text-yellow-gradient font-normal md:pr-25">
              Join 999.forex to experience Raw Spreads From 0.0 pips <br />
              <br />
              Build your HFT strategies with 999.forex's free API !
            </h3>
          </div>
          <div className="flex-1 flex flex-col gap-10 items-center">
            <div className="md:w-10/12">
              <h4 className="text-xl md:text-2xl text-yellow-gradient">
                Raw Spreads From 0.0 pips
              </h4>
              <p className="text-white text-sm md:text-xl mt-2">
                999.forex mission is to provide traders with the lowest spreads
                possible during all market conditions.
              </p>
            </div>
            <div className="md:w-10/12">
              <h4 className="text-xl md:text-2xl text-yellow-gradient">
                Faster Execution
              </h4>
              <p className="text-white text-sm md:text-xl mt-2">
                Give your Automated Trading system the Edge. Average execution
                speeds of under 30ms***
              </p>
            </div>
            <div className="md:w-10/12">
              <h4 className="text-xl md:text-2xl text-yellow-gradient">
                The Ultimate in Trading Conditions
              </h4>
              <p className="text-white text-sm md:text-xl mt-2">
                999.forex has been created with traders in mind. HFT strategies,
                Scalping, hedging, and automated trading are all allowed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow-gradient py-10 md:py-20">
        <div className="flex flex-col-reverse md:flex-row px-10 gap-10">
          <div className="flex-1">
            <img src={AccountUI} alt="Account UI" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="md:w-10/12">
              <h2 className="text-3xl md:text-5xl font-bold">
                Copy Trading with 999.forex Invest
              </h2>
              <p className="text-sm md:text-xl mt-5">
                999.forex Invest is an innovative way you can access the
                opportunities of trading without any technical skills, and the
                minimum of time. You simply choose to copy 999.forex traders (also
                known as Strategy Managers) who are right for you and make their
                trading strategies available to follow. We’ll do the rest!
                <br /> <br />
                Copy trading with 999.forex Invest lets you retain full control of
                your money, and you’ll only pay a fee to your Strategy Manager
                when they make a profitable trade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
