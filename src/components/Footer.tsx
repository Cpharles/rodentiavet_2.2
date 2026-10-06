interface FooterProps {
  whatsappUrl: string
}

export default function Footer({ whatsappUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101048] border-t border-iris-border text-cloud-white relative overflow-hidden pt-16 pb-12" aria-label="Rodapé">
      {/* Decorative background ambient glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-iris-glow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-clinical-cyan/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Column 1: Info and Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3 group w-fit" id="footer-logo">
              <img
                src="/logo_vet.png"
                alt="Rodentia Vet — Logo"
                className="w-14 h-14 rounded-full border border-iris-border transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="block font-semibold text-lg leading-tight text-cloud-white">Rodentia Vet</span>
                <span className="block text-clinical-cyan text-xs font-medium">Clínica & Domiciliar</span>
              </div>
            </a>
            <p className="text-pearl/75 text-sm font-medium leading-relaxed max-w-xs">
              Cuidado profissional e humanizado com o carinho que seu pet merece. Atendimento especializado em pets exóticos, silvestres, cães e gatos.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-semibold text-cloud-white text-base mb-5 pb-2 border-b border-iris-border/60 w-fit pr-8">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm font-medium text-pearl/75">
              <li>
                <a href="#beneficios" className="hover:text-clinical-cyan transition-colors">Benefícios</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-clinical-cyan transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-clinical-cyan transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-clinical-cyan transition-colors">Sobre o Veterinário</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-clinical-cyan transition-colors">Dúvidas Frequentes (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold text-cloud-white text-base mb-5 pb-2 border-b border-iris-border/60 w-fit pr-8">
              Contato
            </h3>
            <ul className="space-y-3 text-sm font-medium text-pearl/75">
              <li className="flex items-start gap-2.5">
                <span className="text-base text-clinical-cyan">📞</span>
                <a href="tel:11992769210" className="hover:text-clinical-cyan transition-colors">
                  (11) 99276-9210
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base text-clinical-cyan">✉️</span>
                <a href="mailto:nick.vetsilvestre@gmail.com" className="hover:text-clinical-cyan transition-colors break-all">
                  nick.vetsilvestre@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-base text-clinical-cyan">📍</span>
                <span>
                  São Paulo Capital<br />Região do Alto Tietê<br />(atendimento domiciliar e clínicas parceiras).
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Action */}
          <div>
            <h3 className="font-semibold text-cloud-white text-base mb-5 pb-2 border-b border-iris-border/60 w-fit pr-8">
              Horário de Atendimento
            </h3>
            <p className="text-sm font-medium text-pearl/75 leading-relaxed mb-4">
              Segunda a Sábado: 8h às 18h<br />
              Atendimento com agendamento prévio.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 inline-flex items-center"
              id="footer-cta-btn"
            >
              📲 Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Lower section with legal links and copyright */}
        <div className="pt-8 border-t border-iris-border/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-pearl/50">
          <div className="flex flex-col gap-1.5 text-center md:text-left">
            <div>
              <strong className="text-pearl/70">Rodentia Vet Ltda.</strong> — CNPJ: 55.499.389/0001-53
            </div>
            <div>
              Responsável Técnico: M.V. Nícolas Braga Pellagio | CRMV-SP
            </div>
            <div>
              © {currentYear} Rodentia Vet. Todos os direitos reservados.
            </div>
          </div>

          <div className="flex gap-4">
            <a href="/politica-de-privacidade.html" className="hover:text-clinical-cyan transition-colors" id="privacy-policy-link">
              Política de Privacidade
            </a>
            <span>|</span>
            <a href="/termos-de-uso.html" className="hover:text-clinical-cyan transition-colors" id="terms-of-use-link">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
