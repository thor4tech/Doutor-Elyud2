import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  Scale, 
  Gavel, 
  Users, 
  FileText, 
  Shield, 
  Clock, 
  CreditCard, 
  Video, 
  Calendar, 
  ArrowRight,
  Star,
  CheckCircle, 
  Briefcase,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
  Lock,
  Award,
  BookOpen,
  Send,
  Check,
  GraduationCap,
  Scroll,
  Target,
  Eye,
  Heart,
  Plus,
  Minus,
  FileCheck,
  Landmark,
  Home,
  HeartHandshake,
  Quote,
  Lightbulb,
  Search,
  TrendingUp,
  ShieldCheck,
  ExternalLink,
  Info,
  Building2,
  Car,
  FileSearch,
  Calculator,
  Vote,
  Loader2
} from 'lucide-react';

// --- Types ---

type Page = 'home' | 'about' | 'areas' | 'blog' | 'links' | 'contact' | 'booking';

// --- Componentes do Design System (Elementor Style) ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp' | 'navy' | 'ghost';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({ children, variant = 'primary', className = '', icon, ...props }: ButtonProps) => {
  const baseStyle = "uppercase tracking-wider text-xs md:text-sm font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none";
  
  const variants = {
    primary: "bg-gold text-navy hover:bg-white hover:text-navy shadow-md hover:shadow-lg border border-transparent btn-shine",
    outline: "bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy",
    whatsapp: "bg-[#25D366] text-white hover:bg-green-600 shadow-lg border border-transparent btn-shine",
    navy: "bg-navy text-white border border-navy hover:bg-opacity-90",
    ghost: "bg-transparent text-navy hover:text-gold p-0 hover:translate-y-0"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  bg?: 'white' | 'light' | 'navy';
}

const Section = ({ className = '', children, id = '', bg = 'white' }: SectionProps) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-[#F6F7F8]', 
    navy: 'bg-navy-gradient bg-noise text-white'
  };

  return (
    <section id={id} className={`py-12 md:py-24 px-4 sm:px-6 lg:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = false, light = false }: SectionTitleProps) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    {subtitle && (
      <span className={`block text-xs uppercase tracking-[0.2em] font-bold mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-wide font-serif ${light ? 'text-white' : 'text-navy'}`}>
      {title}
    </h2>
    {!centered && <div className="h-1 w-16 bg-gold-gradient mt-6"></div>}
    {centered && <div className="h-1 w-16 bg-gold-gradient mt-6 mx-auto"></div>}
  </div>
);

// --- Componentes Globais ---

const Header = ({ currentPage, setPage }: { currentPage: Page, setPage: (page: Page) => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'Sobre', page: 'about' },
    { name: 'Áreas de Atuação', page: 'areas' },
    { name: 'Blog', page: 'blog' },
    { name: 'Links Úteis', page: 'links' },
    { name: 'Contato', page: 'contact' },
  ];

  const handleNav = (page: Page) => {
    setPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Lógica de Classes do Header:
  // Mobile: Fundo mais sólido para garantir visibilidade do menu "barrinha"
  // Desktop: Transparente -> Sólido ao rolar
  const headerClasses = `fixed w-full z-50 transition-all duration-300 border-b border-white/5 
    ${mobileMenuOpen ? 'bg-navy' : ''} 
    ${scrolled ? 'bg-navy shadow-lg py-3' : 'bg-navy/95 md:bg-navy/80 backdrop-blur-md py-4 md:py-6'}
  `;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50 h-full">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
          <div className="border-2 border-gold p-1 rounded-sm group-hover:bg-gold/10 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <div className="text-gold-gradient font-serif font-bold text-lg w-8 h-8 flex items-center justify-center tracking-widest">
              EF
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg tracking-wide uppercase leading-none">Elyud Freitas</span>
            <span className="text-gold text-[10px] uppercase tracking-[0.3em]">Advocacia</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <button 
              key={item.name} 
              onClick={() => handleNav(item.page)}
              className={`${currentPage === item.page ? 'text-gold' : 'text-gray-300'} hover:text-gold text-xs uppercase tracking-widest font-medium transition-colors`}
            >
              {item.name}
            </button>
          ))}
          
          <div className="flex items-center gap-4 ml-4">
            <Button variant="primary" onClick={() => handleNav('booking')}>
              Agendar Consultoria
            </Button>
          </div>
        </nav>

        {/* Mobile Toggle Button (Hambúrguer) - Maior e mais visível */}
        <button 
            className="md:hidden text-white hover:text-gold transition-colors p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu Principal"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay - Tela Cheia, Fundo Sólido, Itens Grandes */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-navy z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNav(item.page)}
                  className={`text-left text-2xl font-serif py-4 border-b border-white/10 transition-colors ${currentPage === item.page ? 'text-gold' : 'text-white hover:text-gold'}`}
                >
                  {item.name}
                </button>
            ))}
            <div className="pt-8 pb-20">
                 <Button variant="primary" className="w-full text-lg py-4 shadow-xl" onClick={() => {
                    handleNav('booking');
                    setMobileMenuOpen(false);
                }}>
                    Agendar Consultoria
                </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = ({ setPage }: { setPage: (page: Page) => void }) => (
  <footer className="bg-navy-gradient bg-noise text-white pt-16 pb-8 border-t border-white/10 text-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center md:text-left">
        
        {/* Brand */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
              <div className="border-2 border-gold p-1 rounded-sm">
                  <div className="text-gold-gradient font-serif font-bold w-6 h-6 flex items-center justify-center">EF</div>
              </div>
              <div className="flex flex-col text-left">
                  <span className="font-serif font-bold text-lg leading-none">ELYUD FREITAS</span>
                  <span className="text-gold text-[10px] uppercase tracking-widest">Advocacia</span>
              </div>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Fornecendo soluções jurídicas de alto nível com integridade, transparência e dedicação. Seu parceiro de confiança em questões legais.
          </p>
          <div className="flex gap-4">
              <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">IG</div>
              <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">LI</div>
              <div className="w-8 h-8 border border-white/20 rounded flex items-center justify-center hover:bg-gold hover:text-navy transition-all cursor-pointer">FB</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-xs">Links Rápidos</h4>
          <ul className="space-y-3 text-gray-400 w-full">
            <li><button onClick={() => { setPage('about'); window.scrollTo(0,0); }} className="hover:text-gold transition-colors w-full md:text-left">Sobre Nós</button></li>
            <li><button onClick={() => { setPage('areas'); window.scrollTo(0,0); }} className="hover:text-gold transition-colors w-full md:text-left">Áreas de Atuação</button></li>
            <li><button onClick={() => { setPage('blog'); window.scrollTo(0,0); }} className="hover:text-gold transition-colors w-full md:text-left">Notícias & Insights</button></li>
            <li><button onClick={() => { setPage('links'); window.scrollTo(0,0); }} className="hover:text-gold transition-colors w-full md:text-left">Links Úteis</button></li>
            <li><button onClick={() => { setPage('contact'); window.scrollTo(0,0); }} className="hover:text-gold transition-colors w-full md:text-left">Contato</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-xs">Contato</h4>
          <ul className="space-y-4 text-gray-400 w-full">
            <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <MapPin size={16} className="text-gold flex-shrink-0 mt-1" />
              <span>Av. Paulista, 1000, Sala 120<br/>São Paulo, SP - Brasil</span>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-3">
              <Phone size={16} className="text-gold flex-shrink-0" />
              <span>+55 (11) 99999-9999</span>
            </li>
            <li className="flex flex-col md:flex-row items-center gap-3">
              <Mail size={16} className="text-gold flex-shrink-0" />
              <span>contato@elyudfreitas.adv.br</span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-bold text-white uppercase tracking-wider mb-6 text-xs">Horário de Atendimento</h4>
          <ul className="space-y-3 text-gray-400 w-full max-w-xs md:max-w-none">
            <li className="flex justify-between">
              <span>Seg - Sex:</span>
              <span>09:00 - 18:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sáb - Dom:</span>
              <span>Fechado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Elyud Freitas Advocacia. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppButton = () => (
    <a 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 left-6 md:left-auto md:w-auto z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-105 flex items-center justify-center gap-2 group btn-shine"
    >
        <MessageCircle size={24} />
        <span className="text-sm font-bold uppercase tracking-wider md:hidden">Falar com Advogado</span>
        <span className="hidden md:block absolute right-full mr-4 bg-white text-navy text-xs font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-navy">
            Fale com o Advogado
        </span>
    </a>
);

// --- Componentes das Páginas ---

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc }) => (
  <div className="group p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-navy transition-all duration-300 bg-white h-full flex flex-col hover:-translate-y-2">
    <div className="w-12 h-12 mb-6 text-gold group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-navy mb-3 font-serif group-hover:text-gold-gradient transition-colors">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
      {desc}
    </p>
    <a href="#" className="text-xs font-bold text-navy uppercase tracking-wider group-hover:text-gold flex items-center gap-1 transition-colors">
      Saiba mais <ArrowRight size={14} />
    </a>
  </div>
);

// HOME PAGE COMPONENTS
const HeroHome = ({ setPage }: { setPage: (page: Page) => void }) => (
  <section className="relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0 bg-navy">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-scroll md:bg-fixed opacity-60 mix-blend-overlay transform scale-105"
        style={{
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA5F4oUiqB21eNvYLlFMd04XIR_ISX9jT6Ac65r6QqgSm_1tSJ4cZEdFB_X_LYpDu5pz2AgaZldqSAzBhpxDSBQd8EkHz6MzuONf3fg3b3Dak1hN9kD4JbyA_KrUsQBQ6pLuDtmR0w_Hsw6_quUHWKZEpnw6jyB8Bguc_31kwLexCLl8UcNuaF7Pg6YusNnS6QzS3pau1sYDNWTrHmNvS1UKk6eYngi4aFgdoDVz8BzMj6BlIwj0yq07KTlUwk9WOKy89rxu4CY5aNF')"
        }}
      ></div>
      {/* Cinematic Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(11,32,60,0.4)_0%,_rgba(11,32,60,0.95)_100%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-8 md:gap-0">
      
      {/* Text Section: Order 2 on Mobile (Bottom), Order 1 on Desktop (Left) */}
      <div className="w-full md:w-1/2 text-white space-y-6 md:space-y-8 py-4 md:py-20 animate-fade-in-up order-2 md:order-1 text-center md:text-left">
        <div className="inline-block border-l-4 border-gold pl-6 md:mx-0 mx-auto text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight font-serif">
            Bem-vindo.
          </h1>
        </div>
        <h2 className="text-lg md:text-2xl text-gray-200 font-light max-w-lg leading-relaxed delay-100 animate-fade-in-up mx-auto md:mx-0">
          Advocacia responsável e acessível, desenhada para proteger seus interesses e assegurar o seu futuro.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 delay-200 animate-fade-in-up justify-center md:justify-start">
          <Button variant="whatsapp" icon={<MessageCircle size={20} />} onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>WhatsApp</Button>
          <Button variant="outline" icon={<ArrowRight size={20} />} onClick={() => setPage('booking')}>Agendar Consultoria</Button>
        </div>
      </div>
      
      {/* Image Section: Order 1 on Mobile (Top), Order 2 on Desktop (Right) */}
      {/* Added mt-4 for spacing on mobile, adjusted height for mobile visibility */}
      <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] flex justify-center md:justify-end items-end animate-fade-in-up delay-300 order-1 md:order-2 mt-4 md:mt-0">
           <div className="relative w-4/5 h-full md:h-5/6">
              {/* Floating Effect Elements */}
              <div className="absolute -inset-4 bg-gold/10 rounded-xl transform rotate-3 blur-sm"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-b-8 border-gold">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkE9QBzBoia6l92dd5ebTh3gdpSrMK18rhpmwNUcSx8IjzsMRiEe8yeHVi_1hzVCVUtFpitYrXb5mKnzNTePVSj1fYYA2Lir9My5uMz8P0gyquQL8cG0O8EhLPRe20CHmDzFGgmxRd3IRg2Jx2FDvaADiIwtq0pCaEzHtZOG8NDxMYlM-BOR6I2dvQvLQK9mJB_y-aM31eCbgislquqEmkENTT8lRpd7ZmNrNgH9NOFWp778_XqYLqgJXQaC0UwL5nr9xXPBXL-Xfl" alt="Dr. Elyud Freitas" className="w-full h-full object-cover object-top" />
                {/* Gradient Mask for Blending */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-navy/40 to-transparent mix-blend-multiply"></div>
              </div>
          </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => (
    <div className="bg-white border-b border-gray-100 py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 text-center md:text-left">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-[#F8F9FA] p-4 rounded-lg flex items-center gap-4 border border-gray-100 shadow-navy">
              <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm text-lg font-bold text-blue-600">G</div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col text-left">
                <div className="flex text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">5.0 • +120 Avaliações</span>
              </div>
            </div>
          </div>
          <div className="h-px bg-gray-200 flex-grow mx-8 hidden md:block"></div>
          <h3 className="text-navy font-bold text-xl font-serif tracking-wide">Confiança comprovada por centenas de clientes</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { initials: "JD", name: "João Dias", type: "Direito Empresarial", text: "Dr. Elyud forneceu uma orientação excepcional durante nossa fusão." },
            { initials: "AS", name: "Ana Silva", type: "Direito Civil", text: "Profissional, acessível e incrivelmente conhecedor." },
            { initials: "MR", name: "Marcos Rocha", type: "Consultoria", text: "A consulta online foi perfeita. Em 60 minutos, eu tinha um caminho claro." }
          ].map((testimonial, i) => (
            <div key={i} className="p-8 bg-[#F6F7F8] rounded-xl border border-transparent hover:border-gold/30 hover:shadow-navy transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-navy/10 text-navy font-bold flex items-center justify-center">{testimonial.initials}</div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-navy">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.type}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

const Journey = () => (
    <Section bg="light">
        <div className="text-center mb-16">
            <span className="text-gold font-bold text-xs tracking-widest uppercase">Nosso Processo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 font-serif tracking-wide">Juntos em sua jornada</h2>
        </div>
        <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[
                    { icon: <Calendar className="w-6 h-6" />, title: "Agendamento", desc: "Escolha o melhor horário via calendário online." },
                    { icon: <CreditCard className="w-6 h-6" />, title: "Pagamento", desc: "Confirme seu horário com pagamento seguro." },
                    { icon: <Video className="w-6 h-6" />, title: "Reunião Online", desc: "Conexão via Google Meet para 60 min de consultoria." },
                    { icon: <Gavel className="w-6 h-6" />, title: "Próximos Passos", desc: "Receba um resumo e estratégia jurídica clara." },
                ].map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:border-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-300 text-gray-400">
                            {step.icon}
                        </div>
                        <h4 className="text-lg font-bold text-navy mb-2">{index + 1}. {step.title}</h4>
                        <p className="text-sm text-gray-500 px-4 leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const AreasHome = ({ setPage }: { setPage: (page: Page) => void }) => {
    const services = [
        { icon: <Scale size={40} />, title: "Contencioso Civil", desc: "Representação de pessoas e empresas em disputas complexas." },
        { icon: <Users size={40} />, title: "Direito de Família", desc: "Orientação compassiva em divórcios, guarda e inventários." },
        { icon: <Briefcase size={40} />, title: "Direito Empresarial", desc: "Assessoria estratégica para startups e empresas consolidadas." },
        { icon: <Gavel size={40} />, title: "Defesa Criminal", desc: "Proteção da sua liberdade e reputação com representação estratégica." },
        { icon: <Shield size={40} />, title: "Imobiliário", desc: "Suporte jurídico para compra, venda e locação de imóveis." },
        { icon: <FileText size={40} />, title: "Direito Trabalhista", desc: "Assessoria para empregadores e empregados sobre direitos." },
      ];
    return (
        <Section id="areas">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 text-center md:text-left">
                <div className="w-full md:w-auto">
                    <span className="text-gold font-bold text-xs tracking-widest uppercase">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 font-serif tracking-wide">Áreas de Atuação</h2>
                </div>
                <Button variant="ghost" className="hidden md:flex" onClick={() => { setPage('areas'); window.scrollTo(0,0); }}>
                    Ver todas as áreas <ArrowRight size={16} className="ml-2" />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => <ServiceCard key={i} {...s} />)}
            </div>
             <div className="mt-8 md:hidden text-center">
                <Button variant="ghost" onClick={() => { setPage('areas'); window.scrollTo(0,0); }}>Ver todas as áreas <ArrowRight size={16} className="ml-2" /></Button>
            </div>
        </Section>
    )
};

const BlogHome = ({ setPage }: { setPage: (page: Page) => void }) => {
    const posts = [
        { category: "Empresarial", title: "Entendendo a Nova Regulação de Contratos Digitais", date: "24 Out, 2023", excerpt: "Mudanças recentes na legislação alteraram como assinaturas digitais são percebidas..." },
        { category: "Direito Civil", title: "5 Passos para Proteger seus Bens durante o Divórcio", date: "10 Out, 2023", excerpt: "A divisão de bens pode ser complexa. Preparação adequada é essencial..." },
        { category: "Trabalhista", title: "Políticas de Trabalho Remoto: Um Guia", date: "28 Set, 2023", excerpt: "À medida que o trabalho remoto se torna permanente, as empresas devem atualizar..." }
    ];
    return (
        <Section bg="light" id="blog">
             <div className="flex justify-between items-end mb-12">
                <div className="w-full md:w-auto text-center md:text-left"><SectionTitle title="Últimas Notícias" subtitle="Insights" centered={false} /></div>
                
                {/* Enhanced "View All" Button */}
                <button 
                  onClick={() => { setPage('blog'); window.scrollTo(0,0); }}
                  className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-gold/50 text-navy font-bold uppercase text-xs tracking-widest hover:bg-gold hover:text-white transition-all duration-300 group"
                >
                  Ver todos os posts 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <article key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-navy transition-all duration-500 group cursor-pointer border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                        <div className="h-48 bg-navy/10 relative overflow-hidden flex items-center justify-center">
                            {/* Zoom Effect */}
                            <FileText className="text-navy/20 w-16 h-16 transform group-hover:scale-110 transition-transform duration-500" />
                             <span className="absolute top-4 left-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">{post.category}</span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs text-gray-400 mb-2 block">{post.date}</span>
                            <div className="mb-3 relative inline-block">
                                <h3 className="text-lg font-bold text-navy leading-snug group-hover:text-gold-gradient transition-colors font-serif">{post.title}</h3>
                                {/* Expanding Gold Line */}
                                <div className="h-[2px] bg-gold w-0 group-hover:w-full transition-all duration-500 mt-2"></div>
                            </div>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">{post.excerpt}</p>
                            <span className="inline-block mt-auto text-sm font-semibold text-navy hover:text-gold transition-colors">Ler Mais</span>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}

const ConsultationCTA = ({ setPage }: { setPage: (page: Page) => void }) => (
    <Section id="consultancy" bg="navy" className="relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2 pointer-events-none mix-blend-overlay"></div>
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
          <span className="text-gold font-bold text-xs tracking-widest uppercase mb-2 block">Acesso Direto</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif tracking-wide">Consultoria Jurídica Online</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Obtenha aconselhamento jurídico profissional no conforto da sua casa. Analisamos seu caso, esclarecemos dúvidas e propomos soluções concretas em uma sessão dedicada de 1 para 1.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left">
            {[
              { icon: <Clock className="text-gold" />, title: "Duração", text: "60 minutos" },
              { icon: <Calendar className="text-gold" />, title: "Disponibilidade", text: "Qua & Sex: 15h - 17h" },
              { icon: <Lock className="text-gold" />, title: "Confidencialidade", text: "100% Privado & Seguro" },
              { icon: <FileText className="text-gold" />, title: "Entregáveis", text: "Resumo & Plano de Estratégia" }
            ].map((item, i) => (
               <div key={i} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.text}</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-md mx-auto border-t-8 border-gold">
            <h3 className="text-2xl font-bold text-navy mb-2 font-serif">Reserve seu Horário</h3>
            <p className="text-gray-500 text-sm mb-6">Selecione um serviço e data para iniciar o agendamento.</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setPage('booking'); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Selecione o Serviço</label>
                <select className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-gold focus:ring focus:ring-gold/20 text-sm py-3 px-3 outline-none text-navy">
                  <option>Consultoria Jurídica Geral</option>
                  <option>Análise de Contratos</option>
                  <option>Avaliação de Caso</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data Preferencial</label>
                <input type="date" className="w-full border border-gray-300 rounded-lg shadow-sm focus:border-gold focus:ring focus:ring-gold/20 text-sm py-3 px-3 outline-none text-navy" />
              </div>
              <div className="pt-4">
                <Button variant="primary" className="w-full justify-center" icon={<ArrowRight size={18} />}>
                  Continuar para Agendamento
                </Button>
                <p className="text-xs text-center text-gray-400 mt-3">Pagamento necessário para confirmar.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );

// --- PÁGINAS INDIVIDUAIS ---

const HomePage = ({ setPage }: { setPage: (page: Page) => void }) => (
    <>
        <HeroHome setPage={setPage} />
        <SocialProof />
        <Journey />
        <AreasHome setPage={setPage} />
        <ConsultationCTA setPage={setPage} />
        <BlogHome setPage={setPage} />
    </>
);

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children, isOpen, onClick }) => {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white mb-4 shadow-sm transition-all duration-300">
      <button 
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-light border-l-4 border-gold' : 'hover:bg-gray-50'}`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-2 rounded-full ${isOpen ? 'bg-gold text-white' : 'bg-light text-navy'}`}>
            {icon}
          </div>
          <span className={`font-serif font-bold text-lg ${isOpen ? 'text-navy' : 'text-gray-700'}`}>{title}</span>
        </div>
        <div className={`text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 border-t border-gray-100 text-gray-600 leading-relaxed">
            {children}
        </div>
      </div>
    </div>
  )
}

const AboutPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="animate-fade-in-up">
            {/* Split Hero Section - Replaces previous hero */}
            <section className="relative bg-navy-gradient bg-noise pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
                 {/* Background elements */}
                 <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 transform translate-x-20 pointer-events-none mix-blend-overlay"></div>
                 
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        {/* Text */}
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="inline-block px-4 py-1 border border-gold/30 rounded-full bg-navy/50 backdrop-blur-sm">
                                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">Sócio Fundador</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-serif text-white leading-tight tracking-wide">
                                Defendendo seu <br/>
                                <span className="text-transparent bg-clip-text bg-gold-gradient italic">legado</span> com integridade.
                            </h1>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                Elyud Freitas combina décadas de expertise jurídica com uma abordagem moderna e estratégica. Dedicado a fornecer aconselhamento jurídico premium para aqueles que exigem excelência.
                            </p>
                            <div className="pt-4 flex gap-6 justify-center lg:justify-start">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-serif text-white">15+</span>
                                    <span className="text-gold text-xs uppercase tracking-wider mt-1">Anos de Experiência</span>
                                </div>
                                <div className="w-px h-12 bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-serif text-white">Militar</span>
                                    <span className="text-gold text-xs uppercase tracking-wider mt-1">Histórico Público</span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md aspect-[3/4]">
                                {/* Gold Frame */}
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-gold/30 rounded-lg z-0"></div>
                                {/* Image */}
                                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl z-10">
                                    <img 
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkE9QBzBoia6l92dd5ebTh3gdpSrMK18rhpmwNUcSx8IjzsMRiEe8yeHVi_1hzVCVUtFpitYrXb5mKnzNTePVSj1fYYA2Lir9My5uMz8P0gyquQL8cG0O8EhLPRe20CHmDzFGgmxRd3IRg2Jx2FDvaADiIwtq0pCaEzHtZOG8NDxMYlM-BOR6I2dvQvLQK9mJB_y-aM31eCbgislquqEmkENTT8lRpd7ZmNrNgH9NOFWp778_XqYLqgJXQaC0UwL5nr9xXPBXL-Xfl" 
                                        className="w-full h-full object-cover filter saturate-[0.85] contrast-110" 
                                        alt="Dr. Elyud Freitas" 
                                    />
                                    {/* Gradient for integration */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/60 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>

            {/* Accordions Section - Contains all info */}
            <Section>
                <div className="text-center mb-16">
                    <span className="text-gold font-bold text-xs tracking-widest uppercase">Trajetória Profissional</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 font-serif tracking-wide">Perfil Completo</h2>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    {/* 1. Biografia e Trajetória */}
                    <AccordionItem 
                        title="Quem é Elyud Freitas" 
                        icon={<Users />} 
                        isOpen={openIndex === 0} 
                        onClick={() => toggle(0)}
                    >
                         <div className="prose prose-lg text-gray-600 font-light leading-relaxed text-justify">
                            <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-navy first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
                                Fundado nos princípios de integridade e atenção meticulosa aos detalhes, minha jornada no direito começou há mais de 15 anos. Elyud Freitas é advogado que atua com ética, assertividade e eficiência, sempre pautado pela retidão e pelo compromisso com a justiça.
                            </p>
                            <p className="mb-6">
                                Possui ampla experiência na Administração Pública e Militar. Serviu como Militar do Exército Brasileiro e da Marinha do Brasil, trazendo disciplina e estratégia para a prática jurídica. Graduou-se em Direito pelo Centro Universitário de Brasília – UniCEUB (2002) e em Gestão Pública pela Escola de Instrução Especializada – ESIE (2016).
                            </p>
                            <p>
                                Ao longo da carreira, prestou serviços como Conciliador e Advogado na Defensoria Pública do Distrito Federal (TJDFT), Advogado Colaborador da Defensoria Pública da União – Categoria Especiais (atuando em recursos nos Tribunais Superiores: STM, STF e STJ) e Advogado Colaborador do Ministério Público do Distrito Federal – Prourb.
                            </p>
                        </div>
                    </AccordionItem>

                    {/* 2. Valores Profissionais */}
                    <AccordionItem 
                        title="Valores Profissionais" 
                        icon={<Scale />} 
                        isOpen={openIndex === 1} 
                        onClick={() => toggle(1)}
                    >
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                            {/* Value 1 */}
                            <div className="group p-6 bg-light rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                                    <Gavel size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-2">Integridade Inabalável</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    A confiança é a moeda do direito. Operamos com transparência absoluta, garantindo que você nunca fique no escuro sobre o status ou estratégia do seu caso.
                                </p>
                            </div>
                            {/* Value 2 */}
                            <div className="group p-6 bg-light rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                                    <Lightbulb size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-2">Intelecto Estratégico</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Nós não apenas reagimos; nós antecipamos. Cada movimento é calculado, cada documento examinado, garantindo uma defesa proativa de seus interesses.
                                </p>
                            </div>
                            {/* Value 3 */}
                            <div className="group p-6 bg-light rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
                                <div className="w-12 h-12 bg-white text-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-gold group-hover:text-white transition-colors shadow-sm">
                                    <Shield size={24} />
                                </div>
                                <h4 className="text-lg font-bold text-navy mb-2">Discrição Total</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Sua privacidade é fundamental. Tratamos assuntos sensíveis com o mais alto nível de confidencialidade e sigilo profissional.
                                </p>
                            </div>
                         </div>
                    </AccordionItem>

                    {/* 3. Minha Postura */}
                    <AccordionItem 
                        title="Minha Postura" 
                        icon={<Quote />} 
                        isOpen={openIndex === 2} 
                        onClick={() => toggle(2)}
                    >
                        <div className="relative pl-8 border-l-4 border-gold py-2 my-4">
                            <span className="absolute -top-6 -left-4 text-6xl text-gray-200 font-serif opacity-50 select-none">"</span>
                            <p className="text-xl md:text-2xl font-serif text-navy italic leading-relaxed mb-4">
                                O Direito não é um instrumento estático; é uma força dinâmica. Minha postura é de engajamento ativo — não espero que a lei aconteça aos meus clientes; eu alavanco a lei para moldar o futuro deles.
                            </p>
                            <footer className="text-gray-500 font-medium font-sans text-sm">
                                — Elyud Freitas
                            </footer>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                            <div>
                                <h4 className="font-bold text-navy mb-2">Comunicação Proativa</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Acredito que um cliente informado é um cliente empoderado. Você nunca terá que nos cobrar por uma atualização.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-2">Visão Holística</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Um problema jurídico raramente existe no vácuo. Afeta finanças, reputação e família. Minha abordagem considera todas essas dimensões.
                                </p>
                            </div>
                        </div>
                    </AccordionItem>

                    {/* 4. Destaques e Credenciais */}
                    <AccordionItem 
                        title="Destaques e Credenciais" 
                        icon={<Award />} 
                        isOpen={openIndex === 3} 
                        onClick={() => toggle(3)}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-navy p-8 rounded-xl text-white shadow-navy">
                             <div>
                                <h3 className="text-2xl font-serif mb-2">Credenciais Profissionais</h3>
                                <p className="text-gray-300 font-light mb-8 text-sm">Excelência certificada e autoridade reconhecida.</p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold">
                                            <FileCheck size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Registro OAB</p>
                                            <p className="text-lg font-medium text-white">OAB/DF 67.240</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold">
                                            <Award size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Destaque</p>
                                            <p className="text-lg font-medium text-white">Medalha Marechal Ozório</p>
                                            <p className="text-xs text-gray-400">Ministério do Exército</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold">
                                            <BookOpen size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-gray-400">Publicação</p>
                                            <p className="text-lg font-medium text-white">Fiscal de Contratos na Prática</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-64 rounded-lg overflow-hidden border border-white/10 hidden md:block">
                                <div className="absolute inset-0 bg-white/5 flex items-center justify-center backdrop-blur-sm">
                                    <div className="text-center p-6">
                                        <span className="block text-4xl font-serif text-gold-gradient mb-2">98%</span>
                                        <span className="text-xs uppercase tracking-widest text-gray-300">Índice de Satisfação</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AccordionItem>

                    {/* 5. Formação Acadêmica */}
                    <AccordionItem 
                        title="Formação Acadêmica" 
                        icon={<GraduationCap />} 
                        isOpen={openIndex === 4} 
                        onClick={() => toggle(4)}
                    >
                        <ul className="space-y-4">
                            <li className="flex gap-4"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div><div><strong className="text-navy">Bacharel em Direito</strong><br/>Centro Universitário de Brasília-UniCEUB (2002).</div></li>
                            <li className="flex gap-4"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div><div><strong className="text-navy">Pós-Graduado em Direito Público</strong><br/>Universidade Potiguar-UnP (2007).</div></li>
                            <li className="flex gap-4"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div><div><strong className="text-navy">Pós-Graduado em Direito Militar</strong><br/>Centro de Educação Interativa - UNIDERP (2010).</div></li>
                            <li className="flex gap-4"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div><div><strong className="text-navy">Tecnólogo em Gestão Pública</strong><br/>Escola de Instrução Especializada-ESIE (2016).</div></li>
                            <li className="flex gap-4"><div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div><div><strong className="text-navy">Pós-Graduado em Direito Imobiliário</strong><br/>Instituto Brasil de Ensino - IBRA (2022).</div></li>
                        </ul>
                    </AccordionItem>

                    {/* 6. Experiência Profissional */}
                    <AccordionItem 
                        title="Experiência Profissional" 
                        icon={<Briefcase />} 
                        isOpen={openIndex === 5} 
                        onClick={() => toggle(5)}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-navy mb-3 uppercase text-xs tracking-wider">Setor Público & Militar</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Militar da Marinha do Brasil.</li>
                                    <li>• Militar do Exército Brasileiro.</li>
                                    <li>• DAS 101.3 Coordenador Logístico (Ministério da Cultura).</li>
                                    <li>• DAS 101.2 Chefe da Divisão de Contratos (Ministério da Cultura).</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-navy mb-3 uppercase text-xs tracking-wider">Jurídico</h4>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Colaborador do Núcleo de Assistência Jurídica de Brasília (Defensoria Pública TJDFT).</li>
                                    <li>• Conciliador de Justiça na Área Cível (Juizado Especial TJDFT Samambaia).</li>
                                    <li>• Advocacia no Núcleo de Assistência do Juizado Central Criminal (Defensoria Pública TJDFT).</li>
                                    <li>• Advogado do Núcleo de Prática Jurídica na Área Cível (Brasília-DF).</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionItem>

                    {/* 7. Aperfeiçoamentos */}
                    <AccordionItem 
                        title="Aperfeiçoamentos & Cursos" 
                        icon={<Scroll />} 
                        isOpen={openIndex === 6} 
                        onClick={() => toggle(6)}
                    >
                        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-600">
                             {[
                                "Curso Preparatório para Carreira Jurídica (Damásio de Jesus)",
                                "Análise e Melhoria de Processos (ENAP)",
                                "Curso Preparatório para Carreira Jurídica (IELF)",
                                "Seminário Virtual Reforma Trabalhista (FURG/RS)",
                                "Postulação em Juízo: Técnica e Arte (ESA/OAB-DF)",
                                "Fiança Locatícia no NCC (ESA/OAB-DF)",
                                "Procedimentos e Rotinas de Convênio (MMA)",
                                "V Congresso Brasiliense de Direito Constitucional (IDP)",
                                "Atividades de Inteligência no Brasil (Câmara dos Deputados)",
                                "O Novo Código Civil - 2ª parte (Câmara dos Deputados)",
                                "Ciclo de Palestras O Novo Código Civil (Parla-Mundi/LBV)",
                                "La Lutte Contre le Crime Organisé (Paris-France)",
                                "Penas Alternativas e Participação Comunitária (TJDFT)",
                                "I Conferência Internacional de Direitos Humanos (OAB Federal)"
                             ].map((curso, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CheckCircle size={14} className="text-gold mt-1 flex-shrink-0" />
                                    <span>{curso}</span>
                                </li>
                             ))}
                        </ul>
                    </AccordionItem>
                </div>

                <div className="text-center mt-12">
                    <a href="http://lattes.cnpq.br/8009155732178026" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-navy hover:text-gold transition-colors text-sm font-semibold border border-gray-200 px-6 py-3 rounded-full hover:border-gold">
                        <FileCheck size={16} /> Ver Currículo Lattes Completo
                    </a>
                </div>
            </Section>
        </div>
    )
};

const BookingPage = () => {
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');

    const handleDateSelect = (day: number) => {
        setSelectedDate(day);
        setSelectedTime(null); // Reset time when date changes
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            nextStep();
        }, 2000);
    };

    const dates = Array.from({ length: 31 }, (_, i) => i + 1); // Mock dates 1-31
    const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

    return (
        <div className="animate-fade-in-up bg-[#f8f9fa] min-h-screen pb-20 font-sans text-[#0b203c]">
            {/* Hero Section */}
            <header className="relative bg-navy py-12 md:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold via-navy to-navy"></div>
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-wider uppercase mb-4 md:mb-6">Serviços Jurídicos Premium</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white mb-4 md:mb-6">
                        Consultoria Jurídica <span className="text-gold italic">Online</span>
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                        Receba orientação jurídica especializada para o seu caso, no conforto do seu escritório ou casa. Seguro, confidencial e eficiente.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 md:px-6 -mt-8 md:-mt-10 mb-20 relative z-20">
                
                {/* Steps Indicator */}
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-8 md:mb-12 border-t-4 border-gold">
                    <div className="grid grid-cols-4 gap-2 md:gap-8">
                        {[
                            { id: 1, label: "Data" },
                            { id: 2, label: "Dados" },
                            { id: 3, label: "Pagamento" },
                            { id: 4, label: "Confirmação" }
                        ].map((s) => (
                            <div key={s.id} className="flex flex-col items-center text-center relative group">
                                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs md:text-lg mb-2 shadow-sm transition-all duration-300 ${step >= s.id ? 'bg-navy text-gold shadow-lg ring-2 ring-navy/10' : 'bg-gray-100 text-gray-400'}`}>
                                    {step > s.id ? <Check size={16} /> : s.id}
                                </div>
                                <h3 className={`font-serif text-[10px] md:text-sm font-semibold mb-1 hidden sm:block ${step >= s.id ? 'text-navy' : 'text-gray-400'}`}>{s.label}</h3>
                                {s.id < 4 && <div className={`hidden md:block absolute top-6 left-1/2 w-full h-0.5 -z-10 ${step > s.id ? 'bg-gold' : 'bg-gray-100'}`}></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {step === 4 ? (
                    /* Success Step */
                    <div className="bg-white rounded-xl shadow-xl p-12 text-center animate-fade-in-up">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} className="text-green-600" />
                        </div>
                        <h2 className="text-3xl font-serif text-navy font-bold mb-4">Agendamento Confirmado!</h2>
                        <p className="text-gray-600 max-w-lg mx-auto mb-8">
                            Sua consultoria foi agendada com sucesso para o dia <strong>{selectedDate} de Outubro</strong> às <strong>{selectedTime}</strong>. 
                            Um e-mail com os detalhes e o link da reunião foi enviado para <strong>{formData.email}</strong>.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button variant="outline" onClick={() => window.location.reload()}>Voltar ao Início</Button>
                            <Button variant="primary" icon={<Calendar size={18} />}>Adicionar à Agenda</Button>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start animate-fade-in-up">
                        
                        {/* Left Column: Dynamic Content */}
                        <div className="lg:col-span-2 space-y-6 md:space-y-8">
                            
                            {/* Step 1: Calendar & Time */}
                            {step === 1 && (
                                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
                                    <h3 className="text-xl font-serif font-semibold text-navy mb-6 flex items-center gap-2">
                                        <Calendar className="text-gold" size={24} /> Selecionar Data e Hora
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Calendar */}
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <h4 className="font-medium text-lg">Outubro 2023</h4>
                                                <div className="flex gap-2">
                                                    <button className="p-1 hover:bg-gray-100 rounded-full transition"><ChevronLeft size={20} className="text-gray-500" /></button>
                                                    <button className="p-1 hover:bg-gray-100 rounded-full transition"><ChevronRight size={20} className="text-gray-500" /></button>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                                                {['D','S','T','Q','Q','S','S'].map((d,i) => (
                                                    <span key={i} className="text-gray-400 font-medium py-2">{d}</span>
                                                ))}
                                            </div>
                                            <div className="grid grid-cols-7 gap-2 text-center text-sm">
                                                {dates.map(date => (
                                                    <button 
                                                        key={date}
                                                        onClick={() => handleDateSelect(date)}
                                                        className={`p-2 rounded-lg transition-colors ${selectedDate === date ? 'bg-navy text-gold shadow-md font-bold' : 'hover:bg-gray-50 text-gray-700'}`}
                                                    >
                                                        {date}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Time Slots */}
                                        <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                                            <h4 className="font-medium text-gray-700 mb-4">
                                                {selectedDate ? `Horários para dia ${selectedDate}` : 'Selecione uma data'}
                                            </h4>
                                            <div className="space-y-3 max-h-[300px] overflow-y-auto time-slots pr-2">
                                                {selectedDate ? (
                                                    timeSlots.map(time => (
                                                        <button 
                                                            key={time}
                                                            onClick={() => handleTimeSelect(time)}
                                                            className={`w-full py-3 px-4 rounded-lg border text-left flex justify-between items-center transition-all ${selectedTime === time ? 'bg-navy text-white border-navy shadow-md' : 'border-gray-200 hover:border-gold hover:bg-gold/5'}`}
                                                        >
                                                            <span className={`font-medium ${selectedTime === time ? 'text-gold' : 'text-navy'}`}>{time}</span>
                                                            {selectedTime === time && <span className="text-xs text-white/80 uppercase flex items-center gap-1"><CheckCircle size={14} /> Selecionado</span>}
                                                        </button>
                                                    ))
                                                ) : (
                                                    <p className="text-sm text-gray-400 italic">Por favor, escolha um dia no calendário para ver os horários disponíveis.</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: User Details Form */}
                            {step === 2 && (
                                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-serif font-semibold text-navy">Suas Informações</h3>
                                        <Button variant="ghost" onClick={prevStep} className="text-xs">Voltar</Button>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-navy uppercase tracking-wider">Nome Completo</label>
                                                <input 
                                                    type="text" 
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy shadow-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                                                    placeholder="Seu nome"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-xs font-bold text-navy uppercase tracking-wider">Telefone / WhatsApp</label>
                                                <input 
                                                    type="tel" 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy shadow-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                                                    placeholder="(00) 00000-0000"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold text-navy uppercase tracking-wider">E-mail</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy shadow-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" 
                                                placeholder="seu@email.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="block text-xs font-bold text-navy uppercase tracking-wider">Detalhes do Caso</label>
                                            <textarea 
                                                rows={4}
                                                name="details"
                                                value={formData.details}
                                                onChange={handleInputChange} 
                                                className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-navy shadow-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none" 
                                                placeholder="Descreva brevemente sua necessidade jurídica..."
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Payment */}
                            {step === 3 && (
                                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-serif font-semibold text-navy">Pagamento</h3>
                                        <Button variant="ghost" onClick={prevStep} className="text-xs">Voltar</Button>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <h4 className="font-bold text-navy mb-2">Revise seus dados</h4>
                                            <p className="text-sm text-gray-600 mb-1"><strong>Nome:</strong> {formData.name}</p>
                                            <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {formData.email}</p>
                                            <p className="text-sm text-gray-600"><strong>Data:</strong> {selectedDate}/10/2023 às {selectedTime}</p>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-3">Método de Pagamento</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <button 
                                                    onClick={() => setPaymentMethod('pix')}
                                                    className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'pix' ? 'border-gold bg-gold/5 text-navy font-bold' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                                >
                                                    <span className="text-2xl">💠</span> Pix
                                                </button>
                                                <button 
                                                    onClick={() => setPaymentMethod('card')}
                                                    className={`p-4 rounded-lg border flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-gold bg-gold/5 text-navy font-bold' : 'border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                                >
                                                    <CreditCard size={24} /> Cartão
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {paymentMethod === 'pix' ? (
                                            <div className="text-center p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                                                <p className="text-sm text-gray-500 mb-2">QR Code para pagamento instantâneo</p>
                                                <div className="w-32 h-32 bg-gray-300 mx-auto mb-2 flex items-center justify-center text-xs text-gray-500">MOCK QR CODE</div>
                                                <p className="text-xs text-gold font-bold cursor-pointer">Copiar código Pix</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <input type="text" placeholder="Número do Cartão" className="w-full p-3 border rounded text-sm" />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <input type="text" placeholder="MM/AA" className="w-full p-3 border rounded text-sm" />
                                                    <input type="text" placeholder="CVV" className="w-full p-3 border rounded text-sm" />
                                                </div>
                                                <input type="text" placeholder="Nome no Cartão" className="w-full p-3 border rounded text-sm" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Right Column: Summary & Actions (Sticky) */}
                        <div className="space-y-8 lg:sticky lg:top-24">
                            {/* Booking Summary Sticky */}
                            <div className="bg-white rounded-xl shadow-xl border-t-4 border-navy p-6">
                                <h3 className="font-serif text-lg font-semibold text-navy mb-4 border-b border-gray-100 pb-2">Resumo do Agendamento</h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">Serviço</span>
                                        <span className="font-medium text-navy text-right text-sm">Consultoria Jurídica</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">Data</span>
                                        <span className="font-medium text-navy text-right text-sm">{selectedDate ? `${selectedDate} Out, 2023` : '-'}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">Horário</span>
                                        <span className="font-medium text-navy text-right text-sm">{selectedTime || '-'}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm">Duração</span>
                                        <span className="font-medium text-navy text-right text-sm">1 Hora</span>
                                    </div>
                                    <div className="border-t border-dashed border-gray-200 my-2"></div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-gray-500 font-medium">Total</span>
                                        <span className="font-serif font-bold text-2xl text-navy">R$ 450<span className="text-sm font-sans font-normal text-gray-400">,00</span></span>
                                    </div>
                                </div>
                                
                                {step === 1 && (
                                    <Button 
                                        className="w-full justify-center" 
                                        onClick={nextStep} 
                                        disabled={!selectedDate || !selectedTime}
                                        icon={<ArrowRight size={18} />}
                                    >
                                        Prosseguir para Dados
                                    </Button>
                                )}

                                {step === 2 && (
                                    <Button 
                                        className="w-full justify-center" 
                                        onClick={nextStep} 
                                        disabled={!formData.name || !formData.email || !formData.phone}
                                        icon={<CreditCard size={18} />}
                                    >
                                        Ir para Pagamento
                                    </Button>
                                )}

                                {step === 3 && (
                                    <Button 
                                        className="w-full justify-center" 
                                        onClick={handlePayment} 
                                        disabled={isProcessing}
                                        icon={isProcessing ? <Loader2 className="animate-spin" size={18} /> : <CheckCircle size={18} />}
                                    >
                                        {isProcessing ? "Processando..." : "Confirmar e Pagar"}
                                    </Button>
                                )}

                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
                                    <Lock size={14} /> Pagamento Seguro SSL
                                </div>
                            </div>

                            {/* Trust Snippet - Only show on desktop or if not step 4 */}
                            <div className="hidden lg:block bg-navy/5 rounded-xl p-6 border border-navy/10">
                                <div className="flex gap-1 text-gold mb-2">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                                </div>
                                <p className="text-sm italic text-navy/80 mb-3">"Dr. Elyud trouxe clareza sobre uma questão contratual complexa em minutos. Altamente recomendado para empresários."</p>
                                <p className="text-xs font-bold text-navy uppercase tracking-wide">— Roberto M., CEO</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
};

const AreasPage = () => {
  const areas = [
    { icon: <Scale size={40} />, title: "Contencioso Cível", desc: "Atuação estratégica em disputas civis complexas, visando a resolução eficiente de conflitos e a proteção dos interesses de nossos clientes em todas as instâncias." },
    { icon: <Users size={40} />, title: "Direito de Família e Sucessões", desc: "Acompanhamento humanizado em processos de divórcio, guarda, pensão, inventários e testamentos, preservando o patrimônio e as relações familiares." },
    { icon: <Briefcase size={40} />, title: "Direito Empresarial", desc: "Consultoria jurídica para empresas, elaboração de contratos, planejamento societário e atuação em falências e recuperação judicial." },
    { icon: <Gavel size={40} />, title: "Direito Penal", desc: "Defesa criminal especializada, com atuação em inquéritos policiais, ações penais e tribunais superiores, garantindo o devido processo legal." },
    { icon: <Shield size={40} />, title: "Direito Imobiliário", desc: "Assessoria em transações de compra e venda, locação, regularização de imóveis e condomínios, garantindo segurança jurídica nos negócios." },
    { icon: <FileText size={40} />, title: "Direito do Trabalho", desc: "Defesa dos direitos de empregados e empregadores, atuação em reclamatórias trabalhistas, negociações sindicais e compliance trabalhista." },
    { icon: <Landmark size={40} />, title: "Direito Administrativo", desc: "Atuação em licitações, contratos administrativos, defesa de servidores públicos e improbidade administrativa." },
    { icon: <Heart size={40} />, title: "Direito do Consumidor", desc: "Proteção dos direitos nas relações de consumo, ações de indenização por danos materiais e morais, e defesa contra práticas abusivas." },
    { icon: <ShieldCheck size={40} />, title: "Direito Digital", desc: "Assessoria em proteção de dados (LGPD), crimes cibernéticos e contratos eletrônicos." },
  ];

  return (
    <div className="animate-fade-in-up">
        <Section bg="navy" className="pt-32 pb-20">
            <div className="text-center text-white">
                <span className="text-gold font-bold text-xs tracking-widest uppercase block mb-4">Nossa Expertise</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Áreas de Atuação</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                    Oferecemos soluções jurídicas abrangentes e personalizadas, com foco na excelência e no resultado.
                </p>
            </div>
        </Section>
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {areas.map((area, index) => (
                    <ServiceCard key={index} {...area} />
                ))}
            </div>
        </Section>
        <Section bg="light">
             <div className="bg-navy rounded-xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Precisa de orientação especializada?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Entre em contato para agendar uma consulta e discutir seu caso com um de nossos advogados especialistas.
                    </p>
                    <Button variant="primary" onClick={() => window.open('https://wa.me/5511999999999', '_blank')}>
                        Falar com Especialista
                    </Button>
                </div>
             </div>
        </Section>
    </div>
  );
};

const BlogPage = () => {
  const posts = [
    { 
        category: "Direito Empresarial", 
        title: "A Importância da Due Diligence em Fusões e Aquisições", 
        date: "24 Out, 2023", 
        excerpt: "Descubra como a auditoria prévia pode evitar riscos ocultos e garantir o sucesso de transações corporativas complexas.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000"
    },
    { 
        category: "Direito Civil", 
        title: "Planejamento Sucessório: Protegendo o Patrimônio Familiar", 
        date: "15 Out, 2023", 
        excerpt: "Entenda as ferramentas jurídicas disponíveis para organizar a sucessão patrimonial e evitar conflitos futuros entre herdeiros.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000"
    },
    { 
        category: "Direito Trabalhista", 
        title: "Teletrabalho e a Nova Legislação: O que Mudou?", 
        date: "02 Out, 2023", 
        excerpt: "Análise das recentes alterações legislativas sobre o regime de teletrabalho e seus impactos nas relações de emprego.",
        image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=1000"
    },
     { 
        category: "Direito Digital", 
        title: "LGPD: Como Adequar sua Empresa à Lei de Proteção de Dados", 
        date: "28 Set, 2023", 
        excerpt: "Um guia prático para empresários sobre os requisitos da LGPD e as consequências do não cumprimento.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
    },
     { 
        category: "Direito Tributário", 
        title: "Recuperação de Créditos Tributários: Oportunidades para Empresas", 
        date: "10 Set, 2023", 
        excerpt: "Identifique oportunidades de recuperação de impostos pagos indevidamente e melhore o fluxo de caixa do seu negócio.",
        image: "https://images.unsplash.com/photo-1554224155-98406856d03f?auto=format&fit=crop&q=80&w=1000"
    },
     { 
        category: "Direito Penal", 
        title: "Compliance Criminal: Prevenção de Riscos Corporativos", 
        date: "05 Set, 2023", 
        excerpt: "A importância de programas de integridade para prevenir ilícitos penais no ambiente corporativo.",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="animate-fade-in-up">
        <Section bg="navy" className="pt-32 pb-20">
            <div className="text-center text-white">
                <span className="text-gold font-bold text-xs tracking-widest uppercase block mb-4">Notícias & Insights</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog Jurídico</h1>
                <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                    Mantenha-se informado sobre as últimas atualizações legislativas e tendências do mundo jurídico.
                </p>
            </div>
        </Section>
        <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                     <article key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-navy transition-all duration-500 group cursor-pointer border border-gray-100 flex flex-col h-full hover:-translate-y-2">
                        <div className="h-48 overflow-hidden relative">
                             <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                             <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                             <span className="absolute top-4 left-4 z-20 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">{post.category}</span>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs text-gray-400 mb-2 flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                            <h3 className="text-xl font-bold text-navy mb-3 leading-snug group-hover:text-gold-gradient transition-colors font-serif">{post.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">{post.excerpt}</p>
                            <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                <span className="text-sm font-semibold text-navy hover:text-gold transition-colors flex items-center gap-1">Ler Artigo <ArrowRight size={14}/></span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-12 flex justify-center">
                 <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"><ChevronLeft size={16}/></button>
                    <button className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shadow-lg">1</button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">2</button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">3</button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"><ChevronRight size={16}/></button>
                 </div>
            </div>
        </Section>
    </div>
  );
};

const UsefulLinksPage = () => {
    const links = [
        { category: "Tribunais Superiores", items: [
            { name: "Supremo Tribunal Federal (STF)", url: "https://portal.stf.jus.br" },
            { name: "Superior Tribunal de Justiça (STJ)", url: "https://www.stj.jus.br" },
            { name: "Tribunal Superior do Trabalho (TST)", url: "https://www.tst.jus.br" },
            { name: "Superior Tribunal Militar (STM)", url: "https://www.stm.jus.br" },
        ]},
        { category: "Tribunais Regionais (DF)", items: [
            { name: "Tribunal de Justiça do DF e Territórios (TJDFT)", url: "https://www.tjdft.jus.br" },
            { name: "Tribunal Regional Federal da 1ª Região (TRF1)", url: "https://portal.trf1.jus.br" },
            { name: "Tribunal Regional do Trabalho da 10ª Região", url: "https://www.trt10.jus.br" },
        ]},
        { category: "Órgãos Governamentais", items: [
            { name: "Planalto (Legislação)", url: "http://www4.planalto.gov.br/legislacao" },
            { name: "Câmara dos Deputados", url: "https://www.camara.leg.br" },
            { name: "Senado Federal", url: "https://www12.senado.leg.br" },
            { name: "Diário Oficial da União", url: "https://www.in.gov.br" },
        ]},
        { category: "Instituições", items: [
            { name: "Ordem dos Advogados do Brasil (OAB Nacional)", url: "https://www.oab.org.br" },
            { name: "OAB Seccional DF", url: "https://www.oabdf.org.br" },
            { name: "Defensoria Pública do DF", url: "https://www.defensoria.df.gov.br" },
        ]},
    ];

    return (
        <div className="animate-fade-in-up">
            <Section bg="navy" className="pt-32 pb-20">
                <div className="text-center text-white">
                    <span className="text-gold font-bold text-xs tracking-widest uppercase block mb-4">Recursos</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Links Úteis</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                        Acesso rápido aos principais tribunais, órgãos governamentais e instituições jurídicas.
                    </p>
                </div>
            </Section>
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {links.map((group, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-navy mb-6 font-serif border-b-2 border-gold/20 pb-2 inline-block">
                                {group.category}
                            </h3>
                            <ul className="space-y-4">
                                {group.items.map((link, idx) => (
                                    <li key={idx}>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center gap-3 text-gray-600 hover:text-gold transition-colors group"
                                        >
                                            <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-gold group-hover:text-white transition-colors">
                                                <ExternalLink size={14} />
                                            </div>
                                            <span className="font-medium text-sm">{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div className="animate-fade-in-up">
            <Section bg="navy" className="pt-32 pb-20">
                 <div className="text-center text-white">
                    <span className="text-gold font-bold text-xs tracking-widest uppercase block mb-4">Fale Conosco</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Entre em Contato</h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
                        Estamos prontos para ouvir você. Agende uma consulta ou envie sua mensagem.
                    </p>
                </div>
            </Section>
            
            <Section className="-mt-16 relative z-20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
                    {/* Info Side */}
                    <div className="lg:w-1/3 bg-navy-gradient text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-8">Informações de Contato</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Endereço</h4>
                                        <p className="text-lg leading-relaxed">Av. Paulista, 1000, Sala 120<br/>Bela Vista, São Paulo - SP</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">Telefone</h4>
                                        <p className="text-lg">+55 (11) 99999-9999</p>
                                        <p className="text-sm text-gray-400">Seg-Sex, 9h às 18h</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded border border-white/20 flex items-center justify-center text-gold flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-1">E-mail</h4>
                                        <p className="text-lg break-all">contato@elyudfreitas.adv.br</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-12">
                             <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Redes Sociais</h4>
                             <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><MessageCircle size={18}/></a>
                                <a href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Video size={18}/></a>
                                <a href="#" className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors"><Users size={18}/></a>
                             </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:w-2/3 p-10 lg:p-12 bg-white">
                        <h3 className="text-2xl font-serif font-bold text-navy mb-2">Envie uma Mensagem</h3>
                        <p className="text-gray-500 mb-8">Preencha o formulário abaixo e entraremos em contato em breve.</p>
                        
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Nome Completo</label>
                                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="Seu nome" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-navy">Telefone</label>
                                    <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="(00) 00000-0000" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">E-mail</label>
                                <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" placeholder="seu@email.com" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">Assunto</label>
                                <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-gray-600">
                                    <option>Selecione um assunto</option>
                                    <option>Consultoria Civil</option>
                                    <option>Direito de Família</option>
                                    <option>Direito Empresarial</option>
                                    <option>Outros</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-navy">Mensagem</label>
                                <textarea rows={5} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <Button variant="primary" className="w-full md:w-auto px-8" icon={<Send size={18}/>}>Enviar Mensagem</Button>
                        </form>
                    </div>
                </div>
            </Section>

            <Section>
                 {/* Map Placeholder */}
                 <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden relative shadow-inner">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197577884144!2d-46.65215048502223!3d-23.56395158468165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa365%3A0x4c26638e765650!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1697200000000!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    ></iframe>
                 </div>
            </Section>
        </div>
    );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-white text-textDark selection:bg-gold selection:text-navy font-sans">
      <Header currentPage={currentPage} setPage={setCurrentPage} />
      <main>
        {currentPage === 'home' && <HomePage setPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'areas' && <AreasPage />}
        {currentPage === 'blog' && <BlogPage />}
        {currentPage === 'links' && <UsefulLinksPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'booking' && <BookingPage />}
      </main>
      <Footer setPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}