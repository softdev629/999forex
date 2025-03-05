import { Layers, MessageCircle, Zap } from "lucide-react";
import { Link } from "react-router";

import TradingChart from "~/assets/images/trading-chart.png";
import BgWeb2 from "~/assets/images/bg-web-2.png";
import BgWeb3 from "~/assets/images/bg-web-3.png";
import SleekUI from "~/assets/images/sleek-ui.png";
import SleekUI3 from "~/assets/images/sleek-ui-3.png";

const WebApplication = () => {
  return (
    <div className="bg-yellow-gradient">
      <section className="bg-[url('assets/images/bg-web-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="pt-15 px-5">
          <div className="bg-gray-gradient w-fit rounded-xl px-2 py-1 text-white mx-auto text-xs md:text-sm">
            <span className="bg-yellow-gradient rounded-lg px-3 mr-2 text-black">
              Offer
            </span>{" "}
            50% off commission rebate for this month
          </div>
          <div className="md:w-1/2 mx-auto flex flex-col items-center">
            <h2 className="text-white text-center text-4xl md:text-6xl">
              World class Trading Platforms
            </h2>
            <p className="text-white text-center text-lg md:text-2xl mt-6">
              999.forex's super-fast flagship trading platform with elegant UI,
              streaming market data, advanced charts
            </p>
            <Link
              to="/"
              className="bg-yellow-gradient px-8 py-5 inline-block mt-13 rounded-lg"
            >
              Get Started Now
            </Link>
          </div>
          <img
            src={TradingChart}
            alt="trading-chart"
            className="md:w-4/5 mx-auto mt-10"
          />
        </div>
      </section>
      <section className="py-10 md:py-30">
        <div className="pt-8 md:pt-25 px-5">
          <div>
            <h3 className="text-3xl md:text-5xl text-center">
              Amazing Features
            </h3>
            <p className="text-base md:text-xl text-center mt-2">
              999.forex has been created with traders in mind.
            </p>
            <div className="flex flex-col md:flex-row justify-between mt-10 gap-15 md:gap-44">
              <div className="md:flex-1 bg-red-radial h-80 flex flex-col pt-20 items-center rounded-lg px-5">
                <div className="w-15 h-15 bg-[#416FF4] rounded-lg flex justify-center items-center text-[#801C00]">
                  <Layers className="w-6 h-6" />
                </div>
                <h6 className="text-base md:text-xl text-white mt-9">
                  Easy Integration
                </h6>
                <p className="text-center text-yellow-gradient mt-5 text-xs md:text-base">
                  Trade from Python, MetaTrader 4, MetaTrader 5, Trading view
                  using our free API
                </p>
              </div>
              <div className="md:flex-1 bg-red-radial h-80 flex flex-col pt-20 items-center rounded-lg px-5">
                <div className="w-15 h-15 bg-[#2BD67B] rounded-lg flex justify-center items-center text-[#801C00]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h6 className="text-base md:text-xl text-white mt-9">
                  The Ultimate in Trading Conditions
                </h6>
                <p className="text-center text-yellow-gradient mt-5 text-xs md:text-base">
                  HFT strategies, Scalping, hedging, and automated trading are
                  all allowed.
                </p>
              </div>
              <div className="md:flex-1 bg-red-radial h-80 flex flex-col pt-20 items-center rounded-lg px-5">
                <div className="w-15 h-15 bg-[#F7E36D] rounded-lg flex justify-center items-center text-[#801C00]">
                  <Layers className="w-6 h-6" />
                </div>
                <h6 className="text-base md:text-xl text-white mt-9">
                  Faster Execution
                </h6>
                <p className="text-center text-yellow-gradient mt-5 text-xs md:text-base">
                  Give your Automated Trading system the Edge. Average execution
                  speeds of under 30ms*
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-0 md:flex-row mt-20 md:mt-60">
            <div className="px-5 md:flex-1">
              <div className="md:w-3/4">
                <h3 className="text-3xl md:text-5xl">Super-fast elegant UI</h3>
                <p className="text-base md:text-xl mt-10">
                  999.forex's super-fast flagship trading platform with elegant UI,
                  Inbuild strategies, streaming market data, advanced charts.
                  Experience the way of trading.
                </p>
                <Link
                  to="/web-application/#"
                  className="text-red-gradient inline-block mt-10"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
            <div className="px-5 md:flex-1">
              <img src={BgWeb2} alt="bg-web-2" />
            </div>
          </div>

          <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row mt-20 md:mt-60">
            <div className="px-5 md:flex-1">
              <img src={BgWeb3} alt="bg-web-3" />
            </div>
            <div className="px-5 md:flex-1">
              <div className="md:w-3/4 mx-auto">
                <h3 className="text-3xl md:text-5xl">Advanced Charts</h3>
                <p className="text-base md:text-xl mt-10">
                  Hundreds of indicators, studies, and tools on a powerful and
                  customisable charting interface. Extensive historical data for
                  forex, crypto, stocks and metals from 20+ exchanges. Nobody
                  else offers as much data as we do.
                </p>
                <Link
                  to="/web-application/#"
                  className="text-red-gradient inline-block mt-10"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-10 md:gap-0 mt-20 md:mt-60">
            <div className="md:flex-1 flex flex-col justify-center">
              <div className="xl:pr-60 px-5 md:pr-20 lg:pr-40">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Sleek User Interface
                </h2>
                <p className="mt-10 text-base md:text-xl">
                  With a sleek and carefully designed UI, buying, selling,
                  analysing, and managing your portfolio, everything's just a
                  click away.
                </p>

                <div className="flex gap-4 items-center mt-15">
                  <div className="w-15 h-15 flex items-center justify-center bg-red-radial rounded-xl">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-red-gradient font-bold text-sm md:text-base">
                    Easy to Customize <br />
                    Components
                  </p>
                </div>

                <div className="flex gap-4 items-center mt-10 mb-15">
                  <div className="w-15 h-15 flex items-center justify-center bg-red-radial rounded-xl">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-red-gradient font-bold text-sm md:text-base">
                    User Friendly <br />
                    Interface
                  </p>
                </div>

                <Link
                  to="/signup"
                  className="bg-red-radial px-9 py-5 rounded text-white text-sm inline-block mb-10"
                >
                  TRY FOR FREE
                </Link>
              </div>
            </div>
            <div className="md:flex-1">
              <img src={SleekUI3} alt="Sleek UI" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('assets/images/bg-web-1.png')] bg-[length:100%_300%] bg-no-repeat pt-25">
        <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row">
          <div className="px-5 md:flex-1">
            <img src={SleekUI} alt="Sleek UI" />
          </div>
          <div className="px-5 md:flex-1 flex flex-col justify-center">
            <div className="md:w-3/4 mx-auto">
              <h3 className="text-3xl md:text-5xl text-white">
                Integrated position management
              </h3>
              <p className="text-base md:text-xl mt-10 text-white">
                Manage positions in single window, manage Live open positions
                and open pending orders. Hundreds of indicators, studies, and
                tools on a powerful and customisable charting interface.
              </p>
              <Link
                to="/web-application/#"
                className="text-yellow-gradient inline-block mt-10"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebApplication;
