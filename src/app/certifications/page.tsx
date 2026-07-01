'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Certifications"
              title="Our Certifications"
              description="Alltronix is committed to the highest standards of quality and compliance."
            />
            <div className="mt-16 max-w-2xl mx-auto">
              <ScrollReveal>
                <GlassCard className="p-8 lg:p-10 text-center" hover>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-[#005bb5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[#1a1a1a] mb-3">ISO-9001:2015 Certified</h2>
                  <p className="text-[#666] leading-relaxed">
                    Alltronix is an ISO-9001:2015 Certified Company, demonstrating our commitment to quality management systems and continuous improvement.
                  </p>
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
