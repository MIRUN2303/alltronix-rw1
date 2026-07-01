'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const focusedIndustries = [
  {
    name: 'Electromobility',
    slug: 'electromobility',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/emobility.jpg',
    fallbackGradient: 'from-teal-600 to-emerald-800',
    description: 'EV charging infrastructure and power solutions for the electric vehicle ecosystem.',
    emoji: '🔌',
  },
  {
    name: 'Railway',
    slug: 'railway',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/railway.jpg',
    fallbackGradient: 'from-gray-700 to-gray-900',
    description: 'Specialized products and solutions for railway signaling, communication, and control systems.',
    emoji: '🚄',
  },
  {
    name: 'Renewable',
    slug: 'renewable',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/renewable.jpg',
    fallbackGradient: 'from-yellow-600 to-green-700',
    description: 'Components and systems for solar, wind, and renewable energy applications.',
    emoji: '☀️',
  },
  {
    name: 'Defence',
    slug: 'defence',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/defence.jpg',
    fallbackGradient: 'from-green-900 to-gray-800',
    description: 'Rugged and reliable solutions for defence and aerospace applications.',
    emoji: '🛡️',
  },
  {
    name: 'Automation',
    slug: 'automation',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/Factory-Automation.jpg',
    fallbackGradient: 'from-blue-800 to-slate-700',
    description: 'Complete automation solutions for manufacturing and process industries.',
    emoji: '⚙️',
  },
  {
    name: 'Industrial Networking',
    slug: 'industrial-networking',
    image: 'https://www.alltronix.com/wp-content/uploads/2020/09/industrial-iot.jpg',
    fallbackGradient: 'from-cyan-800 to-blue-900',
    description: 'Comprehensive industrial networking solutions for reliable data communication.',
    emoji: '🌐',
  },
]

export default function SolutionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 lg:py-28 bg-[#f5f5f5] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header — matching the real site exactly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#555]">OUR SOLUTIONS</span>
            <div className="w-10 h-0.5 bg-[#005bb5]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]">
            Focused Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            With over three decades of experience, Alltronix delivers engineering excellence across six core industrial sectors.
          </p>
        </motion.div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {focusedIndustries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Link
                href={`/solutions#${industry.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-[#e0e0e0] hover:border-[#005bb5]/30 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${industry.fallbackGradient} transition-transform duration-500 group-hover:scale-105`}
                    style={{
                      backgroundImage: `url('${industry.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-400" />
                  {/* Explore arrow on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#005bb5] flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="px-5 py-4">
                  <h3 className="text-base font-bold text-[#1a1a1a] group-hover:text-[#005bb5] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#888] leading-relaxed line-clamp-2 group-hover:text-[#555] transition-colors">
                    {industry.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#005bb5] text-white font-semibold rounded-lg hover:bg-[#004999] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#005bb5]/30 text-sm"
          >
            View All Solutions
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
