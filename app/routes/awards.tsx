import SuperHero1 from "~/assets/images/super-hero-1.png";
import GraphicsBefore2 from "~/assets/images/bg-graphics-before-2.png";
import { Link } from "react-router";

const Awards = () => {
  return (
    <div className="bg-yellow-gradient">
      <section className="bg-yellow-gradient py-10 md:py-20">
        <div className="px-5">
          <div className="md:w-1/3 mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-bold">
              999.forex’s Global Awards
            </h2>
            <p className="text-sm md:text-xl mt-8">
              Since FXERO’s inception, the brand has been widely recognised for
              industry innovation, delivers ultra-low latency execution, high
              capacity and robust, consistent exchange performance.
              <br />
              <br />
              This is a testament to our commitment to providing exceptional
              customer service, competitive trading conditions and — above all—
              an outstanding trading experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-gradient py-10 md:py-20">
        <div className="px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="pr-0 md:pr-50">
              <h2 className="text-3xl md:text-5xl font-bold">
                999.forex is the proud recipient of many prestigious awards
              </h2>
            </div>
            <div className="pr-0 md:pr-10">
              <p className="md:text-xl">
                FXERO's Best Trading Platform and best execution awards. We are
                honored by every accolade we receive, while our dedication to
                our clients and partners grows stronger with every new award
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white text-center text-xs md:text-base mt-20">
            <div className="flex flex-col justify-between bg-red-radial rounded-lg h-45 md:h-55 p-9 w-full md:w-8/12">
              <h6>Best Trading Platform</h6>
              <span>Best TP 2021</span>
            </div>
            <div className="flex flex-col justify-between bg-red-radial rounded-lg h-45 md:h-55 p-9 w-full md:w-8/12">
              <h6>Best web application</h6>
              <span>Best APP 2020</span>
            </div>
            <div className="flex flex-col justify-between bg-red-radial rounded-lg h-45 md:h-55 p-9 w-full md:w-8/12">
              <h6>Best application Design</h6>
              <span>Tech on 2020</span>
            </div>
            <div className="flex flex-col justify-between bg-red-radial rounded-lg h-45 md:h-55 p-9 w-full md:w-8/12">
              <h6>Best Execution Broker</h6>
              <span>Trade expo 2020</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(50%_62.26%_at_50%_50%,#970020_0%,#4A010F_100%)] py-10 md:py-20 relative">
        <h3 className="text-yellow-gradient text-center text-3xl md:text-5xl font-bold">
          Take your best decision
        </h3>
        <p className="text-white text-center md:text-xl mt-5">
          Reasons why we are the best ?
        </p>
        <img
          src={SuperHero1}
          alt="superhero1"
          className="mt-15 mx-auto w-1/3 relative z-10"
        />
        <img
          src={GraphicsBefore2}
          alt="graphicsbefore2"
          className="absolute top-0 left-0 w-full h-full opacity-15"
        />
      </section>

      <section className="py-10 md:py-20">
        <div className="px-5">
          <div className="md:w-5/12 mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-bold">
              Integrated with your favorite tools.
            </h2>
            <p className="text-sm md:text-xl mt-8">
              with FXERO’s Build your HFT strategies
            </p>
            <Link
              to="/signup"
              className="bg-red-radial text-white px-10 py-5 inline-block mt-10 rounded"
            >
              Try For Free
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-t-4xl bg-red-radial text-5xl md:text-7xl text-white py-20 md:py-40 font-bold">
        <div className="md:w-7/12 text-center">Start achieving exitance with 999.forex</div>
      </section>
    </div>
  );
};

export default Awards;
