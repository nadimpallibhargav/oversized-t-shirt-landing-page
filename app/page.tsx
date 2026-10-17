'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'
import { ProductCard } from '@/components/product-card'

const products = [
  { name: 'Premium Oversized Tee · Solid', price: 300, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-white-qgfc6Uc5qSKorgoOO6ZjIm8IR2yEb4.png', alt: 'White oversized t-shirt on model' },
  { name: 'Premium Oversized Tee · Black', price: 300, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-kvwNk3o0GijDLKwvLp0ehj3HdZuYxl.png', alt: 'Black oversized t-shirt styled with white pants and sneakers' },
]

const customPrints = [
  { name: 'Spiderman Save Gwen', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spiderman-rQFmdkkCgX6RAu4xhdGH8GrHlfReAx.jpg', alt: 'Black t-shirt with a Spiderman Save Gwen design' },
  { name: 'Zen Balancing Stones', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/balance-jky6yf2imDKm8CEDNH6etlgETNg5YE.jpg', alt: 'White t-shirt with a zen balancing stones design' },
  { name: 'Everest Base Camp Print', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/everest-base-camp-zkg6UlhflXVMROvwzYHjV0Qhz8bxyc.jpg', alt: 'Navy custom printed Everest Base Camp t-shirt' },
  { name: 'Matrix Logo', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matrix-KMkpnv8PJZKyBfsvSvUKEpMgwHnUfw.jpg', alt: 'White t-shirt with a Matrix logo design' },
  { name: 'Your Own Design', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom-print-N3HkgXFQBRwSN3zd9Yfo2zJKv1thzl.jpg', alt: 'Black t-shirt with a custom design preview' },
]

export default function Page() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <>
      <div className="sticky top-0 z-50 flex min-h-12 items-center justify-between gap-2 bg-stone-900 px-3 py-2 text-stone-50">
        <p className="text-xs md:text-sm">Currently selling oversized t-shirts <span className="text-stone-400">· DM us what we&apos;re missing</span></p>
        <button onClick={toggleTheme} className="rounded-lg p-1.5 transition hover:bg-stone-800" aria-label="Toggle theme">{isDark ? <Sun className="size-5 text-stone-300" /> : <Moon className="size-5" />}</button>
      </div>

      <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <section className="mx-auto w-full max-w-6xl px-3 py-6 md:px-4 md:py-16">
          <div className="grid items-start gap-6 md:grid-cols-2 md:items-center md:gap-12">
            <div className="flex flex-col gap-4">
              {products.map((product, index) => <div key={product.name} className="relative aspect-square overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900"><Image src={product.image} alt={product.alt} fill priority={index === 0} className="object-cover" /></div>)}
            </div>
            <div className="flex flex-col gap-5 md:gap-8">
              <div><h1 className="mb-1 text-3xl font-light text-stone-900 dark:text-stone-50 md:text-5xl">240 GSM Premium Oversized T-Shirt</h1><p className="text-base text-stone-600 dark:text-stone-400 md:text-lg">Premium comfort. Minimal design.</p></div>
              <div><p className="mb-1 text-xs text-stone-500">Pricing</p><p className="text-sm font-medium text-stone-900 dark:text-stone-200">XXS – 3XL — <span className="text-lg md:text-2xl">₹300</span></p><p className="text-sm font-medium text-stone-900 dark:text-stone-200">Custom printed — <span className="text-lg md:text-2xl">₹350</span></p><p className="mt-1 text-xs text-stone-500">All prices are inclusive of delivery charges.</p></div>
              <div><p className="mb-2 text-xs text-stone-500">Colors available</p><div className="flex gap-2"><span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-700 dark:border-stone-700 dark:text-stone-300"><span className="size-3 rounded-full border border-stone-400 bg-stone-950" />Black</span><span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-700 dark:border-stone-700 dark:text-stone-300"><span className="size-3 rounded-full border border-stone-400 bg-white" />White</span></div></div>
              <div><p className="mb-2 text-xs text-stone-500">Sizes available</p><p className="text-sm text-stone-700 dark:text-stone-300">XXS, XS, S, M, L, XL, XXL and 3XL</p></div>
              <div><p className="mb-2 text-xs text-stone-500">Fabric</p><ul className="flex flex-col gap-1 text-sm text-stone-700 dark:text-stone-300"><li>• 100% Cotton</li><li>• 240 GSM Premium French Terry</li><li>• Oversized fit</li></ul></div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-3 py-10 md:px-4 md:py-16">
          <div className="mb-7 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">Make it yours</p>
            <h2 className="text-3xl font-light tracking-tight text-stone-950 dark:text-stone-50 md:text-4xl">Custom printed collection</h2>
            <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">Choose one of our prints or use the design preview to start a custom order.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {customPrints.map((product) => <ProductCard key={product.name} {...product} price={350} custom colorOptions={['Black', 'White']} />)}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-3 py-10 md:px-4 md:py-16">
          <h2 className="mb-6 text-3xl font-light tracking-tight text-stone-950 dark:text-stone-50">Size chart</h2>
          <div className="overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-900"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sizechart-H1Co13W896AqtTntOjtxCBuV66cKSv.png" alt="Oversized t-shirt size chart with measurements" width={1280} height={800} className="h-auto w-full object-contain" /></div>
        </section>

        <footer className="border-t border-stone-800 bg-stone-900 px-3 py-8 text-stone-50 md:px-4">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm"><p className="text-stone-300">Premium oversized apparel for everyday comfort.</p><p className="text-stone-400">WhatsApp: <a href="https://wa.me/916301725336" className="text-stone-100 underline underline-offset-4">+91 6301 725 336</a> · Email: genericsquare.info@gmail.com</p></div>
        </footer>
      </main>
    </>
  )
}
