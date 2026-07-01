import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import SolutionsSection from '@/components/sections/SolutionsSection'
import ProductsSection from '@/components/sections/ProductsSection'
import BrandsSection from '@/components/sections/BrandsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutPreview />
        <SolutionsSection />
        <ProductsSection />
        <BrandsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
