"use client";

import type { FormEvent } from "react";

interface EmailFormProps {
  idPrefix: string;
  className?: string;
}

export default function EmailForm({ idPrefix, className = "" }: EmailFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col md:flex-row gap-[18px] md:gap-2 justify-center w-full ${className}`}
    >
      <div className="relative w-full md:flex-1 xl:w-[400px] md:max-w-[400px]">
        <input
          type="email"
          id={`${idPrefix}-email`}
          name="email"
          placeholder=" "
          autoComplete="email"
          required
          className="peer w-full h-[60px] rounded-[4px] border border-white/30 bg-[#161616]/70 px-4 pt-[22px] pb-[6px] text-white placeholder-transparent transition-all focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-base font-normal"
        />
        <label
          htmlFor={`${idPrefix}-email`}
          className="absolute left-4 top-[20px] text-zinc-400 font-normal text-base transition-all duration-150 transform origin-[0_0] pointer-events-none
            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
            peer-focus:-translate-y-[8px] peer-focus:scale-[0.75] peer-focus:text-zinc-400
            peer-[:not(:placeholder-shown)]:-translate-y-[8px] peer-[:not(:placeholder-shown)]:scale-[0.75]"
        >
          Email address
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex h-[45px] md:h-[60px] w-[55%] md:w-[210px] items-center justify-center gap-2 md:gap-2.5 rounded-[4px] bg-[#E50914] px-4 md:px-6 text-lg md:text-2xl font-medium text-white transition-all duration-300 hover:bg-[#C11119] whitespace-nowrap active:scale-[0.99] shrink-0"
      >
        <span>Get Started</span>
        <svg
          className="w-3 h-3 md:w-4 md:h-4 text-white stroke-[2.5]"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 1L11.5 8L4.5 15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
