import Image from "next/image";
import TrendingSection from "./components/TrendingSection";
import ReasonsToJoin from "./components/ReasonsToJoin";
import FAQSection from "./components/FAQSection";
import EmailForm from "./components/EmailForm";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans antialiased selection:bg-[#E50914] selection:text-white overflow-x-hidden">

      <section className="relative h-[110vh] md:h-[115vh] min-h-[700px] w-full overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/netflix_bg.jpg"
            alt="Netflix Background"
            fill
            className="object-cover object-top scale-100"
            priority
          />
        </div>

        {/* Global Outer Gradients */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.58)_20%,rgba(0,0,0,0.76)_65%,rgba(0,0,0,0.92)_100%)]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_60%,rgba(0,0,0,1)_100%)]"
        />

        {/* Isolated Middle Content Shadow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-[850px] h-[450px] bg-black/45 blur-[100px] rounded-full transform -translate-y-[64px]" />
        </div>

        {/* Header Navigation */}
        <header className="absolute left-0 right-0 top-0 z-30 mx-auto flex w-full max-w-[1920px] items-center justify-between px-6 md:px-10 xl:px-40 pt-8">
          {/* Netflix Logo */}
          <Image
            src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"
            alt="Netflix Logo"
            width={148}
            height={40}
            className="w-[90px] md:w-[148px] h-auto"
            style={{ transform: 'translate(-4mm, -2mm)' }}
            priority
          />

          {/* Sign In Button */}
          <button
            style={{ transform: 'translate(3mm, -2mm)' }}
            className="flex items-center justify-center rounded bg-[#e50914] px-3 h-[28px] text-[13px] md:px-[17px] md:h-[33px] md:text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#c11119] cursor-pointer"
          >
            Sign In
          </button>
        </header>

        {/* Main Center Content Container */}
        <div className="relative z-20 flex h-[100vh] min-h-[600px] w-full flex-col items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center w-full max-w-[950px] transform xl:-translate-y-[-20px]">

            {/* H1 Primary Title */}
            <h1 className="text-[36px] md:text-[48px] xl:text-[57px] font-bold tracking-normal text-white leading-[1.3] max-w-[720px]">
              Unlimited movies, TV<br />shows, and more
            </h1>

            {/* Sub-heading */}
            <p className="mt-[16px] text-lg md:text-[19px] font-semibold tracking-wide text-white">
              Starts at USD 2.99. Cancel anytime.
            </p>

            {/* Call to Action Text */}
            <p className="mt-[24px] text-[17px] md:text-[16px] font-normal tracking-normal text-white transform xl:translate-y-[4px]">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <EmailForm idPrefix="hero" className="mt-6 items-center" />
          </div>
        </div>

        {/* Transition Element - bridges hero into the black content area below */}
        <div className="absolute inset-x-0 bottom-0 h-[115px] overflow-hidden pointer-events-none z-20">
          <svg
            viewBox="0 0 1440 160"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <defs>
              {/* Center Glow might not be 100% accurate, but it's close */}
              <radialGradient
                id="centerGlow"
                cx="50%" cy="0%" r="62%"
                gradientTransform="matrix(1,0,0,1.5,0,0)"
              >
                <stop offset="0%" stopColor="#15326b" stopOpacity="0.85" />
                <stop offset="30%" stopColor="#0f2352" stopOpacity="0.65" />
                <stop offset="60%" stopColor="#081230" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E50914" stopOpacity="0" />
                <stop offset="35%" stopColor="#F0102F" stopOpacity="1" />
                <stop offset="50%" stopColor="#FF2447" stopOpacity="1" />
                <stop offset="65%" stopColor="#F0102F" stopOpacity="1" />
                <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path d="M0,50 Q720,-30 1440,50 L1440,160 L0,160 Z" fill="#000000" />

            <path d="M0,50 Q720,-30 1440,50 L1440,160 L0,160 Z" fill="url(#centerGlow)" />

            <path
              d="M0,50 Q720,-30 1440,50"
              fill="none"
              stroke="url(#edgeGlow)"
              strokeWidth="5"
            />
          </svg>
        </div>



      </section>

      <TrendingSection />

      <ReasonsToJoin />

      <FAQSection />

      <Footer />

    </main>
  );
}