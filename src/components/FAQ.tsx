import { useState, useEffect, useRef } from 'react'

const faqs = [
  {
    id: 'faq-1',
    question: 'Quais animais você atende?',
    answer:
      <em>
        Atendo todas as espécies de pets silvestres e exóticos como:
        - roedores;<br />
        - coelhos;<br />
        - aves;<br />
        - répteis, entre outros;<br />
        - além de cães e gatos.<br />
        Tenho especialização específica em animais não-convencionais, o que garante um atendimento técnico e seguro para essas espécies.
      </em>,
  },
  {
    id: 'faq-2',
    question: 'O que preciso apresentar no dia do atendimento?',
    answer:
      <em>
        Sempre que possível, tenha em mãos:<br />
        - documentações anteriores do paciente (como o prontuário);<br />
        - histórico de doenças e tratamentos;<br />
        - exames realizados com resultados;<br />
        - anote há quanto tempo observa os sintomas do seu pet;<br />
        - anote quais foram as últimas alimentações do pet (marca, frequência e quantidade);<br />
        - coloração e odor das fezes e urinas do pet;
      </em>,
  },
  {
    id: 'faq-3',
    question: 'Como funciona o atendimento?',
    answer:
      <em>
        1. O atendimento pode ser a domicílio — eu vou até você — ou em uma das clínicas parceiras. <br />
        2. No prazo de 30 dias, o paciente tem direito a 1 retorno gratuito por teleatendimento (sem custo de consulta).<br />
        3. O retorno é válido apenas para o mesmo quadro clínico que motivou o primeiro atendimento.<br />
        4. Se for necessário o deslocamento do médico veterinário para o retorno, será cobrada apenas a taxa de deslocamento, não sendo cobrada nova consulta.<br />
        5. Caso seja necessário administrar medicações ou realizar coletas durante o retorno, serão cobrados apenas os insumos utilizados e os respectivos exames.
      </em>,
  },
  {
    id: 'faq-4',
    question: 'Existe consulta online?',
    answer:
      <em>
        Sim!<br />
        Realizamos consultas online, mas apenas para orientações específicas e retornos onde não haja necessidade de examinar ou manipular o animal — como devolutiva de exames ou renovação de receita para medicação de uso contínuo.
      </em>,
  },
  {
    id: 'faq-5',
    question: 'Qual a área de atendimento domiciliar?',
    answer:
      <em>
        Realizamos atendimentos domiciliares somente na cidade de São Paulo (capital) e região do Alto Tietê (Mogi das Cruzes, Suzano, Poá, Itaquaquecetuba e municípios próximos).<br />
        Para locais fora da área padrão, entre em contato para verificarmos a disponibilidade.
      </em>,
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Deve permanecer aberto e fechar somente após selecionar outro card
  const selectCard = (id: string) => {
    setOpenId(id)
  }

  // Quando sair desta seção deve resetar os cards para formato só de pergunta
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setOpenId(null)
        }
      },
      { threshold: 0 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 lg:py-28 bg-deep-iris border-b border-iris-border/50 relative overflow-hidden"
      aria-label="Perguntas frequentes"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-iris-glow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-iris-shadow border border-iris-border rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-clinical-cyan" />
            <span className="text-xs sm:text-sm font-medium text-lilac-mist">
              Tire suas dúvidas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-cloud-white leading-tight tracking-heading">
            Perguntas <span className="text-clinical-cyan">frequentes</span>
          </h2>
          <p className="mt-4 text-pearl/80 text-base sm:text-lg font-medium">
            Não encontrou sua resposta? Fale diretamente pelo WhatsApp.
          </p>
        </div>

        {/* Accordion List - Container handles reveal, items maintain stable opacity */}
        <div className="space-y-4 reveal">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`bg-iris-shadow/95 border transition-all duration-300 rounded-2xl overflow-hidden ${isOpen
                  ? 'border-clinical-cyan shadow-card-hover scale-[1.01]'
                  : 'border-iris-border hover:border-iris-veil'
                  }`}
              >
                <button
                  id={faq.id}
                  onClick={() => selectCard(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-answer`}
                >
                  <span className={`font-semibold text-base sm:text-[17px] transition-colors pr-4 ${isOpen ? 'text-clinical-cyan' : 'text-cloud-white group-hover:text-clinical-cyan'
                    }`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen
                      ? 'bg-iris-pulse border-iris-pulse text-cloud-white rotate-45 shadow-sm'
                      : 'border-iris-border bg-deep-iris/60 text-lilac-mist group-hover:border-clinical-cyan group-hover:text-clinical-cyan'
                      }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 stroke-current" strokeWidth={2.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`${faq.id}-answer`}
                  className={`faq-accordion-content ${isOpen ? 'open' : ''}`}
                  aria-hidden={!isOpen}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1">
                      <div className="w-full h-px bg-iris-border/60 mb-4" />
                      <p className="text-pearl/80 text-sm sm:text-base font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA to WhatsApp */}
        <div className="mt-12 text-center reveal">
          <p className="text-pearl/70 font-medium mb-4">Tem mais alguma dúvida?</p>
          <a
            href="https://wa.me/5511992769210?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20o%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
            id="faq-whatsapp-btn"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Perguntar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
