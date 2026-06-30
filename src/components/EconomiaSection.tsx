import { useState } from "react";
import { motion } from "framer-motion";
import bgImage from "@/assets/Sessão calculadora.png";
import bgImageMobile from "@/assets/Sessão calculadora celular.png";

const DISCOUNT = 0.2;
const MIN_BILL = 0;
const MAX_BILL = 50000;
const STEP = 50;

const subtleTextShadow = "0 1px 2px hsl(72 60% 14% / 0.25)";
const strongTextShadow = "0 2px 6px hsl(72 60% 14% / 0.45), 0 0 18px hsl(72 80% 55% / 0.18)";
const coloredDropShadow = "drop-shadow(0 1px 1.5px hsl(72 60% 14% / 0.3))";
const accentYellowText = "linear-gradient(135deg, hsl(48 100% 70%), hsl(45 100% 56%))";

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const EconomiaSection = () => {
  const [bill, setBill] = useState(0);

  const currentBill = bill;
  const monthlyDiscount = currentBill * DISCOUNT;
  const newMonthly = currentBill - monthlyDiscount;
  const annualSaving = monthlyDiscount * 12;
  const hasValue = currentBill > 0;
  const pct = ((currentBill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  return (
    <section
      id="economia"
      className="relative w-full pt-20 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
      style={{ background: "linear-gradient(180deg, hsl(72 14% 84%) 0%, hsl(72 14% 84%) 15%, #f6f7f2 100%)" }}
    >
      <div className="container mx-auto px-5 md:px-8 lg:px-12">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className="font-mont font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1] mb-4"
            style={{ color: "hsl(73 67% 32%)" }}
          >
            Calculadora de{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, hsl(48 99% 55%), hsl(45 99% 52%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 1px 1px hsl(40 80% 30% / 0.25))",
              }}
            >
              economia
            </span>
          </h2>
          <p className="text-base md:text-lg" style={{ color: "hsl(72 20% 30%)" }}>
            Descubra quanto você pode economizar todo mês com a energia solar por assinatura da Sundeal.
          </p>
        </div>

        {/* Main Background Container */}
        <div className="relative w-full max-w-6xl mx-auto min-h-[750px] md:min-h-[650px] lg:min-h-[750px] rounded-[28px] md:rounded-[36px] overflow-hidden shadow-2xl flex flex-col justify-end p-4 md:p-10 lg:p-14">
          
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={bgImageMobile}
              alt="Economia com energia solar"
              loading="lazy"
              className="w-full h-full object-cover object-top md:hidden"
            />
            <img
              src={bgImage}
              alt="Economia com energia solar"
              loading="lazy"
              className="hidden md:block w-full h-full object-cover object-center"
            />
            {/* Subtle gradient overlay to ensure text contrast if needed, mostly transparent */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>

          {/* Glass Effect Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="relative z-10 w-full max-w-[420px] p-6 md:p-8 rounded-[24px] overflow-hidden backdrop-blur-xl bg-white/10"
          >
            {/* Glass Borders */}
            <div 
              className="absolute inset-0 rounded-[24px] border-[1.5px] pointer-events-none"
              style={{ 
                borderColor: "hsl(48 99% 55% / 0.7)",
                WebkitMaskImage: "linear-gradient(135deg, black 0%, transparent 40%)",
                maskImage: "linear-gradient(135deg, black 0%, transparent 40%)"
              }}
            />
            <div 
              className="absolute inset-0 rounded-[24px] border-[1.5px] pointer-events-none"
              style={{ 
                borderColor: "hsl(48 99% 55% / 0.9)",
                WebkitMaskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                maskImage: "linear-gradient(135deg, transparent 60%, black 100%)",
                boxShadow: "inset -5px -5px 25px hsl(48 99% 55% / 0.25)"
              }}
            />

            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div className="relative z-20">
              {/* Display */}
              <label
                className="block text-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mb-5"
                style={{ color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
              >
                Valor atual da fatura
              </label>

              <div
                className="flex items-baseline justify-center gap-2 mb-8"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
              >
                <span className="font-mont font-bold text-lg md:text-xl opacity-90" style={{ color: "hsl(0 0% 100%)" }}>
                  R$
                </span>
                <span
                  className="font-mont font-bold text-5xl md:text-6xl tracking-tighter tabular-nums leading-none text-transparent bg-clip-text bg-gradient-to-br from-white to-white/80"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.2))" }}
                >
                  {currentBill.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                </span>
              </div>

              {/* Slider */}
              <div className="relative px-2 mb-4">
                <div
                  className="relative h-4 w-full overflow-hidden rounded-full"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    boxShadow: "inset 0 2px 5px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.15)",
                  }}
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-75 ease-out"
                    style={{
                      width: `${pct}%`,
                      background: "linear-gradient(90deg, hsl(45 99% 60%) 0%, hsl(48 99% 55%) 100%)",
                      boxShadow: "0 0 12px hsl(48 99% 55% / 0.6)",
                    }}
                  />
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 transition-[left] duration-75 ease-out"
                  style={{ left: `calc(${pct}% + 8px)` }}
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 scale-150 rounded-full blur-md ${!hasValue ? "calc-thumb-pulse" : ""}`}
                      style={{ background: "hsl(48 99% 55% / 0.6)" }}
                    />
                    <div
                      className="relative flex h-10 w-10 items-center justify-center rounded-full"
                      style={{
                        background: "hsl(0 0% 100%)",
                        border: "2px solid hsl(48 99% 55%)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.4), inset 0 -1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <div className="flex gap-1">
                        <span className="block h-3 w-[2px] rounded-full opacity-50" style={{ background: "hsl(48 99% 40%)" }} />
                        <span className="block h-3 w-[2px] rounded-full" style={{ background: "hsl(48 99% 40%)" }} />
                        <span className="block h-3 w-[2px] rounded-full opacity-50" style={{ background: "hsl(48 99% 40%)" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="range"
                  min={MIN_BILL}
                  max={MAX_BILL}
                  step={STEP}
                  value={currentBill}
                  onChange={(e) => setBill(parseInt(e.target.value, 10))}
                  className="absolute inset-x-0 top-1/2 z-[3] h-10 w-full -translate-y-1/2 cursor-grab opacity-0 active:cursor-grabbing"
                  aria-label="Valor da fatura mensal"
                />
              </div>

              <div
                className="flex items-center justify-between px-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: "hsl(0 0% 100% / 0.8)" }}
              >
                <span>R$ 0</span>
                <span className={!hasValue ? "animate-pulse" : ""} style={{ color: "hsl(0 0% 100% / 0.6)" }}>
                  Arraste a barra
                </span>
                <span>R$ 50.000</span>
              </div>

              {/* Divider */}
              <div
                aria-hidden
                className="my-6 h-px w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 80%, transparent 100%)",
                }}
              />

              {/* Results */}
              <div
                className="transition-all duration-500"
                style={{ opacity: hasValue ? 1 : 0.45, filter: hasValue ? "none" : "blur(1px)" }}
              >
                <p
                  className="text-center text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-4"
                  style={{ color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                >
                  Economia mensal
                </p>
                <div className="flex items-end justify-center gap-8 md:gap-10 mb-5">
                  <div className="text-center">
                    <p className="text-xs md:text-sm mb-1.5" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                      Você pagaria
                    </p>
                    <p
                      className="font-mont font-bold text-2xl md:text-3xl leading-none tabular-nums tracking-tighter text-white"
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                    >
                      {formatCurrency(newMonthly)}
                    </p>
                  </div>

                  <div
                    aria-hidden
                    className="self-stretch w-px"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                    }}
                  />

                  <div className="text-center">
                    <p className="text-xs md:text-sm mb-1.5" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                      Desconto
                    </p>
                    <p
                      className="font-mont font-bold text-xl md:text-2xl leading-none tabular-nums tracking-tighter text-white"
                      style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                    >
                      −{formatCurrency(monthlyDiscount)}
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="my-5 h-px w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 80%, transparent 100%)",
                  }}
                />

                <div className="text-center">
                  <p
                    className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-3"
                    style={{ color: "hsl(0 0% 100% / 0.95)", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}
                  >
                    Economia anual
                  </p>
                  <p
                    className="font-mont font-bold text-3xl md:text-4xl leading-none tabular-nums"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
                  >
                    <span
                      style={{
                        background: "linear-gradient(135deg, hsl(48 100% 70%), hsl(45 100% 56%))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {formatCurrency(annualSaving)}
                    </span>
                  </p>
                  <p className="text-xs md:text-sm mt-2.5" style={{ color: "hsl(0 0% 100% / 0.85)" }}>
                    de volta no seu caixa por ano
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomiaSection;
