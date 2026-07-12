export function StructuredData() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://genericsquare.com/#organization',
        name: 'Generic Square',
        url: 'https://genericsquare.com',
        description: 'Premium oversized apparel for everyday comfort',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Sales',
          telephone: '+91-6301-725-336',
          email: 'genericsquare.info@gmail.com',
          areaServed: 'IN',
        },
        sameAs: [
          'https://wa.me/916301725336',
        ],
      },
      {
        '@type': 'Product',
        '@id': 'https://genericsquare.com/#product',
        name: 'Oversized T-Shirt',
        description:
          'Premium oversized t-shirt made from 100% cotton, 240 GSM French Terry. Unisex fit designed to match luxury streetwear brands.',
        brand: {
          '@type': 'Brand',
          name: 'Generic Square',
        },
        image: [
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-man-wu0LNWurRrU1ppm88HQJLV9q4NsZ4g.png',
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-man-mNmuwiHcuFRSiHOooHLrtEDhiPo2Ep.png',
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-top-ZhLCTI14lwP8qLdRvn8pWOxkpuId0w.jpeg',
          'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/white-top-nYvdSdeaDGizGdCXvwRCLJlLZ75uzX.jpeg',
        ],
        url: 'https://genericsquare.com',
        color: ['Black', 'White'],
        size: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'],
        material: '100% Cotton',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: '290',
          highPrice: '370',
          offerCount: '1',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          bestRating: '5',
          worstRating: '1',
          ratingValue: '4.8',
          ratingCount: '100',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://genericsquare.com/#localbusiness',
        name: 'Generic Square',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/black-man-wu0LNWurRrU1ppm88HQJLV9q4NsZ4g.png',
        description: 'Premium oversized apparel for everyday comfort',
        telephone: '+91-6301-725-336',
        email: 'genericsquare.info@gmail.com',
        areaServed: 'Bangalore',
        priceRange: '₹₹',
        url: 'https://genericsquare.com',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://genericsquare.com/#website',
        url: 'https://genericsquare.com',
        name: 'Generic Square - Oversized T-Shirt',
        description: 'Premium oversized t-shirt in black and white. 100% cotton, 240 GSM with unisex fit and fast Bangalore delivery.',
        potentialAction: {
          '@type': 'BuyAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://wa.me/p/27799765346315369/916301725336',
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
