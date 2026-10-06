const differentials = [
  {
    icon: '🎓',
    title: 'Formação Proficional',
    description:
      'Médico Veterinário formado pela Faculdade de Medicina Veterinária e Zootecnia da USP — uma das mais renomadas do Brasil.',
  },
  {
    icon: '🦎',
    title: 'Atendimento Especializado',
    description:
      'Pós-graduação pelo CETAC VET em Animais Não-Convencionais. Atendimento especializado para roedores, aves, répteis e animais silvestres.',
  },
  {
    icon: '🔬',
    title: 'Experiência Profissional',
    description:
      'Ampla experiência com rotinas clínicas, patologia veterinária e pesquisa em comportamento e patologia animal.',
  },
  {
    icon: '🤝',
    title: 'Clínicas Parceiras em SP',
    description:
      'Parceria com clínicas veterinárias para atendimento em consultório quando necessário, em São Paulo capital e região do Alto Tietê.',
  },
]

const partners = [
  { name: 'Dentes e Bicos', city: 'Mogi das Cruzes', phone: '(11) 93324-5008' },
  { name: 'Vets Domiciliar', city: 'Mogi das Cruzes', phone: '(11) 96413-0668' },
  { name: 'Clínica Veterinária Vida', city: 'Mogi das Cruzes', phone: '(11) 97708-3963' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden" aria-label="Diferenciais">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-cyan" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              Por que a Rodentia Vet?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading">
            Qualificação e{' '}
            <span className="text-clinical-cyan">excelência</span> que fazem a diferença
          </h2>
          <p className="mt-4 text-pearl/80 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Não somos apenas veterinários. Oferecemos atendimento especializado e comprometido com o bem-estar real do seu animal.
          </p>
        </div>

        {/* Differentials Grid with Cards Effects */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {differentials.map((diff, i) => (
            <div
              key={diff.title}
              className={`dark-card group p-7 flex gap-5 items-start reveal reveal-delay-${i + 1}`}
            >
              <div className="icon-box text-2xl flex-shrink-0 group-hover:scale-105 group-hover:bg-clinical-cyan/20 group-hover:border-clinical-cyan transition-all duration-300">
                {diff.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-cloud-white mb-2 group-hover:text-clinical-cyan transition-colors duration-200">
                  {diff.title}
                </h3>
                <p className="text-pearl/75 text-sm font-medium leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services & Clinical Photos (Preserving all images) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 reveal">
          <div className="rounded-3xl overflow-hidden h-44 border border-iris-border bg-iris-shadow shadow-card-dark group">
            <img
              src="/images/silvestre-1.jpg"
              alt="Atendimento animal silvestre"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 border border-iris-border bg-iris-shadow shadow-card-dark group">
            <img
              src="/images/wild-health2.webp"
              alt="Saúde de animais exóticos"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 border border-iris-border bg-iris-shadow shadow-card-dark group">
            <img
              src="/images/cat3.webp"
              alt="Atendimento domiciliar para gatos"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="rounded-3xl overflow-hidden h-44 border border-iris-border bg-iris-shadow shadow-card-dark group">
            <img
              src="/images/vet-dog (4).webp"
              alt="Veterinário com cachorro"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Partner Clinics */}
        <div className="reveal">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-cloud-white tracking-heading inline-flex items-center gap-2">
              <span>🤝</span> Clínicas Parceiras — Atendimento em Consultório
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="dark-card p-6 border-l-4 border-l-clinical-cyan group hover:border-iris-veil"
              >
                <div className="font-semibold text-cloud-white text-base mb-1.5 group-hover:text-clinical-cyan transition-colors">
                  {partner.name}
                </div>
                <div className="text-pearl/70 text-sm font-medium mb-3">
                  📍 {partner.city} — SP
                </div>
                <a
                  href={`tel:${partner.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-clinical-cyan font-semibold text-sm hover:underline"
                >
                  📞 {partner.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
