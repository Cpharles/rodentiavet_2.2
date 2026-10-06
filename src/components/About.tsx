export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden"
      aria-label="Sobre a Rodentia Vet"
    >
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-clinical-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Images Composition */}
          <div className="relative reveal flex justify-center">
            {/* Main Circle / Profile Image */}
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-iris-border/80 shadow-2xl relative z-10 bg-iris-shadow group">
                <img
                  src="/images/team-img-10.webp"
                  alt="M.V. Nícolas Braga — Médico Veterinário Rodentia Vet"
                  className="w-full h-full object-cover" /*object-top group-hover:scale-105 transition-transform duration-700*/
                />
              </div>

              {/* Logo Overlay */}
              <div className="absolute -bottom-3 -right-3 lg:right-2 w-40 h-40 rounded-full border-1 border-iris-border bg-deep-iris p-1 shadow-xl overflow-hidden z-20 transition-transform hover:scale-105" >
                <img src="/logo_vet.png" alt="Logo Rodentia Vet" className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Small accent images (Preserved) */}
              <div className="hidden lg:block">
                <div className="absolute top-4 -left-10 w-28 h-28 rounded-2xl overflow-hidden shadow-card-hover border border-iris-border bg-iris-shadow group z-20">
                  <img
                    src="/images/wild-health4.webp"
                    alt="Animal silvestre"
                    className="w-full h-full object-cover" /*group-hover:scale-110 transition-transform duration-500"*/
                  />
                </div>
                <div className="absolute bottom-4 -left-10 w-28 h-28 rounded-2xl overflow-hidden shadow-card-hover border border-iris-border bg-iris-shadow group z-20">
                  <img
                    src="/images/squirrels.webp"
                    alt="Esquilo"
                    className="w-full h-full object-cover" /*group-hover:scale-110 transition-transform duration-500"*/
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal reveal-delay-2">
            <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-clinical-cyan" />
              <span className="text-xs sm:text-sm font-medium text-lilac-mist">
                Sobre nós
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading mb-6">
              Por trás de cada consulta há um{' '}
              <span className="text-clinical-cyan">cuidado genuíno</span>
            </h2>

            {/* About brand story */}
            <div className="mb-6">
              <h3 className="font-semibold text-cloud-white text-base sm:text-lg mb-2 flex items-center gap-2">
                <span>🐭</span> O nome Rodentia Vet
              </h3>
              <p className="text-pearl/80 leading-relaxed text-sm font-medium">
                <em className="text-lilac-mist not-italic font-semibold">Rodentia</em> é a ordem taxonômica que engloba todos os roedores. O nome nasceu de anos de convivência e amor a esses animais — trabalhando com eles em pesquisas, clínicas e atendimentos. Mais do que um nome, é uma declaração de identidade.
              </p>
            </div>

            {/* About vet profile card with hover effects */}
            <div className="dark-card p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-13 h-13 rounded-[7px] bg-iris-glow/40 border border-iris-border flex items-center justify-center text-2xl flex-shrink-0 p-2.5">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-semibold text-cloud-white text-base sm:text-lg">
                    M.V. Nícolas Braga Pellagio
                  </h3>
                  <p className="text-clinical-cyan text-xs sm:text-sm font-medium mb-2.5">
                    CRMV — M.V. Pets Não-Convencionais, Cão e Gato
                  </p>
                  <p className="text-pearl/75 text-xs sm:text-sm font-medium leading-relaxed">
                    Formado em Medicina Veterinária pela <strong className="text-cloud-white">FMVZ-USP</strong>, com mais de 5 anos de experiência em pesquisa no departamento de patologia veterinária. Pós-graduado em Pets Não-Convencionais pelo <strong className="text-cloud-white">CETAC VET</strong> e atualmente doutorando na FMVZ-USP.
                  </p>
                </div>
              </div>
            </div>

            {/* Credentials badges */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              {[
                '🎓 FMVZ-USP',
                '📚 CETAC VET',
                '🔬 Doutorando USP',
                '🦎 Exóticos',
                '🐾 Cão & Gato',
              ].map((badge) => (
                <span
                  key={badge}
                  className="bg-iris-shadow border border-iris-border text-lilac-mist text-xs font-medium px-3.5 py-1.5 rounded-full hover:border-clinical-cyan/60 hover:text-clinical-cyan transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Mission blockquote */}
            <blockquote className="border-l-2 border-clinical-cyan pl-5 py-1">
              <p className="text-pearl font-medium italic text-sm sm:text-base leading-relaxed">
                "Meu objetivo é oferecer o mesmo nível de cuidado especializado que qualquer membro da família merece — com a conveniência de ir até você."
              </p>
              <footer className="mt-2 text-lilac-mist text-xs sm:text-sm font-medium">
                — M.V. Nícolas Braga, Rodentia Vet
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
