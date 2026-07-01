'use client'

import Link from 'next/link'
import Image from 'next/image'
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa'
import { companyInfo } from '@/data/company'
import { mainNavigation, footerQuickLinks } from '@/data/navigation'
import { productCategories } from '@/data/products'
import { solutions } from '@/data/solutions'

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] border-t border-[#333]">
      <div className="absolute inset-0 circuit-pattern opacity-[0.03]" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Alltronix"
                width={249}
                height={70}
                className="brightness-0 invert"
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <p className="text-sm text-[#999] leading-relaxed mb-6 max-w-md">
              {companyInfo.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-[#999]">
                <HiLocationMarker className="w-5 h-5 text-[#cc0000] shrink-0 mt-0.5" />
                <span>{companyInfo.contact.address}</span>
              </div>
              <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center gap-3 text-sm text-[#999] hover:text-white transition-colors">
                <HiPhone className="w-5 h-5 text-[#cc0000]" />
                <span>{companyInfo.contact.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-3 text-sm text-[#999] hover:text-white transition-colors">
                <HiMail className="w-5 h-5 text-[#cc0000]" />
                <span>{companyInfo.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerQuickLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#999] hover:text-[#cc0000] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-2.5">
              {productCategories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className="text-sm text-[#999] hover:text-[#cc0000] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2.5 mb-6">
              {solutions.slice(0, 4).map((sol) => (
                <li key={sol.slug}>
                  <Link
                    href={`/solutions#${sol.slug}`}
                    className="text-sm text-[#999] hover:text-[#cc0000] transition-colors"
                  >
                    {sol.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#888] hover:bg-[#cc0000] hover:text-white transition-all">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#888] hover:bg-[#cc0000] hover:text-white transition-all">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#888] hover:bg-[#cc0000] hover:text-white transition-all">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#333] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#666]">{companyInfo.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-sm text-[#666] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-[#666] hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
