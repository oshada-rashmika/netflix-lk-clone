"use client";

import { useEffect, useRef, useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQS: FAQ[] = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n\nYou can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
];

function AccordionItem({ question, answer }: FAQ) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}

        className="flex w-full items-center justify-between bg-[#2d2d2d] hover:bg-[#414141] transition-colors duration-200 py-[20px] px-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-[22px] text-white font-light">{question}</span>
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

      {/* Smooth height transition wrapper */}
      <div
        className={`grid transition-all duration-300 ease-out bg-[#2d2d2d] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          {/* Adjusted internal padding for consistency */}
          <div className="px-6 pb-5 text-white text-2xl leading-snug whitespace-pre-wrap border-t-2 border-black mt-[1px]">
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
          className="mb-5 text-xl md:text-2xl font-medium text-white tracking-normal transform translate-x-[85px] translate-y-[-75px]"
        >
          Frequently Asked Questions
        </h2>

        {/* Accordion Container matching the exact positioning math of the cards grid */}
        <div
          ref={containerRef}
          style={edges ? { marginLeft: edges.left, width: edges.width } : undefined}
          className="transform translate-x-[-70px] translate-y-[-75px]"
        >
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}