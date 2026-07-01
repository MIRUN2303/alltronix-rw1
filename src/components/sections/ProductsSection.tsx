'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import { productCategories, featuredProducts } from '@/data/products'

const categoryIcons: Record<string, React.ReactNode> = {
  automate: (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    </svg>
  ),
  connect: (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="12" r="6" />
      <circle cx="34" cy="12" r="6" />
      <circle cx="14" cy="36" r="6" />
      <circle cx="34" cy="36" r="6" />
      <line x1="20" y1="14" x2="28" y2="14" />
      <line x1="14" y1="18" x2="14" y2="30" />
      <line x1="34" y1="18" x2="34" y2="30" />
      <line x1="20" y1="34" x2="28" y2="34" />
      <line x1="14" y1="12" x2="8" y2="12" />
      <line x1="40" y1="12" x2="34" y2="12" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" />
      <circle cx="42" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  'mark-assemble-and-install': (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4L8 14v20l16 10 16-10V14L24 4z" />
      <path d="M8 14l16 10 16-10" />
      <path d="M24 24v20" />
      <line x1="14" y1="18" x2="14" y2="26" opacity="0.5" />
      <line x1="34" y1="18" x2="34" y2="26" opacity="0.5" />
      <circle cx="24" cy="14" r="2" fill="currentColor" />
    </svg>
  ),
  'supply-charge-and-protect': (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="6" width="20" height="36" rx="3" />
      <line x1="22" y1="14" x2="26" y2="14" />
      <line x1="20" y1="18" x2="28" y2="18" />
      <path d="M22 24l4 4 6-6" />
      <rect x="18" y="30" width="12" height="6" rx="1" opacity="0.4" />
    </svg>
  ),
  'switch-measure-and-monitor': (
    <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="36" height="32" rx="3" />
      <rect x="10" y="14" width="8" height="6" rx="1" />
      <rect x="22" y="14" width="8" height="6" rx="1" />
      <rect x="34" y="14" width="6" height="6" rx="1" />
      <path d="M10 28l6 6 8-10 8 6 6-8" strokeWidth="2" />
      <circle cx="36" cy="16" r="1" fill="currentColor" />
    </svg>
  ),
}

const categoryImages: Record<string, string> = {
  automate: '/images/products/automate.jpg',
  connect: '/images/products/connect.jpg',
  'mark-assemble-and-install': '/images/products/mark-assemble-install.jpg',
  'supply-charge-and-protect': '/images/products/supply-charge-protect.jpg',
  'switch-measure-and-monitor': '/images/products/switch-measure-monitor.jpg',
}

export default function ProductsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 circuit-pattern" />
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Products"
          title="Comprehensive Product Portfolio"
          description="From automation software to terminal blocks, we provide a complete range of industrial products from the control cabinet to the field level."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {productCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/products/${cat.slug}`}>
                <GlassCard className="p-0 h-full group" hover>
                  <div className="relative h-40 overflow-hidden rounded-t-xl">
                    <img
                      src={categoryImages[cat.id]}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const el = e.target as HTMLImageElement
                        el.style.display = 'none'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-[#cc0000]">{categoryIcons[cat.id]}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-primary mb-1.5 group-hover:text-[#cc0000] transition-colors">{cat.name}</h3>
                    <p className="text-sm text-secondary leading-relaxed line-clamp-2">{cat.description}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-[#cc0000] group-hover:gap-2 transition-all mt-3">
                      Explore <HiArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
