'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { productCategories, featuredProducts } from '@/data/products'

const categoryIcons: Record<string, string> = {
  automate: '⚡',
  connect: '🔗',
  'mark-assemble-and-install': '🔧',
  'supply-charge-and-protect': '🔋',
  'switch-measure-and-monitor': '📊',
}

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Products"
              title="Complete Industrial Product Portfolio"
              description="From the control cabinet to the field level, Alltronix provides world-class products across five core categories."
            />

            {/* Category Grid */}
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {productCategories.map((cat, index) => (
                <ScrollReveal key={cat.id} delay={index * 0.1}>
                  <Link href={`/products/${cat.slug}`}>
                    <GlassCard className="p-6 h-full group" hover>
                      <div className="text-3xl mb-4">{categoryIcons[cat.id]}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-[#005bb5] transition-colors">{cat.name}</h3>
                      <p className="text-sm text-secondary leading-relaxed mb-4">{cat.description}</p>
                      <p className="text-xs text-[#005bb5] font-medium">{cat.subcategories.length} product categories</p>
                      <span className="inline-flex items-center gap-1 text-xs text-[#005bb5] group-hover:gap-2 transition-all mt-3">
                        Explore <HiArrowRight className="w-3 h-3" />
                      </span>
                    </GlassCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* Featured Products */}
            <div className="mt-24">
              <SectionHeader
                label="Featured Products"
                title="Quick Overview"
                description="Browse our most popular product categories at a glance."
                align="left"
              />
              <div className="mt-8 overflow-hidden rounded-2xl border border-[rgba(204,0,0,0.08)]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[rgba(204,0,0,0.08)]">
                      <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">Category</th>
                      <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuredProducts.map((fp, i) => (
                      <tr key={i} className="border-b border-[rgba(204,0,0,0.04)] hover:bg-white/[0.02] transition-colors">
                        <td className="px-6 py-3 text-sm text-secondary">{fp.category}</td>
                        <td className="px-6 py-3 text-sm text-primary font-medium">{fp.product}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
