import BlogStrip from "./BlogStrip";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[520px] w-full overflow-hidden bg-black max-[767px]:h-auto max-[767px]:overflow-visible">
      <video
        className="hero-video-flip absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="hidden sm:block">
        <BlogStrip />
      </div>

      <div className="relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-4 pb-6 pt-20 sm:px-8 sm:pt-0 md:px-16">
        <h1 className="font-poppins text-left text-[2rem] font-bold uppercase leading-[0.96] max-[359px]:text-[1.5rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[3.3rem]">
          <span className="block text-black">From Chaos</span>
          <span className="block text-black">
            To{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Clarity
            </span>
          </span>
        </h1>
        <p className="mt-5 max-w-[90vw] text-left text-sm font-medium uppercase leading-relaxed text-black/70 sm:mt-6 sm:max-w-md sm:text-base md:text-lg">
          BerrySols is a technology company delivering intelligent digital solutions through AI automation, custom software, web development, SEO, and digital marketing.
        </p>

        <div className="mt-7 flex gap-3 max-[767px]:flex-row">
          <a
            href="#portfolio"
            className="rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-black sm:px-7 sm:text-sm"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="hidden max-[767px]:inline-flex rounded-full border border-white/60 bg-white/10 px-5 py-3 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:px-7 sm:text-sm"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="relative z-10 block sm:hidden">
        <BlogStrip />
      </div>
    </section>
  );
}
