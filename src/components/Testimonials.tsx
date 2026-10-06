const testimonials = [
  {
    name: 'Mariana Souza',
    pet: 'Tutora da Luna (Gata, 3 anos)',
    avatar: '🐱',
    rating: 5,
    text: 'O M.V. Nícolas foi incrível! Minha gata é muito nervosa e jamais ficaria tranquila em uma clínica. Em casa, ela ficou relaxada e o atendimento foi super completo. Recomendo demais!',
    date: 'Julho 2026',
  },
  {
    name: 'Carlos Ferreira',
    pet: 'Tutor do Thor (Golden Retriever, 5 anos)',
    avatar: '🐶',
    rating: 5,
    text: 'Atendimento domiciliar de altíssima qualidade. O M.V. Nícolas é muito atencioso, explicou tudo com detalhes e ainda me deu orientações sobre alimentação. Só tem elogio!',
    date: 'Junho 2026',
  },
  {
    name: 'Roberta Lima',
    pet: 'Tutora do Pipoca (Chinchila)',
    avatar: '🐭',
    rating: 5,
    text: 'Finalmente encontrei um veterinário especializado em pequenos animais que vai até minha casa! O M.V. Nícolas tem um conhecimento impressionante sobre chinchilas. Serviço impecável.',
    date: 'Agosto 2026',
  },
]

export default function Testimonials() {
  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < count ? 'text-clinical-cyan' : 'text-iris-border'}>
        ★
      </span>
    ))

  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden"
      aria-label="Depoimentos"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-10 right-10 text-iris-glow/10 text-[180px] font-bold select-none pointer-events-none leading-none" aria-hidden="true">
        “
      </div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-cyan" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              O que dizem sobre nós
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading">
            Pets felizes,{' '}
            <span className="text-clinical-cyan">tutores satisfeitos</span>
          </h2>
          <p className="mt-4 text-pearl/80 text-base sm:text-lg max-w-xl mx-auto font-medium">
            A confiança dos nossos clientes é o nosso maior reconhecimento.
          </p>
        </div>

        {/* Rating & Metric Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mb-16 reveal">
          <div className="metric-card text-center p-6">
            <div className="text-4xl sm:text-5xl font-semibold text-clinical-cyan tracking-display mb-1">4.9</div>
            <div className="flex justify-center gap-1 text-lg mb-1">{renderStars(5)}</div>
            <div className="text-pearl/70 text-xs sm:text-sm font-medium">Média geral</div>
          </div>
          <div className="metric-card text-center p-6">
            <div className="text-4xl sm:text-5xl font-semibold text-mint-vital tracking-display mb-1">100%</div>
            <div className="text-pearl/70 text-xs sm:text-sm font-medium mt-3">Recomendariam para amigos</div>
          </div>
          <div className="metric-card text-center p-6">
            <div className="text-4xl sm:text-5xl font-semibold text-clinical-cyan tracking-display mb-1">+50</div>
            <div className="text-pearl/70 text-xs sm:text-sm font-medium mt-3">Pacientes atendidos</div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`dark-card group p-7 flex flex-col justify-between reveal reveal-delay-${i + 1}`}
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-base mb-4">
                  {renderStars(t.rating)}
                </div>

                {/* Quote */}
                <p className="text-pearl/85 text-sm sm:text-[15px] font-medium leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>
              </div>

              {/* Person Info */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-iris-border/60">
                <div className="w-11 h-11 rounded-[7px] bg-iris-glow/40 border border-iris-border flex items-center justify-center text-xl flex-shrink-0 group-hover:border-clinical-cyan transition-colors">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-cloud-white text-sm">{t.name}</div>
                  <div className="text-pearl/60 text-xs font-medium">{t.pet}</div>
                  <div className="text-lilac-mist/70 text-[11px] font-medium mt-0.5">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pet Images Row */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 mt-14 reveal">
          {[
            '/images/cat2.webp',
            '/images/vet-dog (3).webp',
            '/images/rabbet3.webp',
            '/images/cat4.webp',
            '/images/vet-dog (5).webp',
            '/images/wild-health3.webp',
          ].map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden aspect-square border border-iris-border bg-iris-shadow shadow-sm group">
              <img
                src={src}
                alt={`Pet feliz ${i + 1}`}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
