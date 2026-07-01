'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { solutions } from '@/data/solutions'

function RailwayIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="18" width="36" height="12" rx="2" />
      <rect x="10" y="10" width="28" height="10" rx="1.5" />
      <circle cx="16" cy="30" r="4" fill="currentColor" />
      <circle cx="32" cy="30" r="4" fill="currentColor" />
      <line x1="6" y1="30" x2="6" y2="38" />
      <line x1="42" y1="30" x2="42" y2="38" />
      <line x1="4" y1="38" x2="44" y2="38" strokeWidth="2" />
      <line x1="10" y1="14" x2="38" y2="14" strokeWidth="0.8" opacity="0.4" />
      <circle cx="24" cy="14" r="2" fill="currentColor" />
      <path d="M24 10v2M24 16v2" opacity="0.5" />
    </svg>
  )
}

function AutomationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="14" height="14" rx="2" />
      <rect x="28" y="6" width="14" height="14" rx="2" />
      <rect x="6" y="28" width="14" height="14" rx="2" />
      <rect x="28" y="28" width="14" height="14" rx="2" />
      <path d="M13 20v8M20 24h-8M35 20v8M42 24h-8" />
      <circle cx="13" cy="24" r="2" fill="currentColor" />
      <circle cx="35" cy="24" r="2" fill="currentColor" />
      <path d="M24 13h-2M24 35h-2" />
      <path d="M20 13h8" />
      <path d="M20 35h8" />
      <path d="M24 6v4M24 38v4" />
      <circle cx="24" cy="4" r="1.5" fill="currentColor" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4L6 12v10c0 11 7.8 21.4 18 24 10.2-2.6 18-13 18-24V12L24 4z" />
      <path d="M18 26l4 4 8-8" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="14" width="28" height="28" rx="1" />
      <rect x="16" y="20" width="6" height="6" rx="0.5" />
      <rect x="26" y="20" width="6" height="6" rx="0.5" />
      <rect x="16" y="30" width="6" height="6" rx="0.5" />
      <rect x="26" y="30" width="6" height="6" rx="0.5" />
      <line x1="24" y1="14" x2="24" y2="10" />
      <path d="M18 10h12l4 4" />
      <rect x="20" y="36" width="8" height="6" rx="0.5" />
      <line x1="24" y1="42" x2="24" y2="48" />
      <circle cx="24" cy="4" r="1.5" fill="currentColor" />
    </svg>
  )
}

function RenewableIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="8" />
      <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
      <path d="M12.7 12.7l2.8 2.8M32.5 32.5l2.8 2.8" />
      <path d="M12.7 35.3l2.8-2.8M32.5 15.5l2.8-2.8" />
      <path d="M24 24l4-4M24 24l-3 6" opacity="0.5" />
      <path d="M24 24l8-2" opacity="0.3" />
      <path d="M24 24l-6-1" opacity="0.3" />
    </svg>
  )
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="6" />
      <path d="M24 14v-4M24 38v-4" />
      <path d="M14 24h-4M38 24h-4" />
      <circle cx="10" cy="10" r="4" />
      <circle cx="38" cy="10" r="4" />
      <circle cx="10" cy="38" r="4" />
      <circle cx="38" cy="38" r="4" />
      <line x1="14" y1="14" x2="18.5" y2="18.5" />
      <line x1="34" y1="14" x2="29.5" y2="18.5" />
      <line x1="14" y1="34" x2="18.5" y2="29.5" />
      <line x1="34" y1="34" x2="29.5" y2="29.5" />
      <line x1="10" y1="6" x2="10" y2="4" />
      <line x1="38" y1="6" x2="38" y2="4" />
      <line x1="10" y1="42" x2="10" y2="44" />
      <line x1="38" y1="42" x2="38" y2="44" />
      <line x1="6" y1="10" x2="4" y2="10" />
      <line x1="42" y1="10" x2="44" y2="10" />
      <line x1="6" y1="38" x2="4" y2="38" />
      <line x1="42" y1="38" x2="44" y2="38" />
    </svg>
  )
}

const solutionIcons: Record<string, React.ReactNode> = {
  railways: <RailwayIcon />,
  'industrial-automation': <AutomationIcon />,
  'mission-critical': <ShieldIcon />,
  'machine-building': <BuildingIcon />,
  renewable: <RenewableIcon />,
  'iiot-m2m': <NetworkIcon />,
}

function ImageContainer({ src, alt }: { src: string; alt: string }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotateX((y - centerY) / 25)
    setRotateY((x - centerX) / 25)
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowPos({ x: 50, y: 50 })
  }

  return (
    <div
      className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#cc0000]/10 to-[#e60000]/5 border border-[rgba(204,0,0,0.08)] cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        loading="lazy"
        onError={(e) => {
          const el = e.target as HTMLImageElement
          el.style.display = 'none'
        }}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
      <div
        className="absolute -inset-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(204,0,0,0.08), transparent 40%)`,
        }}
      />
    </div>
  )
}

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#cc0000]/10 to-transparent blur-[100px]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Solutions"
              title="Comprehensive Engineering Solutions"
              description="With over three decades of experience, Alltronix has considerable expertise providing and developing products across multiple industries."
            />
            <div className="mt-16 space-y-24">
              {solutions.map((sol, index) => (
                <div key={sol.slug} id={sol.slug} className="scroll-mt-24">
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'}>
                      <GlassCard className="p-8 lg:p-12">
                        <div className="mb-6 text-[#cc0000]">{solutionIcons[sol.slug]}</div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{sol.title}</h2>
                        <p className="text-secondary leading-relaxed mb-6">{sol.description}</p>
                        <Button variant="outline" href="/contact">Contact Us About {sol.title}</Button>
                      </GlassCard>
                    </ScrollReveal>
                    <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'}>
                      <ImageContainer src={`/images/solutions/${sol.slug}.jpg`} alt={sol.title} />
                    </ScrollReveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 text-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title="Need a Custom Solution?"
              description="Our team of engineers and technocrats is ready to develop tailored solutions for your specific requirements."
            />
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">Contact Our Team</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
