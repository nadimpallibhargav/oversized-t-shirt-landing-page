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
  { name: 'Aerial Silhouette Print', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spiderman-rQFmdkkCgX6RAu4xhdGH8GrHlfReAx.jpg', alt: 'Black t-shirt with a white aerial silhouette design' },
  { name: 'Balance Print', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/balance-jky6yf2imDKm8CEDNH6etlgETNg5YE.jpg', alt: 'White custom printed Balance t-shirt' },
  { name: 'Everest Base Camp Print', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/everest-base-camp-zkg6UlhflXVMROvwzYHjV0Qhz8bxyc.jpg', alt: 'Navy custom printed Everest Base Camp t-shirt' },
  { name: 'Matrix Print', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matrix-KMkpnv8PJZKyBfsvSvUKEpMgwHnUfw.jpg', alt: 'White custom printed Matrix t-shirt' },
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
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 py-10 md:px-4 md:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">240 GSM · Premium French Terry</p>
            <h1 className="text-4xl font-light tracking-tight text-stone-950 dark:text-stone-50 md:text-6xl">Oversized, made personal.</h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600 dark:text-stone-400">Heavyweight cotton tees in clean solids and custom prints. Pick your fit, color, quantity, then send the order straight to WhatsApp.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => <ProductCard key={product.name} {...product} />)}
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
