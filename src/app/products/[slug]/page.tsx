'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { productCategories } from '@/data/products'

const categoryIcons: Record<string, string> = {
  automate: '⚡',
  connect: '🔗',
  'mark-assemble-and-install': '🔧',
  'supply-charge-and-protect': '🔋',
  'switch-measure-and-monitor': '📊',
}

export default function ProductCategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const category = productCategories.find((c) => c.slug === slug)

  if (!category) {
    return (
      <>
        <Header />
        <main className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">Category Not Found</h1>
            <Link href="/products" className="text-[#cc0000] hover:text-[#ef4444]">Back to Products</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#1a1a1a] transition-colors mb-8">
              <HiArrowLeft className="w-4 h-4" /> Back to Products
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{categoryIcons[category.id]}</div>
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#cc0000]">Product Category</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mt-2">{category.name}</h1>
              </div>
            </div>
            <p className="text-lg text-[#666] max-w-2xl mt-4">{category.description}</p>

            <div className="mt-16 space-y-4">
              {category.subcategories.map((sub, index) => (
                <ScrollReveal key={sub.name} delay={index * 0.05}>
                  <GlassCard className="p-6 lg:p-8 group" hover>
                    <h3 className="text-xl font-semibold text-[#1a1a1a] group-hover:text-[#cc0000] transition-colors">{sub.name}</h3>
                    <p className="text-[#666] mt-3 leading-relaxed">{sub.description}</p>
                    <Button variant="ghost" size="sm" href="/contact" className="mt-4">
                      Inquire About This Product
                    </Button>
                  </GlassCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
