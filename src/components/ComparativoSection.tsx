import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  Home,
  Sun,
  ShieldCheck,
  ArrowRight,
  Zap,
  Calendar
} from "lucide-react";

import houseIcon from "@/assets/trad_icon_3d.png";
import sundealIcon from "@/assets/sundeal_icon_3d.png";
import solarPanelsBg from "@/assets/solar-panels-bg.jpg";
import sundealStep1 from "@/assets/sundeal-step-1.png";
import sundealStep2 from "@/assets/sundeal-step-2.png";
import sundealStep3 from "@/assets/sundeal-step-3.png";
import sundealStep4 from "@/assets/sundeal-step-4.png";
import sundealStep5 from "@/assets/sundeal-step-5.png";
import tradStep1 from "@/assets/trad-step-1.png";
import tradStep2 from "@/assets/trad-step-2.png";
import tradStep3 from "@/assets/trad-step-3.png";
import tradStep4 from "@/assets/trad-step-4.png";
import tradStep5 from "@/assets/trad-step-5.png";
import tradStep6 from "@/assets/trad-step-6.png";
import tradStep7 from "@/assets/trad-step-7.png";
import tradStep8 from "@/assets/trad-step-8.png";
import tradStep9 from "@/assets/trad-step-9.png";

const traditionalSteps = [
  { image: tradStep1, label: "Pesquisar instaladoras" },
  { image: tradStep2, label: "Análise e orçamento" },
  { image: tradStep3, label: "Aprovação do projeto" },
  { image: tradStep4, label: "Aprovação da distribuidora" },
  { image: tradStep5, label: "Investimento inicial" },
  { image: tradStep6, label: "Instalação das placas" },
  { image: tradStep7, label: "Vistoria e ativação" },
  { image: tradStep8, label: "Retorno em 4-7 anos" },
];

const sundealSteps = [
  { image: sundealStep1, label: "Envie sua fatura atual", desc: "100% online e sem compromisso." },
  { image: sundealStep2, label: "Receba a simulação", desc: "Veja sua economia na hora." },
  { image: sundealStep3, label: "Assine digitalmente", desc: "Rápido, fácil e seguro." },
  { image: sundealStep5, label: "Desconto na próxima fatura", desc: "Sua conta mais barata." },
];

const ComparativoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      id="comparativo"
      ref={sectionRef}
      className="relative overflow-x-clip py-24 md:py-36 px-4 md:px-[6vw]"
      style={{ background: "hsl(75 25% 96%)" }}
    >
      {/* Background Section Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, hsl(72 50% 90% / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="block text-xs font-bold tracking-[0.18em] uppercase mb-3.5"
            style={{ color: "hsl(72 65% 25%)" }}
          >
            O Fim da Burocracia
          </motion.span>
          <motion.h2
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="font-mont font-extrabold leading-[1.1] mb-6"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.8rem)",
              color: "hsl(73 67% 20%)",
              letterSpacing: "-0.02em",
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="block mb-2"
            >
              Duas formas de usar energia solar.
            </motion.span>
            <motion.span
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(48 99% 45%) 0%, hsl(42 99% 40%) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="block"
            >
              Uma delas você começa hoje.
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-[1.15rem] max-w-[640px] mx-auto leading-relaxed"
            style={{ color: "hsl(72 15% 40%)" }}
          >
            Esqueça o alto investimento e a obra demorada. Com a Sundeal, você assina a energia solar e recebe o desconto direto na fatura.
          </motion.p>
        </div>

        {/* Cards Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          
          {/* Card Esquerdo: Tradicional (Desaturado, Claro) */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col rounded-[2rem] overflow-hidden relative"
            style={{
              background: "linear-gradient(160deg, hsl(0 0% 92%) 0%, hsl(0 0% 82%) 100%)",
              border: "1px solid hsl(0 0% 100%)",
              boxShadow: "0 30px 60px -20px rgba(0,0,0,0.1)",
            }}
          >
            {/* Header Tradicional */}
            <div className="px-8 md:px-12 pt-12 pb-8 flex flex-col items-center text-center">
              <div
                className="w-28 h-28 flex items-center justify-center mb-6 relative"
              >
                <img src={houseIcon} alt="Tradicional" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <h3
                className="font-mont font-extrabold text-[1.8rem] leading-tight mb-4"
                style={{ color: "hsl(0 0% 15%)" }}
              >
                Instalação
                <br />
                <span style={{ color: "hsl(0 80% 50%)" }}>Tradicional</span>
              </h3>
              
              <div className="flex items-center gap-3 mt-2">
                <div className="h-[1px] w-6" style={{ background: "rgba(0,0,0,0.15)" }} />
                <span
                  className="text-[0.75rem] font-bold tracking-[0.1em] uppercase"
                  style={{ color: "rgba(0,0,0,0.5)" }}
                >
                  Mais etapas. Mais tempo. Mais investimento.
                </span>
                <div className="h-[1px] w-6" style={{ background: "rgba(0,0,0,0.15)" }} />
              </div>
            </div>

            <div className="px-8 md:px-12 pb-12 flex-1 flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-flow-col md:grid-rows-4 gap-x-4 gap-y-6 relative">
                {traditionalSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-5 relative z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-white"
                      style={{
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(0,0,0,0.05)"
                      }}
                    >
                      <img src={step.image} alt={step.label} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="text-[0.95rem] font-semibold leading-tight"
                      style={{ color: "hsl(0 0% 25%)" }}
                    >
                      <span className="mr-2" style={{ color: "rgba(0,0,0,0.3)" }}>{idx + 1}.</span>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Tradicional */}
            <div
              className="p-6 flex flex-col sm:flex-row items-center justify-center gap-3 border-t"
              style={{
                background: "rgba(0,0,0,0.04)",
                borderColor: "rgba(0,0,0,0.08)",
                color: "hsl(0 0% 35%)",
              }}
            >
              <Clock className="w-5 h-5 opacity-70" strokeWidth={2} />
              <span className="text-[0.95rem] md:text-[1.05rem] font-bold tracking-wide text-center">
                Processo longo • Alto investimento
              </span>
            </div>
          </motion.div>

          {/* VS Badge Central (Absolute on Desktop, block on Mobile) */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45, x: "-50%", y: "-50%" }}
            animate={isInView ? { scale: 1, opacity: 1, rotate: 0, x: "-50%", y: "-50%" } : {}}
            transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.6 }}
            className="absolute left-1/2 top-1/2 z-30 w-24 h-24 rounded-full hidden lg:flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, hsl(48 99% 55%) 0%, hsl(42 99% 48%) 100%)",
              boxShadow: "0 10px 20px -5px rgba(220, 160, 0, 0.6), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2)",
              border: "4px solid hsl(75 25% 96%)",
            }}
          >
            <span
              className="font-mont font-black text-3xl italic tracking-tighter"
              style={{ color: "white", textShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
            >
              VS
            </span>
          </motion.div>

          {/* VS Badge Mobile */}
          <div className="flex justify-center my-4 lg:hidden relative z-20">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, hsl(48 99% 55%) 0%, hsl(42 99% 48%) 100%)",
                boxShadow: "0 15px 30px -5px rgba(220, 160, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.4)",
                border: "4px solid hsl(75 25% 96%)",
              }}
            >
              <span className="font-mont font-black text-3xl italic tracking-tighter text-white drop-shadow-md">VS</span>
            </div>
          </div>

          {/* Card Direito: Sundeal (Premium, Vibrante, Glassmorphism 3D) */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col rounded-[2rem] overflow-hidden relative shadow-2xl"
            style={{
              background: "linear-gradient(160deg, hsl(72 75% 24%) 0%, hsl(72 75% 16%) 100%)",
              boxShadow: "0 40px 80px -20px hsl(72 60% 15% / 0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
              border: "1px solid hsl(72 60% 35%)"
            }}
          >
            {/* Background Image Texture com Overlay */}
            <div
              className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url(${solarPanelsBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            
            {/* Decorative Glow inside Sundeal Card */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-40 blur-3xl"
              style={{ background: "radial-gradient(circle, hsl(75 80% 60%) 0%, transparent 70%)" }}
            />

            {/* Header Sundeal */}
            <div className="relative z-10 px-8 md:px-12 pt-12 pb-8 flex flex-col items-center text-center">
              {/* Ícone 3D Sundeal */}
              <div
                className="w-32 h-32 flex items-center justify-center mb-6 relative group"
              >
                <img src={sundealIcon} alt="Sundeal" className="w-full h-full object-contain mix-blend-screen transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <h3
                className="font-mont font-extrabold text-[2rem] leading-tight mb-4"
                style={{ color: "white", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
              >
                Sundeal por
                <br />
                <span style={{ color: "hsl(48 95% 55%)" }}>Assinatura</span>
              </h3>
              
              <div className="flex items-center gap-3 mt-2 relative z-10">
                <div className="h-[1px] w-6" style={{ background: "rgba(255,255,255,0.2)" }} />
                <span
                  className="text-[0.75rem] font-bold tracking-[0.1em] uppercase"
                  style={{ color: "hsl(48 95% 65%)" }}
                >
                  Mais simples. Sem investimento. Comece agora.
                </span>
                <div className="h-[1px] w-6" style={{ background: "rgba(255,255,255,0.2)" }} />
              </div>
            </div>

            {/* Steps Sundeal */}
            <div className="relative z-10 px-8 md:px-12 pb-12 flex-1 flex flex-col justify-center gap-8">
              {sundealSteps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  {/* Ícone 3D do Passo */}
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      boxShadow: "0 10px 20px -5px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    <img src={step.image} alt={step.label} className="w-[85%] h-[85%] object-contain drop-shadow-xl" />
                  </div>
                  <div>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider mb-1" style={{ color: "hsl(48 95% 55%)" }}>
                      Passo 0{idx + 1}
                    </span>
                    <span className="block text-[1.1rem] font-bold leading-tight mb-1" style={{ color: "white" }}>
                      {step.label}
                    </span>
                    <span className="block text-[0.85rem] leading-snug" style={{ color: "hsl(72 20% 70%)" }}>
                      {step.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Sundeal */}
            <div
              className="relative z-10 p-6 flex flex-col sm:flex-row items-center justify-center gap-3 backdrop-blur-md"
              style={{
                background: "rgba(0,0,0,0.2)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                color: "hsl(48 95% 60%)",
              }}
            >
              <CheckCircle2 className="w-5 h-5 drop-shadow-md" strokeWidth={2.5} />
              <span className="text-[0.95rem] md:text-[1.05rem] font-bold tracking-wide text-white text-center">
                Rápido • Sem investimento • Comece hoje
              </span>
            </div>
          </motion.div>
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="mt-20 md:mt-28 flex flex-col items-center"
        >
          <a
            href="#contato"
            className="group relative flex items-center gap-4 px-10 md:px-14 py-5 md:py-6 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, hsl(48 99% 55%) 0%, hsl(42 99% 45%) 100%)",
              boxShadow: "0 20px 40px -10px rgba(220, 160, 0, 0.5), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.5)"
            }}
          >
            {/* Efeito de brilho passando no botão */}
            <div className="absolute inset-0 w-[200%] h-full -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" 
                 style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)" }} />
                 
            <Calendar className="w-7 h-7 text-yellow-950 relative z-10" strokeWidth={2.5} />
            <span className="font-mont font-black text-[1.2rem] md:text-[1.4rem] text-yellow-950 tracking-tight relative z-10">
              Simular meu desconto agora
            </span>
            <ArrowRight className="w-7 h-7 text-yellow-950 transition-transform group-hover:translate-x-2 relative z-10" strokeWidth={3} />
          </a>
          <div className="flex items-center gap-2 mt-6 opacity-80">
            <ShieldCheck className="w-5 h-5" style={{ color: "hsl(72 60% 25%)" }} />
            <span className="text-[0.9rem] font-bold" style={{ color: "hsl(72 60% 25%)" }}>
              Seguro, 100% online e sem compromisso
            </span>
          </div>
        </motion.div>
      </div>

      {/* Tailwind Custom Keyframes para o botão shimmer */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default ComparativoSection;
