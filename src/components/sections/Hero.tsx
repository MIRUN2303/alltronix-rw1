'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const bannerSlides = [
  {
    id: 'industries',
    type: 'grid',
    panels: [
      {
        label: 'INDUSTRIAL AUTOMATION',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/Factory-Automation.jpg',
        fallbackGradient: 'from-blue-950 to-blue-800',
        emoji: '⚙️',
      },
      {
        label: 'RAILWAYS',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/railway.jpg',
        fallbackGradient: 'from-[#001a33] to-[#003d7a]',
        emoji: '🚄',
      },
      {
        label: 'DEFENCE',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/defence.jpg',
        fallbackGradient: 'from-blue-900 to-slate-800',
        emoji: '🛡️',
      },
      {
        label: 'INDUSTRIAL IOT',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/industrial-iot.jpg',
        fallbackGradient: 'from-blue-950 to-[#005bb5]',
        emoji: '🌐',
      },
      {
        label: 'RENEWABLE',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/renewable.jpg',
        fallbackGradient: 'from-[#002244] to-blue-900',
        emoji: '☀️',
      },
      {
        label: 'SMART CITY',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/smart-city.jpg',
        fallbackGradient: 'from-[#001a33] to-blue-800',
        emoji: '🏙️',
      },
    ],
  },
  {
    id: 'tech',
    type: 'full',
    bg: 'https://www.alltronix.com/wp-content/uploads/2020/08/banner-bg.jpg',
    headline: 'Engineering Industrial Excellence',
    subline: 'Since 1978',
    description: 'From the control cabinet to the field level — providing world-class solutions in Industrial Automation, Railways, Electromobility, and Renewable Energy.',
    badge: 'ISO-9001:2015 Certified',
  },
  {
    id: 'emobility',
    type: 'split',
    panels: [
      {
        label: 'POWER & SUBSTATION',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/power-substation.jpg',
        fallbackGradient: 'from-blue-900 to-indigo-800',
        emoji: '⚡',
      },
      {
        label: 'E-MOBILITY',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/emobility.jpg',
        fallbackGradient: 'from-teal-700 to-green-600',
        emoji: '🔌',
      },
      {
        label: 'FACTORY AUTOMATION',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/Factory-Automation.jpg',
        fallbackGradient: 'from-slate-700 to-blue-800',
        emoji: '🏭',
      },
    ],
  },
]

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
}

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const slide = bannerSlides[current]

  return (
    <section className="relative w-full bg-white flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pb-12">
      <div className="relative w-full max-w-[1600px] rounded-2xl lg:rounded-3xl overflow-hidden bg-[#001a33]" style={{ height: 'max(calc(100dvh - 140px), 460px)', maxHeight: 820 }}>
      <AnimatePresence mode="wait" custom={direction}>
        {slide.type === 'grid' && (
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Slide1Grid panels={slide.panels!} />
          </motion.div>
        )}

        {slide.type === 'full' && (
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${slide.bg}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/85 via-[#002244]/60 to-[#002244]/30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#001a33]/60" />

            {/* Animated particles overlay */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-400/20"
                  style={{
                    width: Math.random() * 4 + 2,
                    height: Math.random() * 4 + 2,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 4 + 3}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <motion.span
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#cc0000]/15 text-[#ff6666] border border-[#cc0000]/30 mb-6"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#cc0000] animate-pulse" />
                    {slide.badge}
                  </motion.span>

                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.92] tracking-tight"
                  >
                    {slide.headline}{' '}
                    <span className="text-[#0080ff]">{slide.subline}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-6 text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-10 flex flex-wrap gap-4"
                  >
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#005bb5] text-white font-semibold rounded-lg hover:bg-[#004999] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#005bb5]/30 text-sm sm:text-base"
                    >
                      Explore Solutions
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-0.5 text-sm sm:text-base backdrop-blur-sm"
                    >
                      Contact Us
                    </Link>
                  </motion.div>

                  {/* Stats Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6"
                  >
                    {[
                      { value: '48+', label: 'Years of Excellence' },
                      { value: '31+', label: 'Global Partners' },
                      { value: '1000+', label: 'Products Delivered' },
                      { value: '15+', label: 'Industries Served' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl sm:text-3xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {slide.type === 'split' && (
          <motion.div
            key={slide.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0 flex"
          >
            {slide.panels!.map((panel, i) => (
              <div
                key={panel.label}
                className="relative flex-1 overflow-hidden group cursor-pointer"
                style={{
                  backgroundImage: `url('${panel.bg}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.fallbackGradient} opacity-50 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-white font-black text-xl sm:text-2xl lg:text-3xl tracking-tight drop-shadow-lg"
                  >
                    {panel.label}
                  </motion.p>
                </div>
                {/* Divider line */}
                {i < slide.panels!.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20" />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Slide Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {bannerSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative rounded-full transition-all duration-500 ${
               i === current
                  ? 'w-10 h-3 bg-[#005bb5]'
                 : 'w-3 h-3 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => goTo((current - 1 + bannerSlides.length) % bannerSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % bannerSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 border border-white/20 flex items-center justify-center text-white hover:bg-black/50 transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      </div>
    </section>
  )
}

/* ───── Slide 1: Premium rework — 6 rows left + image right ───── */
const accentColors = [
  { hex: '#003d7a', label: 'navy' },
  { hex: '#cc0000', label: 'brandred' },
  { hex: '#005bb5', label: 'brandblue' },
  { hex: '#0072e3', label: 'azure' },
  { hex: '#1a8cff', label: 'skyblue' },
  { hex: '#47a3ff', label: 'lightblue' },
]

const panelDescriptions = [
  'Factory & Process Automation Solutions',
  'Signaling, Communication & Control',
  'Rugged Electronics for Mission-Critical',
  'Connected Systems & M2M Communication',
  'Solar, Wind & Clean Energy Infrastructure',
  'Intelligent Urban Infrastructure',
]

function Slide1Grid({ panels }: { panels: NonNullable<typeof bannerSlides[0]['panels']> }) {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const timer = setInterval(() => setActive((p) => (p + 1) % panels.length), 4500)
    return () => clearInterval(timer)
  }, [hovered, panels.length])

  return (
    <div
      className="absolute inset-0 flex rounded-[inherit] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ─── Left Column: 6 individual container cards ─── */}
      <div className="relative w-full lg:w-[380px] xl:w-[440px] flex-shrink-0 flex flex-col justify-center gap-2.5 px-3 sm:px-4 lg:px-6 py-8 z-10">
        {panels.map((p, i) => {
          const isOn = i === active
          const accent = accentColors[i]
          return (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              onMouseEnter={() => { setHovered(true); setActive(i) }}
              className={`relative flex items-center gap-3 text-left group transition-all duration-500 rounded-xl border ${
                isOn
                  ? 'bg-white/[0.08] border-white/15 shadow-lg shadow-black/20'
                  : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10'
              }`}
            >
              {/* Active accent bar */}
              <motion.div
                layoutId="activeBar"
                className={`w-[3px] self-stretch rounded-r-full flex-shrink-0 transition-opacity duration-300 ${
                  isOn ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backgroundColor: accent.hex, boxShadow: isOn ? `0 0 12px ${accent.hex}` : 'none' }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              />
              <div className="flex-1 flex items-center gap-3 py-[11px] pr-3">
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-base transition-all duration-500 ${
                  isOn ? 'shadow-lg' : 'bg-black/30'
                }`}
                  style={isOn ? { backgroundColor: `${accent.hex}25` } : {}}
                >
                  {p.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs lg:text-sm font-bold tracking-wide transition-all duration-500 ${
                    isOn ? 'text-white' : 'text-white/50 group-hover:text-white/70'
                  }`}>
                    {p.label}
                  </div>
                  <div className={`text-[10px] lg:text-[11px] mt-px leading-snug transition-all duration-500 ${
                    isOn ? 'text-white/45' : 'text-white/20 group-hover:text-white/30'
                  }`}>
                    {panelDescriptions[i]}
                  </div>
                </div>
                <div className={`flex-shrink-0 transition-all duration-400 ${
                  isOn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
                }`}>
                  <svg className="w-3.5 h-3.5" style={{ color: accent.hex }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* ─── Glow beam connector ─── */}
      <div className="relative hidden lg:block w-0 flex-shrink-0 z-20">
        <motion.div
          className="absolute w-[40px] h-[2px]"
          style={{
            background: `linear-gradient(to right, ${accentColors[active].hex}, transparent)`,
            boxShadow: `0 0 16px ${accentColors[active].hex}`,
            top: `${((active + 0.55) / panels.length) * 100}%`,
          }}
          animate={{ top: `${((active + 0.55) / panels.length) * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        />
      </div>

      {/* ─── Right: Image Panel ─── */}
      <div className="hidden lg:block relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${panels[active].bg}')` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${panels[active].fallbackGradient} opacity-50`} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/80 via-[#001a33]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a33]/70 via-transparent to-transparent" />

            {/* Accent color edge glow from left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{
                background: `linear-gradient(to bottom, transparent, ${accentColors[active].hex}, transparent)`,
                boxShadow: `0 0 30px ${accentColors[active].hex}`,
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-16 xl:p-20">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-6xl mb-5"
              >
                {panels[active].emoji}
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white font-black text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-tight max-w-lg"
              >
                {panels[active].label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-white/60 text-base lg:text-lg max-w-md leading-relaxed"
              >
                {panelDescriptions[active]}
              </motion.p>
              <motion.a
                href="/solutions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all w-fit"
                style={{ backgroundColor: accentColors[active].hex }}
                whileHover={{ gap: '14px', opacity: 0.9 }}
              >
                Explore Solutions
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom pagination */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative group"
              aria-label={`Go to ${panels[i].label}`}
            >
              <div
                className={`rounded-full transition-all duration-500 ${
                  i === active ? 'w-8 h-[6px]' : 'w-[6px] h-[6px] bg-white/20 group-hover:bg-white/40'
                }`}
                style={i === active ? { backgroundColor: accentColors[i].hex } : {}}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ─── Mobile: Compact list ─── */}
      <div className="lg:hidden absolute inset-0 flex flex-col bg-[#001a33]/95 backdrop-blur-sm">
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-0.5">
          {panels.map((p, i) => {
            const isOn = i === active
            return (
              <button
                key={p.label}
                onClick={() => setActive(i)}
                className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                  isOn
                    ? 'bg-white/10'
                    : 'active:bg-white/5'
                }`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isOn ? 'shadow-lg' : 'bg-white/20'
                }`}
                  style={isOn ? { backgroundColor: accentColors[i].hex } : {}}
                />
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold transition-colors ${isOn ? 'text-white' : 'text-white/50'}`}>
                    {p.emoji} {p.label}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
        {/* Mobile pagination dots */}
        <div className="flex justify-center gap-2 pb-6 pt-2">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === active ? 'w-6' : 'w-1.5 bg-white/20'
              }`}
              style={i === active ? { backgroundColor: accentColors[i].hex } : {}}
              aria-label={`Go to ${panels[i].label}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
