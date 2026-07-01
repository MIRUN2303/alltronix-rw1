'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ewasteData } from '@/data/company'

export default function DosDontsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="E-Waste Guidelines"
              title="Do's & Don'ts"
              description="Important guidelines for proper e-waste disposal and handling."
            />
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <ScrollReveal direction="left">
                <GlassCard className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1a1a1a]">Do's</h2>
                  </div>
                  <ul className="space-y-4">
                    {ewasteData.dos.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#666]">
                        <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 text-xs font-bold">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <GlassCard className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#1a1a1a]">Don'ts</h2>
                  </div>
                  <ul className="space-y-4">
                    {ewasteData.donts.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#666]">
                        <span className="w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 text-xs font-bold">&#10007;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
