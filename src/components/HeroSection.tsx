import { useEffect, type CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import promoVideo from "@/assets/sundeal-promo.mp4";

export const HeroSection = () => {
  const heroSweepStyle = {
    "--hero-sweep-delay": "0s",
    "--hero-sweep-duration": "8s",
  } as CSSProperties;

  useEffect(() => {
    const timer = setTimeout(() => {
      const videos = document.querySelectorAll<HTMLVideoElement>('.promo-video');
      videos.forEach((video) => {
        // Only play the video that is currently visible on the screen
        if (video.offsetParent !== null) {
          video.volume = 0.25;
          video.play().catch((err) => {
            console.warn("Autoplay with sound blocked by browser. Falling back to muted.", err);
            video.muted = true;
            video.play().catch(() => {}); // catch further errors silently
          });
        } else {
          // Ensure hidden videos are paused so they don't play audio in the background
          video.pause();
        }
      });
    }, 3800);
    return () => clearTimeout(timer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, x: 50, filter: "blur(12px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 1.1,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: 40, filter: "blur(10px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="hero-ready relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        ...heroSweepStyle,
        background:
          "linear-gradient(135deg, hsl(72 65% 32%) 0%, hsl(72 68% 28%) 55%, hsl(72 71% 24%) 100%)",
      }}
    >
      {/* Decorative organic circles */}
      <div
        className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "hsl(72 65% 48% / 0.55)" }}
      />
      <div
        className="absolute top-20 right-32 w-[180px] h-[180px] rounded-full pointer-events-none"
        style={{ background: "hsl(72 65% 42% / 0.45)" }}
      />
      <div
        className="absolute bottom-10 left-[42%] w-[120px] h-[120px] rounded-full pointer-events-none"
        style={{ background: "hsl(72 65% 48% / 0.35)" }}
      />
      <div
        className="absolute top-1/3 left-8 w-[90px] h-[90px] rounded-full pointer-events-none"
        style={{ background: "hsl(72 65% 50% / 0.25)" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-[6vw] pt-40 md:pt-56 pb-28 md:pb-36 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-16">
          {/* Left column */}
          <div className="flex-1 text-center md:text-left md:mt-10 lg:mt-16">
            {/* Title - always full width */}
            <div className="mb-10 md:mb-12 lg:mb-10">
              <div className="inline-flex flex-col items-center md:items-start">
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="font-mont font-bold flex flex-col items-center md:items-start"
                style={{
                  color: "hsl(0 0% 100%)",
                }}
              >
                <span className="block leading-[1] mb-[-0.05em]" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", textShadow: "0 2px 10px hsl(0 0% 0% / 0.15), 0 0 18px hsl(0 0% 0% / 0.10)" }}>
                  Economize até
                </span>
                <span className="block" style={{ filter: "drop-shadow(0 2px 6px hsl(0 0% 0% / 0.25)) drop-shadow(0 4px 16px hsl(0 0% 0% / 0.15))" }}>
                  <span className="hero-title-sweep-highlight hero-sweep-sync block leading-[0.85] tracking-tighter pr-2 md:pr-4" style={{ fontSize: "clamp(7.5rem, 15vw, 12rem)", color: "hsl(48 99% 55%)" }}>
                    20%
                  </span>
                </span>
                <span className="block leading-[1] mt-2" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", textShadow: "0 2px 10px hsl(0 0% 0% / 0.15), 0 0 18px hsl(0 0% 0% / 0.10)" }}>
                  na conta de luz
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="h-[2px] w-full max-w-[85%] md:max-w-[90%] mt-8 self-center md:self-start origin-center md:origin-left"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, hsl(48 99% 55%) 50%, transparent 100%)",
                  borderRadius: "50%",
                  boxShadow: "0 2px 10px rgba(220,160,0,0.5)"
                }}
              />
              </div>
            </div>

            {/* Tablet: subtitles + video side by side */}
            <div className="md:flex md:flex-row md:items-center md:gap-12 lg:block">
              {/* Subtitles */}
              <div className="mb-10 md:mb-0 lg:mb-12 md:flex-1">
                <motion.ul
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-montserrat font-normal text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] tracking-[0.02em] leading-snug max-w-[820px] lg:max-w-none flex flex-col gap-3 md:gap-3.5 list-none p-0 m-0 items-start w-fit mx-auto md:mx-0 lg:mx-0"
                  style={{
                    filter:
                      "drop-shadow(0 6px 5px rgba(0,0,0,0.42)) drop-shadow(0 2px 2px rgba(0,0,0,0.3))",
                  }}
                >
                  {[
                    { text: "Sem obras.", highlight: false },
                    { text: "Sem taxas.", highlight: false },
                    { text: "Sem pegadinha.", highlight: false },
                    { text: "Só o desconto.", highlight: true },
                  ].map((item, i) => (
                    <motion.li variants={listItemVariants} key={i} className="flex items-center gap-3">
                      <svg
                        viewBox="0 0 24 24"
                        className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
                        aria-hidden="true"
                        style={{
                          color: item.highlight ? "hsl(48 95% 60%)" : "hsl(0 0% 100%)",
                        }}
                      >
                        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.2" />
                        {item.highlight ? (
                          <path d="M7.5 12.5 L10.8 15.8 L17 8.8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        ) : (
                          <>
                            <path d="M8.5 8.5 L15.5 15.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                            <path d="M15.5 8.5 L8.5 15.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
                          </>
                        )}
                      </svg>
                      {item.highlight ? (
                        <span style={{ filter: "drop-shadow(0 1px 2px hsl(0 0% 0% / 0.3)) drop-shadow(0 2px 8px hsl(0 0% 0% / 0.2))" }}>
                          <span className="hero-title-sweep-highlight hero-sweep-sync font-mont font-bold">
                            {item.text}
                          </span>
                        </span>
                      ) : (
                        <span
                          className="hero-title-sweep-muted hero-sweep-sync font-mont font-bold"
                        >
                          {item.text}
                        </span>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile video — placed right after the first subtitle */}
                <div
                  className="block md:hidden w-full max-w-[260px] mx-auto mt-12 mb-8 animate-heroContent relative"
                  style={{ animationDelay: "3.0s" }}
                >
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
                      aspectRatio: "9/16",
                    }}
                  >
                    <video
                      src={promoVideo}
                      loop
                      playsInline
                      controls
                      preload="auto"
                      className="promo-video absolute inset-0 w-full h-full object-cover"
                      style={{ borderRadius: "inherit" }}
                    />
                  </div>
                  {/* CTA Button overlay for mobile */}
                  <div className="flex justify-center -mt-1 relative z-30">
                    <a
                      href="#contato"
                      className="cta-glow-button hero-sweep-sync group flex items-center gap-8 pl-16 pr-3 py-1 !rounded-full !overflow-visible transition-all"
                    >
                      <span className="font-mont font-bold tracking-[0.15em] text-[0.8rem] whitespace-nowrap" style={{ color: "hsl(72 65% 18%)" }}>
                        SIMULAR DESCONTO
                      </span>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{ borderColor: "hsl(72 65% 18%)" }}>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "hsl(72 65% 18%)" }} strokeWidth={2.6} />
                      </span>
                    </a>
                  </div>
                </div>

                <p
                  className="animate-heroContent font-montserrat font-normal text-[1.05rem] md:text-[1.15rem] lg:text-[1.25rem] leading-relaxed max-w-[620px] lg:max-w-[700px] mt-6 md:mt-8 lg:mt-14"
                  style={{ animationDelay: "3.0s", color: "hsl(0 0% 98%)", filter: "drop-shadow(0 4px 4px rgba(0,0,0,0.4)) drop-shadow(0 2px 2px rgba(0,0,0,0.28))" }}
                >
                  Sua empresa já paga energia todo mês. Agora, com a Sundeal, paga
                  menos — sem mudar nada na sua rotina.
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div
              className="flex flex-wrap justify-center md:justify-start gap-4 mt-12 md:mt-10 lg:mt-14 animate-heroContent"
              style={{ animationDelay: "3.0s", filter: "drop-shadow(0 6px 5px rgba(0,0,0,0.42)) drop-shadow(0 2px 2px rgba(0,0,0,0.3))" }}
            >
              <a
                href="#como-funciona"
                className="inline-block border border-white/25 bg-white/5 text-white font-bold text-[0.95rem] px-8 py-4 rounded-xl hover:bg-white/15 hover:border-white/40 transition-all"
              >
                Como funciona
              </a>
            </div>

            <p
              className="text-on-dark-soft text-xs mt-4 animate-heroContent"
              style={{ animationDelay: "3.0s" }}
            >
              Sem compromisso · Análise gratuita · 100% digital
            </p>
          </div>

          {/* Right: Promo video — visible on tablet & desktop, hidden on mobile */}
          <div
            className="flex-shrink-0 w-full max-w-[320px] lg:max-w-[380px] xl:max-w-[420px] animate-heroContent hidden md:block relative"
            style={{ animationDelay: "3.0s" }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
                aspectRatio: "9/16",
              }}
            >
              <video
                src={promoVideo}
                loop
                playsInline
                controls
                preload="auto"
                className="promo-video absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: "inherit" }}
              />
            </div>
            
            {/* CTA button — overlaps the flat bottom edge of the video */}
            <div className="flex justify-center -mt-1 relative z-30">
              <a
                href="#contato"
                className="cta-glow-button hero-sweep-sync group flex items-center gap-6 md:gap-8 lg:gap-14 pl-10 md:pl-12 lg:pl-24 pr-3 md:pr-4 py-1.5 md:py-2 !rounded-full !overflow-visible transition-all"
              >
                <span
                  className="font-mont font-bold tracking-[0.15em] text-[0.95rem] md:text-[1.05rem] lg:text-[1.15rem] whitespace-nowrap"
                  style={{ color: "hsl(72 65% 18%)" }}
                >
                  SIMULAR DESCONTO
                </span>
                <span
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border-2 shrink-0"
                  style={{ borderColor: "hsl(72 65% 18%)" }}
                >
                  <ArrowUpRight
                    className="w-5 h-5 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "hsl(72 65% 18%)" }}
                    strokeWidth={2.6}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Curved divider — pure mask-cut into the next section's exact gradient (no color band) */}
      <div
        className="absolute left-0 right-0 z-10 pointer-events-none leading-[0]"
        style={{ bottom: "-1px" }}
        aria-hidden="true"
      >
        <div
          className="relative w-full h-[36px] md:h-[50px] lg:h-[64px] overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 80% 20%, hsl(72 65% 45% / 0.1) 0%, transparent 55%), linear-gradient(160deg, hsl(72 18% 92%) 0%, hsl(72 14% 84%) 100%)",
            backgroundPosition: "top left, top left",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "100% 920px, 100% 920px",
            WebkitMaskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 64' preserveAspectRatio='none'><path d='M0,0 Q720,46 1440,0 L1440,64 L0,64 Z' fill='black'/></svg>\")",
            maskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 64' preserveAspectRatio='none'><path d='M0,0 Q720,46 1440,0 L1440,64 L0,64 Z' fill='black'/></svg>\")",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
