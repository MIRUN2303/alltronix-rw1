'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Real brand logos from the Alltronix website
const brands = [
  { name: 'ABB', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/ABB-1-1.png' },
  { name: 'Acksys', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/ACKSYS.png' },
  { name: 'Advantech', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/advantech.png' },
  { name: 'Antonics', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/antonics.png' },
  { name: 'Axiomtek', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/axiomtek.png' },
  { name: 'Brady', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Brady.png' },
  { name: 'Cooper Bussmann', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/cooper-bussmann.png' },
  { name: 'DFI', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/DFI.png' },
  { name: 'Eaton', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/EATON.png' },
  { name: 'Ensto', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Ensto.png' },
  { name: 'Flexicon', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Flexicon.png' },
  { name: 'Fraba Posital', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Posital-Fraba.png' },
  { name: 'Harting', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Harting.png' },
  { name: 'Hellerman Tyton', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/HellermannTyton.png' },
  { name: 'Helu Kabel', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Helukabel.png' },
  { name: 'Lutze Transportation', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/lutze.png' },
  { name: 'Mildef', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Mildef.png' },
  { name: 'MTM Power', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/MTM-Power.png' },
  { name: 'Omron', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Omron.png' },
  { name: 'Pflitsch', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Pflitsch.png' },
  { name: 'Phoenix Contact', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/PhoenixContact.png' },
  { name: 'PMA', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/PMA.png' },
  { name: 'RR Kabel', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/RR-Kabel.png' },
  { name: 'Sab Brockskes', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/SAB-Brockskes.png' },
  { name: 'Schaffner', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Schaffner.png' },
  { name: 'Sintrones', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Sintrones.png' },
  { name: 'Souriau - Sunbank', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Souriau-Sunbank.png' },
  { name: 'Thomas & Betts', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Thomas-Betts.png' },
  { name: 'Trinity Touch', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/TrinityTouch.png' },
  { name: 'Wiska', logo: 'https://www.alltronix.com/wp-content/uploads/2019/02/Wiska.png' },
]

const doubled = [...brands, ...brands]

export default function BrandsSection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#555]">OUR PARTNERS</span>
            <div className="w-10 h-0.5 bg-[#cc0000]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]">
            Partnering with Global Industry Leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666] max-w-2xl mx-auto leading-relaxed">
            We have partnered with 31+ leading global brands who are among the top players in their respective fields, enabling us to bring world-class solutions to our clients.
          </p>
        </motion.div>

        {/* Scrolling Brand Rows */}
        <div className="space-y-5">
          {/* Row 1 — Left to Right */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
            >
              {doubled.map((brand, i) => (
                <div
                  key={`r1-${i}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-4 w-36 h-24 bg-white border border-[#e5e5e5] rounded-xl hover:border-[#cc0000]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 max-w-[100px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                      const nameEl = el.parentElement?.querySelector('.brand-fallback-name') as HTMLElement
                      if (nameEl) nameEl.style.display = 'block'
                    }}
                  />
                  <span className="brand-fallback-name hidden text-xs font-semibold text-[#888] text-center">{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 — Right to Left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ['-50%', '0%'] }}
              transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
            >
              {[...doubled].reverse().map((brand, i) => (
                <div
                  key={`r2-${i}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-4 w-36 h-24 bg-white border border-[#e5e5e5] rounded-xl hover:border-[#cc0000]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 max-w-[100px] w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement
                      el.style.display = 'none'
                      const nameEl = el.parentElement?.querySelector('.brand-fallback-name') as HTMLElement
                      if (nameEl) nameEl.style.display = 'block'
                    }}
                  />
                  <span className="brand-fallback-name hidden text-xs font-semibold text-[#888] text-center">{brand.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Brand Grid Preview (first 8) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#cc0000] text-white font-semibold rounded-lg hover:bg-[#aa0000] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#cc0000]/30 text-sm"
          >
            View All 31+ Partners
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
