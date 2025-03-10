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
                <a
                  href="https://www.facebook.com/share/15y5WkHGNH/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.80859 10.375H7.17188V18.25H3.65625V10.375H0.773438V7.14062H3.65625V4.64453C3.65625 1.83203 5.34375 0.25 7.91016 0.25C9.14062 0.25 10.4414 0.496094 10.4414 0.496094V3.27344H9C7.59375 3.27344 7.17188 4.11719 7.17188 5.03125V7.14062H10.3008L9.80859 10.375Z"
                      fill="#FFAB03"
                    />
                  </svg>
                </a>
                <a href="https://t.me/triple9forex" target="_blank">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.5 19C14.7467 19 19 14.7467 19 9.5C19 4.25329 14.7467 0 9.5 0C4.2533 0 0 4.25329 0 9.5C0 14.7467 4.2533 19 9.5 19Z"
                      fill="#FFAB03"
                    />
                    <path
                      d="M10.6031 8.26425C10.3603 8.20908 10.2389 8.39666 10.0845 8.49596C9.13557 9.12488 8.18667 9.74277 7.25985 10.3938C6.67506 10.802 6.07924 10.9234 5.39515 10.6696C5.02001 10.5262 4.6228 10.4379 4.25868 10.2834C3.89457 10.1179 3.88354 9.8531 4.18145 9.59933C4.31385 9.48899 4.49039 9.40072 4.6559 9.33452C6.9509 8.36356 9.24591 7.41466 11.5299 6.43266C12.876 5.85891 13.2622 6.26716 13.0084 7.5581C12.6774 9.22418 12.4677 10.9123 12.2029 12.5895C12.2029 12.6226 12.1919 12.6667 12.1809 12.6998C11.9161 13.8583 11.5078 14.0238 10.5037 13.3508C9.83069 12.9094 9.16867 12.4571 8.49562 12.0047C7.73429 11.4861 7.70119 11.2102 8.37425 10.5593C9.0142 9.93034 9.66519 9.31245 10.2941 8.68353C10.4155 8.56216 10.603 8.48493 10.592 8.25322L10.6031 8.26425Z"
                      fill="#2E2939"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@999forex?_t=ZS-8uQuYmRUnrd&_r=1"
                  target="_blank"
                >
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.48715 19C4.26494 19 0 14.7246 0 9.50003C0 4.24981 4.26495 -0.0170504 9.52134 5.12289e-05C14.735 0.0257037 19.017 4.19851 18.9999 9.51713C18.9914 14.9042 14.6239 18.9829 9.48715 19ZM10.1111 7.84116C10.1111 9.10669 10.1196 10.3808 10.1111 11.6463C10.1025 12.3731 9.72647 12.9033 9.0769 13.194C8.44442 13.4676 7.82904 13.365 7.29058 12.9204C6.74357 12.4586 6.56408 11.8772 6.73502 11.1845C6.89742 10.5261 7.60682 9.83351 8.58117 9.93612C8.81194 9.96177 8.88032 9.88481 8.87177 9.66249C8.85468 9.2093 8.87177 8.7561 8.87177 8.30291C8.87177 8.12334 8.81194 8.03783 8.61536 8.00363C8.26494 7.95232 7.92305 7.97798 7.58972 8.06349C6.07691 8.45683 5.08545 9.40597 4.8034 10.9537C4.5299 12.4244 4.99144 13.6814 6.2393 14.5792C7.27348 15.3231 8.41023 15.5027 9.60681 15.0837C11.1538 14.545 12.0683 13.2111 12.0769 11.5437C12.0769 10.3295 12.0769 9.11524 12.0769 7.89247C12.0769 7.54189 12.0769 7.54188 12.3675 7.70435C12.8632 7.98653 13.3846 8.20885 13.9487 8.32856C14.2307 8.38842 14.282 8.28581 14.2735 8.03783C14.2649 7.50768 14.2478 6.98608 14.2735 6.45593C14.2906 6.131 14.188 6.00274 13.8632 5.95998C12.9145 5.84027 12.1624 5.31867 11.829 4.46359C11.5555 3.74532 11.1538 3.61705 10.4957 3.67691C10.188 3.70256 10.094 3.77952 10.094 4.08735C10.1111 5.33577 10.094 6.58419 10.094 7.83261L10.1111 7.84116Z"
                      fill="#FFAB03"
                    />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@999forex" target="_blank">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.3008 2.64453C19.7227 4.12109 19.7227 7.28516 19.7227 7.28516C19.7227 7.28516 19.7227 10.4141 19.3008 11.9258C19.0898 12.7695 18.4219 13.4023 17.6133 13.6133C16.1016 14 10.125 14 10.125 14C10.125 14 4.11328 14 2.60156 13.6133C1.79297 13.4023 1.125 12.7695 0.914062 11.9258C0.492188 10.4141 0.492188 7.28516 0.492188 7.28516C0.492188 7.28516 0.492188 4.12109 0.914062 2.64453C1.125 1.80078 1.79297 1.13281 2.60156 0.921875C4.11328 0.5 10.125 0.5 10.125 0.5C10.125 0.5 16.1016 0.5 17.6133 0.921875C18.4219 1.13281 19.0898 1.80078 19.3008 2.64453ZM8.15625 10.1328L13.1484 7.28516L8.15625 4.4375V10.1328Z"
                      fill="#FFAB03"
                    />
                  </svg>
                </a>
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
            <h4 className="text-white font-bold mb-6 sm:mb-10">
              Trading Platforms
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <li>Web platform</li>
              <li>999.forex API</li>
              <li>TV charts</li>
              <li>999.forex API</li>
              <li>999.forex API</li>
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
            <h4 className="text-white font-bold mb-6 sm:mb-10">
              Market Analysis
            </h4>
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
            999.forex is trading name of 999FOREX LTD. Regulated by financial
            since 2025, License Companies for England and Wale 16286507 .All
            rights reserved.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            999.forex brings intelligent, driven, and curious minds from the
            trading industry together to collaborate and solve quantitative
            finance and technical problems. 999.forex brings best trading
            experience for traders.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            Risk Warning: Trading Forex and Leveraged Financial Instruments
            involves significant risk and can result in the loss of your
            invested capital. You should not invest more than you can afford to
            lose and should ensure that you fully understand the risks involved.
            Trading leveraged products may not be suitable for all investors.
            Trading non-leveraged products such as stocks also involves risk as
            the value of a stock can fall as well as rise, which could mean
            getting back less than you originally put in. Past performance is no
            guarantee of future results. Before trading, please take into
            consideration your level of experience, investment objectives and
            seek independent financial advice if necessary. Please read
            999.forex's full Risk Disclosure.
          </p>

          <p className="text-white/60 text-xs sm:text-base">
            999.forex Ltd does not direct its website and services to any
            individual in any country in which the use of its website and
            services are prohibited by local laws or regulations. When accessing
            this website from a country in which its use may or may not be
            prohibited, it is the user's responsibility to ensure that any use
            of the website or services adheres to local laws or regulations. Raw
            Trading Ltd does not affirm that the information on its website is
            suitable for all jurisdictions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
