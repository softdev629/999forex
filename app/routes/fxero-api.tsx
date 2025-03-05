import { BriefcaseBusiness, Check } from "lucide-react";
import { Globe } from "lucide-react";
import { Link } from "react-router";

import BgFxero2 from "~/assets/images/bg-fxero-2.png";
import BgFxero3 from "~/assets/images/bg-fxero-3.png";

const FxeroApi = () => {
  return (
    <div className="bg-yellow-gradient pb-30">
      <section className="bg-[url('assets/images/bg-fxero-1.png')] bg-cover bg-center bg-no-repeat">
        <div className="py-15 md:py-35 px-5">
          <div className="md:w-1/2 mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center">
              999.forex API
            </h2>
            <p className="text-base md:text-xl mt-5 text-center">
              We offer access through our API to a wide range of asset classes,
              including Forex, Crypto, Metals, Stocks etc.
            </p>
            <Link
              to="/signup"
              className="rounded-lg bg-red-radial text-white px-10 py-5 text-center block w-fit mx-auto mt-10"
            >
              Open Account
            </Link>
          </div>
        </div>
      </section>

      <section className="py-15 md:py-45 px-5">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:flex-1">
            <img src={BgFxero2} alt="TradingView Charts" />
          </div>
          <div className="md:flex-1 flex flex-col items-center justify-center">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-4xl font-bold">
                API post for all Platforms
              </h3>
              <div className="mt-15">
                <div className="flex gap-6">
                  <div className="w-15 h-15 text-white bg-red-radial rounded-full flex items-center justify-center">
                    <BriefcaseBusiness className="w-5 h-5" />
                  </div>
                  <p
                    className="flex-1 text-xs md:text-base"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <span className="font-medium text-base md:text-xl">
                      BUY order post
                    </span>
                    <br />
                    https://fxero.com/trade/?
                    type=market&bs=buy&lot=0.1&sl=111&target=222222&symbol=X:BTCUSD&
                    token=XXXXXXXX
                  </p>
                </div>
              </div>
              <div className="mt-15">
                <div className="flex gap-6">
                  <div className="w-15 h-15 text-white bg-red-radial rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <p
                    className="flex-1 text-xs md:text-base"
                    style={{ overflowWrap: "anywhere" }}
                  >
                    <span className="font-medium text-base md:text-xl">
                      SELL order post
                    </span>
                    <br />
                    https://fxero.com/trade/?
                    type=market&bs=buy&lot=0.1&sl=111&target=222222&symbol=X:BTCUSD&
                    token=XXXXXXXXX
                  </p>
                </div>
              </div>
              <Link
                to="/signup"
                className="bg-red-radial px-9 py-5 rounded-full text-yellow-400 text-sm inline-block mb-10 mt-10"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">
          <div className="md:flex-1">
            <div className="md:w-3/4">
              <h3 className="text-2xl md:text-4xl font-bold">Documentation</h3>
              <p className="text-base md:text-xl mt-6">
                base url: https://fxero.com/trade/? <br />
                order type (limit or market)------ type=market <br />
                buy or sell---------------------- &bs=buy <br />
                lot size------------------------- &lot=0.1 <br />
                stoploss price------------------- &sl=111 <br />
                target price--------------------- &target=222222 <br />
                symbol name------------------- &symbol=X:BTCUSD <br />
                secret token-------------------- &token=XXXXXXXX
              </p>

              <p style={{ overflowWrap: "anywhere" }} className="my-15">
                <span className="text-red-gradient">Final URL</span>
                <br />
                https://fxero.com/trade/?
                type=market&bs=buy&lot=0.1&sl=111&target=222222&symbol=X:BTCUSD&
                token=XXXXXXX
              </p>

              <h6 className="text-red-gradient text-base md:text-xl mt-10 font-bold">
                Expertise area:
              </h6>
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div className="flex gap-4 items-center">
                  <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs md:text-base flex-1 text-red-gradient">
                    Supports limit, market order
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs md:text-base flex-1 text-red-gradient">
                    Supports Forex, Crypto, Stocks
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs md:text-base flex-1 text-red-gradient">
                    Support high- frequency-trading order
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 flex items-center justify-center">
            <img src={BgFxero3} alt="TradingView Charts" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FxeroApi;
