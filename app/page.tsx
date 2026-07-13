'use client';

import { useState, useEffect } from 'react';
import { Smartphone, Moon, Sun } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
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

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/p/27799765346315369/916301725336';
  };

  if (!mounted) return null;

  return (
    <>
      {/* Banner */}
      <div className="w-full bg-stone-900 dark:bg-stone-950 text-stone-50 py-2 px-3 sticky top-0 z-50 flex items-center justify-between gap-2 min-h-12">
        <p className="text-xs md:text-sm text-pretty">Currently Selling Oversized T-Shirts • <br className="md:hidden" />DM us—what are we missing?</p>
        <button
          onClick={toggleTheme}
          className="p-1.5 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-800 transition-colors shrink-0 ml-auto"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-4 h-4 md:w-5 md:h-5 text-stone-300" />
          ) : (
            <Moon className="w-4 h-4 md:w-5 md:h-5 text-stone-50" />
          )}
        </button>
      </div>

      <main className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
        {/* Hero Section */}
        <section className="flex-1 px-3 md:px-4 py-6 md:py-16 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start md:items-center">
            {/* Product Images */}
            <div className="flex flex-col gap-4">
              {/* Main Model Image */}
              <div className="relative w-full aspect-square bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-white-qgfc6Uc5qSKorgoOO6ZjIm8IR2yEb4.png"
                  alt="White oversized t-shirt on model"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Hanger Detail Image */}
              <div className="relative w-full aspect-square bg-stone-100 dark:bg-stone-900 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-top-ZhLCTI14lwP8qLdRvn8pWOxkpuId0w.jpeg"
                  alt="Black oversized t-shirt on hanger"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-5 md:gap-8">
              {/* Title */}
              <div>
                <h1 className="text-3xl md:text-5xl font-light mb-1 dark:text-stone-50 text-stone-900">Oversized T-Shirt</h1>
                <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg">Premium comfort, minimal design</p>
              </div>

              {/* Price */}
              <div>
                <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 mb-0.5">Starting from</p>
                <p className="text-2xl md:text-4xl font-light dark:text-stone-50 text-stone-900">₹290</p>
              </div>         

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 py-3 md:py-4 border-t border-b border-stone-200 dark:border-stone-800">
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Color</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">Black, White</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Sizes</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">
                    S / M / L / XL / XXL / 3XL
                  </p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Material</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">100% Cotton, 240 GSM</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Fit</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">Unisex Oversized</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Delivery</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">3 days • COD</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mb-0.5">Returns</p>
                  <p className="text-xs md:text-sm font-medium dark:text-stone-200 text-stone-900">7 days return & exchange</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-stone-900 dark:bg-stone-50 text-white dark:text-stone-950 py-3 md:py-4 rounded-lg font-medium text-base md:text-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 group"
              >
                <Smartphone className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                Buy on WhatsApp
              </button>

              {/* Additional Info */}
              <div className="text-xs md:text-sm text-stone-600 dark:text-stone-400 space-y-1.5">
                <p>✓ Bio-washed for extra softness</p>
                <p>✓ Super Combed Ring-Spun Cotton</p>
                <p>✓ Soft, breathable & durable</p>
              </div>

              {/* Size Chart Warning */}
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-3 md:p-4">
                <p className="text-xs md:text-sm text-blue-900 dark:text-blue-100">
                  <span className="font-medium">Please check the size chart before ordering.</span> Our oversized fit is designed to match the sizing of luxury streetwear brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Size Chart Section */}
        <section className="px-3 md:px-4 py-8 md:py-12 max-w-6xl mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-light mb-6 dark:text-stone-50 text-stone-900">Size Chart</h2>
          <div className="relative w-full rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-900">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sizechart-H1Co13W896AqtTntOjtxCBuV66cKSv.png"
              alt="Oversized T-Shirt Size Chart - Measurements for all sizes"
              width={1280}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-stone-900 dark:bg-stone-900 text-stone-50 dark:text-stone-50 py-6 md:py-8 px-3 md:px-4 border-t border-stone-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-stone-400 dark:text-stone-400 text-xs md:text-sm">Premium oversized apparel for everyday comfort.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-sm">Contact</h3>
                <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-stone-400 dark:text-stone-400">
                  <p>WhatsApp: <a href="https://wa.me/916301725336" className="hover:text-stone-50 dark:hover:text-stone-200 transition break-all">+91 6301 725 336</a></p>
                  <p>Email: <a href="mailto:genericsquare.info@gmail.com" className="hover:text-stone-50 dark:hover:text-stone-200 transition break-all">genericsquare.info@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
