import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const DISCOUNT = 0.20;
const MIN_BILL = 0;
const MAX_BILL = 50000;
const STEP = 50;

const formatCurrency = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const formatNumber = (value: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const EconomyCalculator = () => {
  const [bill, setBill] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [isMobile ? -15 : -25, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [isMobile ? 0.78 : 0.72, isMobile ? 1 : 1.08]);
  const translateY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 1]);

  const monthlyDiscount = bill * DISCOUNT;
  const newMonthly = bill - monthlyDiscount;
  const annualSaving = monthlyDiscount * 12;
  const hasValue = bill > 0;
  const pct = ((bill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100;

  return (
    <div ref={containerRef} style={{ perspective: "1200px" }}>
      <motion.div
        style={{ rotateX, scale, y: translateY, opacity }}
        className="relative w-full max-w-[620px] lg:max-w-[720px] mx-auto rounded-[28px] overflow-hidden"
      >
        <div
          className="relative isolate rounded-[28px] overflow-hidden p-8 lg:p-10"
          style={{
            background:
              "linear-gradient(140deg, hsl(72 75% 48%) 0%, hsl(72 78% 52%) 45%, hsl(75 82% 58%) 100%)",
            boxShadow:
              "0 30px 60px -20px hsl(72 60% 18% / 0.45), 0 10px 25px -10px hsl(72 60% 18% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.3)",
            border: "1px solid hsl(72 70% 40% / 0.4)",
          }}
        >
          {/* Diagonal shimmer */}
          <div className="calc-xray" aria-hidden="true" />

          {/* Label */}
          <p
            className="text-center font-mont font-bold text-sm lg:text-base tracking-[0.22em] uppercase mb-5"
            style={{
              color: "hsl(0 0% 100% / 0.92)",
              textShadow: "0 1px 2px hsl(72 60% 18% / 0.25)",
            }}
          >
            Valor atual da fatura
          </p>

          {/* Dark pill = slider */}
          <div className="relative">
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, hsl(72 55% 14%) 0%, hsl(72 50% 18%) 100%)",
                boxShadow:
                  "inset 0 2px 6px hsl(0 0% 0% / 0.55), inset 0 -1px 0 hsl(0 0% 100% / 0.06), 0 4px 14px hsl(72 60% 15% / 0.35)",
                border: "1px solid hsl(72 60% 12%)",
              }}
            >
              {/* Fill */}
              <div
                className="absolute inset-y-0 left-0 transition-[width] duration-150"
                style={{
                  width: `${pct}%`,
                  background:
                    "linear-gradient(90deg, hsl(72 70% 28%) 0%, hsl(72 75% 38%) 100%)",
                  boxShadow: "inset 0 1px 0 hsl(0 0% 100% / 0.12)",
                }}
              />

              {/* Content row */}
              <div className="relative flex items-center justify-between px-6 lg:px-7 py-4 lg:py-5">
                <span
                  className="font-mont font-bold text-base lg:text-lg tracking-wider"
                  style={{ color: "hsl(0 0% 100% / 0.85)" }}
                >
                  R$
                </span>
                <span
                  className="font-calc font-bold text-2xl lg:text-3xl tracking-[0.08em] tabular-nums"
                  style={{
                    color: "hsl(0 0% 100%)",
                    textShadow: "0 1px 2px hsl(0 0% 0% / 0.4)",
                  }}
                >
                  {formatNumber(bill)}
                </span>
                <span className="w-6" />
              </div>

              {/* Hidden range input on top */}
              <input
                type="range"
                min={MIN_BILL}
                max={MAX_BILL}
                step={STEP}
                value={bill}
                onChange={(e) => setBill(parseInt(e.target.value, 10))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-grab active:cursor-grabbing"
                aria-label="Valor da fatura mensal"
              />
            </div>

            <div
              className="flex items-center justify-between mt-2 px-1 text-[11px] lg:text-xs font-medium uppercase tracking-wider"
              style={{ color: "hsl(0 0% 100% / 0.7)" }}
            >
              <span>R$ 0</span>
              <span>arraste a barra</span>
              <span>R$ 50.000</span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-[1px] my-7 lg:my-8"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.35) 50%, transparent 100%)",
            }}
          />

          {/* Results */}
          <div
            className="transition-all duration-500"
            style={{
              opacity: hasValue ? 1 : 0.45,
              filter: hasValue ? "none" : "blur(1px)",
            }}
          >
            <p
              className="text-center font-mont font-bold text-xs lg:text-sm tracking-[0.22em] uppercase mb-4"
              style={{
                color: "hsl(0 0% 100% / 0.9)",
                textShadow: "0 1px 2px hsl(72 60% 18% / 0.25)",
              }}
            >
              Economia mensal
            </p>

            <div className="flex items-end justify-center gap-10 md:gap-16 mb-7">
              <div className="text-center">
                <p
                  className="text-xs lg:text-sm mb-1"
                  style={{ color: "hsl(0 0% 100% / 0.75)" }}
                >
                  Você pagaria
                </p>
                <p
                  className="font-calc font-bold text-2xl lg:text-3xl tabular-nums"
                  style={{
                    color: "hsl(0 0% 100%)",
                    textShadow: "0 2px 4px hsl(72 60% 18% / 0.35)",
                  }}
                >
                  {formatCurrency(newMonthly)}
                </p>
              </div>
              <div className="text-center">
                <p
                  className="text-xs lg:text-sm mb-1"
                  style={{ color: "hsl(0 0% 100% / 0.75)" }}
                >
                  Desconto
                </p>
                <p
                  className="font-calc font-bold text-xl lg:text-2xl tabular-nums"
                  style={{
                    background: "linear-gradient(135deg, hsl(40 100% 60%), hsl(38 100% 50%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 1px 2px hsl(0 0% 0% / 0.25))",
                  }}
                >
                  −{formatCurrency(monthlyDiscount)}
                </p>
              </div>
            </div>

            <div
              className="h-[1px] mb-6"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.3) 50%, transparent 100%)",
              }}
            />

            <p
              className="text-center font-mont font-bold text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
              style={{
                color: "hsl(0 0% 100% / 0.9)",
                textShadow: "0 1px 2px hsl(72 60% 18% / 0.25)",
              }}
            >
              Economia anual
            </p>
            <p
              className="text-center font-calc font-bold text-3xl lg:text-5xl tabular-nums"
              style={{
                background: "linear-gradient(135deg, hsl(8 95% 58%), hsl(14 100% 65%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 2px 4px hsl(0 0% 0% / 0.25))",
              }}
            >
              {formatCurrency(annualSaving)}
            </p>
            <p
              className="text-center text-xs lg:text-sm mt-2"
              style={{ color: "hsl(0 0% 100% / 0.8)" }}
            >
              de volta no seu caixa por ano
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EconomyCalculator;
