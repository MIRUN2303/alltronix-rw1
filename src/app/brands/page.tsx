'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { brands } from '@/data/brands'

export default function BrandsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Partners"
              title="Partnering with Global Industry Leaders"
              description="We have partnered with leading global brands who are among the top players in their respective fields. This enables us to be updated with the latest and proven technologies and bring world-class solutions to our clients."
            />
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {brands.map((brand, index) => (
                <ScrollReveal key={brand.name} delay={index * 0.03}>
                  <GlassCard className="p-6 h-full group" hover>
                    <h3 className="text-lg font-semibold text-[#1a1a1a] group-hover:text-[#cc0000] transition-colors">{brand.name}</h3>
                    <p className="text-sm text-[#666] mt-3 leading-relaxed">{brand.description}</p>
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
