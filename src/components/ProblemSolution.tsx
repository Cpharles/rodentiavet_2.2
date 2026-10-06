interface ProblemSolutionProps {
  whatsappUrl: string
}

const problems = [
  {
    icon: '⏰',
    problem: 'Falta de tempo para ir à clínica',
    solution: 'O veterinário vai até você, no horário que funciona para a sua rotina.',
  },
  {
    icon: '🚗',
    problem: 'Dificuldade de deslocamento com o pet',
    solution: 'Sem carregar caixinhas, sem trânsito, sem estacionar. O atendimento chega em casa.',
  },
  {
    icon: '😰',
    problem: 'Pet estressado na clínica',
    solution: 'No ambiente familiar, seu pet fica muito mais calmo e confortável durante o atendimento.',
  },
  {
    icon: '🔄',
    problem: 'Troca constante de veterinário',
    solution: 'Construímos um vínculo real com seu pet. O mesmo profissional em cada consulta.',
  },
]

export default function ProblemSolution({ whatsappUrl }: ProblemSolutionProps) {
  return (
    <section className="py-20 lg:py-28 bg-pearl text-deep-iris relative" aria-label="Problemas e soluções">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Images Composition */}
          <div className="relative reveal order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <div className="overflow-hidden rounded-3xl border border-ash bg-white shadow-card-light transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-light-hover group">
                <img
                  src="/images/cat1.webp"
                  alt="Gato tranquilo em casa"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-ash bg-white shadow-card-light transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-light-hover group">
                <img
                  src="/images/vet-dog (2).jpg"
                  alt="Veterinário atendendo cão"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-ash bg-white shadow-card-light transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-light-hover group">
                <img
                  src="/images/pet-check-up-health-care.webp"
                  alt="Check-up veterinário"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-ash bg-white shadow-card-light transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-light-hover group">
                <img
                  src="/images/rabbet2.webp"
                  alt="Coelho exótico"
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right: Problems + Solutions */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-white border border-ash rounded-full px-4 py-1.5 mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-iris-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-deep-iris">
                  Entendemos os seus desafios
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold text-deep-iris leading-tight tracking-heading mb-4">
                Sabemos o quanto é{' '}
                <span className="underline decoration-clinical-cyan decoration-2 underline-offset-4">
                  difícil
                </span>{' '}
                levar o pet ao veterinário
              </h2>
              <p className="text-deep-iris/75 text-base sm:text-lg mb-8 font-medium leading-relaxed">
                Por isso criamos um serviço que resolve cada um desses obstáculos — para que você nunca precise abrir mão da saúde do seu pet.
              </p>
            </div>

            {/* Problem & Solution Cards with Effects */}
            <div className="space-y-4">
              {problems.map((item, i) => (
                <div
                  key={item.problem}
                  className={`bg-white border border-ash rounded-2xl p-5 shadow-card-light transition-all duration-300 hover:-translate-y-1 hover:shadow-card-light-hover hover:border-iris-border/60 reveal reveal-delay-${i + 1}`}
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-[7px] bg-pearl border border-ash flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-fog text-xs sm:text-sm line-through mb-1 font-medium">
                        ✕ {item.problem}
                      </p>
                      <p className="text-deep-iris font-semibold text-sm sm:text-base leading-snug">
                        <span className="text-iris-pulse font-bold mr-1">✓</span>
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 reveal reveal-delay-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base"
                id="problem-cta-btn"
              >
                Quero resolver isso agora →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
