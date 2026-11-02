'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ProductCard } from '@/components/product-card'
import { Banknote, RotateCcw, Truck } from 'lucide-react'

const productGallery = [
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-SAU35CCXE1SPLVniic3kIZpcjdYPZB.jpeg', alt: 'White oversized t-shirt on a dark textile background' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-xVIgfOuZTkLD5lbOV8Vc1VqwFUJyL8.jpeg', alt: 'Black oversized t-shirt on a grey textile background' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-closeup.png-wZMnwRnloFrFtUuVUG1mX6OIE1F6zN.jpeg', alt: 'Close-up of white t-shirt stitching and fabric' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-xVIgfOuZTkLD5lbOV8Vc1VqwFUJyL8.jpeg', alt: 'Close-up view of black t-shirt fabric' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-closeup-inside-JWjbHXpElIAVP6LNHHMJi7wfa1IDEa.jpeg', alt: 'Close-up of black t-shirt inner fabric' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-white-u2rrzihNSDQGohefUrmbqIFg6WO9Y0.jpeg', alt: 'Folded black and white oversized t-shirts' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sizechart-H1Co13W896AqtTntOjtxCBuV66cKSv.png', alt: 'Oversized t-shirt size guide' }
]

const customDesign = { name: 'Your Own Design', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom-print-N3HkgXFQBRwSN3zd9Yfo2zJKv1thzl.jpg', alt: 'Black t-shirt with a custom design preview' }

const designOptions = [
  { name: 'Plain Tee', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-SAU35CCXE1SPLVniic3kIZpcjdYPZB.jpeg', alt: 'Plain white oversized t-shirt' },
  { name: 'Spiderman Save Gwen', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spiderman-rQFmdkkCgX6RAu4xhdGH8GrHlfReAx.jpg', alt: 'Black t-shirt with a Spiderman Save Gwen design' },
  { name: 'Zen Balancing Stones', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/balance-jky6yf2imDKm8CEDNH6etlgETNg5YE.jpg', alt: 'White t-shirt with a zen balancing stones design' },
  { name: 'Everest Base Camp', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/everest-base-camp-zkg6UlhflXVMROvwzYHjV0Qhz8bxyc.jpg', alt: 'Navy t-shirt with an Everest Base Camp design' },
  { name: 'Matrix Logo', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/matrix-KMkpnv8PJZKyBfsvSvUKEpMgwHnUfw.jpg', alt: 'White t-shirt with a Matrix logo design' },
]

const plainOptions = designOptions.filter((design) => design.name === 'Plain Tee')
const printedOptions = designOptions.filter((design) => design.name !== 'Plain Tee')

export default function Page() {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0)
  const [previewImage, setPreviewImage] = useState(designOptions[0].image)
  const [selectedTopDesign, setSelectedTopDesign] = useState(designOptions[0])
  const handleDesignChange = (design: typeof designOptions[number]) => {
    setSelectedTopDesign(design)
    setPreviewImage(design.image)
  }

  return (
    <>
      <div className="sticky top-0 z-50 flex min-h-12 items-center justify-between gap-2 bg-stone-900 px-3 py-2 text-stone-50">
        <p className="text-xs md:text-sm">Currently selling oversized t-shirts <span className="text-stone-400">· DM us what we&apos;re missing</span></p>
        <a href="#custom-design" className="rounded-lg px-2 py-1 text-xs font-medium text-stone-50 underline-offset-4 hover:underline">Custom design</a>
      </div>

      <main className="min-h-screen bg-stone-50 dark:bg-stone-950">
        <section className="mx-auto w-full max-w-6xl px-3 py-6 font-sans md:px-4 md:py-16">
          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-12">
            <div className="grid grid-cols-[4.5rem_1fr] gap-3 md:sticky md:top-20">
              <div className="flex flex-col gap-2">
                {[selectedTopDesign, productGallery[2], productGallery[4], productGallery[6]].map((product, index) => <button key={product.alt} type="button" onClick={() => { setSelectedGalleryImage(index); setPreviewImage(product.image) }} className={`relative aspect-square overflow-hidden rounded-md border-2 ${previewImage === product.image ? 'border-stone-900 dark:border-stone-50' : 'border-transparent'}`} aria-label={`View ${product.alt}`}><Image src={product.image} alt="" fill sizes="72px" className="object-cover" /></button>)}
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-stone-100 dark:bg-stone-900"><Image src={previewImage} alt={selectedTopDesign.alt || productGallery[selectedGalleryImage].alt} fill priority className="object-cover" sizes="(max-width: 768px) 80vw, 48vw" /></div>
            </div>
            <div className="flex flex-col gap-5 md:gap-8">
              <div className="border-b border-stone-300 pb-4 dark:border-stone-700"><h1 className="text-3xl font-semibold leading-tight text-stone-900 dark:text-stone-50 md:text-4xl">Premium Oversized T-Shirt</h1><p className="mt-2 text-base text-stone-600 dark:text-stone-400">Premium comfort. Minimal design.</p></div>
              <div className="border-b border-stone-300 pb-4 dark:border-stone-700"><p className="text-4xl font-medium text-stone-900 dark:text-stone-50">₹{selectedTopDesign.name === 'Plain Tee' ? 300 : 350}</p><p className="mt-1 text-sm text-stone-600 dark:text-stone-400">Inclusive of all taxes</p></div>
              <div className="grid grid-cols-3 gap-2 border-b border-stone-300 pb-4 text-center dark:border-stone-700"><div className="rounded-lg bg-stone-100 px-2 py-3 dark:bg-stone-900"><RotateCcw aria-hidden="true" className="mx-auto size-5" /><p className="mt-1 text-xs font-medium">7-day returns</p></div><div className="rounded-lg bg-stone-100 px-2 py-3 dark:bg-stone-900"><Banknote aria-hidden="true" className="mx-auto size-5" /><p className="mt-1 text-xs font-medium">Pay on delivery</p></div><div className="rounded-lg bg-stone-100 px-2 py-3 dark:bg-stone-900"><Truck aria-hidden="true" className="mx-auto size-5" /><p className="mt-1 text-xs font-medium">Standard delivery</p></div></div>
              <ProductCard {...designOptions[0]} price={350} designGroups={[{ label: 'Plain', options: plainOptions }, { label: 'Printed', options: printedOptions }]} colorOptions={['Black', 'White']} compact showColor={selectedTopDesign.name === 'Plain Tee'} onDesignChange={handleDesignChange} />
              <div className="hidden"><p className="mb-2 text-xs text-stone-500">Colors available</p><div className="flex gap-2"><span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-700 dark:border-stone-700 dark:text-stone-300"><span className="size-3 rounded-full border border-stone-400 bg-stone-950" />Black</span><span className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-700 dark:border-stone-700 dark:text-stone-300"><span className="size-3 rounded-full border border-stone-400 bg-white" />White</span></div>              </div>
              <div><p className="mb-2 text-xs text-stone-500">Fabric</p><ul className="flex flex-col gap-1 text-sm text-stone-700 dark:text-stone-300"><li>• 100% Cotton</li><li>• Premium French Terry</li><li>• Bio-washed</li><li>• Super Combed Ring-Spun Cotton</li><li>• Soft, breathable &amp; durable</li></ul></div>
              <div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"><p className="mb-2 text-sm font-semibold text-stone-900 dark:text-stone-50">Delivery</p><p className="text-sm leading-6 text-stone-600 dark:text-stone-300">Delivered within 3 days. Standard delivery charges apply. Cash on Delivery available.</p></div><div className="rounded-xl border border-stone-200 bg-white p-4 dark:border-stone-800 dark:bg-stone-900"><p className="mb-2 text-sm font-semibold text-stone-900 dark:text-stone-50">Returns</p><p className="text-sm leading-6 text-stone-600 dark:text-stone-300">7-day returns for damaged, incorrect, or unused and unwashed items.</p></div></div>
              <p className="rounded-lg border border-stone-300 bg-stone-100 px-4 py-3 text-sm font-medium leading-6 text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100">Please check the size chart before ordering. Our oversized fit is designed to match luxury streetwear sizing.</p>
              <a href="https://wa.me/916301725336?text=Hi!%20I%20want%20to%20order%20a%20Premium%20Oversized%20T-Shirt" target="_blank" rel="noreferrer" className="inline-flex w-fit rounded-lg bg-stone-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200">Buy on WhatsApp</a>
            </div>
          </div>
        </section>

        <section id="custom-design" className="mx-auto w-full max-w-6xl scroll-mt-16 px-3 py-10 md:px-4 md:py-16">
          <div className="mb-6 max-w-2xl"><p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Custom design</p><h2 className="text-3xl font-light tracking-tight text-stone-950 dark:text-stone-50 md:text-4xl">Print your own design</h2><p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-400">Upload your artwork, choose where it goes, and send the request on WhatsApp.</p></div>
          <div className="max-w-xl"><ProductCard {...customDesign} price={350} custom colorOptions={['Black', 'White']} placementOptions={['Front center', 'Back center', 'Left chest', 'Right chest', 'Other']} /></div>
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
