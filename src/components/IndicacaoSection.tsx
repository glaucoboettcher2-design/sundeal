import { motion } from "framer-motion";
import { ArrowUpRight, Sun } from "lucide-react";
import pessoaImg from "@/assets/indicacao-pessoa-lampada.png";

const IndicacaoSection = () => {
  return (
    <section
      id="indicacao"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
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

      <div className="relative z-10 max-w-[1180px] mx-auto px-[6vw] grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <h2
            className="font-mont font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3.6rem)",
              color: "hsl(0 0% 100%)",
              textShadow:
                "0 2px 18px hsl(0 0% 0% / 0.28), 0 0 32px hsl(0 0% 0% / 0.18)",
            }}
          >
            Indique,{" "}
            <span style={{ color: "hsl(48 100% 58%)" }}>
              economize e ganhe
            </span>{" "}
            mais com o{" "}
            <span className="relative inline-block">
              <span style={{ color: "hsl(48 100% 58%)" }}>Sundeal.</span>
              <span
                className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full"
                style={{ background: "hsl(48 100% 58%)" }}
              />
            </span>
          </h2>

          <p
            className="text-base md:text-lg mb-8 max-w-[520px] leading-relaxed"
            style={{
              color: "hsl(0 0% 100% / 0.92)",
              textShadow:
                "0 2px 14px hsl(0 0% 0% / 0.22), 0 0 28px hsl(0 0% 0% / 0.14)",
            }}
          >
            Cada indicação vale até{" "}
            <strong style={{ color: "hsl(48 100% 58%)" }}>
              R$ 300 ou comissão
            </strong>
            , ajudando você a economizar na conta de energia.
          </p>

          {/* White pill */}
          <div
            className="inline-flex items-center justify-center px-7 py-4 rounded-full mb-10"
            style={{
              background: "hsl(0 0% 100%)",
              boxShadow: "0 12px 28px -10px hsl(72 65% 15% / 0.35)",
            }}
          >
            <span
              className="font-mont font-bold text-sm md:text-base"
              style={{ color: "hsl(72 65% 22%)" }}
            >
              Indicação fácil, rápida e sem burocracia!
            </span>
          </div>

          {/* Sun icon decoration */}
          <Sun
            className="absolute -bottom-4 left-0 w-10 h-10 hidden md:block"
            style={{ color: "hsl(48 100% 58%)" }}
            strokeWidth={2.4}
          />
        </motion.div>

        {/* Right: Framed photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[600px] aspect-square overflow-visible">
            <img
              src={pessoaImg}
              alt="Pessoa segurando uma lâmpada e economizando com Sundeal"
              className="absolute pointer-events-none select-none z-10"
              style={{
                width: "92%",
                height: "92%",
                left: "50%",
                bottom: "8%",
                transform: "translateX(-50%)",
                objectFit: "contain",
                objectPosition: "center bottom",
                filter: "none",
              }}
              loading="lazy"
            />

            {/* CTA button — covers the flat bottom edge of the photo */}
            <a
              href="#contato"
              className="group absolute z-30 flex items-center gap-4 md:gap-5 pl-9 md:pl-12 pr-2 md:pr-2.5 py-2 md:py-2.5 rounded-full transition-all hover:brightness-105"
              style={{
                left: "50%",
                bottom: "4%",
                transform: "translateX(-50%)",
                background: "hsl(48 100% 58%)",
                boxShadow:
                  "0 18px 40px -12px hsl(48 80% 20% / 0.55), inset 0 1px 1px hsl(0 0% 100% / 0.4)",
              }}
            >
              <span
                className="font-mont font-bold tracking-wide text-lg md:text-xl whitespace-nowrap"
                style={{ color: "hsl(72 65% 18%)" }}
              >
                ENTRE E PARTICIPE
              </span>
              <span
                className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2"
                style={{ borderColor: "hsl(72 65% 18%)" }}
              >
                <ArrowUpRight
                  className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "hsl(72 65% 18%)" }}
                  strokeWidth={2.6}
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndicacaoSection;

