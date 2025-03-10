import { Link } from "react-router";

import FAQSidebar from "~/assets/images/bg-faq-side.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { cn } from "~/lib/utils";

import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQs" },
    { name: "description", content: "999.forex is a leading online trading platform that offers a wide range of financial instruments for traders to trade and invest in." },
  ];
}

const faqList = [
  {
    title: "Getting Started",
    id: "getting-started",
    items: [
      {
        question: "How can i register with 999.forex?",
        answer:
          "Follow this link https://999.forex.com/register/ Enter your information. Click ‘Send OTP’ to receive the access code by Email. Enter the OTP in the relevant field. Click ‘Register Now.’",
      },
      {
        question: "Where can I find my 999.forex login details?",
        answer:
          "You can find your 999.forex login details on the email you used to register with us.",
      },
      {
        question: "How can I reset my 999.forex password?",
        answer:
          "You can reset your 999.forex password by clicking on the ‘Forgot Password’ link on the login page. Enter your email address and click ‘Send OTP’ to receive the access code by Email. Enter the OTP in the relevant field. Click ‘Reset Password’.",
      },
      {
        question: "How can I change my 999.forex password?",
        answer:
          "You can change your 999.forex password by clicking on the ‘Change Password’ link on the login page. Enter your new password and click ‘Change Password’.",
      },
      {
        question: "How do I become a 999.forex verified client?",
        answer:
          "You can become a 999.forex verified client by clicking on the ‘Verify Account’ link on the login page. Enter your email address and click ‘Send OTP’ to receive the access code by Email. Enter the OTP in the relevant field. Click ‘Verify Account’.",
      },
    ],
  },
  {
    title: "Deposits and Withdrawals",
    id: "deposits-and-withdrawals",
    items: [
      {
        question: "What deposit/withdrawal methods do you offer?",
        answer:
          "We offer a variety of deposit and withdrawal methods. You can deposit funds using your credit card, bank transfer, or other payment methods. You can withdraw funds using your credit card, bank transfer, or other payment methods.",
      },
      {
        question:
          "Where can I find the status of my deposit/withdrawal/internal transfer?",
        answer:
          "You can find the status of your deposit/withdrawal/internal transfer by clicking on the ‘Deposit’ link on the login page. Enter the amount you wish to deposit and click ‘Deposit’.",
      },
      {
        question: "How can I deposit funds into my 999.forex account?",
        answer:
          "You can deposit funds into your 999.forex account by clicking on the ‘Deposit’ link on the login page. Enter the amount you wish to deposit and click ‘Deposit’.",
      },
      {
        question: "How can I withdraw funds from my 999.forex account?",
        answer:
          "You can withdraw funds from your 999.forex account by clicking on the ‘Withdraw’ link on the login page. Enter the amount you wish to withdraw and click ‘Withdraw’.",
      },
    ],
  },
  {
    title: "Trading",
    id: "trading",
    items: [
      {
        question: "What instruments are available?",
        answer:
          "We offer a variety of trading instruments. You can trade with 999.forex by clicking on the ‘Trade’ link on the login page. Enter the amount you wish to trade and click ‘Trade’.",
      },
      {
        question: "What trading platforms are available?",
        answer:
          "We offer a variety of trading platforms. You can trade with 999.forex by clicking on the ‘Trade’ link on the login page. Enter the amount you wish to trade and click ‘Trade’.",
      },
    ],
  },
  {
    title: "999.forex Invest",
    id: "999.forex-invest",
    items: [
      {
        question: "What is 999.forex Invest?",
        answer:
          "999.forex Invest is a platform that allows you to invest in a variety of instruments. You can invest in a variety of instruments by clicking on the ‘Invest’ link on the login page. Enter the amount you wish to invest and click ‘Invest’.",
      },
      {
        question: "How can I start investing in a Strategy Manager?",
        answer:
          "You can start investing in a Strategy Manager by clicking on the ‘Invest’ link on the login page. Enter the amount you wish to invest and click ‘Invest’.",
      },
      {
        question: "How many Strategy Managers can I follow?",
        answer:
          "You can follow a maximum of 10 Strategy Managers. You can follow more Strategy Managers by clicking on the ‘Follow’ link on the login page. Enter the amount you wish to invest and click ‘Follow’.",
      },
    ],
  },
  {
    title: "Partnership Programs",
    id: "partnership-programs",
    items: [
      {
        question: "What Partnership Programmes are offered?",
        answer:
          "We offer a variety of partnership programmes. You can become a 999.forex partner by clicking on the ‘Partner’ link on the login page. Enter the amount you wish to invest and click ‘Partner’.",
      },
      {
        question: "How can i join your Partnership Programmes?",
        answer:
          "You can join our partnership programmes by clicking on the ‘Join’ link on the login page. Enter the amount you wish to invest and click ‘Join’.",
      },
      {
        question: "What is a referral link?",
        answer:
          "A referral link is a link that allows you to refer a friend to 999.forex. You can share your referral link with your friends and earn a commission when they sign up.",
      },
      {
        question: "Can I track my referrals?",
        answer:
          "Yes, you can track your referrals by clicking on the ‘Referrals’ link on the login page. Enter the amount you wish to invest and click ‘Referrals’.",
      },
      {
        question: "When can I withdraw my commissions?",
        answer:
          "You can withdraw your commissions by clicking on the ‘Withdraw’ link on the login page. Enter the amount you wish to withdraw and click ‘Withdraw’.",
      },
      {
        question: "How can I withdraw the commissions / rebates I earn?",
        answer:
          "You can withdraw the commissions / rebates you earn by clicking on the ‘Withdraw’ link on the login page. Enter the amount you wish to withdraw and click ‘Withdraw’.",
      },
    ],
  },
];

const Faqs = () => {
  return (
    <div className="bg-yellow-gradient">
      <section className="py-25">
        <div className="px-5 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5" />
          <div className="md:col-span-7">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-gradient tracking-[-1.98px]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="md:col-span-5">
            <div className="flex flex-col gap-4 text-xl md:text-2xl">
              <Link to="/faqs#getting-started" className="text-gray-gradient">
                Getting Started
              </Link>
              <Link
                to="/faqs#deposits-and-withdrawals"
                className="text-gray-gradient"
              >
                Deposits and Withdrawals
              </Link>
              <Link to="/faqs#trading" className="text-gray-gradient">
                Trading
              </Link>
              <Link to="/faqs#999.forex-invest" className="text-gray-gradient">
                999.forex Invest
              </Link>
              <Link
                to="/faqs#partnership-programs"
                className="text-gray-gradient"
              >
                Partnership Programs
              </Link>
            </div>
            <img
              src={FAQSidebar}
              alt="FAQ Sidebar"
              className="mt-20 md:mt-45 mx-auto w-1/2 md:w-3/4"
            />
          </div>
          <div className="md:col-span-7 flex flex-col gap-10">
            {faqList.map((faq) => (
              <div key={faq.id} id={faq.id}>
                <h4 className="text-lg md:text-2xl font-bold mb-7">
                  {faq.title}
                </h4>
                <Accordion type="single" collapsible className="md:w-3/4">
                  {faq.items.map((item) => (
                    <AccordionItem
                      className={cn(
                        "border border-black rounded-lg px-4 mb-2 last:border-1",
                        "data-[state=open]:bg-[linear-gradient(180deg,_#970020_0%,_#4A010F_100%)]",
                        "data-[state=closed]:bg-red-radial"
                      )}
                      key={item.question}
                      value={item.question}
                    >
                      <AccordionTrigger
                        className={cn(
                          "flex flex-1 items-start justify-between gap-4 py-4 text-left text-base font-medium transition-all outline-none",
                          "hover:underline",
                          "focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50",
                          "disabled:pointer-events-none disabled:opacity-50",
                          "[&[data-state=open]>svg]:rotate-180",
                          "text-black",
                          "data-[state=open]:text-[#FECB19]"
                        )}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent
                        className={cn(
                          "overflow-hidden text-sm text-white",
                          "data-[state=closed]:animate-accordion-up",
                          "data-[state=open]:animate-accordion-down",
                        )}
                      >
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
