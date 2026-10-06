interface CTAFinalProps {
  whatsappUrl: string
}

export default function CTAFinal({ whatsappUrl }: CTAFinalProps) {
  return (
    <section
      id="agendar"
      className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden"
      aria-label="Agendar consulta"
    >
      {/* Ambient violet and cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-iris-glow/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-clinical-cyan/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="reveal">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-iris-glow/30 border border-iris-border flex items-center justify-center text-3xl shadow-cta">
            🐾
          </div>

          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-vital" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              Seu pet merece o melhor
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading mb-6">
            Pronto para agendar a{' '}
            <span className="text-clinical-cyan">primeira consulta?</span>
          </h2>

          <p className="text-base sm:text-xl text-pearl/85 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
            Entre em contato agora pelo WhatsApp. Atendimento rápido, simples e com toda a atenção que seu pet merece.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-delay-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base sm:text-lg py-4 px-8"
            id="cta-final-whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar pelo WhatsApp
          </a>
          <a
            href="tel:11992769210"
            className="btn-outline text-base sm:text-lg py-4 px-8"
            id="cta-final-phone-btn"
          >
            📞 (11) 99276-9210
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-12 reveal reveal-delay-3">
          {[
            { icon: '🔒', text: 'Atendimento seguro' },
            { icon: '⏰', text: 'Resposta rápida' },
            { icon: '📍', text: 'SP-Capital e Alto Tietê' },
            { icon: '🎓', text: 'Profissional Responsável FMVZ-USP' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 bg-iris-shadow/60 border border-iris-border/80 px-4 py-2 rounded-full text-pearl/80 text-xs sm:text-sm font-medium"
            >
              <span className="text-base">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
