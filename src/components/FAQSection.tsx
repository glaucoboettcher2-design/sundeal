import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z" />
  </svg>
);

const WHATSAPP_URL =
  "https://wa.me/5563999999999?text=" +
  encodeURIComponent(
    "Olá! Quero simular minha economia com a Sundeal."
  );

const faqData = [
  {
    question: "Preciso instalar alguma coisa na minha empresa?",
    answer: 'Não. <strong>Absolutamente nada.</strong> Nenhuma placa, nenhum equipamento, nenhuma obra. A energia é gerada nas nossas usinas e o desconto é creditado diretamente na sua fatura pela distribuidora.',
    defaultOpen: true,
  },
  {
    question: "Tem taxa de adesão ou taxa de administração?",
    answer: '<strong>Nenhuma.</strong> Sem taxa de entrada, sem mensalidade de administração, sem taxas escondidas. Você paga apenas a sua fatura de energia — com 20% de desconto.',
    defaultOpen: true,
  },
  {
    question: "Preciso ser proprietário do imóvel?",
    answer: 'Não. A assinatura é feita com o <strong>CNPJ da empresa</strong>, não com o imóvel. Funciona em imóvel alugado, em condomínio comercial, em qualquer tipo de estabelecimento.',
  },
  {
    question: "O desconto de 20% é garantido todo mês?",
    answer: 'O desconto é <strong>garantido em contrato</strong>. Nossa equipe monitora continuamente a geração e compensação. Você recebe um relatório mensal com todos os dados.',
  },
  {
    question: "Quanto tempo para o desconto aparecer na fatura?",
    answer: 'Após a assinatura, realizamos o cadastro junto à distribuidora. O processo leva em média <strong>30 a 60 dias</strong>. A partir daí, o desconto aparece automaticamente em todas as faturas seguintes.',
  },
  {
    question: "Como funciona o contrato? Tem fidelidade?",
    answer: 'O contrato é <strong>flexível</strong>. Não há longa fidelidade obrigatória. Você pode encerrar com aviso prévio de 15 dias, sem multa.',
  },
  {
    question: "Minha empresa precisa ter fatura mínima para aderir?",
    answer: 'Sim. O modelo é mais vantajoso para empresas com <strong>fatura mensal acima de R$ 1.000</strong>. Use a calculadora no topo da página para simular sua economia.',
  },
  {
    question: "A Sundeal atende em toda a região?",
    answer: 'Atendemos em todo o <strong>estado do Tocantins</strong>. Para confirmar a disponibilidade na sua cidade, preencha o formulário abaixo e nossa equipe verifica em até 24 horas.',
  },
];

const FAQItem = ({ question, answer, defaultOpen = false }: { question: string; answer: string; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-sundeal-green/[0.15] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center py-5 w-full text-left gap-5 group"
      >
        <span className="font-mont text-[0.95rem] font-bold text-sundeal-text-dark leading-snug group-hover:text-sundeal-green-mid transition-colors">
          {question}
        </span>
        <span
          className={`w-7 h-7 rounded-full bg-sundeal-green/10 border border-sundeal-green/20 flex items-center justify-center text-base text-sundeal-green-mid flex-shrink-0 transition-all duration-300 ${
            open ? "bg-sundeal-green/[0.18] border-sundeal-green rotate-45 text-sundeal-green-dark" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-400"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <div
          className="pb-5 text-[0.88rem] text-sundeal-text-muted leading-relaxed"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      </div>
    </div>
  );
};

const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0", "translate-x-0", "blur-0");
            e.target.classList.remove("opacity-0", "translate-y-8", "translate-x-8", "blur-md");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const reveals = sectionRef.current?.querySelectorAll(".reveal-item");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 25,
    restDelta: 0.001
  });

  const yParallax = useTransform(smoothProgress, [0, 1], ["12%", "-12%"]);

  return (
    <>
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(72 65% 45% / 0.22), transparent)" }} />
      <section
        id="faq"
        ref={sectionRef}
        className="relative overflow-hidden py-32 px-[6vw]"
        style={{
          background: "linear-gradient(170deg, hsl(72 18% 92%) 0%, hsl(72 16% 88%) 60%, hsl(72 14% 84%) 100%)"
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 90% 10%, hsl(72 65% 45% / 0.08) 0%, transparent 50%)"
        }} />

        {/* Dynamic Background Logo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <motion.div
            style={{ 
              y: yParallax, 
              position: 'absolute',
              top: '40%',
              left: '75%', // shifted right
              width: '1200px',
              height: '1200px',
              marginLeft: '-600px', // center horizontally based on new width
              marginTop: '-600px',  // center vertically
            }}
            className="opacity-[0.35] blur-[2px] select-none pointer-events-none"
          >
            <img
              src="/faq-bg-icon.png"
              alt=""
              className="w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))"
              }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto">
          <div className="mb-12">
            <span className="reveal-item opacity-0 translate-y-8 translate-x-8 blur-md transition-all duration-700 block text-xs font-bold tracking-[0.12em] uppercase text-sundeal-green-mid mb-3.5">
              Dúvidas frequentes
            </span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.14 } }
              }}
              className="font-mont font-bold leading-[1.15]"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "hsl(73 67% 32%)",
              }}
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">Perguntas</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">que</motion.span>
              <br />
              <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">a</motion.span>
              <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">gente</motion.span>
              <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block mr-[0.25em]">mais</motion.span>
              <motion.span style={{ backgroundImage: "linear-gradient(135deg, hsl(48 99% 48%) 0%, hsl(45 99% 45%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }} variants={{ hidden: { opacity: 0, y: 15, x: 10, filter: "blur(8px)" }, visible: { opacity: 1, y: 0, x: 0, filter: "blur(0px)", transition: { duration: 0.8 } } }} className="inline-block">recebe</motion.span>
            </motion.h2>
          </div>

          <div className="relative z-10">
            {faqData.map((faq, i) => (
              <FAQItem key={i} {...faq} />
            ))}
          </div>
        </div>

        {/* CTA Card injected from former ContatoSection */}
        {/* New Registration Form CTA */}
        <div className="relative z-10 max-w-[1180px] mx-auto mt-20">
          <div
            className="reveal-item opacity-0 translate-y-8 translate-x-8 blur-md transition-all duration-700 relative overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] min-h-[500px]"
          >
            {/* Unified Background Layer (Decoupled for perfect bleeding) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[40px]">
              {/* Right column solid background */}
              <div className="absolute right-0 top-0 bottom-0 w-full md:w-[45%] bg-[#FFFCF3]"></div>
              
              {/* Concentric Circles - Moved down and right, slightly larger, slightly transparent */}
              <div className="absolute right-0 top-0 bottom-0 w-full md:w-[45%] pointer-events-none opacity-[0.70]">
                 <div className="absolute top-[60%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                   {/* Circle 1 */}
                   <div className="absolute rounded-full bg-[#FFF9D4] aspect-square" style={{ width: '150%' }}></div>
                   {/* Circle 2 */}
                   <div className="absolute rounded-full bg-[#FEF0A0] aspect-square" style={{ width: '120%' }}></div>
                   {/* Circle 3 */}
                   <div className="absolute rounded-full bg-[#FEE168] aspect-square" style={{ width: '90%' }}></div>
                   {/* Circle 4 */}
                   <div className="absolute rounded-full bg-[#FCD53D] aspect-square" style={{ width: '60%' }}></div>
                 </div>
              </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col md:flex-row items-stretch h-full">
              {/* Left Column (Form) */}
              <div className="w-full md:w-[55%] p-10 md:p-14 lg:p-16 text-left flex flex-col justify-center">
                <h2 className="font-mont font-extrabold text-[1.8rem] md:text-[2.2rem] leading-[1.1] mb-3 text-[#79941E]">
                  Cadastre-se para<br /> economizar ou investir!
                </h2>
                <p className="text-[#888888] font-medium text-[0.95rem] md:text-[1rem] mb-8 max-w-[90%]">
                  Deixe suas informações abaixo que a Sundeal vai entrar<br className="hidden md:block" /> em contato com você!
                </p>
                
                <form className="flex flex-col gap-5 w-full max-w-[500px]">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] font-bold text-[#888888] ml-1">Nome:</label>
                    <input type="text" placeholder="Seu nome completo" className="bg-[#F8F9F5] rounded-[16px] px-5 py-3.5 text-[0.95rem] text-[#4a4a4a] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#8CA420]/50 w-full" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[0.8rem] font-bold text-[#888888] ml-1">Telefone com Whatsapp:</label>
                      <input type="text" placeholder="(xx) xxxxx-xxxx" className="bg-[#F8F9F5] rounded-[16px] px-5 py-3.5 text-[0.95rem] text-[#4a4a4a] placeholder-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#8CA420]/50 w-full" />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-[0.8rem] font-bold text-[#888888] ml-1">Selecione seu interesse:</label>
                      <div className="relative">
                        <select className="bg-[#F8F9F5] rounded-[16px] px-5 py-3.5 text-[0.95rem] text-[#9A9A9A] focus:outline-none focus:ring-2 focus:ring-[#8CA420]/50 appearance-none w-full cursor-pointer">
                          <option>Quero economizar</option>
                          <option>Quero investir</option>
                        </select>
                        {/* Custom dropdown arrow */}
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#A8A8A8]">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.5L6 6L10.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button type="button" className="mt-3 bg-[#8CA420] hover:bg-[#7a8f1c] transition-colors text-[#2C380B] font-bold text-[1rem] rounded-[16px] py-3.5 px-10 flex items-center justify-center w-full">
                    Enviar
                  </button>
                </form>
              </div>

              {/* Right Column (Image) */}
              <div className="w-full md:w-[45%] relative min-h-[350px] md:min-h-full flex items-center justify-center pointer-events-none">
                {/* Icon Container - Positioned slightly higher, larger, and guaranteed to be in front */}
                <div className="absolute top-[40%] left-0 -translate-x-1/2 -translate-y-1/2 w-[55%] max-w-[260px] pointer-events-auto z-50">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    className="relative z-50 w-full"
                  >
                    <img src="/click-icon.png" alt="Clique" className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default FAQSection;


