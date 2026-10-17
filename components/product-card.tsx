'use client'

import Image from 'next/image'
import { Minus, Plus, Smartphone } from 'lucide-react'
import { ChangeEvent, useState } from 'react'

type ProductCardProps = {
  name: string
  price: number
  image: string
  alt: string
  colorOptions?: string[]
  custom?: boolean
  placementOptions?: string[]
  designOptions?: { name: string; image: string; alt: string }[]
}

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']

export function ProductCard({ name, price, image, alt, colorOptions = ['Black', 'White'], custom = false, placementOptions = [], designOptions = [] }: ProductCardProps) {
  const [selectedDesign, setSelectedDesign] = useState({ name, image, alt })
  const [size, setSize] = useState('M')
  const [color, setColor] = useState(colorOptions[0])
  const [quantity, setQuantity] = useState(1)
  const [uploadedDesignUrl, setUploadedDesignUrl] = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [placement, setPlacement] = useState(placementOptions[0] ?? '')

  const uploadDesign = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setUploading(true)
    setUploadError('')
    const formData = new FormData()
    formData.append('file', file)
    try {
      const response = await fetch('/api/upload', { method: 'POST', body: formData })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setUploadedDesignUrl(result.url)
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  const buyOnWhatsApp = () => {
    const designDetails = custom && uploadedDesignUrl ? ` Custom design image: ${uploadedDesignUrl}` : ''
    const placementDetails = custom && placement ? ` Placement: ${placement}.` : ''
    const details = `Hi! I want to order ${quantity} x ${selectedDesign.name} (${size}, ${color}) for a total of ₹${price * quantity}.${placementDetails}${designDetails}`
    window.open(`https://wa.me/916301725336?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-950">
        <Image src={selectedDesign.image} alt={selectedDesign.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 hover:scale-[1.03]" />
      </div>
      {designOptions.length > 0 && <div className="flex gap-2 overflow-x-auto p-3 pb-0">
        {designOptions.map((design) => <button key={design.name} type="button" onClick={() => setSelectedDesign(design)} className={`flex w-16 shrink-0 flex-col gap-1 text-left ${selectedDesign.name === design.name ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`} aria-label={`Select ${design.name}`}><span className={`relative aspect-square overflow-hidden rounded-md border-2 ${selectedDesign.name === design.name ? 'border-stone-900 dark:border-stone-50' : 'border-transparent'}`}><Image src={design.image} alt="" fill sizes="64px" className="object-cover" /></span><span className="truncate text-[10px] text-stone-700 dark:text-stone-300">{design.name}</span></button>)}
      </div>}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-stone-900 dark:text-stone-50">{selectedDesign.name}</h3>
          <p className="shrink-0 text-sm font-semibold text-stone-900 dark:text-stone-50">₹{price}</p>
        </div>
        <div className="grid grid-cols-[1fr_1fr_auto] items-end gap-2 text-xs">
          <div>
            <p className="mb-1.5 text-stone-500">Size</p>
            <select value={size} onChange={(event) => setSize(event.target.value)} aria-label="Choose size" className="w-full rounded-md border border-stone-200 bg-white px-2 py-2 text-stone-900 outline-none transition focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50">
              {sizes.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <p className="mb-1.5 text-stone-500">Color</p>
            <select value={color} onChange={(event) => setColor(event.target.value)} aria-label="Choose color" className="w-full rounded-md border border-stone-200 bg-white px-2 py-2 text-stone-900 outline-none transition focus:border-stone-500 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50">
              {colorOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
          <div>
            <p className="mb-1.5 text-stone-500">Qty</p>
            <div className="flex items-center rounded-md border border-stone-200 dark:border-stone-700">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white" aria-label="Decrease quantity"><Minus className="size-3.5" /></button>
              <span className="min-w-7 text-center font-medium text-stone-900 dark:text-stone-50">{quantity}</span>
              <button type="button" onClick={() => setQuantity(Math.min(10, quantity + 1))} className="p-2 text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white" aria-label="Increase quantity"><Plus className="size-3.5" /></button>
            </div>
          </div>
        </div>
        {custom && placementOptions.length > 0 && <div className="flex flex-col gap-1.5 text-xs">
          <label htmlFor={`placement-${name}`} className="text-stone-500">Print placement</label>
          <select id={`placement-${name}`} value={placement} onChange={(event) => setPlacement(event.target.value)} className="w-full rounded-md border border-stone-200 bg-white px-2 py-2 text-stone-900 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-50">{placementOptions.map((option) => <option key={option}>{option}</option>)}</select>
        </div>}
        {custom && <div className="flex flex-col gap-1.5 text-xs">
          <label htmlFor={`design-${name}`} className="text-stone-500">Your custom design</label>
          <input id={`design-${name}`} type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadDesign} className="w-full rounded-md border border-dashed border-stone-300 bg-stone-50 px-2 py-2 text-stone-600 file:mr-2 file:rounded file:border-0 file:bg-stone-900 file:px-2 file:py-1 file:text-xs file:text-white dark:border-stone-700 dark:bg-stone-950 dark:text-stone-300 dark:file:bg-stone-50 dark:file:text-stone-950" />
          {uploading && <p className="text-stone-500">Uploading design...</p>}
          {uploadedDesignUrl && <p className="text-green-700 dark:text-green-400">Design uploaded and ready to send.</p>}
          {uploadError && <p className="text-red-700 dark:text-red-400">{uploadError}</p>}
        </div>}
        <button type="button" onClick={buyOnWhatsApp} disabled={uploading} className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"><Smartphone className="size-4" />Buy now</button>
      </div>
    </article>
  )
}
