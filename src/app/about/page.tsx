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
      <main className="relative pt-20">
        {/* Hero Banner */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-[#cc0000]/10 to-transparent blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#cc0000]/5 to-transparent blur-[80px]" />
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20 pt-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#cc0000]">About Us</span>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  An{' '}
                  <span className="bg-gradient-to-r from-[#cc0000] to-[#e60000] bg-clip-text text-transparent">
                    ISO-9001:2015
                  </span>{' '}
                  Certified Company
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-xl text-secondary">
                  Alltronix was established in 1978 to serve the requirements of the machine tool industry.
                </p>
                <div className="mt-8 flex flex-wrap gap-6">
                  <div>
                    <div className="text-2xl font-black text-[#cc0000]">48+</div>
                    <div className="text-xs text-muted mt-0.5 font-medium">Years of Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#cc0000]">31+</div>
                    <div className="text-xs text-muted mt-0.5 font-medium">Global Partners</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#cc0000]">1978</div>
                    <div className="text-xs text-muted mt-0.5 font-medium">Established</div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <motion.div
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <img
                    src="/images/about-us-new.jpg"
                    alt="Alltronix facility"
                    className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:grayscale group-hover:contrast-[1.5]"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&q=80'
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 group-active:bg-black/40 transition-all duration-500" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    whileTap={{ opacity: 1, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <img src="/logo.png" alt="Alltronix" className="w-72 h-auto drop-shadow-2xl" />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg text-center z-10">
                    <div className="text-[10px] font-bold text-[#005bb5] leading-tight">ISO-9001:2015</div>
                    <div className="text-[9px] text-secondary mt-px">Certified</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="relative py-16 lg:py-20 bg-section-alt">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <ScrollReveal direction="left" className="lg:col-span-7">
                <div className="space-y-5 text-secondary leading-relaxed text-base lg:text-lg">
                  <p className="text-primary font-semibold text-lg">Our Story</p>
                  <p>{companyInfo.aboutExtended}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="space-y-4">
                  <GlassCard className="p-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cc0000]/20 to-[#e60000]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#cc0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-primary">Mission</h3>
                        <p className="mt-1 text-sm text-secondary">{companyInfo.mission}</p>
                      </div>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cc0000]/20 to-[#e60000]/10 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[#cc0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-primary">Vision</h3>
                        <p className="mt-1 text-sm text-secondary">{companyInfo.vision}</p>
                      </div>
                    </div>
                  </GlassCard>
                  <GlassCard className="p-5">
                    <h3 className="text-sm font-bold text-primary mb-2">Our Values</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {companyInfo.values.map((v) => (
                        <span key={v} className="px-3 py-1 text-xs rounded-full bg-[#cc0000]/10 text-[#cc0000] border border-[#cc0000]/15 font-medium">{v}</span>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="Our Journey"
              title="Decades of Engineering Excellence"
              description="From our founding in 1978 to today, Alltronix has consistently evolved to serve the growing automation needs of Indian industry."
            />
            <div className="mt-12 relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#cc0000] via-[#cc0000]/40 to-transparent" />
              <div className="space-y-10">
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
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#cc0000] to-[#e60000] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-[#cc0000]/25">
                          {item.year}
                        </div>
                      </div>
                      <div className="pt-3">
                        <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-secondary leading-relaxed">{item.description}</p>
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
