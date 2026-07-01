'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
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
        svg: '',
      },
      {
        label: 'RAILWAYS',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/railway.jpg',
        fallbackGradient: 'from-[#001a33] to-[#003d7a]',
        emoji: '🚄',
        svg: '',
      },
      {
        label: 'DEFENCE',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/defence.jpg',
        fallbackGradient: 'from-blue-900 to-slate-800',
        emoji: '🛡️',
        svg: '',
      },
      {
        label: 'INDUSTRIAL IOT',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/industrial-iot.jpg',
        fallbackGradient: 'from-blue-950 to-[#cc0000]',
        emoji: '🌐',
        svg: '',
      },
      {
        label: 'RENEWABLE',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/renewable.jpg',
        fallbackGradient: 'from-[#002244] to-blue-900',
        emoji: '☀️',
        svg: '',
      },
      {
        label: 'SMART CITY',
        bg: 'https://www.alltronix.com/wp-content/uploads/2020/09/smart-city.jpg',
        fallbackGradient: 'from-[#001a33] to-blue-800',
        emoji: '🏙️',
        svg: '',
      },
    ],
  },
  {
    id: 'highlights',
    type: 'split',
    panels: [
      {
        label: 'ENGINEERING EXCELLENCE',
        bg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
        fallbackGradient: 'from-blue-900 to-indigo-800',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><path d="M6 10v4M10 12H6M18 10v4M22 12h-4"/><circle cx="6" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="12" r="1" fill="currentColor"/><path d="M10 6h4"/><path d="M12 2v4M12 18v4"/></svg>',
      },
      {
        label: 'ISO-9001:2015 CERTIFIED',
        bg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
        fallbackGradient: 'from-slate-800 to-blue-900',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>',
      },
      {
        label: 'GLOBAL PARTNERS NETWORK',
        bg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
        fallbackGradient: 'from-teal-800 to-green-700',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 9V5M12 19v-4M15 12h4M5 12h4"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="7" x2="9.5" y2="9.5"/><line x1="17" y1="7" x2="14.5" y2="9.5"/><line x1="7" y1="17" x2="9.5" y2="14.5"/><line x1="17" y1="17" x2="14.5" y2="14.5"/></svg>',
      },
    ],
  },
  {
    id: 'emobility',
    type: 'split',
    panels: [
      {
        label: 'POWER & SUBSTATION',
        bg: '/images/hero/power-substation.jpg',
        fallbackGradient: 'from-blue-900 to-indigo-800',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H10a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V3a1 1 0 00-1-1z"/><path d="M12 8v3M12 15v3"/><path d="M8 16H5a2 2 0 01-2-2v-3a2 2 0 012-2h4"/><path d="M16 16h3a2 2 0 002-2v-3a2 2 0 00-2-2h-4"/><path d="M9 19h6"/><path d="M7 22h10"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
      },
      {
        label: 'E-MOBILITY',
        bg: '/images/hero/e-mobility.jpg',
        fallbackGradient: 'from-teal-700 to-green-600',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/><path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12"/><path d="M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/><path d="M12 12l3-3M12 12l-2 4" opacity="0.5"/></svg>',
      },
      {
        label: 'FACTORY AUTOMATION',
        bg: '/images/hero/factory-automation.jpg',
        fallbackGradient: 'from-slate-700 to-blue-800',
        emoji: '',
        svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="10" width="4" height="11" rx="0.5"/><rect x="10" y="6" width="4" height="15" rx="0.5"/><rect x="17" y="12" width="4" height="9" rx="0.5"/><path d="M5 10V7l7-4 7 4v3"/><line x1="3" y1="21" x2="21" y2="21"/><circle cx="12" cy="4" r="0.8" fill="currentColor"/></svg>',
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
    if (current === 0) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [current, next])

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
            <Slide1Grid panels={slide.panels!} onAdvance={next} />
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
              >
                <img
                  src={panel.bg}
                  alt={panel.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${panel.fallbackGradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                <div className="absolute top-5 left-5 z-10">
                  {panel.svg ? (
                    <div className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" dangerouslySetInnerHTML={{ __html: panel.svg }} />
                  ) : (
                    <span className="text-3xl sm:text-4xl">{panel.emoji}</span>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-white font-black text-lg sm:text-xl lg:text-2xl tracking-tight drop-shadow-lg"
                  >
                    {panel.label}
                  </motion.p>
                </div>
                {/* Divider line */}
                {i < slide.panels!.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 z-10" />
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
                  ? 'w-10 h-3 bg-[#cc0000]'
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
  { hex: '#cc0000', label: 'brandred' },
  { hex: '#990000', label: 'darkred' },
  { hex: '#e60000', label: 'brightred' },
  { hex: '#b30000', label: 'crimson' },
  { hex: '#ff1a1a', label: 'lightred' },
  { hex: '#ff4d4d', label: 'palered' },
]

const panelDescriptions = [
  'Factory & Process Automation Solutions',
  'Signaling, Communication & Control',
  'Rugged Electronics for Mission-Critical',
  'Connected Systems & M2M Communication',
  'Solar, Wind & Clean Energy Infrastructure',
  'Intelligent Urban Infrastructure',
]

const industryIllustrations = [
  <svg key="automation" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="8" height="8" rx="1" />
    <rect x="14" y="2" width="8" height="8" rx="1" />
    <rect x="2" y="14" width="8" height="8" rx="1" />
    <rect x="14" y="14" width="8" height="8" rx="1" />
    <path d="M6 10v4M10 12H6M18 10v4M22 12h-4" />
    <circle cx="6" cy="12" r="1" fill="currentColor" />
    <circle cx="18" cy="12" r="1" fill="currentColor" />
    <path d="M10 6h4" />
    <path d="M12 2v4M12 18v4" />
  </svg>,
  <svg key="railways" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="9" width="18" height="6" rx="1" />
    <rect x="5" y="5" width="14" height="5" rx="1" />
    <circle cx="8" cy="15" r="2" fill="currentColor" />
    <circle cx="16" cy="15" r="2" fill="currentColor" />
    <line x1="3" y1="15" x2="3" y2="19" />
    <line x1="21" y1="15" x2="21" y2="19" />
    <line x1="3" y1="19" x2="21" y2="19" />
    <circle cx="12" cy="7" r="1.5" fill="currentColor" />
  </svg>,
  <svg key="defence" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" />
    <path d="M9 12l2 2 4-4" />
  </svg>,
  <svg key="iot" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V5M12 19v-4M15 12h4M5 12h4" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
    <line x1="7" y1="7" x2="9.5" y2="9.5" />
    <line x1="17" y1="7" x2="14.5" y2="9.5" />
    <line x1="7" y1="17" x2="9.5" y2="14.5" />
    <line x1="17" y1="17" x2="14.5" y2="14.5" />
  </svg>,
  <svg key="renewable" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <path d="M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12" />
    <path d="M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    <path d="M12 12l3-3M12 12l-2 4" opacity="0.5" />
  </svg>,
  <svg key="smartcity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="10" width="4" height="11" rx="0.5" />
    <rect x="10" y="6" width="4" height="15" rx="0.5" />
    <rect x="17" y="12" width="4" height="9" rx="0.5" />
    <path d="M5 10V7l7-4 7 4v3" />
    <line x1="3" y1="21" x2="21" y2="21" />
    <circle cx="12" cy="4" r="0.8" fill="currentColor" />
  </svg>,
]

function Slide1Grid({ panels, onAdvance }: { panels: NonNullable<typeof bannerSlides[0]['panels']>, onAdvance?: () => void }) {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (hovered) return
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % panels.length
        if (next === 0) {
          onAdvance?.()
          return prev
        }
        return next
      })
    }, 3500)
    return () => clearInterval(timer)
  }, [hovered, panels.length, onAdvance])

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
                <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${
                  isOn
                    ? 'shadow-lg'
                    : 'bg-black/30'
                }`}
                  style={isOn ? { boxShadow: `0 0 0 2px ${accent.hex}`, backgroundColor: `${accent.hex}25` } : {}}
                >
                  <span className={isOn ? 'text-white' : 'text-white/60'}>
                    {industryIllustrations[i]}
                  </span>
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

      {/* ─── Right: Large active industry image with content ─── */}
      <div className="hidden lg:block relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0"
          >
            <img
              src={panels[active].bg}
              alt={panels[active].label}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                const el = e.target as HTMLImageElement
                el.style.display = 'none'
              }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${panels[active].fallbackGradient} opacity-40`} />
            <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/80 via-[#001a33]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Accent color edge glow from left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[3px]"
              style={{
                background: `linear-gradient(to bottom, transparent, ${accentColors[active].hex}, transparent)`,
                boxShadow: `0 0 30px ${accentColors[active].hex}`,
              }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-10 lg:p-14 xl:p-16">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${accentColors[active].hex}30` }}
              >
                <span className="text-white">{industryIllustrations[active]}</span>
              </motion.span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white font-black text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-tight max-w-lg"
              >
                {panels[active].label}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-3 text-white/60 text-sm lg:text-base max-w-md leading-relaxed"
              >
                {panelDescriptions[active]}
              </motion.p>
              <motion.a
                href="/solutions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg text-xs font-semibold text-white transition-all w-fit"
                style={{ backgroundColor: accentColors[active].hex }}
                whileHover={{ gap: '12px', opacity: 0.9 }}
              >
                Explore Solutions
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom pagination */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
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
                  <div className={`flex items-center gap-2 text-sm font-semibold transition-colors ${isOn ? 'text-white' : 'text-white/50'}`}>
                    <span className="w-4 h-4 flex items-center justify-center">{industryIllustrations[i]}</span>
                    {p.label}
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
