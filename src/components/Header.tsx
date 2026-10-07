import { useState, useEffect } from 'react'

interface HeaderProps {
  whatsappUrl: string
}

export default function Header({ whatsappUrl }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-deep-iris/90 backdrop-blur-md border-b border-iris-border/70 py-3 shadow-lg'
        : 'bg-deep-iris/60 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="header-logo">
            <div className="relative">
              <img
                src="/logo_vet.png"
                alt="Rodentia Vet — Logo"
                className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-iris-border/80 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="block font-semibold text-cloud-white text-lg tracking-[-0.03em] leading-tight">Rodentia Vet</span>
              <span className="block text-clinical-cyan text-xs font-medium">Clínica & Domiciliar</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-pearl/80 font-medium text-[15px] hover:text-clinical-cyan transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-clinical-cyan after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="header-mobile-cta"
              className="btn-primary text-sm py-2.5 px-6 hidden sm:mobile-menu-cta"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Consulta
            </a>

            {/* Hamburger */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-cloud-white hover:bg-iris-shadow border border-iris-border/60 transition-colors"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <div className={`w-5 h-0.5 bg-cloud-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-5 h-0.5 bg-cloud-white my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-0.5 bg-cloud-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 pt-3 pb-4' : 'max-h-0'
            }`}
        >
          <nav className="p-4 bg-iris-shadow/95 border border-iris-border rounded-2xl flex flex-col gap-2 backdrop-blur-lg" aria-label="Menu mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 text-pearl font-medium rounded-xl hover:bg-iris-glow/40 hover:text-clinical-cyan transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2 justify-center"
              onClick={() => setMenuOpen(false)}
            >
              📲 Agendar pelo WhatsApp
              </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
