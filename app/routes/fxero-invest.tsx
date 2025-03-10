import { Link } from "react-router";
import BgInvest1 from "~/assets/images/bg-invest-1.png";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "999.forex Invest" },
    { name: "description", content: "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in." },
  ];
}

const FxeroInvest = () => {
  return (
    <div className="bg-yellow-gradient">
      <section className="py-15 px-5">
        <div>
          <div className="md:w-1/3 mx-auto">
            <h2 className="text-center text-4xl md:text-6xl font-bold">
              999.forex invest with Copy trading
            </h2>
            <p className="text-center text-base md:text-xl mt-15">
              You know that trading financial markets has the potential to be
              profitable. But you also know it takes a lot of skill and
              experience, and time spent following the markets. It’s okay! If
              you’re not feeling up to it yourself, we have the perfect
              solution.
              <br /> <br />
              999.forex Invest is an innovative way you can access the opportunities
              of trading without any technical skills, and the minimum of time.
              You simply choose to copy 999.forex traders (also known as Strategy
              Managers) who are right for you and make their trading strategies
              available to follow. We’ll do the rest!
              <br /> <br />
              Copy trading with 999.forex Invest lets you retain full control of
              your money, and you’ll only pay a fee to your Strategy Manager
              when they make a profitable trade.
            </p>
          </div>
        </div>
        <div className="my-30 flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:flex-1">
            <h2 className="md:w-1/2 text-2xl md:text-4xl font-bold mx-auto">
              What a copy trader should know?
            </h2>
          </div>
          <div className="md:flex-1 text-base md:text-xl">
            1. Copy trading allows you to directly copy the positions taken by
            another trader. You decide the amount you wish to invest and simply
            copy everything they do automatically in real-time – when that
            trader makes a trade, your account will make that same trade as
            well.
            <br /> <br />
            2. You do not need to have any input on the trades, and you get the
            identical returns on each trade as your chosen trader.
            <br /> <br />
            3. Copy trading is one of the easiest ways to use another trader’s
            expert knowledge. It also means that you don’t lose any control over
            the outcome. You still have the ability to close trades, and open
            new ones when you want.
            <br /> <br />
            4. But by copying another trader, you could potentially make money
            based on their skills.
            <br /> <br />
            5. In fact, no advanced knowledge of the financial market is
            required to take part!
          </div>
        </div>
        <div className="mt-40">
          <h3 className="text-center text-2xl md:text-4xl font-bold">
            Take your best decision
          </h3>
          <p className="text-center text-lg md:text-2xl font-medium mt-5">
            The benefits and risks of copy trading
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 mt-15 gap-10 md:gap-0">
            <div className="col-span-1 md:pt-10">
              <div className="flex flex-col gap-8 items-center md:items-end">
                <div className="w-12 h-12 flex bg-white text-red-800 font-bold text-2xl rounded-full items-center justify-center shadow-[0px_25px_17px_0px_#6F768A29]">
                  1
                </div>
                <h4 className="text-red-gradient text-xl md:text-2xl">
                  What is the target?
                </h4>
                <p className="text-center md:text-right">
                  To find traders that have a strong track record and trading
                  style that you want to emulate. Or you can spread your risk
                  across your portfolio which will enable you to ride the ups
                  and downs in markets so that you can trade over the long-term.
                </p>
              </div>
              <div className="flex flex-col gap-8 items-center md:items-end mt-7 md:mt-21">
                <div className="w-12 h-12 flex bg-white text-red-800 font-bold text-2xl rounded-full items-center justify-center shadow-[0px_25px_17px_0px_#6F768A29]">
                  2
                </div>
                <h4 className="text-red-gradient text-xl md:text-2xl">
                  Improve trading skills
                </h4>
                <p className="text-center md:text-right">
                  copy trading allows you to follow the trading activity of
                  experienced traders, some of whom have years of expertise and
                  know-how. You can learn from watching by replicating their
                  success and developing your own trading.
                </p>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              <img
                src={BgInvest1}
                alt="bg-invest-1"
                className="mx-auto md:w-3/4"
              />
            </div>
            <div className="col-span-1 md:pt-10">
              <div className="flex flex-col gap-8 items-center md:items-end">
                <div className="w-12 h-12 flex bg-white text-red-800 font-bold text-2xl rounded-full items-center justify-center shadow-[0px_25px_17px_0px_#6F768A29]">
                  1
                </div>
                <h4 className="text-red-gradient text-xl md:text-2xl">Risks</h4>
                <p className="text-center md:text-right">
                  The main risk with copy trading is an obvious one – you are
                  taking part in some risk with financial implications. Trading
                  by its nature is a high risk, high reward endeavour. Choosing
                  a long-term reliable trader to copy can be difficult.
                </p>
              </div>
              <div className="flex flex-col gap-8 items-center md:items-end mt-7 md:mt-21">
                <div className="w-12 h-12 flex bg-white text-red-800 font-bold text-2xl rounded-full items-center justify-center shadow-[0px_25px_17px_0px_#6F768A29]">
                  2
                </div>
                <h4 className="text-red-gradient text-xl md:text-2xl">
                  Market risk
                </h4>
                <p className="text-center md:text-right">
                  copy trading, like with any trading in financial markets,
                  involves putting some of your capital at risk. Inevitably, the
                  market risk associated with this means you can lose that
                  capital as the assets your chosen trader has bought and sold
                  may be prove unsuccessful.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-15">
            <div className="md:w-1/3 mx-auto">
              <h3 className="text-3xl md:text-5xl font-bold text-center">
                Integrated with your favorite tools.
              </h3>
              <p className="text-center text-lg md:text-2xl font-medium mt-5">
                with 999.forex’s Build your HFT strategies
              </p>
              <div className="flex gap-5 mt-15 justify-center">
                <Link
                  to="https://trade.999.forex/login/"
                  className="bg-red-radial text-white w-45 py-5 flex justify-center items-center rounded-lg"
                >
                  Sign in
                </Link>
                <Link
                  to="https://trade.999.forex/register/"
                  className="bg-red-radial text-white w-45 py-5 flex justify-center items-center rounded-lg"
                >
                  Try for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-30 md:mt-50 bg-red-radial">
        <div className="py-25 px-5">
          <div className="md:w-2/5 mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold text-center text-white leading-16">
              Start achieving exitance with 999.forex
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FxeroInvest;
