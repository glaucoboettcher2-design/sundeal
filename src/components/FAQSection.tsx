import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  const yParallax = useTransform(smoothProgress, [0, 1], ["40%", "-40%"]);

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
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center items-center" style={{ zIndex: 0 }}>
          <motion.img
            src="/logo-bg.svg"
            alt=""
            style={{ y: yParallax }}
            className="w-[250vw] max-w-[2500px] object-contain opacity-[0.12] blur-[5px] select-none"
          />
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
      </section>
    </>
  );
};

export default FAQSection;


