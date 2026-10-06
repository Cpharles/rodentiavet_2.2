interface HowItWorksProps {
  whatsappUrl: string
}

const steps = [
  {
    number: '01',
    icon: '📱',
    title: 'Agende pelo WhatsApp',
    description:
      'Entre em contato pelo WhatsApp, informe o tipo de animal e os sintomas. Em instantes, confirmamos o horário que melhor se encaixa na sua agenda.',
  },
  {
    number: '02',
    icon: '🏠',
    title: 'Atendimento em Casa',
    description:
      'O Médico Veterinário vai até você. A consulta acontece no conforto do lar, com todo o equipamento necessário para um atendimento completo.',
  },
  {
    number: '03',
    icon: '🩺',
    title: 'Diagnóstico e Tratamento',
    description:
      'Avaliação clínica detalhada, prescrição de medicamentos, solicitação de exames e orientações personalizadas para a saúde do seu pet.',
  },
  {
    number: '04',
    icon: '🔄',
    title: 'Acompanhamento',
    description:
      'Retorno incluso por teleatendimento em até 30 dias. Suporte por WhatsApp no horário comercial para dúvidas e orientações entre as consultas.',
  },
]

export default function HowItWorks({ whatsappUrl }: HowItWorksProps) {
  return (
    <section
      id="como-funciona"
      className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 overflow-hidden relative"
      aria-label="Como funciona"
    >
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-mint-vital" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              Simples e sem complicações
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading">
            Como funciona o{' '}
            <span className="text-clinical-cyan">atendimento?</span>
          </h2>
          <p className="mt-4 text-pearl/80 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Em 4 passos simples, seu pet recebe cuidado veterinário de qualidade.
          </p>
        </div>

        {/* Steps Grid with Card Effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`dark-card-cyan-hover p-6 text-center group reveal reveal-delay-${i + 1}`}
            >
              {/* Step number badge */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-iris-pulse/30 border border-iris-border flex items-center justify-center font-semibold text-clinical-cyan text-sm group-hover:bg-clinical-cyan group-hover:text-deep-iris group-hover:border-clinical-cyan transition-all duration-300 shadow-sm">
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="font-semibold text-cloud-white text-base mb-3 group-hover:text-clinical-cyan transition-colors duration-200">
                {step.title}
              </h3>

              <p className="text-pearl/75 text-sm font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center reveal reveal-delay-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
            id="howit-cta-btn"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Começar agora — Agendar consulta
          </a>
        </div>
      </div>
    </section>
  )
}
