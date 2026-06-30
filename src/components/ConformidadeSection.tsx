import { motion } from "framer-motion";
import { ShieldCheck, Scale, Leaf } from "lucide-react";

const badges = [
  {
    icon: Scale,
    title: "Segurança jurídica",
    desc: "Modelo amparado por norma específica do setor elétrico.",
  },
  {
    icon: ShieldCheck,
    title: "Compensação por créditos",
    desc: "Você segue com a distribuidora e recebe o crédito na fatura.",
  },
  {
    icon: Leaf,
    title: "Sem obras no imóvel",
    desc: "Nenhuma placa, nenhuma instalação. Só a economia.",
  },
];

const ConformidadeSection = () => {
  return (
    <section
      id="conformidade"
      aria-labelledby="conformidade-title"
      className="relative overflow-hidden py-24 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, #f6f7f2 0%, #eef0e6 60%, #f6f7f2 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, hsl(72 65% 70% / 0.18) 0%, transparent 55%), radial-gradient(ellipse at 15% 90%, hsl(72 65% 60% / 0.14) 0%, transparent 60%)",
        }}
      />

      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(72 60% 35% / 0.25), transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-[6vw]">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 24, x: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-[0.7rem] font-bold tracking-[0.22em] uppercase mb-5"
              style={{ color: "hsl(72 60% 32%)" }}
            >
              Marco legal e segurança jurídica
            </span>

            <h2
              id="conformidade-title"
              className="font-mont font-bold leading-[1.1] mb-6"
              style={{
                fontSize: "clamp(1.9rem, 3.2vw, 2.9rem)",
                color: "hsl(72 60% 22%)",
              }}
            >
              Um modelo{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(72 73% 36%) 0%, hsl(72 73% 42%) 60%, hsl(72 70% 46%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                regulamentado
              </span>{" "}
              pela legislação brasileira.
            </h2>

            <p
              className="text-[0.98rem] md:text-base leading-relaxed max-w-[520px]"
              style={{ color: "hsl(72 15% 28%)" }}
            >
              A Sundeal opera no modelo de{" "}
              <strong style={{ color: "hsl(72 55% 22%)" }}>
                geração distribuída
              </strong>
              , amparado pela{" "}
              <strong style={{ color: "hsl(72 55% 22%)" }}>
                Lei nº 14.300/2022
              </strong>
              . Você recebe o desconto via compensação de créditos diretamente
              na sua fatura — sem instalar nada no seu imóvel.
            </p>
          </motion.div>

          {/* Right — selo + badges */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative"
          >
            <div
              className="relative rounded-2xl p-7 md:p-8 mb-5 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(0 0% 100%) 0%, hsl(75 25% 98%) 100%)",
                border: "1px solid hsl(72 40% 80% / 0.6)",
                boxShadow:
                  "0 30px 60px -28px hsl(72 50% 18% / 0.28), 0 2px 6px hsl(72 30% 20% / 0.05), inset 0 1px 0 hsl(0 0% 100%)",
              }}
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, hsl(72 70% 70% / 0.35) 0%, transparent 70%)",
                }}
              />

              <div className="relative flex items-start gap-4">
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(72 73% 36%) 0%, hsl(72 70% 28%) 100%)",
                    boxShadow:
                      "0 8px 20px -6px hsl(72 60% 25% / 0.55), inset 0 1px 0 hsl(0 0% 100% / 0.25)",
                  }}
                >
                  <ShieldCheck
                    className="w-6 h-6"
                    style={{ color: "hsl(0 0% 100%)" }}
                    strokeWidth={2.2}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className="text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-1.5"
                    style={{ color: "hsl(72 50% 38%)" }}
                  >
                    Geração distribuída
                  </p>
                  <p
                    className="font-mont font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      color: "hsl(72 60% 20%)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Lei nº 14.300/2022
                  </p>
                  <p
                    className="text-[0.78rem] leading-snug"
                    style={{ color: "hsl(72 15% 38%)" }}
                  >
                    Marco Legal da Microgeração e Minigeração Distribuída no
                    Brasil.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              {badges.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.25 + i * 0.08,
                    }}
                    className="group flex items-center gap-3.5 rounded-xl px-4 py-3 transition-all duration-300 hover:translate-x-1"
                    style={{
                      background:
                        "linear-gradient(180deg, hsl(0 0% 100% / 0.7) 0%, hsl(75 25% 96% / 0.5) 100%)",
                      border: "1px solid hsl(72 40% 75% / 0.4)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(72 60% 92%) 0%, hsl(72 50% 84%) 100%)",
                        border: "1px solid hsl(72 50% 70% / 0.4)",
                      }}
                    >
                      <Icon
                        className="w-[18px] h-[18px]"
                        style={{ color: "hsl(72 65% 28%)" }}
                        strokeWidth={2.2}
                      />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="font-mont text-[0.82rem] font-bold leading-tight"
                        style={{ color: "hsl(72 55% 20%)" }}
                      >
                        {b.title}
                      </p>
                      <p
                        className="text-[0.72rem] leading-snug mt-0.5"
                        style={{ color: "hsl(72 15% 38%)" }}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(72 60% 35% / 0.22), transparent)",
        }}
      />
    </section>
  );
};

export default ConformidadeSection;

