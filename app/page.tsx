'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Moon, Sun } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  const [selectedColor, setSelectedColor] = useState<'black' | 'white'>('black');
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const sizePrice: Record<string, number> = {
    'XXS': 290,
    'XS': 290,
    'S': 290,
    'M': 310,
    'L': 320,
    'XL': 330,
    'XXL': 350,
    '3XL': 370,
  };

  const sizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

  const images = {
    black: {
      model: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-man-wu0LNWurRrU1ppm88HQJLV9q4NsZ4g.png',
      hanger: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-top-ZhLCTI14lwP8qLdRvn8pWOxkpuId0w.jpeg',
    },
    white: {
      model: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-man-mNmuwiHcuFRSiHOooHLrtEDhiPo2Ep.png',
      hanger: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-top-nYvdSdeaDGizGdCXvwRCLJlLZ75uzX.jpeg',
    },
  };

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in the Oversized T-Shirt in ${selectedColor.toUpperCase()} (Size: ${selectedSize}) for ₹${sizePrice[selectedSize]}`;
    const whatsappUrl = `https://wa.me/p/27799765346315369/916301725336?text=${encodeURIComponent(message)}`;
    
    if (window.self !== window.top) {
      window.open(whatsappUrl, '_blank');
    } else {
      window.location.href = whatsappUrl;
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Banner */}
      <div className="w-full bg-stone-900 dark:bg-stone-950 text-stone-50 py-3 px-4 text-center text-sm md:text-base sticky top-0 z-50 flex items-center justify-center gap-4">
        <p className="text-pretty flex-1">Currently Selling Oversized T-Shirts • DM us—what are we missing? We&apos;re working on adding quality products and services for a better lifestyle.</p>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-800 transition-colors flex-shrink-0"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-stone-300" />
          ) : (
            <Moon className="w-5 h-5 text-stone-50" />
          )}
        </button>
      </div>

      <main className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
        {/* Hero Section */}
        <section className="flex-1 px-4 py-8 md:py-16 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Product Images */}
            <div className="flex flex-col gap-4">
              {/* Main Model Image */}
              <div className="relative w-full aspect-square bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden">
                <Image
                  src={images[selectedColor].model}
                  alt={`${selectedColor} oversized t-shirt on model`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Hanger Detail Image */}
              <div className="relative w-full aspect-square bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden">
                <Image
                  src={images[selectedColor].hanger}
                  alt={`${selectedColor} oversized t-shirt on hanger`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Title */}
              <div>
                <h1 className="text-4xl md:text-5xl font-light mb-2 dark:text-stone-50">Oversized T-Shirt</h1>
                <p className="text-stone-600 dark:text-stone-400 text-lg">Premium comfort, minimal design</p>
              </div>

              {/* Price */}
              <div>
                <p className="text-sm text-stone-600 dark:text-stone-400 mb-1">Starting from</p>
                <p className="text-3xl md:text-4xl font-light dark:text-stone-50">₹{sizePrice[selectedSize]}</p>
                <p className="text-sm text-stone-500 dark:text-stone-500 mt-2">Size {selectedSize}</p>
              </div>

              {/* Color Selection */}
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-3">Colour</p>
                <div className="flex gap-3">
                  {['black', 'white'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color as 'black' | 'white')}
                      className={`w-16 h-16 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-stone-900 dark:border-stone-50 scale-105 shadow-md'
                          : 'border-stone-300 dark:border-stone-700 hover:border-stone-600 dark:hover:border-stone-500'
                      } ${color === 'black' ? 'bg-black' : 'bg-white'}`}
                      title={color.charAt(0).toUpperCase() + color.slice(1)}
                    >
                      <span className="sr-only">{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <p className="text-sm font-medium text-stone-700 dark:text-stone-300 mb-3">Size</p>
                <div className="grid grid-cols-4 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border text-sm font-medium rounded-lg transition-all ${
                        selectedSize === size
                          ? 'bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 border-stone-900 dark:border-stone-50'
                          : 'border-stone-300 dark:border-stone-700 hover:border-stone-600 dark:hover:border-stone-500 dark:text-stone-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-stone-200 dark:border-stone-800">
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Material</p>
                  <p className="text-sm font-medium dark:text-stone-200">100% Cotton, 240 GSM</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Fit</p>
                  <p className="text-sm font-medium dark:text-stone-200">Unisex Oversized</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Delivery</p>
                  <p className="text-sm font-medium dark:text-stone-200">2 days • COD Available</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-1">Returns</p>
                  <p className="text-sm font-medium dark:text-stone-200">7 days free exchange</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 py-4 rounded-lg font-medium text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 group"
              >
                <Smartphone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Buy on WhatsApp
              </button>

              {/* Additional Info */}
              <div className="text-sm text-stone-600 dark:text-stone-400 space-y-2">
                <p>✓ Bio-washed for extra softness</p>
                <p>✓ Super Combed Ring-Spun Cotton</p>
                <p>✓ Soft, breathable & durable</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 dark:bg-stone-900 text-stone-50 dark:text-stone-50 py-8 px-4 border-t border-stone-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-medium mb-2">Generic Square</h3>
                <p className="text-stone-400 dark:text-stone-400 text-sm">Premium oversized apparel for everyday comfort.</p>
              </div>
              <div>
                <h3 className="font-medium mb-3">Contact</h3>
                <div className="space-y-2 text-sm text-stone-400 dark:text-stone-400">
                  <p>Phone: <a href="tel:+916301725336" className="hover:text-stone-50 dark:hover:text-stone-200 transition">+91 6301 725 336</a></p>
                  <p>Email: <a href="mailto:genericsquare.info@gmail.com" className="hover:text-stone-50 dark:hover:text-stone-200 transition">genericsquare.info@gmail.com</a></p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-3">Service Areas</h3>
                <p className="text-sm text-stone-400 dark:text-stone-400 mb-1">Free delivery in HSR Layout</p>
                <p className="text-sm text-stone-400 dark:text-stone-400">₹50 flat delivery across Bangalore</p>
              </div>
            </div>
            <div className="border-t border-stone-800 dark:border-stone-700 pt-6 text-center text-sm text-stone-400 dark:text-stone-400">
              <p>&copy; 2024 Generic Square. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
