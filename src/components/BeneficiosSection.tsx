import { motion } from "framer-motion";
import { Home, Building2, Check } from "lucide-react";
import residenciasImg from "@/assets/beneficio-residencias.jpg";
import empresasImg from "@/assets/beneficio-empresas.jpg";
import solarPanelsBg from "@/assets/solar-panels-bg.jpg";

const cards = [
  {
    icon: Home,
    title: "Para residências",
    image: residenciasImg,
    imageAlt: "Família planejando economia de energia em casa",
    buttonText: "Simular para minha casa",
    benefits: [
      "Sem taxa de adesão e sem fidelidade",
      "Economia mensal na conta de luz",
      "Sem necessidade de obras no seu imóvel.",
      "Flexibilidade para readequar a demanda ao consumo.",
      "Transfira sua assinatura em caso de mudança de endereço.",
    ],
  },
  {
    icon: Building2,
    title: "Para empresas",
    image: empresasImg,
    imageAlt: "Empresário utilizando energia solar para o seu negócio",
    buttonText: "Simular para minha empresa",
    benefits: [
      "Economia garantida para investir no seu negócio",
      "Redução nos custos operacionais",
      "Contrato simples, sem fidelidade e sem taxa de adesão",
      "Sem necessidade de obras ou manutenção",
      "Energia limpa e sustentável",
    ],
  },
];

const BeneficiosSection = () => {
  return (
    <section
      id="beneficios"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #f6f7f2 0%, #eef0e6 100%)",
      }}
    >
      <div className="relative z-10 max-w-[1180px] mx-auto px-[6vw]">
        <motion.div
          initial={{ opacity: 0, y: 24, x: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 relative z-10"
        >
          <span
            className="block text-xs font-bold tracking-[0.18em] uppercase mb-3.5"
            style={{ color: "hsl(72 60% 32%)" }}
          >
            Nossos Benefícios
          </span>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.14 } }
            }}
            className="font-mont font-bold leading-[1.15] mb-5"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              color: "hsl(73 67% 32%)",
            }}
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Por</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">que</motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">escolher</motion.span>
            <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Energia</motion.span>
            <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Solar</motion.span>
            <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">Compartilhada?</motion.span>
          </motion.h2>
          <p
            className="text-base md:text-lg max-w-[640px] mx-auto leading-relaxed"
            style={{ color: "hsl(72 15% 30%)" }}
          >
            Conheça os benefícios e vantagens para a sua casa ou negócio com
            conta de luz a partir de R$300/mês.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 40, x: 20, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl overflow-hidden flex flex-col"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(72 73% 32% / 0.92) 0%, hsl(72 73% 26% / 0.92) 100%)",
                  boxShadow:
                    "0 22px 50px -20px hsl(72 60% 6% / 0.65), inset 0 1px 0 hsl(0 0% 100% / 0.12)",
                  border: "1px solid hsl(72 68% 65% / 0.28)",
                }}
              >
                {/* Background image overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url(${solarPanelsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Decorative ambient glow — matches Numeros card */}
                <div
                  aria-hidden
                  className="absolute -top-20 -right-16 w-64 h-64 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(75 85% 65% / 0.35) 0%, transparent 70%)",
                    filter: "blur(6px)",
                  }}
                />

                <div className="relative h-[260px] md:h-[300px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Image bottom fade into card */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 0%, hsl(73 70% 22% / 0.55) 100%)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 left-6 rounded-full flex items-center justify-center z-10 shrink-0"
                    style={{
                      width: "64px",
                      height: "64px",
                      aspectRatio: "1 / 1",
                      background:
                        "linear-gradient(135deg, hsl(48 99% 58%) 0%, hsl(42 99% 48%) 100%)",
                      boxShadow:
                        "0 12px 28px -6px hsl(40 90% 20% / 0.5), inset 0 1px 1px hsl(0 0% 100% / 0.4)",
                      border: "1.5px solid hsl(0 0% 100% / 0.7)",
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: "hsl(73 75% 18%)" }}
                      strokeWidth={2.4}
                    />
                  </div>
                </div>

                <div className="relative px-7 md:px-9 pt-12 pb-9 flex flex-col flex-1">
                  <h3
                    className="font-mont font-bold text-2xl md:text-[1.7rem] mb-6"
                    style={{
                      color: "hsl(0 0% 100%)",
                      textShadow: "0 2px 14px hsl(72 70% 8% / 0.45)",
                    }}
                  >
                    {card.title}
                  </h3>

                  <ul className="flex flex-col gap-3.5 mb-8 flex-1">
                    {card.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 text-[0.98rem] leading-snug"
                        style={{ color: "hsl(75 25% 92%)" }}
                      >
                        <Check
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "hsl(48 99% 60%)" }}
                          strokeWidth={2.6}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contato"
                    className="relative z-10 block w-full text-center font-mont font-bold py-4 rounded-xl transition-all hover:brightness-105 hover:-translate-y-0.5"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(48 99% 58%) 0%, hsl(42 99% 48%) 100%)",
                      color: "hsl(73 75% 16%)",
                      border: "1px solid hsl(45 100% 75% / 0.6)",
                      boxShadow:
                        "0 14px 32px -10px hsl(40 90% 25% / 0.55), inset 0 1px 1px hsl(0 0% 100% / 0.45)",
                    }}
                  >
                    {card.buttonText}
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Infinite line divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
        <div
          className="w-full max-w-[900px] h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, hsl(72 55% 65% / 0.35) 20%, hsl(72 55% 65% / 0.35) 80%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
};

export default BeneficiosSection;




