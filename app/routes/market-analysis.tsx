import BgAnalysis1 from "~/assets/images/bg-analysis-1.png";
import BgAnalysis3 from "~/assets/images/bg-analysis-3.png";
import ForexMarket from "~/assets/images/forex-market.png";
import LearningForex from "~/assets/images/learning-forex.png";
import TradingMistakes from "~/assets/images/trading-mistakes.png";
import VideoPlay from "~/assets/images/video-play.png";
import Testimonial1 from "~/assets/images/testimonial-1.png";
import Testimonial2 from "~/assets/images/testimonial-2.png";
import Testimonial3 from "~/assets/images/testimonial-3.png";
import Testimonial4 from "~/assets/images/testimonial-4.png";
import Testimonial5 from "~/assets/images/testimonial-5.png";
import Testimonial6 from "~/assets/images/testimonial-6.png";
import SuperHero2 from "~/assets/images/super-hero-2.png";

import { Link } from "react-router";
import { Input } from "~/components/ui/input";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Clock,
  Globe,
  Play,
  Quote,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "~/components/ui/carousel";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  email: z.string().email(),
  level: z.enum(["beginner", "advanced"], {
    required_error: "",
  }),
});

const leftFaqs = [
  {
    question: "What I will learn after completing this course?",
    answer:
      "Completely you can learn about Forex, Stock market and about Trading in Forex.",
  },
  {
    question: "Do you give support when necessary?",
    answer:
      "Yes, we provide support when necessary. You can contact us through our support team.",
  },
  {
    question: "How can I make the payment?",
    answer:
      "You can make the payment through our payment gateway. You can also make the payment through our bank account.",
  },
];

const rightFaqs = [
  {
    question: "Do you offer Money Guarantee?",
    answer:
      "Yes, we offer money back guarantee if you are not satisfied with the course.",
  },
  {
    question: "When can I earn money after this course?",
    answer:
      "You can earn money after this course. You can start trading after completing this course.",
  },
  {
    question: "Can I share this access to my friends?",
    answer:
      "Yes, you can share this access to your friends. You can also share this access to your friends.",
  },
];

const MarketAnalysis = () => {
  const [analysisCourses, setAnalysisCourses] = useState([
    {
      lesson: "Lesson 01",
      title: "How does the Stock Market Work?",
      image: ForexMarket,
      lectures: 13,
      duration: "3h 20min",
    },
    {
      lesson: "Lesson 02",
      title: "How does the Stock Exchange Work?",
      image: LearningForex,
      lectures: 20,
      duration: "5h 20min",
    },
    {
      lesson: "Lesson 03",
      title: "3 Common Psychological Trading Mistakes",
      image: TradingMistakes,
      lectures: 25,
      duration: "7h 20min",
    },
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      level: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <div className="bg-yellow-gradient">
      <section className="flex flex-col md:flex-row items-center bg-gradient-to-b from-[#FC3700] via-[#B32700] to-[#801C00] text-white">
        <aside className="relative">
          <img src={BgAnalysis1} alt="bg-analysis-1" className="p-5 md:p-0" />
          <button className="absolute top-1/2 right-1/2 md:right-0 translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-yellow-gradient flex items-center justify-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <Play className="w-8 h-8" fill="#801C00" />
            </div>
          </button>
        </aside>
        <div className="md:w-1/3 px-5">
          <div className="bg-[linear-gradient(180deg,rgba(165,0,162,0.64)_0%,rgba(42,0,105,0.64)_100%)] px-4 py-1 rounded-2xl border-[#EFD062] border w-fit text-xs md:text-sm mx-auto md:mx-0">
            <span className="bg-yellow-gradient px-2 rounded-lg mr-4">
              Offer
            </span>{" "}
            50% off commission rebate for this month
          </div>
          <h2 className="text-white text-3xl md:text-5xl mt-6 text-center md:text-left">
            In-Depth Daily Market Analysis
          </h2>
          <p className="text-white text-base md:text-xl mt-6">
            Learn about the many benefits of trading the forex market and
            discover why the forex market is one of the last true arenas of fair
            market competition and genuine price discovery.
          </p>
          <div className="mt-8 sm:mt-10 pb-10 sm:pb-25 md:pb-10">
            <div className="relative max-w-[500px] md:max-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 sm:h-14 pl-4 sm:pl-6 pr-24 sm:pr-32 text-base sm:text-lg bg-white rounded-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
              />
              <Link
                to="https://trade.999.forex/register/"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,rgba(165,0,162,0.64)_0%,rgba(42,0,105,0.64)_100%)] text-white cursor-pointer rounded-xl border-none px-3 sm:px-4 py-2 text-xs sm:text-sm"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-30">
        <div className="px-5 md:px-20">
          <div className="flex justify-between mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold">
              Daily Market Analysis
            </h3>
            <div className="flex gap-2">
              <Button className="bg-transparent text-[#801C00] border border-[#801C00] rounded-full w-10 h-10 flex items-center justify-center">
                <ArrowLeft />
              </Button>
              <Button className="bg-transparent text-[#801C00] border border-[#801C00] rounded-full w-10 h-10 flex items-center justify-center">
                <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto mt-10">
            {analysisCourses.map((course) => (
              <div key={course.lesson} className="bg-red-radial rounded-lg p-8">
                <img src={ForexMarket} alt="forex-market" className="w-full" />
                <h6 className="text-yellow-gradient text-xs md:text-sm mt-8">
                  {course.lesson}
                </h6>
                <a
                  className="text-primary md:text-xl font-bold mt-2 underline"
                  href="#"
                >
                  {course.title}
                </a>
                <div className="flex gap-10 mt-5">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-yellow-gradient flex items-center justify-center">
                      <BookOpen
                        className="w-4 h-4"
                        fill="black"
                        stroke="none"
                      />
                    </div>
                    <span>{course.lectures} Lectures</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-yellow-gradient flex items-center justify-center">
                      <Clock className="w-4 h-4" color="black" />
                    </div>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="https://trade.999.forex/register/"
            className="text-white bg-[linear-gradient(180deg,_#FC3700_0%,_#B32700_0.01%,_#801C00_100%)] rounded-full px-10 py-5 block mt-15 mx-auto w-fit"
          >
            Explore All Lessons
          </Link>
        </div>
      </section>
      <section className="mt-30">
        <div className="px-5">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:flex-1">
              <img src={BgAnalysis3} alt="TradingView Charts" />
            </div>
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold">
                  What is forex trading and how does it work?
                </h3>
                <p className="md:text-xl mt-6 text-[#090516]">
                  The foreign exchange market, also known as the forex market,
                  is the world’s most traded financial market. Read on to learn
                  how to become a forex trader with our comprehensive Beginner’s
                  Guide.
                </p>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <BriefcaseBusiness className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-[#090516] text-base md:text-xl">
                      <span className="text-red-gradient-200 font-bold">
                        Guides & Tutorials
                      </span>
                      <br />
                      <br />
                      User-friendly, easy-to-read manuals and introductions for
                      beginners and intermediates alike.
                    </p>
                  </div>
                </div>
                <div className="mt-15">
                  <div className="flex gap-6">
                    <div className="w-15 h-15 bg-white text-[#4A010F] rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                    </div>
                    <p className="flex-1 text-[#090516] text-base md:text-xl">
                      <span className="text-red-gradient-200 font-bold">
                        World-class Education
                      </span>
                      <br />
                      <br />
                      We are committed to ensuring our clients have the best
                      education, tools, platforms and accounts to trade forex.
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

          <div className="flex flex-col md:flex-row gap-10 md:gap-0 mt-20 md:mt-40">
            <div className="md:flex-1 flex flex-col items-center justify-center">
              <div className="md:w-3/4">
                <h3 className="text-2xl md:text-4xl font-bold text-red-gradient-200">
                  What is the forex market?
                </h3>
                <p className="text-base md:text-xl mt-6 text-[#090516]">
                  The forex market is by far the largest and most liquid
                  financial market in the world, with an estimated average
                  global daily turnover of more than US$7.5 trillion
                </p>
                <h6 className="text-red-gradient text-base md:text-xl mt-10 font-bold">
                  Expertise area:
                </h6>
                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1 text-red-gradient-200">
                      Opens to buy and sell currencies 24*5
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1 text-red-gradient-200">
                      Used by banks, investment firms, retail traders.
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-4 h-4 bg-[#2BD67B] text-white rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="text-xs md:text-base flex-1 text-red-gradient-200">
                      Fast and Reliable
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
              <img src={VideoPlay} alt="Video Play" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-30">
        <div className="px-5 md:px-20 bg-[url('assets/images/bg-analysis-2.png')] bg-cover bg-center bg-no-repeat pb-20">
          <div className="md:w-1/2 mx-auto text-center">
            <h3 className="text-2xl md:text-4xl font-bold">
              Love form students
            </h3>
            <p className="md:text-xl mt-6">
              Podcasting operational change management inside of workflows to
              establish a framework. Taking seamless key performance
            </p>
          </div>
          <div className="pt-5 md:pt-15 relative">
            <Carousel className="mx-auto md:w-2/5">
              <CarouselContent className="my-12">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center justify-center pt-15 pb-6 px-10 bg-blue-gradient rounded-lg relative mx-6">
                      <Quote
                        className="w-10 h-10 rotate-180 stroke-0"
                        fill="white"
                      />
                      <p className="text-white text-center mt-2">
                        "Easy to learn forex trading.Best raw spread broker. 0.0
                        spred is very important for algo trading. 999.forex offers
                        Raw spread and Web application is good"
                        <br />
                        <br />
                        <span className="text-[#F7B26D]">- Ann Franks</span>
                      </p>
                      <img
                        src={Testimonial6}
                        alt="Testinomial 6"
                        className="absolute top-0 w-20 h-20 right-1/2 translate-x-1/2 -translate-y-1/2"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-[#416FF433] text-[#416FF4]" />
              <CarouselNext className="right-2 bg-[#416FF433] text-[#416FF4]" />
            </Carousel>
            <img
              src={Testimonial1}
              alt="Testimonial 1"
              className="absolute top-20 left-50 w-10 h-10 hidden md:block"
            />
            <img
              src={Testimonial2}
              alt="Testimonial 2"
              className="absolute top-50 left-20 w-16 h-16 hidden md:block"
            />
            <img
              src={Testimonial3}
              alt="Testimonial 3"
              className="absolute bottom-0 left-60 w-15 h-15 hidden md:block"
            />
            <img
              src={Testimonial4}
              alt="Testimonial 4"
              className="absolute bottom-10 right-60 w-15 h-15 hidden md:block"
            />
            <img
              src={Testimonial5}
              alt="Testimonial 5"
              className="absolute top-30 right-30 w-15 h-15 hidden md:block"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="px-5">
          <div className="md:w-1/2 mx-auto relative">
            <div className="bg-red-gradient-200 rounded-t-xl w-full pt-16 pb-8 px-10 md:px-20">
              <h3 className="text-white text-2xl md:text-4xl text-center font-bold">
                Get started with only $100
              </h3>
              <p className="text-white md:text-xl text-center mt-6">
                Trade on Global markets | Segregated funds Protection &
                Unparalleled trading condistions
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5 mt-15"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white rounded-full p-6"
                            placeholder="Enter your name"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-white rounded-full p-6"
                            placeholder="Enter your email address"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex gap-6"
                          >
                            <FormItem className="flex-1 flex items-center space-x-3 space-y-0 bg-white py-4 rounded-full px-5">
                              <FormControl>
                                <RadioGroupItem value="beginner" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Beginner
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex-1 flex items-center space-x-3 space-y-0 bg-white py-4 rounded-full px-5">
                              <FormControl>
                                <RadioGroupItem value="advanced" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Advanced
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="bg-yellow-gradient text-black rounded-full w-full p-6 font-bold"
                  >
                    Get Started Now
                  </Button>
                </form>
              </Form>
            </div>
            <img
              src={SuperHero2}
              alt="Super Hero 2"
              className="absolute top-[-150px] right-1/2 translate-x-1/2"
            />
          </div>
        </div>
      </section>

      <section className="bg-[url('assets/images/bg-analysis-4.png')] bg-cover bg-center bg-no-repeat">
        <div className="px-5 py-20">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1">
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Frequently asked questions ?
              </h3>
            </div>
            <div className="md:flex-1">
              <p className="text-[#FEC8FF] md:text-xl">
                Check out our FAQs for commen doubt's
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row">
            <div className="md:flex-1">
              <Accordion type="single" collapsible className="md:w-3/4">
                {leftFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#FEC8FF]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="md:flex-1">
              <Accordion type="single" collapsible className="md:w-3/4">
                {rightFaqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger className="text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#FEC8FF]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          <div className="mt-24 flex flex-col md:flex-row gap-10 md:gap-0 bg-yellow-gradient rounded-xl p-16 justify-between">
            <h4 className="text-gray-gradient text-2xl md:text-4xl font-bold md:w-2/5">
              10K+ Students take this course. What are you waiting for?
            </h4>
            <Link
              to="https://trade.999.forex/register/"
              className="text-white rounded-full w-fit p-6 font-bold block bg-red-radial h-fit"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketAnalysis;
