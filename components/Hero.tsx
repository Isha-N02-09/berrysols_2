import BlogStrip from "./BlogStrip";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      {/* Video background — drop in your source in /public and update the src below.
          `.hero-video-flip` mirrors it horizontally (transform: scaleX(-1)) — remove the
          class in globals.css or drop it from the element if you don't want the flip. */}
      <video
        className="hero-video-flip absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
      >
        <source src="https://berrysols-2.vercel.app/assets/hero-bg1.mp4" type="video/mp4" />
      </video>

      {/* darken video for text legibility */}
      <div className="absolute inset-0 bg-black/35" />

      {/* auto-scrolling blog strip — sits directly under the fixed navbar, on top of the hero */}
      <BlogStrip />

      {/* copy */}
      <div className="relative z-10 flex h-full max-w-3xl flex-col items-start justify-center px-6 md:px-16">
        <h1 className="font-poppins text-left text-[2.1rem] font-bold uppercase leading-[1.05] max-[359px]:text-[1.4rem] min-[640px]:max-[1279px]:text-[2.75rem] min-[1280px]:text-[3.3rem]">
          <span className="block text-white">From Chaos</span>
          <span className="block text-white">
            To{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Clarity
            </span>
          </span>
        </h1>
        <p className="mt-6 max-w-md text-left text-lg font-medium uppercase leading-relaxed text-white/70">
          BerrySols is a technology company delivering intelligent digital solutions through AI automation, custom software, web development, SEO, and digital marketing.
        </p>
          <a
          href="#sevices"
          className="mt-8 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-7 py-3 text-sm font-bold uppercase tracking-wide text-black"
        >
         Our Services
        </a>
      </div>
    </section>
  );
}
