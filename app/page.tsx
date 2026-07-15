import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">

      <section className="relative h-screen w-full overflow-hidden">

        {/*Background Image*/}
        <div className="absolute inset-0">
          <Image
            src="https://assets.nflxext.com/ffe/siteui/vlv3/eaa165a3-80a7-44cb-8df6-be1a7e225369/web/LK-en-20260706-TRIFECTA-perspective_71f2e304-505f-471d-98ab-37fb2d6f793b_medium.jpg"
            alt="Netflix Background"
            fill
            className="object-cover object-top scale-110 translate-y-8"
            priority
          />
        </div>

        {/*The Gradient and the exact image scaling aren't 100% accurate, But it's close*/}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.48)_20%,rgba(0,0,0,0.68)_65%,rgba(0,0,0,0.88)_100%)]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_15%,rgba(0,0,0,0)_85%,rgba(0,0,0,0.65)_100%)]"
        />

        <div className="relative z-10">
        </div>
      </section>

    </main>
  );
}