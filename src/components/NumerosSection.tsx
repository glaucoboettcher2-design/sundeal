import { motion } from "framer-motion";
import bgImage from "@/assets/numeros-parallax-bg.png";

type Stat = {
  eyebrow: string;
  value: string;
  title: string;
  description: string;
};

const stats: Stat[] = [
  {
    eyebrow: "Impacto Comercial",
    value: "+500",
    title: "unidades consumidoras atendidas",
    description: "Base de atendimento já consolidada em clientes conectados à solução.",
  },
  {
    eyebrow: "Resultado Econômico",
    value: "+1,5 mi",
    title: "em economia gerada",
    description: "Valor acumulado em redução de despesas com energia para os consumidores.",
  },
  {
    eyebrow: "Impacto Ambiental",
    value: "+3.800 t",
    title: "de emissões de CO₂ evitadas",
    description: "Contribuição direta para uma matriz mais limpa e para a mitigação de emissões.",
  },
  {
    eyebrow: "Compensação Verde",
    value: "+23 mil",
    title: "árvores plantadas",
    description: "Indicador equivalente de impacto positivo comunicado de forma simples ao público.",
  },
];

const NumerosSection = () => {
  return (
    <section
      id="numeros"
      className="relative w-full overflow-hidden py-24 md:py-32 lg:py-36"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >



      {/* Subtle green tint overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(72 55% 22% / 0.55) 0%, hsl(72 60% 18% / 0.6) 100%)",
        }}
      />


      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <h2
            className="font-mont font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4"
            style={{
              color: "hsl(0 0% 100%)",
              textShadow: "0 2px 14px hsl(72 60% 10% / 0.55)",
            }}
          >
            Números que reforçam{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(75 90% 70%) 0%, hsl(72 80% 55%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              confiança
            </span>
          </h2>
          <p
            className="text-base md:text-lg"
            style={{
              color: "hsl(0 0% 100% / 0.88)",
              textShadow: "0 1px 8px hsl(72 60% 10% / 0.5)",
            }}
          >
            Resultados consolidados da Sundeal em unidades atendidas, economia gerada e impacto ambiental positivo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.eyebrow}
              initial={{ opacity: 0, y: 36, x: 20, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
              className="group relative rounded-2xl p-6 md:p-7 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(72 73% 32% / 0.5) 0%, hsl(72 73% 26% / 0.4) 100%)",
                boxShadow:
                  "0 22px 50px -20px hsl(72 60% 6% / 0.65)",
                backdropFilter: "blur(18px) saturate(160%)",
                WebkitBackdropFilter: "blur(18px) saturate(160%)",
              }}
            >
              {/* Glass Borders */}
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(0 0% 100% / 0.5)",
                  WebkitMaskImage: "linear-gradient(135deg, black 0%, transparent 40%)",
                  maskImage: "linear-gradient(135deg, black 0%, transparent 40%)"
                }}
              />
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(48 99% 55% / 0.6)",
                  WebkitMaskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  maskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  boxShadow: "inset -5px -5px 20px hsl(48 99% 55% / 0.15)"
                }}
              />
              {/* Soft top highlight */}
              <div
                aria-hidden
                className="absolute -top-20 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, hsl(75 85% 65% / 0.35) 0%, transparent 70%)",
                  filter: "blur(4px)",
                }}
              />

              <p
                className="relative text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "hsl(75 85% 75%)" }}
              >
                {stat.eyebrow}
              </p>

              <p
                className="relative font-mont font-bold leading-none mb-4 text-4xl md:text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45 100% 70%) 0%, hsl(38 100% 56%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 2px 6px hsl(40 80% 30% / 0.45))",
                }}
              >
                {stat.value}
              </p>

              <p
                className="relative text-sm md:text-base font-semibold mb-2"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                {stat.title}
              </p>
              <p
                className="relative text-xs md:text-sm leading-relaxed"
                style={{ color: "hsl(0 0% 100% / 0.78)" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumerosSection;




