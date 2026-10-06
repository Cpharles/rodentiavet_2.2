const benefits = [
  {
    icon: '🏠',
    title: 'Consultas a Domicílio',
    description:
      'O veterinário vai até você. Atendimento no conforto da sua casa, sem estresse de deslocamento para o seu pet.',
  },
  {
    icon: '🛡️',
    title: 'Praticidade e Segurança',
    description:
      'Elimine filas e salas de espera cheias de outros animais. Seu pet fica mais tranquilo em ambiente familiar.',
  },
  {
    icon: '🩺',
    title: 'Orientação Profissional Completa',
    description:
      'Alimentação, vacinação, cuidados preventivos, emergências e bem-estar — tudo em uma consulta personalizada.',
  },
  {
    icon: '🦜',
    title: 'Cuidado Especializado',
    description:
      'Atendimento especializado para pets não-convencionais: roedores, aves, répteis, coelhos e animais silvestres.',
  },
  {
    icon: '🔄',
    title: '1 Retorno Gratuito em 30 dias',
    description:
      'Dentro de 30 dias, o paciente tem direito a 1 retorno por teleatendimento sem custo adicional de consulta. Seu pet acompanhado de perto.',
  },
  {
    icon: '📋',
    title: 'Atestados e Documentos',
    description:
      'Emissão de atestados para viagens nacionais e internacionais, encaminhamentos para especialistas e muito mais.',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden" aria-label="Benefícios">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-cyan" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              Por que escolher a Rodentia Vet?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading">
            Cuidado profissional, onde{' '}
            <span className="text-clinical-cyan">você estiver</span>
          </h2>
          <p className="mt-4 text-pearl/80 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Oferecemos tudo que seu pet precisa, com a comodidade que você merece.
          </p>
        </div>

        {/* Cards grid with design system effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className={`dark-card group p-7 reveal reveal-delay-${Math.min(i + 1, 6)}`}
            >
              {/* Card top indicator badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="icon-box text-2xl group-hover:scale-110 group-hover:bg-iris-pulse/30 transition-all duration-300">
                  {benefit.icon}
                </div>
                <span className="text-xs font-medium text-lilac-mist/50 tracking-wider">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-semibold text-lg text-cloud-white mb-2.5 group-hover:text-clinical-cyan transition-colors duration-200">
                {benefit.title}
              </h3>
              <p className="text-pearl/75 text-sm font-medium leading-relaxed">
                {benefit.description}
              </p>

              {/* Bottom subtle accent line on hover */}
              <div className="w-0 group-hover:w-12 h-0.5 bg-clinical-cyan mt-5 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
