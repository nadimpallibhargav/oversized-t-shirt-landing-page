import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import { StructuredData } from './structured-data'

export const metadata: Metadata = {
  title: 'Oversized T-Shirt | Premium 240 GSM French Terry Unisex Fit',
  description: 'Premium oversized t-shirt made from 100% cotton, 240 GSM French Terry. Unisex fit designed to match luxury streetwear brands. Available in black and white with fast delivery across Bangalore. 7 days return & exchange guaranteed.',
  keywords: ['oversized t-shirt', 'unisex t-shirt', '240 GSM cotton', 'premium t-shirt', 'streetwear', 'Bangalore clothing'],
  authors: [{ name: 'Generic Square' }],
  creator: 'Generic Square',
  publisher: 'Generic Square',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://genericsquare.com',
    siteName: 'Generic Square - Oversized T-Shirt',
    title: 'Premium Oversized T-Shirt | 240 GSM Unisex Fit',
    description: 'High-quality oversized t-shirt in black and white. 100% cotton, 240 GSM French Terry with luxury streetwear sizing.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-man-wu0LNWurRrU1ppm88HQJLV9q4NsZ4g.png',
        width: 1200,
        height: 1200,
        alt: 'Black Oversized T-Shirt',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Oversized T-Shirt | Generic Square',
    description: 'Luxury streetwear inspired oversized t-shirt. 100% cotton, 240 GSM, unisex fit. Order on WhatsApp today!',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-man-wu0LNWurRrU1ppm88HQJLV9q4NsZ4g.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://genericsquare.com',
    languages: {
      'en-IN': 'https://genericsquare.com',
    },
  },
  category: 'Fashion & Apparel',
  metadataBase: new URL('https://genericsquare.com'),
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <link rel="alternate" hrefLang="en-IN" href="https://genericsquare.com" />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
