'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { industries } from '@/data/industries'

const industryColors = [
  { from: '#dc2626', to: '#0072e3' },
  { from: '#059669', to: '#10b981' },
  { from: '#7c3aed', to: '#a855f7' },
  { from: '#d97706', to: '#f59e0b' },
  { from: '#0284c7', to: '#38bdf8' },
  { from: '#1a1a1a', to: '#555' },
]

const industryIcons: Record<string, string> = {
  automation: '⚙️',
  'industrial-networking': '🌐',
  electromobility: '🔌',
  railway: '🚄',
  renewable: '☀️',
  defence: '🛡️',
}

const industrySvgs: Record<string, React.ReactNode> = {
  automation: (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.3" />
      <path d="M50 50 L150 150 M150 50 L50 150" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  ),
  'industrial-networking': (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="60" r="15" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="150" r="15" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="150" r="15" stroke="currentColor" strokeWidth="1" />
      <path d="M100 60 L50 150 M100 60 L150 150 M50 150 L150 150" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  electromobility: (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <rect x="70" y="30" width="60" height="120" rx="10" stroke="currentColor" strokeWidth="1" />
      <rect x="80" y="50" width="40" height="60" rx="4" stroke="currentColor" strokeWidth="0.5" />
      <path d="M85 120 L85 140 L100 140 L100 120" stroke="currentColor" strokeWidth="0.5" />
      <path d="M100 120 L100 140 L115 140 L115 120" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  railway: (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <rect x="20" y="95" width="160" height="10" rx="2" stroke="currentColor" strokeWidth="1" />
      <rect x="30" y="70" width="140" height="30" rx="4" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="60" cy="105" r="8" stroke="currentColor" strokeWidth="1" />
      <circle cx="140" cy="105" r="8" stroke="currentColor" strokeWidth="1" />
      <line x1="30" y1="80" x2="50" y2="80" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  ),
  renewable: (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="1" />
      <path d="M100 40 L100 10" stroke="currentColor" strokeWidth="1" />
      <path d="M100 160 L100 190" stroke="currentColor" strokeWidth="1" />
      <path d="M40 100 L10 100" stroke="currentColor" strokeWidth="1" />
      <path d="M160 100 L190 100" stroke="currentColor" strokeWidth="1" />
      <path d="M58 58 L38 38" stroke="currentColor" strokeWidth="1" />
      <path d="M142 58 L162 38" stroke="currentColor" strokeWidth="1" />
      <path d="M58 142 L38 162" stroke="currentColor" strokeWidth="1" />
      <path d="M142 142 L162 162" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
  defence: (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
      <path d="M100 20 L160 60 L160 100 C160 140 130 170 100 180 C70 170 40 140 40 100 L40 60 Z" stroke="currentColor" strokeWidth="1" />
      <path d="M80 100 L95 115 L120 85" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
}

const industryStats: Record<string, { value: string; label: string }[]> = {
  automation: [
    { value: '500+', label: 'Automation Projects' },
    { value: '50+', label: 'PLC Brands' },
  ],
  'industrial-networking': [
    { value: '10K+', label: 'Nodes Installed' },
    { value: '99.9%', label: 'Uptime' },
  ],
  electromobility: [
    { value: '1000+', label: 'Chargers Deployed' },
    { value: '50+', label: 'EV Partners' },
  ],
  railway: [
    { value: '200+', label: 'Rail Projects' },
    { value: '30+', label: 'Years in Rail' },
  ],
  renewable: [
    { value: '500MW+', label: 'Enabled Capacity' },
    { value: '100+', label: 'Solar Partners' },
  ],
  defence: [
    { value: '25+', label: 'Defence Programs' },
    { value: 'MIL-STD', label: 'Qualified' },
  ],
}

export default function IndustriesShowcase() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % industries.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#005bb5]">Industries We Serve</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">
            Engineering Solutions Across{' '}
            <span className="bg-gradient-to-r from-[#005bb5] to-[#0072e3] bg-clip-text text-transparent">Critical Sectors</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-stretch">
          {/* Left: Industry List */}
          <div className="relative flex flex-col justify-center py-4 lg:py-0">
            <div className="absolute left-[18px] top-8 bottom-8 w-px bg-[#e5e5e5] hidden lg:block" />

            {industries.map((ind, i) => {
              const isActive = i === active
              const colors = industryColors[i]
              return (
                <button
                  key={ind.slug}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="relative flex items-center gap-5 px-4 lg:px-6 py-4 lg:py-5 text-left group transition-all duration-500"
                >
                  {/* Connection dot & line */}
                  <div className="relative flex-shrink-0 hidden lg:block">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-500 ${
                        isActive
                          ? 'shadow-lg scale-110'
                          : 'bg-[#f5f5f5] text-[#999]'
                      }`}
                      style={isActive ? { background: `linear-gradient(135deg, ${colors.from}, ${colors.to})` } : {}}
                    >
                      {isActive ? (
                        <span className="text-white font-bold">{industryIcons[ind.slug]}</span>
                      ) : (
                        <span className="text-base">{industryIcons[ind.slug]}</span>
                      )}
                    </div>
                    {/* Glow dot */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute -inset-2 rounded-full opacity-30 blur-sm"
                        style={{ background: `radial-gradient(circle, ${colors.from}, transparent 70%)` }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span
                      className={`text-base lg:text-lg font-semibold transition-all duration-500 ${
                        isActive ? 'text-[#1a1a1a]' : 'text-[#888] group-hover:text-[#555]'
                      }`}
                    >
                      {ind.name}
                    </span>
                    <p
                      className={`text-sm mt-0.5 transition-all duration-500 overflow-hidden ${
                        isActive ? 'text-[#555] max-h-12' : 'text-transparent max-h-0'
                      }`}
                    >
                      {ind.description}
                    </p>
                  </div>

                  {/* Mobile icon always visible */}
                  <div className="lg:hidden text-xl">
                    {industryIcons[ind.slug]}
                  </div>

                  {/* Active indicator line */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ background: `linear-gradient(to bottom, ${colors.from}, ${colors.to})` }}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: Image Container */}
          <div className="relative min-h-[300px] lg:min-h-[500px] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={industries[active].slug}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0 rounded-3xl overflow-hidden"
              >
                {/* Gradient background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${industryColors[active].from}15, ${industryColors[active].to}08)`,
                  }}
                />

                {/* SVG art */}
                <div className="absolute inset-0 flex items-center justify-center text-[#1a1a1a] opacity-10">
                  {industrySvgs[industries[active].slug]}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12">
                  <div className="text-6xl mb-6">
                    {industryIcons[industries[active].slug]}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight">
                    {industries[active].name}
                  </h3>
                  <p className="mt-4 text-base lg:text-lg text-[#555] leading-relaxed max-w-md">
                    {industries[active].description}
                  </p>

                  {/* Stats */}
                  <div className="mt-8 flex gap-6">
                    {industryStats[industries[active].slug]?.map((stat) => (
                      <div key={stat.label}>
                        <div
                          className="text-2xl font-bold bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${industryColors[active].from}, ${industryColors[active].to})`,
                          }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#888] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    href={`/solutions#${industries[active].slug}`}
                    className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 rounded-xl text-sm font-medium text-white transition-all self-start"
                    style={{ background: `linear-gradient(135deg, ${industryColors[active].from}, ${industryColors[active].to})` }}
                    whileHover={{ gap: '12px', opacity: 0.9 }}
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {industries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8' : 'w-1.5 bg-[#ccc] hover:bg-[#999]'
                  }`}
                  style={i === active ? { background: `linear-gradient(to right, ${industryColors[i].from}, ${industryColors[i].to})` } : {}}
                  aria-label={`Go to industry ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Nav Grid (mobile fallback) */}
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-2 lg:hidden">
          {industries.map((ind, i) => (
            <button
              key={ind.slug}
              onClick={() => setActive(i)}
              className={`p-3 rounded-xl text-center transition-all border ${
                i === active
                  ? 'border-[#005bb5]/30 bg-[#005bb5]/10 text-[#1a1a1a]'
                  : 'border-[#e5e5e5] text-[#888]'
              }`}
            >
              <div className="text-lg mb-0.5">{industryIcons[ind.slug]}</div>
              <div className="text-[10px] font-medium leading-tight">{ind.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
