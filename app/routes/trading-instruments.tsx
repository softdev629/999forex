import { BriefcaseBusiness, Check, Globe } from "lucide-react";
import { Link } from "react-router";

import BgTrading1 from "~/assets/images/bg-trading-1.png";
import BgTrading2 from "~/assets/images/bg-trading-2.png";
import BgTrading3 from "~/assets/images/bg-trading-3.png";
import BgTrading4 from "~/assets/images/bg-trading-4.png";
import BgTrading5 from "~/assets/images/bg-trading-5.png";
import BgTrading6 from "~/assets/images/bg-trading-6.png";

const TradingViewCharts = () => {
  return (
    <div className="bg-yellow-gradient">
      <section className="py-15">
        <div className="px-5">
          <div className="md:w-1/2 mx-auto flex flex-col items-center mb-20 md:mb-30">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              Trade the world’s markets
            </h2>
            <p className="text-[#81838C] text-center text-base md:text-xl mt-5">
              We offer access to a wide range of asset classes, including Forex,
              Crypto, Metals, Stocks and Indices.
            </p>
            <Link
              to="https://trade.999.forex/register/"
              className="bg-red-radial px-9 py-5 rounded text-white text-sm inline-block mb-10 mt-10"
            >
              Open Account
            </Link>
          </div>

          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:flex-1">
              <img src={BgTrading1} alt="TradingView Charts" />
            </div>
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Forex</h3>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      999.forex gives you the keys to access the forex market 24
                      hours a day, 5 days a week, allowing you to trade the most
                      popular major, minor and exotic currency pairs.
                    </p>
                  </div>
                </div>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      With approximately $5 trillion exchanged every single day,
                      forex is the most liquid market in the world, making it
                      full of potential profit opportunities.
                    </p>
                  </div>
                </div>
                <Link
                  to="https://trade.999.forex/register/"
                  className="bg-red-radial px-9 py-5 rounded-full text-white text-sm inline-block mb-10 mt-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div id="crypto" className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Crypto</h3>
                <p className="text-base md:text-xl mt-6">
                  A cryptocurrency is a digital or virtual currency that is
                  secured by cryptography, which makes it nearly impossible to
                  counterfeit or double-spend. Many cryptocurrencies are
                  decentralized networks based on blockchain technology—a
                  distributed ledger enforced by a disparate network of
                  computers. A defining feature of cryptocurrencies is that they
                  are generally not issued by any central authority, rendering
                  them theoretically immune to government interference or
                  manipulation.
                </p>
                <h6 className="text-red-gradient text-base md:text-xl mt-10">
                  Expertise area:
                </h6>
                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      A cryptocurrency is a form of digital asset based on a
                      network that is distributed across a large number of
                      computers.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      The word “cryptocurrency” is derived from the encryption
                      techniques which are used to secure the network.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Blockchains, which are organizational methods for ensuring
                      the integrity of transactional data, are an essential
                      component of many cryptocurrencies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
              <img
                src={BgTrading2}
                alt="TradingView Charts"
                className="md:w-140"
              />
            </div>
          </div>

          <div id="stocks" className="flex flex-col-reverse md:flex-row mt-10">
            <div className="md:flex-1">
              <img
                src={BgTrading3}
                alt="TradingView Charts"
                className="md:w-160"
              />
            </div>
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Stocks</h3>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      Buy, sell and own shares from your favourite brands and
                      some of the biggest companies in the world, including
                      Facebook, Apple, Alibaba, Tencent and more, without the
                      risk that comes with leverage.
                    </p>
                  </div>
                </div>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      You can invest in US stocks commission-free, while stocks
                      from the Hong Kong exchange come with a small subscription
                      fee.
                    </p>
                  </div>
                </div>
                <Link
                  to="https://trade.999.forex/register/"
                  className="bg-red-radial px-9 py-5 rounded-full text-white text-sm inline-block mb-10 mt-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div id="metals" className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="md:flex-1 flex items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Metals</h3>
                <p className="text-base md:text-xl mt-6">
                  Trade price movements of precious metals as an alternative
                  investment option. You can trade gold against the dollar with
                  spreads as low as 0.0 on our most popular account.
                  <br /> <br />
                  As potential safe haven assets, metals are popular amongst
                  traders when markets are especially volatile.
                </p>
                <h6 className="text-red-gradient text-base md:text-xl mt-10">
                  Key benefits of trading metals
                </h6>
                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Widely regarded as potential safe havens
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Good for diversifying your trading portfolio
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Popular assets during times of volatility
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
              <img
                src={BgTrading4}
                alt="TradingView Charts"
                className="md:w-150"
              />
            </div>
          </div>

          <div id="stock-cfds" className="flex flex-col-reverse md:flex-row mt-15 md:mt-40">
            <div className="md:flex-1">
              <img
                src={BgTrading5}
                alt="TradingView Charts"
                className="md:w-160"
              />
            </div>
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Stocks CFDs</h3>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      With access to some of the biggest stock exchanges in the
                      world – NASDAQ, NYSE and HKEX among them – you can trade
                      share prices from some of your favourite brands.
                      <br /> <br />
                      Great choice for long-term investing
                      <br /> <br />
                      Less risky than CFDs since you’re not trading with
                      leverage
                    </p>
                  </div>
                </div>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-red-gradient text-base md:text-xl">
                      Enter long and short positions on individual companies, or
                      trade stock baskets in the form of indices to diversify
                      your risk.
                    </p>
                  </div>
                </div>
                <Link
                  to="https://trade.999.forex/register/"
                  className="bg-red-radial px-9 py-5 rounded-full text-white text-sm inline-block mb-10 mt-10"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div id="commodities" className="flex flex-col md:flex-row gap-10 md:gap-0">
            <div className="md:flex-1 flex items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">Commodities</h3>
                <p className="text-base md:text-xl mt-6">
                  Discover trading opportunities in some of the world’s largest
                  oil and natural gas markets. Trade Crude or Brent Oil, and
                  Natural Gas prices.
                  <br /> <br />
                  Diversify your portfolio by making the most of today’s market
                  moves in the world of commodities.
                </p>
                <h6 className="text-red-gradient text-base md:text-xl mt-10">
                  Key benefits of CFD trading on commodities
                </h6>
                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Easier access to popular commodity markets
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Good for diversifying your trading portfolio
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1">
                      Low margin requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
              <img
                src={BgTrading6}
                alt="TradingView Charts"
                className="md:w-120"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingViewCharts;
