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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <motion.nav
        className="w-full max-w-[1320px] flex items-center justify-between px-4 sm:px-5 rounded-full bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/5 ring-1 ring-white/20"
        animate={{
          height: isScrolled ? 56 : 64,
          boxShadow: isScrolled
            ? '0 4px 24px rgba(0,0,0,0.08)'
            : '0 4px 24px rgba(0,0,0,0.04)',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <Image
            src="/logo.png"
            alt="ALLTRONIX"
            width={249}
            height={70}
            className="object-contain"
            style={{ height: '36px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {mainNavigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <Link
                href={item.href}
                className={`px-2 py-1 text-xs font-bold uppercase tracking-normal transition-all duration-200 rounded-lg flex items-center gap-1 ${
                  isActive(item.href)
                    ? 'text-[#cc0000] bg-[#cc0000]/8'
                    : 'text-secondary hover:text-[#cc0000] hover:bg-[#cc0000]/5'
                }`}
              >
                {item.label}
                {item.children && (
                  <HiChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </Link>

              {item.children && activeDropdown === item.label && (
                <>
                  {item.label === 'Products' ? (
                    <div className="absolute top-full left-0 mt-2 w-[580px] glass-grain rounded-2xl p-3">
                      <div className="grid grid-cols-2 gap-3">
                        <Link href="/products" className="col-span-2 px-3 py-2 text-sm font-semibold text-[#cc0000] hover:text-[#990000] rounded-lg hover:bg-[#cc0000]/8 transition-colors">
                          View All Products →
                        </Link>
                        {productCategories.map((cat) => (
                          <div key={cat.id} className="block p-3 rounded-xl hover:bg-gray-50/50 transition-all group">
                            <Link href={`/products/${cat.slug}`} className="text-sm font-semibold text-primary hover:text-[#cc0000] transition-colors">{cat.name}</Link>
                            <div className="mt-1.5 space-y-0.5">
                              {cat.subcategories.slice(0, 4).map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={`/products/${cat.slug}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block text-xs text-muted hover:text-[#cc0000] truncate transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                              {cat.subcategories.length > 4 && (
                                <Link href={`/products/${cat.slug}`} className="block text-xs text-[#cc0000] hover:text-[#990000] transition-colors mt-1">+{cat.subcategories.length - 4} more</Link>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="absolute top-full left-0 mt-2 w-52 glass-grain rounded-xl p-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-secondary hover:text-[#cc0000] hover:bg-[#cc0000]/8 rounded-lg transition-all duration-200"
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

        {/* Right: Phone + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${companyInfo.contact.phone}`}
            className="hidden lg:flex items-center gap-2 text-sm font-medium text-secondary hover:text-[#cc0000] transition-colors"
          >
            <HiPhone className="w-4 h-4 text-[#cc0000]" />
            <span className="hidden xl:inline">(+91) {companyInfo.contact.phone}</span>
          </a>

          <a
            href={`mailto:${companyInfo.contact.email}`}
            className="hidden xl:flex items-center gap-1.5 text-xs text-muted hover:text-[#cc0000] transition-colors"
          >
            <HiMail className="w-3.5 h-3.5" />
            {companyInfo.contact.email}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary hover:text-[#005bb5] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX className="w-5 h-5" /> : <HiOutlineMenuAlt3 className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[76px] left-4 right-4 lg:hidden bg-white/75 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-xl overflow-hidden origin-top"
          >
            <nav className="px-3 py-3 space-y-0.5">
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
                        ? 'text-[#cc0000] bg-[#cc0000]/8'
                        : 'text-secondary hover:text-[#cc0000] hover:bg-[#cc0000]/5'
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
                    <div className="ml-4 mt-0.5 space-y-0.5">
                      {item.label === 'Products' ? (
                        <>
                          <Link href="/products" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm font-semibold text-[#005bb5] rounded-lg">View All Products →</Link>
                          {productCategories.map((cat) => (
                            <div key={cat.id}>
                              <Link
                                href={`/products/${cat.slug}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-sm font-semibold text-primary hover:text-[#005bb5] rounded-lg hover:bg-[#005bb5]/5"
                              >
                                {cat.name}
                              </Link>
                              <div className="ml-4 space-y-0.5">
                                {cat.subcategories.slice(0, 3).map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={`/products/${cat.slug}#${sub.name.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-1 text-xs text-muted hover:text-[#005bb5] transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
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
                            className="block px-4 py-2.5 text-sm text-secondary hover:text-[#005bb5] hover:bg-[#005bb5]/5 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-200 space-y-2">
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-secondary"
                >
                  <HiPhone className="w-4 h-4 text-[#005bb5]" />
                  {companyInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-secondary"
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
