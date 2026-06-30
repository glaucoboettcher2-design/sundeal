import { useEffect, useState, type CSSProperties } from "react";
import { Instagram } from "lucide-react";
import sundealLogo from "@/assets/sundeal-logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/sundeal.br/";

const Navbar = () => {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > 160);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-heroNavbar ${
        pastHero ? "pt-3 md:pt-4" : "pt-6 md:pt-8"
      }`}
      style={{
        animationDelay: "5.8s",
        "--hero-sweep-delay": "5.8s",
        "--hero-sweep-duration": "6s",
      } as CSSProperties}
    >
      <div
        className={`mx-auto transition-all duration-500 ${
          pastHero
            ? "py-2 px-3 md:py-2.5 md:px-5 w-[calc(100%-1.5rem)] md:w-auto md:max-w-[min(1100px,calc(100%-2rem))]"
            : "py-5 px-4 md:px-6 max-w-[1200px] w-full"
        }`}
        style={{
          background: pastHero
            ? "linear-gradient(180deg, hsl(72 73% 32% / 0.88) 0%, hsl(72 73% 26% / 0.82) 100%)"
            : "transparent",
          backdropFilter: pastHero ? "blur(22px) saturate(160%)" : "none",
          WebkitBackdropFilter: pastHero ? "blur(22px) saturate(160%)" : "none",
          borderRadius: pastHero ? "9999px" : "0",
          border: pastHero ? "1px solid hsl(72 68% 65% / 0.28)" : "1px solid transparent",
          boxShadow: pastHero
            ? "0 12px 34px -8px hsl(72 55% 8% / 0.55), 0 4px 14px -4px hsl(72 55% 8% / 0.32), inset 0 1px 0 hsl(0 0% 100% / 0.12)"
            : "none",
        }}
      >
      <div className="flex items-center relative gap-3 md:gap-6" style={{ minHeight: "2rem" }}>
        {/* Logo: centered at top, slides left when scrolled */}
        <img
          src={sundealLogo}
          alt="Sundeal"
          className="transition-all duration-700 ease-in-out shrink-0"
          style={{
            height: pastHero ? "1.75rem" : "4.2rem",
            position: pastHero ? "relative" : "absolute",
            left: pastHero ? "0" : "50%",
            transform: pastHero ? "translateX(0)" : "translateX(-50%)",
          }}
        />

        {/* Mobile: Instagram + CTA button visible after scroll */}
        <div
          className="flex md:hidden items-center gap-1.5 ml-auto transition-opacity duration-500"
          style={{ opacity: pastHero ? 1 : 0, pointerEvents: pastHero ? "auto" : "none" }}
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Sundeal"
            className="nav-dark-link inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-sundeal-green-light/60 transition-all shrink-0"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a href="#contato" className="cta-glow-button px-3 py-1.5 text-[11px] whitespace-nowrap">
            Simular
          </a>
        </div>

        {/* Desktop: nav links fade in after scrolling */}
        <div
          className="hidden md:flex items-center gap-6 transition-opacity duration-500 ml-auto"
          style={{ opacity: pastHero ? 1 : 0, pointerEvents: pastHero ? "auto" : "none" }}
        >
          <a href="#como-funciona" className="nav-dark-link text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            Como funciona
          </a>
          <a href="#comparativo" className="nav-dark-link text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
            Comparativo
          </a>
          <a href="#faq" className="nav-dark-link text-xs font-semibold uppercase tracking-wider">
            FAQ
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Sundeal"
            className="nav-dark-link inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-sundeal-green-light/60 transition-all shrink-0"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#contato" className="cta-glow-button px-5 py-2.5 text-xs whitespace-nowrap">
            Simule seu desconto
          </a>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
