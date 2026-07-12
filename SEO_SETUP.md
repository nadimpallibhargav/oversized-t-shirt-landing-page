# SEO Setup Guide for Generic Square

This guide covers all the SEO implementations and steps to finalize your setup with Google, Bing, and other search engines.

## ✅ Already Implemented

### 1. **Metadata Tags**
- Comprehensive meta tags in `app/layout.tsx`
- Page title, description optimized for search
- Keywords targeting oversized t-shirt, premium apparel
- Open Graph tags for social sharing
- Twitter Card tags for Twitter previews
- Category metadata for Fashion & Apparel

### 2. **Structured Data (Schema.org)**
- Organization schema (`structured-data.tsx`)
- Product schema with detailed information
- LocalBusiness schema for Bangalore presence
- WebSite schema with buy action
- JSON-LD format for search engine compatibility

### 3. **Search Engine Guidelines**
- `robots.txt` - Allows all crawlers, specifies sitemap location
- `sitemap.xml` - Lists all pages with priority and change frequency
- Canonical URL configured for homepage
- Hreflang tags for India-specific localization

### 4. **Performance & Mobile**
- Mobile-responsive design (tested across viewports)
- Light and dark mode support
- Fast loading with optimized images
- Core Web Vitals friendly structure

---

## 🔧 Next Steps: Manual Configuration Required

### 1. **Google Search Console Setup**
**URL:** https://search.google.com/search-console

Steps:
1. Go to Google Search Console
2. Click "Add property"
3. Choose "URL prefix" method
4. Enter: `https://genericsquare.com`
5. Verify ownership by adding this meta tag to your HTML head:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
   (Already added in layout.tsx - replace `YOUR_GOOGLE_VERIFICATION_CODE` with actual code)
6. Click "Verify"
7. In Search Console, go to "Sitemaps" → "Add/test sitemap"
8. Submit: `https://genericsquare.com/sitemap.xml`
9. Request indexing for homepage

### 2. **Bing Webmaster Tools Setup**
**URL:** https://www.bing.com/webmasters

Steps:
1. Sign in or create account
2. Add site: `https://genericsquare.com`
3. Verify using meta tag (similar to Google)
4. Submit sitemap in Webmaster Tools

### 3. **Update URL Placeholders**
In `app/layout.tsx`, update:
- Replace `https://genericsquare.com` with your actual domain
- Replace `YOUR_GOOGLE_VERIFICATION_CODE` with code from Google Search Console

In `public/robots.txt`, update:
- Replace `https://genericsquare.com` with your actual domain

In `public/sitemap.xml`, update:
- Replace `https://genericsquare.com` with your actual domain
- Update `lastmod` date periodically

### 4. **Additional Search Engine Submissions**
Submit your sitemap to:
- **Yandex Webmaster:** https://webmaster.yandex.com (for Russian/Cyrillic searches)
- **Baidu:** https://ziyuan.baidu.com (for Chinese searches - if applicable)

### 5. **Local SEO (Bangalore Specific)**
- Add to Google My Business: https://www.google.com/business/
  - Category: Retail Apparel Store
  - Service area: Bangalore
  - Phone: +91-6301-725-336
  - Website: https://genericsquare.com
  - Contact: genericsquare.info@gmail.com

### 6. **Enhanced SEO Practices**

#### Content Optimization
- ✅ Keyword-rich title (included)
- ✅ Meta description under 160 chars (included)
- ✅ H1 tag on page (Oversized T-Shirt)
- ✅ Image alt text on all images (included)
- ✅ Internal linking structure ready

#### Technical SEO
- ✅ Mobile responsive design
- ✅ SSL/HTTPS (Vercel handles automatically)
- ✅ XML Sitemap (created)
- ✅ Robots.txt (created)
- ✅ Structured data markup (added)
- ✅ Meta tags for all social platforms

#### Link Building (Manual Required)
- Submit to business directories:
  - Indian Fashion & Apparel directories
  - E-commerce platforms
  - Local Bangalore business listings
- Consider press releases about your product
- Reach out to fashion bloggers/influencers

---

## 📊 Monitoring & Analytics

### 1. **Google Analytics 4**
1. Set up at: https://analytics.google.com
2. Create property for your domain
3. Add tracking code to your site (if needed - can integrate with Next.js)
4. Monitor:
   - Traffic sources
   - User behavior
   - Conversion tracking (WhatsApp clicks)

### 2. **Google Search Console Monitoring**
Check regularly:
- Search queries and impressions
- Click-through rate (CTR)
- Average position in search results
- Mobile usability issues
- Security & manual actions

### 3. **Performance Monitoring**
- Lighthouse: https://pagespeed.web.dev/
- Monitor Core Web Vitals monthly
- Test mobile performance
- Check page speed insights

---

## 🔍 Keywords to Target

Primary Keywords:
- Oversized t-shirt
- Premium oversized t-shirt
- 240 GSM t-shirt
- Unisex oversized t-shirt
- Streetwear t-shirt

Long-tail Keywords:
- Oversized t-shirt in Bangalore
- Premium cotton t-shirt unisex
- Luxury streetwear oversized tee
- 240 GSM French Terry t-shirt
- Best oversized t-shirt India

---

## ✨ Checklist for Launch

- [ ] Replace placeholder URLs with actual domain
- [ ] Replace `YOUR_GOOGLE_VERIFICATION_CODE` with actual Google code
- [ ] Deploy to production
- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap to Google
- [ ] Submit sitemap to Bing
- [ ] Set up Google My Business
- [ ] Create Google Analytics property
- [ ] Test robots.txt at: `https://genericsquare.com/robots.txt`
- [ ] Test sitemap at: `https://genericsquare.com/sitemap.xml`
- [ ] Verify structured data: https://schema.org/validator/
- [ ] Check mobile usability in Search Console
- [ ] Monitor search console for first 2 weeks
- [ ] Request indexing in Search Console

---

## 📝 Files Created/Modified

1. **app/layout.tsx** - Enhanced metadata and structured data integration
2. **app/structured-data.tsx** - JSON-LD schema markup
3. **public/robots.txt** - Search engine crawling instructions
4. **public/sitemap.xml** - Sitemap for search engines
5. **SEO_SETUP.md** - This guide

---

## 🚀 Expected Results

With proper SEO setup and regular monitoring:
- **Week 1-2:** Initial indexing begins
- **Month 1:** Some organic traffic from branded searches
- **Month 2-3:** Ranking for target keywords starts
- **Month 3-6:** Steady organic traffic increase
- **Month 6+:** Established rankings for main keywords

Results depend on:
- Link building efforts
- Content quality
- Search volume for target keywords
- Competition in niche
- Regular optimization

---

For questions or updates, refer to:
- Google Search Central: https://developers.google.com/search
- Moz SEO Guide: https://moz.com/beginners-guide-to-seo
- Semrush SEO Guide: https://www.semrush.com/blog/
