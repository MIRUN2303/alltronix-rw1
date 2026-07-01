'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-surface">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#cc0000]/6 to-[#e60000]/3 blur-[150px]" />
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
            Ready to Engineer Your{' '}
            <span className="bg-gradient-to-r from-[#cc0000] to-[#e60000] bg-clip-text text-transparent">
              Next Project?
            </span>
          </h2>
          <p className="mt-6 text-lg text-secondary leading-relaxed">
            Our team of engineers and technocrats is ready to work with you. Get in touch today and let us help you from the control cabinet to the field level.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" href="/contact">
              Get in Touch
            </Button>
            <Button variant="secondary" size="lg" href="/products">
              Explore Products
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
