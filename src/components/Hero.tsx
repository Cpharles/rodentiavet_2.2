interface HeroProps {
  whatsappUrl: string
}

export default function Hero({ whatsappUrl }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative bg-deep-iris tech-grid-bg overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-iris-border/50"
      aria-label="Seção principal"
    >
      {/* Ambient violet glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-iris-glow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-iris-pulse/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle line-art technical decorative element (Lilac Mist) */}
      <div className="absolute left-4 top-32 hidden xl:block opacity-35 pointer-events-none" aria-hidden="true">
        <svg width="220" height="340" viewBox="0 0 220 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="110" cy="80" r="60" stroke="#b1a6f6" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M110 20V140M50 80H170" stroke="#b1a6f6" strokeWidth="1.2" />
          <rect x="30" y="180" width="160" height="110" rx="16" stroke="#b1a6f6" strokeWidth="1.5" />
          <path d="M50 235H80L95 210L110 260L125 220L140 235H170" stroke="#00b1ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="110" cy="80" r="6" fill="#00ffaa" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-cloud-white">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2.5 bg-iris-shadow/90 border border-iris-border rounded-full px-4 py-1.5 mb-6 reveal shadow-sm">
              <span className="w-2 h-2 rounded-full bg-mint-vital animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-pearl tracking-wide">
                🐾 Atendimento Domiciliar em SP-Capital e Alto Tietê
              </span>
            </div>

            {/* H1 Headline with Gilroy tracking & Word Highlight Box */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-heading mb-6 reveal reveal-delay-1">
              Seu pet merece
              <br />
              cuidado{' '}
              <span className="word-highlight font-semibold not-italic">
                de qualidade
              </span>
              <br />
              em casa
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-pearl/85 font-medium max-w-xl leading-relaxed mb-8 reveal reveal-delay-2">
              Consultas veterinárias a domicílio para cães, gatos e pets exóticos.
              Atendimento profissional no conforto da sua casa com segurança para seu animal.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-3.5 reveal reveal-delay-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base justify-center sm:justify-start"
                id="hero-cta-whatsapp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a
                href="#como-funciona"
                className="btn-outline text-base justify-center sm:justify-start"
                id="hero-cta-howit"
              >
                Como funciona →
              </a>
            </div>

            {/* Trust Metric Blocks */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-8 border-t border-iris-border/60 reveal reveal-delay-4">
              <div className="bg-iris-shadow/60 border border-iris-border/80 rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 hover:border-clinical-cyan/60 hover:bg-iris-shadow">
                <div className="text-2xl sm:text-3xl font-semibold text-clinical-cyan tracking-tight">Esperiência</div>
                <div className="text-xs text-pearl/80 font-medium mt-1">comprovada</div>
              </div>
              <div className="bg-iris-shadow/60 border border-iris-border/80 rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 hover:border-clinical-cyan/60 hover:bg-iris-shadow">
                <div className="text-2xl sm:text-3xl font-semibold text-clinical-cyan tracking-tight">Formação</div>
                <div className="text-xs text-pearl/80 font-medium mt-1">FMVZ-USP</div>
              </div>
              <div className="bg-iris-shadow/60 border border-iris-border/80 rounded-2xl p-3 sm:p-4 text-center transition-all duration-300 hover:border-mint-vital/60 hover:bg-iris-shadow">
                <div className="text-2xl sm:text-3xl font-semibold text-mint-vital tracking-tight">100%</div>
                <div className="text-xs text-pearl/80 font-medium mt-1">domiciliar ou clínica</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card Composition */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end reveal reveal-delay-2">
            {/* Ambient card back glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-iris-glow/40 to-clinical-cyan/20 rounded-[34px] blur-xl opacity-75" />

            {/* Main Image Container Card */}
            <div className="relative z-10 dark-card-cyan-hover p-3.5 bg-iris-shadow/90 border border-iris-border rounded-[32px] w-full max-w-sm sm:max-w-md">
              {/* Brand Logo Overlay Badge */}
              <div className="absolute -top-5 -left-5 sm:top-2 sm:left-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-iris-border bg-deep-iris p-1 shadow-2xl z-20 overflow-hidden transition-transform duration-300 hover:scale-105">
                <img
                  src="/logo_vet.png"
                  alt="Rodentia Vet Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src="/images/vet-dog (1).jpg"
                  alt="Veterinário Nícolas atendendo pet com carinho"
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-iris/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1 (Atendimento Domiciliar) */}
              <div className="absolute -left-4 sm:left-5 bottom-8 bg-iris-shadow/95 border border-iris-border rounded-2xl shadow-card-hover p-3 flex items-center gap-3 reveal backdrop-blur-md transition-all duration-300 hover:border-mint-vital">
                <div className="w-10 h-10 rounded-[7px] bg-iris-glow/40 border border-iris-border flex items-center justify-center text-lg">
                  🐾
                </div>
                <div>
                  <div className="font-semibold text-pearl text-xs">Atendimento</div>
                  <div className="text-mint-vital font-semibold text-xs tracking-wide">Domiciliar</div>
                </div>
              </div>

              {/* Floating Badge 2 (Exóticos / Cães & Gatos) */}
              <div className="absolute -right-4 sm:right-5 bottom-8 bg-iris-shadow/95 border border-iris-border rounded-2xl shadow-card-hover p-3 flex items-center gap-3 reveal reveal-delay-2 backdrop-blur-md transition-all duration-300 hover:border-clinical-cyan">
                <div className="w-10 h-10 rounded-[7px] bg-clinical-cyan/15 border border-clinical-cyan/40 flex items-center justify-center text-lg text-clinical-cyan">
                  ✨
                </div>
                <div>
                  <div className="font-semibold text-clinical-cyan text-xs">Exóticos</div>
                  <div className="text-pearl/80 font-medium text-xs">Cães & Gatos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
