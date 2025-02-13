import React from "react";
import Navbar from "@/app/components/landing/navbar";
import SiteLogo from "@/app/components/base/logo/logo-site";
import FeatureSection from "@/app/components/landing/feature-section";
import FeatCard from "@/app/components/landing/feat-card";
import UseCaseCard from "@/app/components/landing/usecase-card";
import { Integration } from "@/app/components/landing/integration-animation";
import ShimmerButton from "@/app/components/shimmer";
import { Testimonial } from "@/app/components/landing/testimonials";
import Image from "next/image";
import Footer from "@/app/components/landing/footer";
import {
  RiMessage2Line,
  RiTimerFlashLine,
  RiShoppingCartLine,
} from "@remixicon/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/app/components/accordion";
import Marquee from "@/app/components/marquee";
import Link from "next/link";

const AllFeaturesHeading = () => {
  return (
    <div className="flex justify-between gap-2 items-center  mx-auto  custom-shadow-purple p-3 px-5 rounded-full text-lg sm:text-2xl ">
      <span className="">🌟 </span>
      <h1 className=" text-center font-medium">
        AI Copilots trained on your Data
      </h1>
      <span className="">🌟 </span>
    </div>
  );
};

const AllFeaturesAccordionContent = [
  {
    title: "Education: Virtual Campus Copilot",
    content:
      "Chatbotx acts as an always-on virtual campus guide, helping students navigate course options, registration processes, and campus resources, dramatically improving the student experience.",
  },
  {
    title: "Real Estate: AI Property Assistant",
    content:
      "Chatbotx enables real estate agencies to provide instant property details, schedule viewings, and offer personalized buying advice, enhancing customer engagement and sales efficiency.",
  },
  {
    title: "Healthcare: Virtual Health Advisor",
    content:
      "AI agents powered by Chatbotx provide patients with information on treatments, schedule appointments, and help with prescription management, thereby elevating patient care.",
  },
  {
    title: "Retail: AI Shopping Assitant ",
    content:
      "Chatbotx revolutionizes online shopping experiences by providing personalized product recommendations, handling transactions, and offering post-purchase support.",
  },
  {
    title: "Hospitality : Conciege AI  Copilot",
    content:
      "Chatbotx delivers a tailored concierge experience for guests by managing bookings, answering FAQs about amenities, and offering local recommendations.",
  },
  {
    content:
      "Chatbotx provides travellers with interactive planning assistance, real-time itinerary adjustments, and local insights to ensure a seamless travel experience.",
    title: "Travel: Interactive Travel Planner",
  },
];

interface FeatureAccordionProps {
  title: string;
  accordionContent: {
    title: string;
    content: string;
  }[];
}

const AllFeaturesAccordion = ({
  title,
  accordionContent,
}: FeatureAccordionProps) => {
  return (
    <div className="flex flex-col  gap-8 ">
      <h2 className="text-2xl ">{title}</h2>
      <Accordion type="single" collapsible className="w-full">
        {accordionContent.map(({ title, content }, index) => {
          return (
            <AccordionItem value={title} key={index}>
              <AccordionTrigger className="text-base sm:text-lg font-medium hover:no-underline">
                {title}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-sm sm:text-base">
                {content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

const RightFeature = () => {
  return (
    <div className="max-h-[500px] overflow-hidden rounded-3xl">
      <div className="relative w-full  flex items-center justify-center h-full overflow-hidden rounded-3xl bg-purple-100  px-10 pt-10">
        <Image
          src="/features/purple.png"
          alt="pink"
          className="object-contain aspect-auto border-[15px] border-gray-100 rounded-lg"
          width={350}
          height={350}
          quality={100}
          style={{
            boxShadow: "rgb(167, 139, 250) 1px -1px 141px 51px",
          }}
        />
      </div>
    </div>
  );
};

const emplyeeFeatures = [
  "Empower your workforce by enabling instant access to information",
  "Easy access to HR and company resources via any device",
  "Accelerate onboarding with personalized learning paths",
  "Automate workflows across your business systems",
  "Navigate time-off, benefits, and payroll effortlessly",
  "Support employees in their native language",
];

const supportFeatures = [
  "Train instantly on your support content",
  "Serve global customers in 50+ languages",
  "Integrate on the web, WhatsApp, SMS, and other channels",
  "Automatically measure resolutions",
  "Seamless live agent handoff for complex queries",
  "Understand the impact on key metrics like CSAT",
];

const salesSupportFeatures = [
  "Engage customers with personalized recommendations",
  "Provide support and upsell services across web, mobile, and social media",
  "Expand your market reach with multilingual sales support",
  "Reduce operational costs by up to 60%",
  "Automate and streamline the shopping experience on any platform",
  "Generate high-quality leads through intelligent interaction",
];

const modelImages = [
  "/models/anthropic.png",
  "/models/azure-openai.svg",
  "/models/hugging-face.png",
  "/models/mistral.png",
  "/models/gemini.svg",
  "/models/metaai.png",
  "/models/ollama.png",
  "/models/openai.png",
  "/models/replicate.png",
];

function ChatBotScript() {
  const BASE_URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.difyChatbotConfig = { 
        token: 'U60QO9NuXuI1E8q4', 
        isDev: true  , 
        baseUrl : "${BASE_URL}" 
      }
    `,
        }}
      />
      <script
        src="https://dify.angeltools.xyz/embed.min.js"
        id="U60QO9NuXuI1E8q4"
        defer
      ></script>
    </>
  );
}

export default function Page() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <ChatBotScript />
      <Navbar />
      <Hero />

      <Banner />
      <Testimonial />

      <FeatureSection
        borderColor="border-violet-300"
        top={<AllFeaturesHeading />}
        left={
          <AllFeaturesAccordion
            title="How various industries are already using Chatbotx"
            accordionContent={AllFeaturesAccordionContent}
          />
        }
        right={<RightFeature />}
      />

      <div className="flex flex-col gap-10">
        <UseCaseCard
          features={supportFeatures}
          colorScheme="pink"
          targetKey="ai-support-agent"
          icon={<RiTimerFlashLine className="text-pink-700" />}
          title="24x7 Customer Support"
          description="Resolve 70% of customer questions. Instantly."
          imageSrc="/features/pink.png"
          imageDirection="right"
        />

        <UseCaseCard
          features={emplyeeFeatures}
          targetKey="ai-employee-agent"
          colorScheme="purple"
          icon={<RiMessage2Line className="text-purple-600" />}
          title="Automated Employee Support"
          description="Enhance Workplace Efficiency and Morale. Effortlessly."
          imageSrc="/features/blue.png"
          imageDirection="right"
        />

        <UseCaseCard
          features={salesSupportFeatures}
          colorScheme="yellow"
          targetKey="ai-sales-agent"
          icon={<RiShoppingCartLine className="text-yellow-600" />}
          title="AI-Enhanced Conversational Commerce
"
          description="Revolutionize Customer Engagement
and Drive Sales"
          imageSrc="/features/yellow.png"
          imageDirection="left"
        />
      </div>
      <AppIntergration />
      <ModelAgnosticCarousel images={modelImages} />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-gradient-to-b pb-10 text-white from-sky-600 via-[#014AEB] to-blue-950 min-h-screen w-full ">
      <section className="max-w-5xl mx-auto px-4  text-center pt-44 pb-16 flex flex-col gap-3">
        <h1 className="text-3xl sm:text-5xl font-semibold ">
          <strong> Create a </strong>
          <strong className="textGradient">
            Custom AI Chatbot for Your Website
          </strong>{" "}
          <strong> in Minutes </strong>
        </h1>
        <h2 className="text-base sm:text-lg ">
          Chatbotx scans your website, files and help center to automatically
          handle 70% of customer queries, and automate customer engagement,
          support, sales, and more.
        </h2>

        <div className="flex flex-col mt-6 gap-2">
          <div className="z-10 flex  items-center justify-center">
            <Link href="/studio">
              <ShimmerButton>
                <span className="whitespace-pre-wrap text-center text-sm  font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
                  Create a AI Chatbot
                </span>
              </ShimmerButton>
            </Link>
          </div>
          <p className="text-xs">* No Credit Card Required</p>
        </div>
      </section>

      <section className="space-y-8 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-4 px-2 ">
          <FeatCard
            targetElement="ai-support-agent"
            className="bg-purple-300 "
            imageUrl="/features/small-pink.png"
            title="Chat with your website visitors"
          />
          <FeatCard
            targetElement="features"
            className="bg-violet-400"
            imageUrl="/features/small-purple.png"
            title="AI Student support"
          />
          <FeatCard
            targetElement="ai-employee-agent"
            imageUrl="/features/small-blue.png"
            className="bg-blue-300 "
            title="Automate customer support"
          />
          <FeatCard
            targetElement="ai-sales-agent"
            className="bg-yellow-200 "
            imageUrl="/features/small-yellow.png"
            title="Automate sales and marketing"
          />
        </div>

        <p className="text-base sm:text-2xl mx-auto text-center max-w-5xl">
          Leverage your data to{" "}
          <span className="text-cyan-200">
            instantly resolve 70% of user inquiries with precise, verifiable
            responses,
          </span>{" "}
          and deliver authentic customer experience in over{" "}
          <span className="text-cyan-200">50 languages </span>
          across varaious channels .
        </p>
      </section>
    </div>
  );
}

function Banner() {
  return (
    <h1 className="text-center text-2xl sm:text-4xl font-semibold mt-16">
      <span>Tranform you business with</span> <br />
      <span className="textGradient"> AI-powered automation </span>
    </h1>
  );
}

function ModelAgnosticCarousel({ images }: { images: string[] }) {
  const length = images.length;
  const firstCarouselItems = images.slice(0, length / 3);
  const secondCarouselItems = images.slice(length / 3, (length / 3) * 2);
  const thirdCarouselItems = images.slice((length / 3) * 2, length);

  return (
    <div className=" flex mt-16 mb-16 flex-col gap-5 px-4 overflow-hidden items-center justify-center ">
      <div>
        <h1 className="text-center text-2xl sm:text-4xl font-medium">
          We are Model Agnostic
        </h1>
        <h2 className="text-center text-base sm:text-lg  ">
          {" "}
          Flexible switching of LLMs across diverse applications, adapting to
          evolving business needs.
        </h2>
      </div>
      <div className="py-6 flex-col relative gap-2  max-w-5xl bg-white overflow-hidden">
        <Marquee className="[--duration:15s] [--gap:2rem]">
          {firstCarouselItems.map((image, index) => (
            <div
              key={index + "-testimonials"}
              className="p-2 rounded-md overflow-hidden border shadow-sm"
            >
              <div className="relative size-16  bg-white rounded-md">
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee className="[--duration:15s] [--gap:2rem]">
          {secondCarouselItems.map((image, index) => (
            <div
              key={index + "-testimonials"}
              className="p-2 rounded-md overflow-hidden border shadow-sm"
            >
              <div className="relative size-16  bg-white rounded-md">
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee className="[--duration:15s] [--gap:2rem]">
          {thirdCarouselItems.map((image, index) => (
            <div
              key={index + "-testimonials"}
              className="p-2 rounded-md overflow-hidden border shadow-sm"
            >
              <div className="relative size-16  bg-white rounded-md">
                <Image
                  src={image}
                  alt="image"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <div className="absolute transform flex items-center justify-center backdrop-blur-lg shadow-lg -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 size-28 border rounded-xl ">
          <SiteLogo className="size-24" />
        </div>
      </div>
    </div>
  );
}

function AppIntergration() {
  return (
    <div
      id="integrations"
      className="flex flex-col border rounded-2xl mx-4 bg-gradient-to-b from-blue-100 to-white lg:mx-auto max-w-7xl pb-10 px-4 my-16"
    >
      <h1 className="text-center translate-y-8 z-20 sm:text-4xl text-2xl">
        Unlimited Integrations
      </h1>
      <Integration />
    </div>
  );
}
