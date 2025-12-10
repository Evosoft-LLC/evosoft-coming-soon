import type { Metadata, Viewport } from 'next'
import { Instrument_Sans, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_URL = 'https://www.evosoftllc.com'
const SITE_NAME = 'Evosoft LLC'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0a0f0a' },
    { media: '(prefers-color-scheme: light)', color: '#0a0f0a' },
  ],
}

export const metadata: Metadata = {
  // Basic Meta
  title: {
    default: 'Evosoft LLC | Software Engineering Consulting',
    template: '%s | Evosoft LLC',
  },
  description: 'Evosoft LLC - Software Engineering Consulting. Expert desktop, mobile, enterprise, and systems development. Building tomorrow\'s solutions today.',
  keywords: [
    'software engineering',
    'consulting',
    'software development',
    'desktop development',
    'mobile development', 
    'enterprise software',
    'systems development',
    'custom software',
    'software consultant',
    'Evosoft',
    'Evosoft LLC',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  
  // Robots
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
  
  // Canonical
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Evosoft LLC | Software Engineering Consulting',
    description: 'Expert software engineering consulting for desktop, mobile, enterprise, and systems development. Building tomorrow\'s solutions today.',
    images: [
      {
        url: '/og-image.png', // Convert og-image.svg to PNG (1200x630) for social media
        width: 1200,
        height: 630,
        alt: 'Evosoft LLC - Software Engineering Consulting',
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Evosoft LLC | Software Engineering Consulting',
    description: 'Expert software engineering consulting for desktop, mobile, enterprise, and systems development.',
    images: ['/og-image.png'], // Convert og-image.svg to PNG for Twitter
    // creator: '@evosoft', // Uncomment and update with your Twitter handle
  },
  
  // Icons
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png', // Convert apple-touch-icon.svg to PNG (180x180)
  },
  
  // Manifest for PWA
  manifest: '/manifest.json',
  
  // Additional
  category: 'technology',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  description: 'Software Engineering Consulting - Expert desktop, mobile, enterprise, and systems development.',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  sameAs: [
    // Add your social media URLs here when available
    // 'https://linkedin.com/company/evosoft',
    // 'https://twitter.com/evosoft',
    // 'https://github.com/evosoft',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  areaServed: 'Worldwide',
  serviceType: [
    'Software Engineering Consulting',
    'Desktop Development',
    'Mobile Development',
    'Enterprise Software Development',
    'Systems Development',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
