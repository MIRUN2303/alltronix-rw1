'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { companyInfo } from '@/data/company'

export default function AboutPreview() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
              <img
                src="https://www.alltronix.com/wp-content/uploads/2019/02/about.jpg"
                alt="About Alltronix"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const el = e.target as HTMLImageElement
                  el.src = 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=80'
                }}
              />
              {/* ISO badge overlay */}
              <div className="absolute top-5 right-5 bg-white rounded-xl p-3 shadow-lg text-center">
                <div className="text-xs font-bold text-[#cc0000] leading-tight">ISO-9001:2015</div>
                <div className="text-[10px] text-[#666] mt-0.5">Certified</div>
              </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { value: '48+', label: 'Years of Experience' },
                { value: '31+', label: 'Global Partners' },
                { value: '1978', label: 'Established' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#f8f8f8] rounded-xl p-3 text-center border border-[#e5e5e5]">
                  <div className="text-xl font-black text-[#005bb5]">{stat.value}</div>
                  <div className="text-[10px] text-[#888] mt-0.5 leading-tight">{stat.label}</div>
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
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#555]">ABOUT US</span>
              <div className="w-10 h-0.5 bg-[#005bb5]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight">
              Welcome to{' '}
              <span className="text-[#005bb5]">ALLTRONIX</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#555] leading-relaxed">
              {companyInfo.about}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#f8f8f8] border border-[#e5e5e5]">
                <div className="w-8 h-8 rounded-lg bg-[#005bb5] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Our Mission</h3>
                <p className="text-xs text-[#888] leading-relaxed">{companyInfo.mission}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#f8f8f8] border border-[#e5e5e5]">
                <div className="w-8 h-8 rounded-lg bg-[#005bb5] flex items-center justify-center mb-3">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-sm font-bold text-[#1a1a1a] mb-1">Our Vision</h3>
                <p className="text-xs text-[#888] leading-relaxed">{companyInfo.vision}</p>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-[#005bb5] text-white font-semibold rounded-lg hover:bg-[#004999] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#005bb5]/30 text-sm"
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
