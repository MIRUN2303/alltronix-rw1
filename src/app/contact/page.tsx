'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import GlassCard from '@/components/ui/GlassCard'
import Button from '@/components/ui/Button'
import { companyInfo } from '@/data/company'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-[#005bb5]/10 to-transparent blur-[100px]" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#005bb5]">Contact Us</span>
                  <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-[#1a1a1a] leading-tight">Get in Touch</h1>
                  <p className="mt-4 text-lg text-[#666]">Our experts are always ready to work with you. Please fill the form and we will get back to you soon.</p>
                </motion.div>

                <div className="space-y-4">
                  <GlassCard className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center shrink-0">
                      <HiLocationMarker className="w-5 h-5 text-[#005bb5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a1a1a]">Alltronix Head Office</h3>
                      <p className="text-sm text-[#666] mt-1">{companyInfo.contact.address}</p>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center shrink-0">
                      <HiPhone className="w-5 h-5 text-[#005bb5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a1a1a]">Phone</h3>
                      <a href={`tel:${companyInfo.contact.phone}`} className="text-sm text-[#005bb5] hover:text-[#0072e3] transition-colors mt-1 block">{companyInfo.contact.phone}</a>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center shrink-0">
                      <HiMail className="w-5 h-5 text-[#005bb5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a1a1a]">Email</h3>
                      <a href={`mailto:${companyInfo.contact.email}`} className="text-sm text-[#005bb5] hover:text-[#0072e3] transition-colors mt-1 block">{companyInfo.contact.email}</a>
                    </div>
                  </GlassCard>

                  <GlassCard className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#005bb5]/20 to-[#0072e3]/10 flex items-center justify-center shrink-0">
                      <HiClock className="w-5 h-5 text-[#005bb5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#1a1a1a]">Business Hours</h3>
                      <p className="text-sm text-[#666] mt-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </GlassCard>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                  <GlassCard className="p-8 lg:p-10">
                    {submitted ? (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#005bb5] to-[#0072e3] flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Thank You!</h3>
                        <p className="text-[#666]">We will get back to you shortly.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-[#666] mb-2">Full Name *</label>
                            <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-[rgba(204,0,0,0.12)] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all" placeholder="Your name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#666] mb-2">Email *</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-[rgba(204,0,0,0.12)] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all" placeholder="your@email.com" />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-[#666] mb-2">Phone</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-[rgba(204,0,0,0.12)] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all" placeholder="+91 98765 43210" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#666] mb-2">Company</label>
                            <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-[rgba(204,0,0,0.12)] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all" placeholder="Company name" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#666] mb-2">Message *</label>
                          <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#f8f8f8] border border-[rgba(204,0,0,0.12)] text-[#1a1a1a] placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all resize-none" placeholder="Tell us about your project..." />
                        </div>
                        <div className="pt-2">
                          <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                            Send Message
                          </Button>
                        </div>
                      </form>
                    )}
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="relative py-16">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <GlassCard className="w-full aspect-[21/9] flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="w-10 h-10 text-[#005bb5] mx-auto mb-3" />
                <p className="text-[#666]">Alltronix Head Office</p>
                <p className="text-sm text-[#64748b] mt-1">{companyInfo.contact.address}</p>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
