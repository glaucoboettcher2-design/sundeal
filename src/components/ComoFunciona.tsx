import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import video3etapas from "@/assets/3 etapas ok intra.mp4";

const stepData = [
  {
    num: "01",
    title: "Geração de energia limpa",
    text: "A Sundeal opera fazendas solares próprias, gerando energia 100% renovável conectada à rede da sua distribuidora.",
  },
  {
    num: "02",
    title: "Créditos injetados na rede",
    text: "Toda energia gerada é injetada na rede elétrica local. Em troca, recebemos créditos que abatem direto do seu consumo.",
  },
  {
    num: "03",
    title: "Fatura com desconto garantido",
    text: "Você continua recebendo a mesma conta de energia da distribuidora — só que com até 20% de desconto, todos os meses.",
  },
];

const ComoFunciona = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Tupla para guardar [passo atual, direção da animação]
  const [[activeStep, direction], setActiveStepState] = useState([0, 0]);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const setActiveStep = (newStep: number) => {
    setActiveStepState((prev) => [newStep, newStep > prev[0] ? 1 : -1]);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  // Força o carregamento do vídeo
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.addEventListener('loadedmetadata', () => setVideoLoaded(true));
    }
  }, []);

  // Lógica de reprodução do vídeo (Avançar e Voltar de trás pra frente)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoLoaded || isNaN(video.duration)) return;

    const targetPercentage = activeStep / (stepData.length - 1);
    const targetTime = targetPercentage * (video.duration - 0.1);

    let rafId: number;

    const animateVideo = () => {
      if (!video) return;
      
      const diff = targetTime - video.currentTime;
      
      // Se estiver muito próximo do alvo, para.
      if (Math.abs(diff) < 0.05) {
         if (!video.paused) video.pause();
         video.currentTime = targetTime;
         return;
      }

      if (diff > 0) {
         // Precisa avançar: dar o play nativo é perfeito
         if (video.paused) video.play().catch(() => {});
         rafId = requestAnimationFrame(animateVideo);
      } else {
         // Voltar: Agora que o vídeo é All-Intra, o MP4 processa todos os frames suavemente!
         if (!video.paused) video.pause();
         // Interpolação super suave e contínua do frame
         video.currentTime = video.currentTime + (diff * 0.12);
         rafId = requestAnimationFrame(animateVideo);
      }
    };

    rafId = requestAnimationFrame(animateVideo);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [activeStep, videoLoaded]);

  // Framer Motion Swipe config
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      // Swipe Left -> Next Step
      if (activeStep < stepData.length - 1) setActiveStep(activeStep + 1);
    } else if (swipe > swipeConfidenceThreshold) {
      // Swipe Right -> Prev Step
      if (activeStep > 0) setActiveStep(activeStep - 1);
    }
  };

  return (
    <>
      <section
        id="como-funciona"
        className="relative py-20 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(160deg, hsl(72 18% 92%) 0%, hsl(72 14% 84%) 85%, hsl(72 14% 84%) 100%)",
        }}
      >
        {/* Background blobs */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 80% 20%, hsl(72 65% 45% / 0.1) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-[6vw]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Coluna da Esquerda: Título (No mobile fica em cima) */}
            <div className="lg:col-span-4 flex flex-col lg:pt-16">
              <span className="block text-xs font-bold tracking-[0.12em] uppercase text-sundeal-green-mid mb-3.5">
                Como funciona
              </span>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.14 } }
                }}
                className="font-mont font-bold leading-[1.15] mb-6"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  color: "hsl(73 67% 32%)",
                }}
              >
                <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Três</motion.span>
                <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">etapas.</motion.span>
                <br />
                <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Zero</motion.span>
                <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">dor</motion.span>
                <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">de</motion.span>
                <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">cabeça.</motion.span>
              </motion.h2>
              
              <p className="text-[#566b2a]/85 text-[1.05rem] leading-relaxed max-w-[400px]">
                Transformamos o sol em desconto garantido na sua conta de luz, sem que você precise instalar nenhuma placa em casa.
              </p>
            </div>

            {/* Coluna da Direita: Card Único Premium */}
            <div className="lg:col-span-8">
              <div 
                className="flex flex-col w-full rounded-[2.5rem] overflow-hidden relative"
                style={{
                  background: "#e7e5e1",
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.15), 0 20px 40px -10px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,0.7)",
                }}
              >
                {/* Parte Superior: O Vídeo */}
                <div className="w-full relative bg-transparent flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={video3etapas}
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-auto object-contain"
                  />
                  {/* Fade com base 100% sólida para eliminar a linha de corte, dissipando suavemente acima */}
                  <div 
                    className="absolute bottom-[-1px] left-0 w-full h-10 md:h-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(231,229,225,1) 0%, rgba(231,229,225,1) 20%, rgba(231,229,225,0) 100%)" }}
                  />
                </div>

                {/* Parte Inferior: Slider de Texto Arrastável */}
                <div className="w-full h-[320px] sm:h-[280px] md:h-[260px] lg:h-[280px] relative z-20 flex flex-col bg-[#e7e5e1]">
                  
                  {/* Área arrastável */}
                  <motion.div 
                    className="flex-1 w-full cursor-grab active:cursor-grabbing px-6 sm:px-12 pt-6 pb-2"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                  >
                    <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                      <motion.div
                        key={activeStep}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="w-full h-full flex flex-col justify-center"
                      >
                        <div
                          className="font-mont text-sm font-bold tracking-[0.2em] mb-2"
                          style={{ color: "hsl(73 67% 32%)" }}
                        >
                          ETAPA {stepData[activeStep].num}
                        </div>
                        <h3
                          className="font-mont font-bold leading-tight mb-3"
                          style={{
                            fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)",
                            color: "hsl(73, 67%, 25%)",
                          }}
                        >
                          {stepData[activeStep].title}
                        </h3>
                        <p
                          className="text-[0.95rem] sm:text-[1.05rem] leading-relaxed font-medium"
                          style={{ color: "#4a5d23", opacity: 0.85 }}
                        >
                          {stepData[activeStep].text}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Controles de Navegação Fixos no rodapé do card */}
                  <div className="flex justify-between items-center px-6 sm:px-12 pb-8 md:pb-12 pt-0">
                    {/* Indicadores (Pontinhos) */}
                    <div className="flex gap-2">
                      {stepData.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`h-2.5 rounded-full transition-all duration-500 ${idx === activeStep ? 'w-10 bg-[#8dc63f] shadow-[0_0_8px_rgba(141,198,63,0.4)]' : 'w-2.5 bg-[#4a5d23]/15'}`}
                        />
                      ))}
                    </div>

                    {/* Setas Elegantes e Sofisticadas */}
                    <div className="flex gap-3 md:gap-4">
                      <button 
                        onClick={() => activeStep > 0 && setActiveStep(activeStep - 1)}
                        className={`p-3 md:p-3.5 rounded-full transition-all bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100/50 flex items-center justify-center text-[#566b2a] ${activeStep === 0 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]'}`}
                      >
                        <svg width="20" height="20" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                      </button>
                      <button 
                        onClick={() => activeStep < stepData.length - 1 && setActiveStep(activeStep + 1)}
                        className={`p-3 md:p-3.5 rounded-full transition-all bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-gray-100/50 flex items-center justify-center text-[#566b2a] ${activeStep === stepData.length - 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]'}`}
                      >
                        <svg width="20" height="20" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              {/* Texto explicativo inferior refinado e luxuoso */}
              <div className="flex justify-center mt-6 md:mt-10 px-4">
                <span className="text-[0.6rem] md:text-[0.8rem] font-semibold tracking-[0.15em] md:tracking-[0.2em] text-[#566b2a] uppercase bg-white/40 px-5 py-2 md:px-8 md:py-3 rounded-full backdrop-blur-md shadow-sm border border-white/50 cursor-default transition-all duration-500 hover:bg-white/60 text-center">
                  ← Arraste o card para trocar de etapa →
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

type Stat = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "number" | "currency-m";
  label: string;
};

const impactStats: Stat[] = [
  { target: 500, prefix: "+", label: "unidades consumidoras atendidas" },
  { target: 1.5, prefix: "+R$", suffix: "M", decimals: 1, label: "em economia gerada" },
  { target: 3800, prefix: "+", suffix: " ton", label: "de CO₂ evitadas" },
  { target: 23000, prefix: "+", label: "árvores plantadas" },
];

const formatNumber = (n: number, stat: Stat) => {
  const decimals = stat.decimals ?? 0;
  const fixed = n.toFixed(decimals);
  if (decimals > 0) {
    const [intPart, dec] = fixed.split(".");
    const intFmt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `${intFmt},${dec}`;
  }
  return Math.floor(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CountUp = ({ stat, duration = 1600 }: { stat: Stat; duration?: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(stat.target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stat, duration]);

  return (
    <span className="tabular-nums">
      {stat.prefix}
      {formatNumber(value, stat)}
      {stat.suffix}
    </span>
  );
};

export const ImpactStats = ({ variant = "dark" }: { variant?: "dark" | "light" } = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    if (!inView) return;
    setIndex(0);
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % impactStats.length;
      setIndex(i);
    }, 4100);
    return () => clearInterval(id);
  }, [inView]);

  const current = index >= 0 ? impactStats[index] : null;
  const isLight = variant === "light";

  const numberBg = isLight
    ? "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(0 0% 92%) 100%)"
    : "linear-gradient(135deg, hsl(72 65% 28%) 0%, hsl(72 71% 45%) 100%)";

  const labelColor = isLight
    ? "hsl(0 0% 100% / 0.92)"
    : "hsl(var(--sundeal-text-dark) / 0.75)";

  const dotActive = isLight ? "hsl(0 0% 100%)" : "hsl(72 71% 40%)";
  const dotIdle = isLight ? "hsl(0 0% 100% / 0.30)" : "hsl(72 20% 35% / 0.25)";

  return (
    <div ref={ref} className="mt-24 md:mt-32 flex flex-col items-center">
      <div className="relative w-full max-w-[560px] h-[180px] md:h-[200px] flex flex-col items-center">
        <AnimatePresence mode="wait">
          {current && (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24, x: 20, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="font-mont font-bold leading-none mb-3 md:mb-4"
                style={{
                  fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
                  background: numberBg,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: isLight
                    ? "drop-shadow(0 4px 14px hsl(0 0% 0% / 0.35))"
                    : undefined,
                }}
              >
                <CountUp stat={current} />
              </div>
              <div
                className="text-sm md:text-lg lg:text-xl leading-snug font-medium max-w-[320px] md:max-w-[460px]"
                style={{
                  color: labelColor,
                  textShadow: isLight
                    ? "0 2px 12px hsl(0 0% 0% / 0.35)"
                    : undefined,
                }}
              >
                {current.label}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mt-6 md:mt-8">
          {impactStats.map((_, i) => (
            <span
              key={i}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 28 : 8,
                background: i === index ? dotActive : dotIdle,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ComoFunciona;



