import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WhatsappLogo, InstagramLogo, MapPin, Star, Clock, Hamburger, BeerStein, Fire, ArrowUp, List, X, Phone, TiktokLogo, Motorcycle } from '@phosphor-icons/react'

const WHATSAPP = "554896534430"
const INSTAGRAM = "https://instagram.com/consagradoburger"
const PHONE = "(48) 96534-430"
const ADDRESS = "Rod. Amaro Antonio Vieira, 2907 - Itacorubi, Florianopolis - SC"

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }
const stagger = { visible: { transition: { staggerChildren: 0.12 } } }

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cardapio', href: '#cardapio' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ]
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-amber-950/90 backdrop-blur-xl shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="font-['Archivo_Black'] text-2xl text-amber-400 hover:text-amber-300 transition tracking-wide">CONSAGRADO</a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-amber-200/70 hover:text-amber-400 transition font-medium">{l.label}</a>
          ))}
        </div>
        <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero fazer um pedido no Consagrado Burger!`} target="_blank" rel="noopener" className="hidden md:flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition">
          <WhatsappLogo size={18} weight="duotone" /> Pedir Agora
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-amber-400">
          {open ? <X size={28} /> : <List size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-amber-950/95 backdrop-blur-xl border-t border-amber-900/30">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-amber-200/70 hover:text-amber-400 transition font-medium text-sm">{l.label}</a>
              ))}
              <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero pedir!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-amber-600 text-white px-5 py-3 rounded-full font-bold">
                <WhatsappLogo size={18} weight="duotone" /> Pedir pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="./images/hero-burger.jpg" alt="Consagrado Burger" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/80 via-amber-950/40 to-amber-950" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <Fire size={16} weight="duotone" /> Pioneiro em Fried Onion Burger no Brasil
        </motion.div>
        <motion.h1 variants={fadeUp} className="font-['Archivo_Black'] text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          CONSAGRADO<br /><span className="text-amber-400">BURGER</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-amber-100/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A primeira hamburgueria do Brasil especializada em Fried Onion Burger. Sabor que consagra em cada mordida. Itacorubi, Florianopolis.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero fazer um pedido no Consagrado Burger!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-amber-600/30">
            <WhatsappLogo size={24} weight="duotone" /> Pedir pelo WhatsApp
          </a>
          <a href="#cardapio" className="flex items-center justify-center gap-2 border-2 border-amber-700 hover:border-amber-500 text-white px-8 py-4 rounded-full text-lg transition hover:text-amber-400">
            <Hamburger size={24} weight="duotone" /> Ver Cardapio
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-10 flex justify-center gap-1 items-center">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" className="text-amber-400" />)}
          <span className="text-amber-200/50 ml-2 text-sm">4.7 estrelas no Google</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Sobre() {
  return (
    <section id="sobre" className="py-24 px-6 bg-gradient-to-b from-amber-950 to-stone-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/preparo.jpg" alt="Preparo do smash burger com cebola" className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
          <motion.span variants={fadeUp} className="text-amber-500 uppercase tracking-widest text-sm font-bold">Nossa Historia</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Archivo_Black'] text-white leading-tight">O SABOR QUE <span className="text-amber-400">CONSAGROU</span></motion.h2>
          <motion.p variants={fadeUp} className="text-amber-100/60 text-lg leading-relaxed">
            O Consagrado Burger trouxe para o Brasil uma tecnica de preparo iconica: o Fried Onion Burger. A cebola e cozida diretamente com a carne na chapa, criando uma caramelizacao unica que eleva o sabor a outro patamar.
          </motion.p>
          <motion.p variants={fadeUp} className="text-amber-100/60 text-lg leading-relaxed">
            Localizado no Itacorubi, somos referencia em Florianopolis para quem busca um burger artesanal com identidade e qualidade incomparaveis.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
            {['Fried Onion', 'Smash Burger', 'Chopp Artesanal', 'Delivery', 'iFood'].map(t => (
              <span key={t} className="bg-amber-500/10 border border-amber-500/20 text-amber-300 px-4 py-2 rounded-full text-sm font-medium">{t}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Cardapio() {
  const items = [
    { icon: <Fire size={36} weight="duotone" />, name: 'Fried Onion Burger', desc: 'Nosso carro-chefe. Smash burger com cebola caramelizada na chapa, queijo derretido e molho especial.', tag: 'Mais Pedido' },
    { icon: <Hamburger size={36} weight="duotone" />, name: 'Consagrado Junior', desc: 'Smash burger com cebola, cream cheese e bacon crocante. Perfeito para iniciantes.', tag: '' },
    { icon: <Fire size={36} weight="duotone" />, name: 'Chili Cheese Fries', desc: 'Fritas crocantes cobertas com chili, cheddar derretido e bacon. Irresistivel.', tag: 'Favorito' },
    { icon: <BeerStein size={36} weight="duotone" />, name: 'Chopp Artesanal', desc: 'Pilsen e IPA no tap. O acompanhamento perfeito para nossos burgers.', tag: '' },
    { icon: <Hamburger size={36} weight="duotone" />, name: 'Philly Pops', desc: 'Bolinha de carne philly cheese steak. Entrada perfeita para compartilhar.', tag: '' },
    { icon: <BeerStein size={36} weight="duotone" />, name: 'Milkshakes', desc: 'Cremosos e generosos. Diversos sabores para todos os gostos.', tag: '' },
  ]
  return (
    <section id="cardapio" className="py-24 px-6 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-amber-500 uppercase tracking-widest text-sm font-bold">Destaques</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Archivo_Black'] text-white mt-3">NOSSO <span className="text-amber-400">CARDAPIO</span></motion.h2>
          <motion.p variants={fadeUp} className="text-amber-100/50 mt-4">Peca pelo WhatsApp ou pelo iFood. Delivery e presencial.</motion.p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <motion.div key={item.name} variants={fadeUp} className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8 hover:border-amber-500/50 transition group relative">
              {item.tag && <span className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.tag}</span>}
              <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
              <p className="text-amber-100/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero ver o cardapio completo do Consagrado Burger!`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold transition">
            <WhatsappLogo size={22} weight="duotone" /> Cardapio Completo
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Galeria() {
  const fotos = [
    { src: './images/hero-burger.jpg', title: 'Fried Onion Burger' },
    { src: './images/fries.jpg', title: 'Chili Cheese Fries' },
    { src: './images/restaurante.jpg', title: 'Nosso Espaco' },
    { src: './images/chopp.jpg', title: 'Chopp Artesanal' },
  ]
  return (
    <section id="galeria" className="py-24 px-6 bg-gradient-to-b from-stone-950 to-amber-950/30">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-amber-500 uppercase tracking-widest text-sm font-bold">Galeria</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Archivo_Black'] text-white mt-3">DA CHAPA <span className="text-amber-400">PRA MESA</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 gap-6">
          {fotos.map(f => (
            <motion.div key={f.title} variants={fadeUp} className="group relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img src={f.src} alt={f.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{f.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Avaliacoes() {
  const reviews = [
    { name: 'Bruno M.', text: 'Melhor burger de Floripa! O fried onion burger e viciante. A cebola caramelizada com a carne e uma combinacao perfeita.', stars: 5 },
    { name: 'Ana L.', text: 'Ambiente super agradavel e o atendimento e otimo. As fritas com cheddar e bacon sao divinas! Voltarei com certeza.', stars: 5 },
    { name: 'Gustavo P.', text: 'Nao existe nada parecido em Floripa. O conceito de fried onion burger e genial. Ja fui mais de 10 vezes!', stars: 5 },
  ]
  return (
    <section id="avaliacoes" className="py-24 px-6 bg-amber-950/20">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.span variants={fadeUp} className="text-amber-500 uppercase tracking-widest text-sm font-bold">Avaliacoes</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Archivo_Black'] text-white mt-3">CLIENTES <span className="text-amber-400">CONSAGRADOS</span></motion.h2>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
          {reviews.map(r => (
            <motion.div key={r.name} variants={fadeUp} className="bg-stone-900/50 border border-stone-800 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(r.stars)].map((_, i) => <Star key={i} size={18} weight="fill" className="text-amber-400" />)}
              </div>
              <p className="text-amber-100/70 mb-6 leading-relaxed italic">"{r.text}"</p>
              <p className="text-white font-bold">{r.name}</p>
              <p className="text-amber-100/40 text-sm">Google Reviews</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Delivery() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-amber-950/20 via-amber-900/20 to-stone-950">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-3xl mx-auto text-center">
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-amber-400 mb-4">
          <Motorcycle size={32} weight="duotone" />
        </motion.div>
        <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-['Archivo_Black'] text-white leading-tight mb-6">DELIVERY OU <span className="text-amber-400">PRESENCIAL</span></motion.h2>
        <motion.p variants={fadeUp} className="text-amber-100/50 text-lg mb-10">
          Peca pelo WhatsApp, iFood ou venha nos visitar no Itacorubi. Aberto de segunda a domingo!
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero fazer um pedido delivery no Consagrado Burger!`} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105 shadow-lg shadow-amber-600/30">
            <WhatsappLogo size={24} weight="duotone" /> Pedir pelo WhatsApp
          </a>
          <a href="https://www.ifood.com.br/delivery/florianopolis-sc/consagrado-itacorubi/45a35812-a20c-4a3c-bc5c-746d48f4a8dd" target="_blank" rel="noopener" className="flex items-center justify-center gap-2 border-2 border-amber-700 hover:border-amber-500 text-white px-8 py-4 rounded-full text-lg transition hover:text-amber-400 font-bold">
            Pedir pelo iFood
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Contato() {
  return (
    <section id="contato" className="py-24 px-6 bg-stone-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-8">
          <motion.span variants={fadeUp} className="text-amber-500 uppercase tracking-widest text-sm font-bold">Contato</motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-['Archivo_Black'] text-white leading-tight">VENHA <span className="text-amber-400">PROVAR</span></motion.h2>
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin size={28} weight="duotone" className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Endereco</h4>
                <p className="text-amber-100/50">{ADDRESS}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <WhatsappLogo size={28} weight="duotone" className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">WhatsApp</h4>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-amber-100/50 hover:text-amber-400 transition">{PHONE}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <InstagramLogo size={28} weight="duotone" className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Instagram</h4>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-amber-100/50 hover:text-amber-400 transition">@consagradoburger</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock size={28} weight="duotone" className="text-amber-500 shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Horario</h4>
                <p className="text-amber-100/50">Seg: 18h a 00h</p>
                <p className="text-amber-100/50">Ter - Dom: 11h a 00h</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src="./images/restaurante.jpg" alt="Interior do Consagrado Burger" className="rounded-3xl w-full aspect-square object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-amber-950/40 border-t border-amber-900/30 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-['Archivo_Black'] text-xl text-amber-400">CONSAGRADO BURGER</p>
        <p className="text-amber-100/30 text-sm">&copy; 2026 Consagrado Burger. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href={INSTAGRAM} target="_blank" rel="noopener" className="text-amber-100/30 hover:text-amber-400 transition"><InstagramLogo size={24} weight="duotone" /></a>
          <a href="https://tiktok.com/@consagradoburger" target="_blank" rel="noopener" className="text-amber-100/30 hover:text-amber-400 transition"><TiktokLogo size={24} weight="duotone" /></a>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener" className="text-amber-100/30 hover:text-amber-400 transition"><WhatsappLogo size={24} weight="duotone" /></a>
        </div>
      </div>
    </footer>
  )
}

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  if (!show) return null
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg transition">
      <ArrowUp size={24} />
    </button>
  )
}

function WhatsAppFloat() {
  return (
    <a href={`https://wa.me/${WHATSAPP}?text=Ola! Quero pedir no Consagrado Burger!`} target="_blank" rel="noopener" className="fixed bottom-6 left-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110">
      <WhatsappLogo size={28} weight="fill" />
    </a>
  )
}

export default function App() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Cardapio />
      <Galeria />
      <Avaliacoes />
      <Delivery />
      <Contato />
      <Footer />
      <ScrollTop />
      <WhatsAppFloat />
    </div>
  )
}
