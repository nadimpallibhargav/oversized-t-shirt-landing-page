'use client'

import Image from 'next/image'
import { Minus, Plus, Smartphone } from 'lucide-react'
import { useState } from 'react'

type ProductCardProps = {
  name: string
  price: number
  image: string
  alt: string
  colorOptions?: string[]
  custom?: boolean
}

const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL']

export function ProductCard({ name, price, image, alt, colorOptions = ['Black', 'White'], custom = false }: ProductCardProps) {
  const [size, setSize] = useState('M')
  const [color, setColor] = useState(colorOptions[0])
  const [quantity, setQuantity] = useState(1)

  const buyOnWhatsApp = () => {
    const details = `Hi! I want to order ${quantity} x ${name} (${size}, ${color}) for ₹${price * quantity}. ${custom ? `Design reference: ${image}` : ''}`
    window.open(`https://wa.me/916301725336?text=${encodeURIComponent(details)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 dark:bg-stone-950">
        <Image src={image} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-500 hover:scale-[1.03]" />
        {custom && <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-stone-900">Custom print</span>}
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium text-stone-900 dark:text-stone-50">{name}</h3>
          <p className="shrink-0 text-sm font-semibold text-stone-900 dark:text-stone-50">₹{price}</p>
        </div>
        <div className="flex flex-col gap-3 text-xs">
          <div>
            <p className="mb-1.5 text-stone-500">Size</p>
            <div className="flex flex-wrap gap-1.5">
              {sizes.map((option) => <button key={option} type="button" onClick={() => setSize(option)} aria-pressed={size === option} className={`rounded-md border px-2 py-1 transition ${size === option ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950' : 'border-stone-200 text-stone-600 hover:border-stone-500 dark:border-stone-700 dark:text-stone-300'}`}>{option}</button>)}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-stone-500">Color</p>
            <div className="flex flex-wrap gap-1.5">
              {colorOptions.map((option) => <button key={option} type="button" onClick={() => setColor(option)} aria-pressed={color === option} className={`rounded-full border px-3 py-1 transition ${color === option ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-50 dark:bg-stone-50 dark:text-stone-950' : 'border-stone-200 text-stone-600 hover:border-stone-500 dark:border-stone-700 dark:text-stone-300'}`}>{option}</button>)}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-stone-500">Quantity</span>
            <div className="flex items-center rounded-md border border-stone-200 dark:border-stone-700">
              <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white" aria-label="Decrease quantity"><Minus className="size-3.5" /></button>
              <span className="min-w-7 text-center font-medium text-stone-900 dark:text-stone-50">{quantity}</span>
              <button type="button" onClick={() => setQuantity(Math.min(10, quantity + 1))} className="p-2 text-stone-600 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white" aria-label="Increase quantity"><Plus className="size-3.5" /></button>
            </div>
          </div>
        </div>
        <button type="button" onClick={buyOnWhatsApp} className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-stone-900 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-stone-700 dark:bg-stone-50 dark:text-stone-950 dark:hover:bg-stone-200"><Smartphone className="size-4" />Buy now</button>
      </div>
    </article>
  )
}
