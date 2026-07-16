"use client";

import { useEffect, useRef, useState } from "react";
import EmailForm from "./EmailForm";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer: "New members can try 30 days of Netflix for USD 0. After the free trial ends, your plan will automatically renew at the regular price depending on the plan you select. Plans range from USD 2.99 to USD 9.99.\n\nWatch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device. No extra costs, cancel anytime.",
  },
  {
    question: "Where can I watch?",
    answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\nYou can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

function AccordionItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}

        className="flex w-full items-center justify-between bg-[#2d2d2d] hover:bg-[#414141] transition-colors duration-200 py-[22px] px-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-[22px] text-white font-light">{question}</span>
        <svg
          className={`w-10 h-10 text-white transition-transform duration-300 ease-out flex-shrink-0 ${isOpen ? "rotate-45" : "rotate-0"
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out bg-[#2d2d2d] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-white text-lg md:text-2xl leading-snug whitespace-pre-wrap border-t-2 border-black mt-[1px]">
            <div className="pt-5">{answer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState<{ left: number; width: number } | null>(null);

  // Dynamically tracks the layout bounds to match the cards grid perfectly
  useEffect(() => {
    function measure() {
      if (window.innerWidth < 1024) {
        setEdges(null);
        return;
      }
      const poster = document.getElementById("trending-first-poster");
      const indicator = document.getElementById("trending-scroll-indicator");
      const container = containerRef.current;
      if (!poster || !indicator || !container?.parentElement) return;

      const posterRect = poster.getBoundingClientRect();
      const indicatorRect = indicator.getBoundingClientRect();
      const parentRect = container.parentElement.getBoundingClientRect();

      setEdges({
        left: posterRect.left - parentRect.left,
        width: indicatorRect.right - posterRect.left,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-black w-full py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16">
        <h2
          id="faq-heading"
          className="mb-5 text-xl md:text-2xl font-medium text-white tracking-normal transform xl:translate-x-[85px] xl:translate-y-[-70px]"
        >
          Frequently Asked Questions
        </h2>

        <div
          ref={containerRef}
          style={edges ? { marginLeft: edges.left, width: edges.width } : undefined}
          className="transform xl:translate-x-[-70px] xl:translate-y-[-75px]"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Secondary Email Capture Block */}
        <div className="flex flex-col items-center justify-center mt-[-10px] mb-12 text-center">
          <p className="text-white font-normal text-[15px] mb-4">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <EmailForm idPrefix="faq" className="max-w-[800px] w-full" />
        </div>
      </div>
    </section>
  );
}