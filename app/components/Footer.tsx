import Link from "next/link";

const FOOTER_LINKS = [
  "FAQ",
  "Help Center",
  "Account",
  "Media Center",
  "Investor Relations",
  "Jobs",
  "Ways to Watch",
  "Terms of Use",
  "Privacy",
  "Cookie Preferences",
  "Corporate Information",
  "Contact Us",
  "Speed Test",
  "Legal Notices",
  "Only on Netflix",
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 md:py-16 xl:mt-[-80px]">
      {/* 
        We align the max-width and horizontal padding identically to previous sections
        to ensure the left edge of the grid aligns perfectly with the rest of the page.
      */}
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 transform xl:translate-x-[85px]">
        <div className="mb-10">
          <Link
            href="#"
            className="text-[#B3B3B3] text-[15px] underline hover:text-white transition-colors"
          >
            Questions? Contact us.
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[40px] gap-y-2 max-w-[1120px]">
          {FOOTER_LINKS.map((link) => (
            <li key={link}>
              <Link
                href="#"
                className="text-[#B3B3B3] text-[13px] font-normal underline tracking-[-0.3px]"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Locale Selector Dropdown */}
        <div className="relative inline-flex items-center mt-[52px]">
          <div className="flex items-center bg-[#0f0f0f] border border-neutral-500 hover:border-white transition-colors rounded-[4px] px-3 py-[4px] pointer-events-none">
            {/* Translation Glyph SVG from public/translate.svg */}
            <svg
              className="w-3.5 h-3.5 text-white mr-[6px]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.92}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="0.5" y1="3.35" x2="12" y2="3.35" />
              <line x1="6.25" y1="0.48" x2="6.25" y2="3.35" />
              <path d="M9.12,3.35c0,3.52-3.28,8.2-7.66,10.55" />
              <path d="M4.51,7.37A16.4,16.4,0,0,0,11,13.9" />
              <polyline points="12.96 22.52 16.79 11.98 17.75 11.98 21.58 22.52" />
              <line x1="20.43" y1="18.69" x2="15.07" y2="18.69" />
              <line x1="11.04" y1="22.52" x2="14.88" y2="22.52" />
              <line x1="19.67" y1="22.52" x2="23.5" y2="22.52" />
            </svg>
            <span className="text-white text-[14px] font-normal leading-none">English</span>
            {/* Down Arrow SVG */}
            <svg className="w-3 h-3 text-white ml-[10px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
          {/* Overlay accessible select */}
          <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-[#B3B3B3]">
            <option value="en">English</option>
          </select>
        </div>

        {/* Country Text */}
        <div className="mt-9 text-[#B3B3B3] text-[14px] font-normal">
          Netflix Sri Lanka
        </div>

        {/* Legal Text */}
        <div className="mt-8 text-[#737373] text-[11px] font-normal leading-normal max-w-[800px]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </div>
      </div>
    </footer>
  );
}
