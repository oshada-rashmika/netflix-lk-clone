import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans antialiased selection:bg-[#E50914] selection:text-white">

      <section className="relative h-screen w-full overflow-hidden">

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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.48)_20%,rgba(0,0,0,0.68)_65%,rgba(0,0,0,0.88)_100%)]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_85%,rgba(0,0,0,0.65)_100%)]"
        />

        {/* Isolated Middle Content Shadow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-[850px] h-[450px] bg-black/45 blur-[100px] rounded-full transform -translate-y-[64px]" />
        </div>

        {/* Header Navigation */}
        <header className="absolute left-0 right-0 top-0 z-20 mx-auto flex w-full max-w-[1920px] items-center justify-between px-10 pt-8 md:px-40">
          {/* Netflix Logo */}
          <Image
            src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"
            alt="Netflix Logo"
            width={148}
            height={40}
            style={{ transform: 'translate(-4mm, -2mm)' }}
            priority
          />

          {/* Sign In Button */}
          <button
            style={{ transform: 'translate(3mm, -2mm)' }}
            className="rounded bg-[#E50914] px-4 py-1.5 text-sm font-regular text-white transition-colors hover:bg-[#C11119]"
          >
            Sign In
          </button>
        </header>

        {/* Main Center Content Container */}
        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center w-full max-w-[950px] transform -translate-y-[34px]">

            {/* H1 Primary Title */}
            <h1 className="text-[32px] sm:text-[44px] md:text-[53px] font-semibold tracking-normal text-white leading-[1.3] max-w-[720px]">
              Unlimited movies, TV<br />shows, and more
            </h1>

            {/* Sub-heading */}
            <p className="mt-[16px] text-lg md:text-[19px] font-normal tracking-wide text-white">
              Starts at USD 2.99. Cancel anytime.
            </p>

            {/* Call to Action Text */}
            <p className="mt-[24px] text-base md:text-[15px] font-normal tracking-normal text-white transform translate-y-[4px]">
              Ready to watch? Enter your email to create or restart your membership.
            </p>

            <form className="mt-[7mm] flex w-full flex-row gap-1.5 justify-center items-center scale-[1.3]">

              {/* Email Input Field */}
              <div className="relative w-[7.6cm] group transform translate-y-[1px]">
                <input
                  type="email"
                  id="hero-email"
                  name="email"
                  placeholder=" "
                  autoComplete="email"
                  required
                  className="peer w-full h-11 rounded-[4px] border border-white/30 bg-[#161616]/70 px-3 pt-4 pb-1 text-white placeholder-transparent transition-all focus:border-white focus:outline-none focus:ring-1 focus:ring-white text-sm font-normal"
                />
                <label
                  htmlFor="hero-email"
                  className="absolute left-3 top-[13px] text-zinc-400 font-normal text-xs transition-all duration-150 transform origin-[0_0] pointer-events-none
                    peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                    peer-focus:-translate-y-[6px] peer-focus:scale-[0.75] peer-focus:text-zinc-400
                    peer-[:not(:placeholder-shown)]:-translate-y-[6px] peer-[:not(:placeholder-shown)]:scale-[0.75]"
                >
                  Email address
                </label>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="inline-flex h-11 w-[4.2cm] items-center justify-center gap-1.5 rounded-[4px] bg-[#E50914] px-2 text-lg font-medium text-white transition-colors duration-150 hover:bg-[#C11119] whitespace-nowrap active:scale-[0.99] transform translate-y-[1px]"
              >
                <span>Get Started</span>
                <svg
                  className="w-3 h-3 text-white stroke-[3] transform translate-y-[0.5px]"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 1L11.5 8L4.5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}