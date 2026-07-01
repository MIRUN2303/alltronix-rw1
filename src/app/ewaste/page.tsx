'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { ewasteData } from '@/data/company'

export default function EwastePage() {
  const [searchState, setSearchState] = useState('')
  
  const filteredPoints = ewasteData.collectionPoints.filter(
    (p) => p.state.toLowerCase().includes(searchState.toLowerCase()) || p.location.toLowerCase().includes(searchState.toLowerCase())
  )

  return (
    <>
      <Header />
      <main className="relative pt-24">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-20" />
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="E-Waste Management"
              title="E-WASTE COLLECTION POINTS"
              description="Our commitment to environmental responsibility through proper e-waste management."
            />

            <ScrollReveal>
              <GlassCard className="p-8 lg:p-10 mt-12">
                <p className="text-secondary leading-relaxed mb-6">{ewasteData.description}</p>
                <p className="text-sm text-secondary">Toll Free: {ewasteData.tollFree}</p>
              </GlassCard>
            </ScrollReveal>

            {/* Search */}
            <div className="mt-12">
              <input
                type="text"
                placeholder="Search by state or location..."
                value={searchState}
                onChange={(e) => setSearchState(e.target.value)}
                className="w-full max-w-md px-4 py-3 rounded-xl bg-surface border border-[rgba(204,0,0,0.12)] text-primary placeholder-[#999] focus:outline-none focus:border-[#005bb5] focus:ring-1 focus:ring-[#005bb5] transition-all mb-8"
              />
            </div>

            {/* Collection Points Table */}
            <div className="overflow-x-auto rounded-2xl border border-[rgba(204,0,0,0.08)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[rgba(204,0,0,0.08)] bg-surface">
                    <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">State</th>
                    <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">Location</th>
                    <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider hidden md:table-cell">Address</th>
                    <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider hidden lg:table-cell">Representative</th>
                    <th className="px-6 py-4 text-xs font-semibold text-secondary uppercase tracking-wider">Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPoints.map((point, i) => (
                    <tr key={i} className="border-b border-[rgba(204,0,0,0.04)] hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-sm text-primary font-medium">{point.state}</td>
                      <td className="px-6 py-4 text-sm text-secondary">{point.location}</td>
                      <td className="px-6 py-4 text-sm text-secondary hidden md:table-cell max-w-xs truncate">{point.address}</td>
                      <td className="px-6 py-4 text-sm text-secondary hidden lg:table-cell">{point.representative}</td>
                      <td className="px-6 py-4 text-sm text-[#005bb5]">{point.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
