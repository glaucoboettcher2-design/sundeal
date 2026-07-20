import { motion } from "framer-motion";
import { Home, Building2, Check, Calculator, CircleDollarSign, FileText, ShieldCheck, Zap } from "lucide-react";
import residenciasImg from "@/assets/beneficio-residencias-new.png";
import empresasImg from "@/assets/beneficio-empresas-new.png";
import solarPanelsBg from "@/assets/solar-panels-bg.jpg";

const cards = [
  {
    icon: Home,
    title1: "Para",
    title2: "residências",
    image: residenciasImg,
    imageAlt: "Família na sala de estar utilizando um tablet",
    subtitle: "Mais economia para o seu dia a dia.",
    buttonText: "Quero simular minha economia",
    benefits: [
      "Sem taxa de adesão",
      "Economia mensal na conta de luz",
      "Sem necessidade de obras no seu imóvel",
      "Flexibilidade para readequar a demanda",
    ],
  },
  {
    icon: Building2,
    title1: "Para",
    title2: "empresas",
    image: empresasImg,
    imageAlt: "Empresário utilizando notebook em um escritório",
    subtitle: "Reduza custos e aumente a competitividade.",
    buttonText: "Quero simular minha economia",
    benefits: [
      "Economia garantida para investir no seu negócio",
      "Redução nos custos operacionais",
      "Contrato simples, sem fidelidade e sem taxa de adesão",
    ],
  },
];

const features = [
  { icon: CircleDollarSign, text: "Até 20% de economia\nna sua conta de luz" },
  { icon: FileText, text: "Processo 100% digital\ne sem burocracia" },
  { icon: ShieldCheck, text: "Regulamentado\npela ANEEL" },
  { icon: Zap, text: "Você continua com\na Energisa" },
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
      <div className="relative z-10 max-w-[1280px] mx-auto px-[5vw] lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 relative z-10"
        >
          <h2
            className="font-mont font-bold leading-[1.15] mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              color: "hsl(73 67% 24%)",
            }}
          >
            Energia por assinatura para o que mais importa para você
          </h2>
          <p
            className="text-base md:text-[1.1rem] max-w-[700px] mx-auto leading-relaxed"
            style={{ color: "hsl(72 15% 40%)" }}
          >
            Economize todos os meses sem instalar placas, sem obras e sem investimento.
          </p>
        </motion.div>

        {/* Cards Side-by-Side */}
        <div className="grid xl:grid-cols-2 gap-8 md:gap-10 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title2}
                initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-[2rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]"
                style={{
                  background: "linear-gradient(135deg, hsl(72 73% 30%) 0%, hsl(72 73% 22%) 100%)",
                  border: "1px solid hsl(72 68% 65% / 0.2)",
                }}
              >
                {/* Texture Overlay */}
                <div
                  className="absolute inset-0 z-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url(${solarPanelsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Left Content Area */}
                <div className="relative z-10 w-full md:w-[55%] lg:w-[50%] p-8 md:p-10 flex flex-col justify-between order-2 md:order-1">
                  <div>
                    {/* Icon Header */}
                    <div className="mb-6">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                        style={{
                          background: "linear-gradient(135deg, #F5B000 0%, #D48C00 100%)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-[#1a1000]" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    {/* Title & Subtitle */}
                    <h3 className="font-mont font-bold text-3xl md:text-4xl leading-tight mb-3 text-white">
                      {card.title1} <span style={{ color: "#F5B000" }}>{card.title2}</span>
                    </h3>
                    <p className="text-white/90 text-[0.95rem] mb-6">
                      {card.subtitle}
                    </p>

                    <div className="w-12 h-[1px] bg-white/50 mb-6" />

                    {/* Benefits List */}
                    <ul className="flex flex-col gap-3.5 mb-8">
                      {card.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[0.9rem] leading-snug text-white/95">
                          <div className="w-5 h-5 rounded-full bg-[#F5B000] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#1a1000]" strokeWidth={3} />
                          </div>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <a
                    href="#contato"
                    className="relative z-10 w-full inline-flex items-center justify-center gap-2 font-mont font-bold py-3.5 px-4 rounded-xl transition-all hover:brightness-110 hover:-translate-y-0.5 text-[0.9rem]"
                    style={{
                      background: "hsl(72 73% 40%)", // Lighter green for button
                      color: "white",
                      boxShadow: "0 8px 20px -6px rgba(0,0,0,0.3)",
                      border: "1px solid rgba(255,255,255,0.15)"
                    }}
                  >
                    <Calculator className="w-4 h-4" />
                    {card.buttonText}
                  </a>
                </div>

                {/* Right Image Area */}
                <div 
                  className="relative w-full md:w-[45%] lg:w-[50%] h-64 md:h-auto shrink-0 order-1 md:order-2 [-webkit-mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_25%)] [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_25%)]"
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:origin-right"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Feature Pills Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "hsl(72 73% 24%)" }}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <p 
                  className="text-[0.85rem] font-semibold leading-tight whitespace-pre-line"
                  style={{ color: "hsl(72 20% 20%)" }}
                >
                  {feature.text}
                </p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default BeneficiosSection;
