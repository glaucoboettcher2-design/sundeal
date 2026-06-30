import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import sundealLogo from "@/assets/sundeal-logo.png";
import cautoLogo from "@/assets/cauto-logo.png";

const WHATSAPP_URL = "https://wa.me/5563999999999";
const INSTAGRAM_URL = "https://www.instagram.com/sundeal.br/";

const FooterSection = () => {
  return (
    <footer
      style={{ background: "hsl(72 71% 10%)" }}
      className="relative overflow-hidden"
    >
      {/* Soft top accent line */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(72 72% 45% / 0.45), transparent)",
        }}
      />
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, hsl(72 71% 30% / 0.25) 0%, transparent 55%), radial-gradient(ellipse at 90% 100%, hsl(48 80% 40% / 0.10) 0%, transparent 50%)",
        }}
      />

      <div className="relative px-[6vw] pt-14 pb-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Top grid: Logo | Associada+socials | Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
            {/* Logo column */}
            <div className="flex flex-col items-start">
              <img
                src={sundealLogo}
                alt="Sundeal"
                className="h-16 md:h-20 w-auto object-contain object-left"
              />
            </div>

            {/* Associada + socials */}
            <div className="flex flex-col gap-5 lg:items-center lg:pl-16">
              <div className="flex flex-col gap-3 items-start shrink-0">
                <span className="text-[0.68rem] font-bold tracking-[0.18em] uppercase text-sundeal-green-light dark-section-title-shadow">
                  Associada a
                </span>
                <img
                  src={cautoLogo}
                  alt="CAU/TO — Conselho de Arquitetura e Urbanismo do Tocantins"
                  className="h-16 sm:h-20 w-auto object-contain object-left opacity-90"
                />
              </div>

              <div className="flex items-center gap-3 mt-1 lg:self-start">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Sundeal"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-sundeal-green-light/60 transition-all"
                >
                  <Instagram className="w-[18px] h-[18px] text-on-dark group-hover:text-sundeal-green-light transition-colors" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da Sundeal"
                  className="group inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-sundeal-green-light/60 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-on-dark group-hover:text-sundeal-green-light transition-colors" fill="currentColor" aria-hidden>
                    <path d="M19.05 4.91A10.05 10.05 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.93 9.93 0 0 0 4.78 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.02ZM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.34c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.18-8.24 8.18Zm4.52-6.13c-.25-.13-1.46-.72-1.69-.8-.23-.08-.39-.13-.55.13-.16.25-.64.8-.78.97-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.55-1.34-.76-1.83-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1.01 2.55.13.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.57.21-1.06.14-1.16-.06-.1-.22-.16-.47-.29Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:justify-self-end lg:text-left">
              <h4 className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-sundeal-green-light mb-4 dark-section-title-shadow">
                Fale com a gente
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-on-dark">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-sundeal-green-light shrink-0" />
                  <span>Palmas — Tocantins, Brasil</span>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-sundeal-green-light transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 text-sundeal-green-light shrink-0" />
                    <span>WhatsApp · atendimento Sundeal</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Servicos@sundeal.com.br"
                    className="flex items-start gap-2.5 hover:text-sundeal-green-light transition-colors"
                  >
                    <Mail className="w-4 h-4 mt-0.5 text-sundeal-green-light shrink-0" />
                    <span>Servicos@sundeal.com.br</span>
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-sundeal-green-light transition-colors"
                  >
                    <Instagram className="w-4 h-4 mt-0.5 text-sundeal-green-light shrink-0" />
                    <span>@sundeal.br</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className="my-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(72 55% 50% / 0.25), transparent)",
            }}
          />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[0.78rem] text-on-dark-soft">
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="text-sundeal-green-light font-semibold">Sundeal</span>{" "}
              · Energia Solar por Assinatura · Tocantins
            </span>
            <span className="text-center md:text-right">
              Consórcio Sun Deal · CNPJ 49.363.854/0001-21
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
