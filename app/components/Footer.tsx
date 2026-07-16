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
    <footer className="w-full bg-black py-10 md:py-16 mt-[-80px]">
      {/* 
        We align the max-width and horizontal padding identically to previous sections
        to ensure the left edge of the grid aligns perfectly with the rest of the page.
      */}
      <div className="mx-auto w-full max-w-[1440px] px-10 md:px-16 transform translate-x-[85px]">
        <div className="mb-10">
          <Link
            href="#"
            className="text-[#B3B3B3] text-[15px] underline hover:text-white transition-colors"
          >
            Questions? Contact us.
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-2 max-w-[1120px]">
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
      </div>
    </footer>
  );
}
