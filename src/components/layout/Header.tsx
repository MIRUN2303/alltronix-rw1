'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HiOutlineMenuAlt3, HiX, HiChevronDown, HiPhone, HiMail } from 'react-icons/hi'
import { companyInfo } from '@/data/company'
import { mainNavigation } from '@/data/navigation'
import { productCategories } from '@/data/products'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden lg:block bg-[#1a1a1a] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-6 h-9 text-xs">
            <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <HiMail className="w-3.5 h-3.5" />
              {companyInfo.contact.email}
            </a>
            <a href={`tel:${companyInfo.contact.phone}`} className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors">
              <HiPhone className="w-3.5 h-3.5" />
              (+91) {companyInfo.contact.phone}
            </a>
            <div className="flex items-center gap-2 pl-3 border-l border-white/20">
              {[{label: 'f', href: '#'}, {label: 't', href: '#'}, {label: 'in', href: '#'}].map(s => (
                <a key={s.label} href={s.href} className="w-5 h-5 rounded-sm bg-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-[#cc0000] transition-colors">{s.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200'
          : 'bg-white'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="ALLTRONIX"
                width={249}
                height={70}
                className="object-contain"
                style={{ height: '48px', width: 'auto' }}
                priority
              />
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-all duration-200 flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-[#005bb5]'
                      : 'text-[#333] hover:text-[#005bb5]'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <HiChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <>
                    {item.label === 'Products' ? (
                      <div className="absolute top-full left-0 mt-0 w-[700px] bg-white rounded-b-2xl p-4 shadow-xl border border-gray-200">
                        <div className="grid grid-cols-2 gap-3">
                          <Link href="/products" className="col-span-2 px-3 py-2 text-sm font-semibold text-[#005bb5] hover:text-[#004999] rounded-lg hover:bg-red-50 transition-colors">
                            View All Products →
                          </Link>
                          {productCategories.map((cat) => (
                            <Link
                              key={cat.id}
                              href={`/products/${cat.slug}`}
                              className="block p-3 rounded-xl hover:bg-gray-50 transition-all group"
                            >
                              <span className="text-sm font-semibold text-[#1a1a1a] group-hover:text-[#005bb5] transition-colors">{cat.name}</span>
                              <div className="mt-1.5 space-y-0.5">
                                {cat.subcategories.slice(0, 4).map((sub) => (
                                  <span key={sub.name} className="block text-xs text-[#888] truncate">{sub.name}</span>
                                ))}
                                {cat.subcategories.length > 4 && (
                                  <span className="text-xs text-[#005bb5]">+{cat.subcategories.length - 4} more</span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="absolute top-full left-0 mt-0 w-52 bg-white rounded-b-xl p-1 shadow-xl border border-gray-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm text-[#555] hover:text-[#005bb5] hover:bg-red-50 rounded-lg transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-[#555] hover:text-[#005bb5] transition-colors"
            >
              <HiPhone className="w-4 h-4 text-[#005bb5]" />
              <span>(+91) {companyInfo.contact.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#555] hover:text-[#005bb5] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenuAlt3 className="w-6 h-6" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg"
          >
            <nav className="px-4 py-4 space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => {
                      if (!item.children) setIsOpen(false)
                      else setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wide transition-all ${
                      isActive(item.href)
                        ? 'text-[#005bb5] bg-red-50'
                        : 'text-[#333] hover:text-[#005bb5] hover:bg-red-50'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <HiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Link>
                  {item.children && activeDropdown === item.label && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.label === 'Products' ? (
                        <>
                          <Link href="/products" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm font-semibold text-[#005bb5] rounded-lg">View All Products →</Link>
                          {productCategories.map((cat) => (
                            <div key={cat.id}>
                              <Link
                                href={`/products/${cat.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm font-semibold text-[#1a1a1a] hover:text-[#005bb5] rounded-lg hover:bg-red-50"
                              >
                                {cat.name}
                              </Link>
                              <div className="ml-4 space-y-0.5">
                                {cat.subcategories.slice(0, 3).map((sub) => (
                                  <span key={sub.name} className="block px-4 py-1 text-xs text-[#888]">{sub.name}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2.5 text-sm text-[#555] hover:text-[#005bb5] hover:bg-red-50 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#555]"
                >
                  <HiPhone className="w-4 h-4 text-[#005bb5]" />
                  {companyInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#555]"
                >
                  <HiMail className="w-4 h-4 text-[#005bb5]" />
                  {companyInfo.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
