'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'

export default function CulturePage() {
  return (
    <>
      <Header />
      <main className="relative pt-24 min-h-screen">
        <section className="relative py-24 lg:py-32 flex items-center justify-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto">
              <GlassCard className="p-12 lg:p-16">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cc0000] to-[#ef4444] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">Our Culture</h1>
                <p className="text-lg text-[#666] mb-8">Content Coming Soon.</p>
                <p className="text-sm text-[#666] mb-6">Discover what makes Alltronix a great place to work.</p>
                <Button variant="primary" href="/contact">Learn More</Button>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
