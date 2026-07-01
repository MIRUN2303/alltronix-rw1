'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { companyInfo } from '@/data/company'

export default function AboutPreview() {
  return (
    <section className="relative py-14 lg:py-16 bg-section overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <img
                src="/images/about-us-new.jpg"
                alt="About Alltronix"
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:grayscale group-hover:contrast-[1.5]"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80'
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
              <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg text-center z-10">
                <div className="text-xs font-bold text-[#005bb5] leading-tight">ISO-9001:2015</div>
                <div className="text-[10px] text-secondary mt-0.5">Certified</div>
              </div>
            </motion.div>

            <div className="grid grid-cols-3 gap-3 mt-5">
              {[
                { value: '48+', label: 'Years of Experience' },
                { value: '31+', label: 'Global Partners' },
                { value: '1978', label: 'Established' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface rounded-xl py-4 px-2 text-center border border-subtle">
                  <div className="text-xl font-black text-[#cc0000]">{stat.value}</div>
                  <div className="text-[10px] text-muted mt-1 leading-tight font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary">ABOUT US</span>
              <div className="w-10 h-px bg-[#cc0000]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-[1.1]">
              Welcome to <span className="text-[#cc0000]">ALLTRONIX</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-secondary leading-relaxed line-clamp-4">
              {companyInfo.about}
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-surface border border-subtle hover:border-[#cc0000]/20 hover:shadow-sm transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#cc0000] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-primary mb-1">Mission</h3>
                <p className="text-[11px] text-secondary leading-relaxed">{companyInfo.mission}</p>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-subtle hover:border-[#cc0000]/20 hover:shadow-sm transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#cc0000] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold text-primary mb-1">Vision</h3>
                <p className="text-[11px] text-secondary leading-relaxed">{companyInfo.vision}</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 mt-6 px-8 py-3.5 bg-[#cc0000] text-white font-semibold rounded-xl hover:bg-[#990000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#cc0000]/30 text-sm"
            >
              READ MORE
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
