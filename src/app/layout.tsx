import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/contexts/ThemeContext'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ALLTRONIX | Industrial Automation, Networking & Engineering Solutions',
    template: '%s | ALLTRONIX',
  },
  description: 'ALLTRONIX, an ISO-9001:2015 Certified Company established in 1978, provides world-class industrial automation, networking, railway, renewable energy, defence, and e-mobility solutions across India.',
  keywords: [
    'industrial automation',
    'factory automation',
    'industrial networking',
    'railway solutions',
    'renewable energy',
    'defence electronics',
    'e-mobility',
    'PLC',
    'HMI',
    'industrial communication',
    'connectors',
    'terminal blocks',
    'power supplies',
    'India',
    'Bangalore',
    'Peenya',
  ],
  authors: [{ name: 'ALLTRONIX' }],
  creator: 'ALLTRONIX',
  publisher: 'ALLTRONIX',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  metadataBase: new URL('https://www.alltronix.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'ALLTRONIX',
    title: 'ALLTRONIX | Industrial Automation, Networking & Engineering Solutions',
    description: 'ISO-9001:2015 Certified Company providing world-class automation, networking, and engineering solutions since 1978.',
    url: 'https://www.alltronix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALLTRONIX | Industrial Automation & Engineering Solutions',
    description: 'ISO-9001:2015 Certified Company providing world-class automation, networking, and engineering solutions since 1978.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ALLTRONIX',
  url: 'https://www.alltronix.com',
  logo: 'https://www.alltronix.com/logo.png',
  description: 'ISO-9001:2015 Certified Company for industrial automation, networking, and engineering solutions since 1978.',
  foundingDate: '1978',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. C-340, 6th Cross, 1st Stage, Peenya Industrial Estate',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-080-40838383',
    contactType: 'sales',
    email: 'mail@alltronix.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/alltronix',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              var t = localStorage.getItem('theme');
              if (t === 'dark') document.documentElement.classList.add('dark');
            } catch(e) {}
          `
        }} />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
