'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import { solutions } from '@/data/solutions'

const solutionIcons: Record<string, string> = {
  railways: '🚄',
  'industrial-automation': '⚙️',
  'mission-critical': '🛡️',
  'machine-building': '🏗️',
  renewable: '☀️',
  'iiot-m2m': '🌐',
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
                        <div className="text-4xl mb-6">{solutionIcons[sol.slug]}</div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">{sol.title}</h2>
                        <p className="text-secondary leading-relaxed mb-6">{sol.description}</p>
                        <Button variant="outline" href="/contact">Contact Us About {sol.title}</Button>
                      </GlassCard>
                    </ScrollReveal>
                    <ScrollReveal direction={index % 2 === 0 ? 'right' : 'left'}>
                      <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#cc0000]/10 to-[#e60000]/5 border border-[rgba(204,0,0,0.08)] flex items-center justify-center">
                        <span className="text-secondary">Solution visualization</span>
                      </div>
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
