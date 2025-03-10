import { Headphones, Phone, Send } from "lucide-react";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us" },
    {
      name: "description",
      content:
        "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in.",
    },
  ];
}

const ContactUs = () => {
  return (
    <section className="py-25 bg-yellow-gradient relative">
      <div className="px-5 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center">
          Contact us
        </h2>
        <p className="text-sm md:text-xl mt-8 text-center">
          Have a question or just want to say hi? We'd love to hear from you.
        </p>
        <div className="p-15 bg-gray-gradient rounded-xl mx-auto md:w-9/12 mt-18">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-8">
              <div className="bg-yellow-gradient rounded-lg w-20 h-20 flex items-center justify-center">
                <Headphones className="w-9 h-9" />
              </div>
              <h5 className="text-lg text-yellow-gradient font-bold">
                Help & support
              </h5>
              <p className="text-sm md:text-lg text-yellow-gradient">
                Email: <span className="font-bold">admin@999.forex</span>
                <br />
                for help with a trading or service or API to FAQs and developer
                tools
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-yellow-gradient rounded-lg w-20 h-20 flex items-center justify-center">
                <Phone className="w-9 h-9" />
              </div>
              <h5 className="text-lg text-yellow-gradient font-bold">
                Help & support
              </h5>
              <p className="text-sm md:text-lg text-yellow-gradient">
                REGISTERED OFFICE: 2nd Floor College House 17 King Edwards Road,
                RUISLIP, London, HA4 7AE UNITED KINGDOM
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <a
                href="https://t.me/triple9forex"
                className="bg-yellow-gradient rounded-lg w-20 h-20 flex items-center justify-center"
              >
                <Send className="w-9 h-9" />
              </a>
              <h5 className="text-lg text-yellow-gradient font-bold">
                Partner
              </h5>
              <p className="text-sm md:text-lg text-yellow-gradient">
                Get in touch with our partner team. <br />
                <span className="font-bold">admin@999.forex</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-t-3xl bg-red-radial max-w-none" />
    </section>
  );
};

export default ContactUs;
