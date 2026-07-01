'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { companyInfo } from '@/data/company'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="relative pt-24">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#005bb5]/10 to-transparent blur-[100px]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#005bb5]">About Us</span>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
                  An{' '}
                  <span className="bg-gradient-to-r from-[#005bb5] to-[#0072e3] bg-clip-text text-transparent">
                    ISO-9001:2015
                  </span>{' '}
                  Certified Company
                </h1>
                <p className="mt-6 text-lg text-[#666] leading-relaxed max-w-2xl">
                  Alltronix was established in 1978 to serve the requirements of the machine tool industry.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative py-10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl aspect-[21/9] max-h-[500px]">
              <img
                src="https://www.alltronix.com/wp-content/uploads/2019/02/about.jpg"
                alt="Alltronix facility"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/80 text-sm max-w-xl">Since 1978, serving industry with engineering excellence from the control cabinet to the field level.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <ScrollReveal direction="left">
                <div className="space-y-6 text-[#666] leading-relaxed">
                  <p>{companyInfo.aboutExtended}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <GlassCard className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-[#005bb5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Mission</h3>
                    <p className="text-sm text-[#666]">{companyInfo.mission}</p>
                  </GlassCard>
                  <GlassCard className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-[#005bb5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">Vision</h3>
                    <p className="text-sm text-[#666]">{companyInfo.vision}</p>
                  </GlassCard>
                  <GlassCard className="p-6 sm:col-span-2">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3">Our Values</h3>
                    <div className="flex flex-wrap gap-2">
                      {companyInfo.values.map((v) => (
                        <span key={v} className="px-3 py-1.5 text-sm rounded-full bg-[#005bb5]/10 text-[#005bb5] border border-[#005bb5]/15">{v}</span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Journey"
              title="Decades of Engineering Excellence"
              description="From our founding in 1978 to today, Alltronix has consistently evolved to serve the growing automation needs of Indian industry."
            />
            <div className="mt-16 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#005bb5] via-[#005bb5]/40 to-transparent" />
              <div className="space-y-12">
                {[
                  { year: '1978', title: 'Foundation', description: 'Alltronix was established to serve the requirements of the machine tool industry.' },
                  { year: '1980s', title: 'Growth & Partnerships', description: 'Partnered with reputed manufacturers to service customers from the control cabinet to the field level.' },
                  { year: '1990s', title: 'Diversification', description: 'Expanded into new sectors including railways, defence, and renewable energy.' },
                  { year: '2000s', title: 'Technology Leadership', description: 'Became ISO-9001:2015 certified. Expanded into industrial communication, factory automation, and material handling.' },
                  { year: '2010s', title: 'Global Expansion', description: 'Partnered with leading global brands including ABB, Phoenix Contact, Omron, and Advantech.' },
                  { year: '2023+', title: 'Future Ready', description: 'Continuing to serve Private, Public, Government, and Corporate clients with world-class solutions in automation, e-mobility, and renewable energy.' },
                ].map((item, index) => (
                  <ScrollReveal key={item.year} delay={index * 0.1}>
                    <div className="flex gap-8 items-start">
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#005bb5] to-[#0072e3] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-[#005bb5]/25">
                          {item.year}
                        </div>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-xl font-semibold text-[#1a1a1a]">{item.title}</h3>
                        <p className="mt-2 text-[#666] leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
