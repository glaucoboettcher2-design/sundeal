import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EconomiaSection from "@/components/EconomiaSection";
import ComoFunciona from "@/components/ComoFunciona";
import ComparativoSection from "@/components/ComparativoSection";
import BeneficiosSection from "@/components/BeneficiosSection";
import NumerosSection from "@/components/NumerosSection";
import QuemSomosSection from "@/components/QuemSomosSection";
import FAQSection from "@/components/FAQSection";
import IndicacaoSection from "@/components/IndicacaoSection";
import ContatoSection from "@/components/ContatoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ComoFunciona />
      <EconomiaSection />
      <QuemSomosSection />
      <BeneficiosSection />
      <NumerosSection />
        <ComparativoSection />
        <IndicacaoSection />
        <FAQSection />
      <ContatoSection />
      <FooterSection />
    </div>
  );
};

export default Index;
