'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import { productCategories, featuredProducts } from '@/data/products'

const categoryIcons: Record<string, string> = {
  automate: '⚡',
  connect: '🔗',
  'mark-assemble-and-install': '🔧',
  'supply-charge-and-protect': '🔋',
  'switch-measure-and-monitor': '📊',
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
                <GlassCard className="p-6 h-full group" hover>
                  <div className="text-3xl mb-4">{categoryIcons[cat.id]}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-[#cc0000] transition-colors">{cat.name}</h3>
                  <p className="text-sm text-secondary leading-relaxed mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#cc0000] group-hover:gap-2 transition-all">
                    Explore <HiArrowRight className="w-3 h-3" />
                  </span>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
