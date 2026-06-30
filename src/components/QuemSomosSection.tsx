import { motion } from "framer-motion";
import { ShieldCheck, Scale, Leaf, MapPin, Award } from "lucide-react";
import buildingBg from "@/assets/sundeal-building.jpg";

const badges = [
  {
    icon: Scale,
    title: "Segurança jurídica",
    desc: "Amparado por norma específica do setor elétrico.",
  },
  {
    icon: ShieldCheck,
    title: "Compensação por créditos",
    desc: "Você segue com a distribuidora e recebe o crédito na fatura.",
  },
  {
    icon: Leaf,
    title: "Sem obras no imóvel",
    desc: "Nenhuma placa. Nenhuma instalação. Só a economia.",
  },
];

const QuemSomosSection = () => {
  return (
    <section
      id="quem-somos"
      aria-labelledby="quem-somos-title"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: `url(${buildingBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark olive overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(72 45% 12% / 0.45) 0%, hsl(72 55% 14% / 0.78) 55%, hsl(72 60% 10% / 0.9) 100%)",
        }}
      />

      {/* Subtle radial highlight */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, hsl(48 90% 65% / 0.10) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, hsl(72 70% 50% / 0.18) 0%, transparent 55%)",
        }}
      />


      {/* Top + bottom hairline dividers (infinity-style: thicker in center, fading to edges) */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 pointer-events-none z-20"
        style={{
          height: "2px",
          background:
            "radial-gradient(ellipse 50% 100% at 50% 50%, hsl(72 40% 55% / 0.75) 0%, hsl(72 40% 55% / 0.4) 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 pointer-events-none z-20"
        style={{
          height: "2px",
          background:
            "radial-gradient(ellipse 50% 100% at 50% 50%, hsl(72 40% 55% / 0.75) 0%, hsl(72 40% 55% / 0.4) 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-[1180px] mx-auto px-[6vw] py-20 md:py-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14, x: 20, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <span
            className="h-px w-10"
            style={{ background: "hsl(48 90% 65% / 0.7)" }}
          />
          <span
            className="text-[0.7rem] font-bold tracking-[0.28em] uppercase"
            style={{ color: "hsl(48 90% 78%)" }}
          >
            Sobre nós
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left — narrative */}
          <motion.div
            initial={{ opacity: 0, y: 28, x: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.14 } }
              }}
              id="quem-somos-title"
              className="font-mont font-bold leading-[1.05] mb-7"
              style={{
                fontSize: "clamp(2.1rem, 4vw, 3.6rem)",
                color: "hsl(0 0% 100%)",
                letterSpacing: "-0.015em",
                textShadow: "0 2px 30px hsl(72 60% 8% / 0.6)",
              }}
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Quem</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">é</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">a</motion.span>
              <motion.span style={{ backgroundImage: "linear-gradient(135deg, #ffd633 0%, #fecb04 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">Sundeal</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">?</motion.span>
            </motion.h2>

            <p
              className="text-[1rem] md:text-[1.05rem] leading-relaxed max-w-[560px] mb-8"
              style={{ color: "hsl(72 20% 92%)" }}
            >
              Somos uma empresa tocantinense especializada em{" "}
              <strong style={{ color: "hsl(48 90% 80%)" }}>
                energia por assinatura
              </strong>
              . Reduzimos a conta de luz de empresas e residências por meio de
              usinas próprias e parceiras — sem placas, sem obras e sem
              investimento inicial.
            </p>

            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: MapPin, label: "Atuação no Tocantins" },
                { icon: null, label: "Usinas próprias e parceiras" },
                { icon: null, label: "Sem placas no imóvel" },
              ].map((tag, i) => {
                const Icon = tag.icon;
                return (
                  <motion.span
                    key={tag.label}
                    initial={{ opacity: 0, y: 10, x: 20, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                    className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[0.78rem] font-semibold"
                    style={{
                      background: "hsl(0 0% 100% / 0.08)",
                      border: "1px solid hsl(0 0% 100% / 0.18)",
                      color: "hsl(72 25% 94%)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />}
                    {tag.label}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Legal stamp + badges */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: 20, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative lg:mt-2"
          >
            {/* Legal stamp card */}
            <div
              className="relative rounded-2xl p-6 md:p-7 mb-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(0 0% 100% / 0.7) 0%, hsl(75 25% 98% / 0.6) 100%)",
                boxShadow:
                  "0 40px 80px -30px hsl(72 60% 6% / 0.7)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              {/* Glass Borders */}
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(0 0% 100% / 0.8)",
                  WebkitMaskImage: "linear-gradient(135deg, black 0%, transparent 40%)",
                  maskImage: "linear-gradient(135deg, black 0%, transparent 40%)"
                }}
              />
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(48 99% 55% / 0.7)",
                  WebkitMaskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  maskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  boxShadow: "inset -5px -5px 20px hsl(48 99% 55% / 0.15)"
                }}
              />

              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-60"
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
                      "0 10px 24px -6px hsl(72 60% 18% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
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
                    style={{ color: "hsl(72 55% 35%)" }}
                  >
                    Marco legal · Geração distribuída
                  </p>
                  <p
                    className="font-mont font-bold leading-none mb-2"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 1.95rem)",
                      color: "hsl(72 60% 18%)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Lei nº 14.300/2022
                  </p>
                  <p
                    className="text-[0.78rem] leading-snug"
                    style={{ color: "hsl(72 15% 35%)" }}
                  >
                    Modelo regulamentado pela legislação brasileira — segurança
                    jurídica do começo ao fim.
                  </p>
                </div>
              </div>
            </div>

            {/* CIETEC/USP Card */}
            <div
              className="relative rounded-2xl p-6 md:p-7 mb-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(0 0% 100% / 0.7) 0%, hsl(75 25% 98% / 0.6) 100%)",
                boxShadow:
                  "0 40px 80px -30px hsl(72 60% 6% / 0.7)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
              }}
            >
              {/* Glass Borders */}
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(0 0% 100% / 0.8)",
                  WebkitMaskImage: "linear-gradient(135deg, black 0%, transparent 40%)",
                  maskImage: "linear-gradient(135deg, black 0%, transparent 40%)"
                }}
              />
              <div 
                className="absolute inset-0 rounded-2xl border-[1px] pointer-events-none"
                style={{ 
                  borderColor: "hsl(48 99% 55% / 0.7)",
                  WebkitMaskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  maskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                  boxShadow: "inset -5px -5px 20px hsl(48 99% 55% / 0.15)"
                }}
              />

              <div
                aria-hidden
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-60"
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
                      "0 10px 24px -6px hsl(72 60% 18% / 0.6), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
                  }}
                >
                  <Award
                    className="w-6 h-6"
                    style={{ color: "hsl(0 0% 100%)" }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="font-mont font-bold leading-tight mb-2"
                    style={{
                      fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
                      color: "hsl(72 60% 18%)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Empresa do Norte brasileiro incubada pelo CIETEC/USP.
                  </p>
                  <p
                    className="text-[0.8rem] leading-snug"
                    style={{ color: "hsl(72 15% 35%)" }}
                  >
                    Esse histórico reforça a base tecnológica, a inovação e a maturidade do
                    modelo de negócios da Sundeal.
                  </p>
                </div>
              </div>
            </div>


          </motion.div>
        </div>

        {/* Badges Horizontal Footer */}
        <div className="flex flex-col lg:flex-row gap-4 mt-8 md:mt-12 w-full">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.35 + i * 0.1,
                }}
                className="group flex-1 flex flex-row items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "hsl(0 0% 100% / 0.07)",
                  border: "1px solid hsl(0 0% 100% / 0.14)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(72 60% 35%) 0%, hsl(72 65% 28%) 100%)",
                    border: "1px solid hsl(72 50% 50% / 0.4)",
                    boxShadow: "0 4px 12px -4px hsl(72 70% 10% / 0.5)",
                  }}
                >
                  <Icon
                    className="w-[22px] h-[22px]"
                    style={{ color: "hsl(48 90% 78%)" }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="min-w-0">
                  <p
                    className="font-mont text-[0.95rem] font-bold leading-tight mb-1"
                    style={{ color: "hsl(0 0% 100%)" }}
                  >
                    {b.title}
                  </p>
                  <p
                    className="text-[0.82rem] leading-snug"
                    style={{ color: "hsl(72 20% 80%)" }}
                  >
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuemSomosSection;


