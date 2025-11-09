# Prototype Website - Professional Demo Platform

A modern, responsive, and accessible prototype website built with Next.js 16, demonstrating professional design patterns inspired by leading platforms like McKinsey, WEF, and Visual Capitalist.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## ✨ Features

### Design & UX
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Dark Mode** - Full dark/light theme support with persistent preference
- ✅ **Smooth Animations** - Professional transitions and scroll effects
- ✅ **Modern Layout** - Clean, professional design inspired by industry leaders

### Accessibility (WCAG 2.1 AA)
- ✅ **Keyboard Navigation** - Full keyboard accessibility
- ✅ **Skip to Content** - Skip link for screen readers
- ✅ **ARIA Labels** - Comprehensive ARIA attributes
- ✅ **Focus Indicators** - Visible focus styles on all interactive elements
- ✅ **Reduced Motion** - Respects user's motion preferences
- ✅ **Semantic HTML** - Proper HTML5 semantic structure

### Performance Optimizations
- ✅ **Code Splitting** - Dynamic imports for faster initial load
- ✅ **Lazy Loading** - Images load on demand
- ✅ **Component Memoization** - Reduced re-renders with React.memo()
- ✅ **Throttled Scroll** - Optimized scroll event listeners
- ✅ **Passive Listeners** - Better scroll performance
- ✅ **Image Optimization** - AVIF/WebP support, responsive sizes

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with dynamic imports
│   └── globals.css      # Global styles & animations
├── components/
│   ├── header.tsx       # Navigation with skip link
│   ├── hero.tsx         # Hero section
│   ├── stats-banner.tsx # Animated statistics
│   ├── featured-showcase.tsx # Featured content grid
│   ├── insights-grid.tsx # Insights cards
│   ├── case-studies.tsx # Carousel with case studies
│   ├── spotlight.tsx    # Events spotlight
│   ├── news-section.tsx # Latest news
│   ├── initiatives.tsx  # Strategic initiatives
│   ├── newsletter.tsx   # Newsletter subscription
│   └── footer.tsx       # Site footer
├── public/              # Static assets (images)
└── next.config.mjs      # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16.0.0 (App Router)
- **React:** 19.2.0
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Theme:** Next Themes

## 📊 Performance Targets

- **Lighthouse Performance:** 90+
- **Lighthouse Accessibility:** 90+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

## 🔒 Confidentiality

This is a **prototype website** with:
- Generic placeholder content
- Anonymized client references
- Generic location names
- No identifiable company information
- `robots.txt` set to `noindex, nofollow`

## 📖 Documentation

For detailed information about all improvements made:
- See **[IMPROVEMENTS_SUMMARY.md](./IMPROVEMENTS_SUMMARY.md)** for comprehensive change log
- Includes all branding removals, accessibility enhancements, and performance optimizations

## 🧪 Testing

### Accessibility
```bash
# Test with Lighthouse
npm run build
# Open Chrome DevTools > Lighthouse > Run audit
```

### Keyboard Navigation
1. Press `Tab` to navigate (skip link should appear first)
2. Press `Enter` on skip link to jump to main content
3. Test all interactive elements
4. Verify focus indicators are visible

### Performance
```bash
# Build and analyze bundle
npm run build
# Check output for bundle sizes
```

## 🌐 Browser Support

- Chrome (latest)
- Safari (latest)
- Edge (latest)
- Firefox (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🚢 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Import project
3. Deploy (automatic configuration detection)

### Netlify
1. Connect GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Manual
```bash
npm run build
npm start
```

## 📝 License

This is a confidential prototype. All rights reserved.

## 👨‍💻 Development Notes

### Key Features
1. All components are lazy-loaded except critical ones (Header, Hero)
2. Images use lazy loading with descriptive alt text
3. Carousel respects `prefers-reduced-motion`
4. Scroll listeners are throttled for performance
5. Components are memoized to prevent unnecessary re-renders

### Accessibility Best Practices
- All forms have proper labels
- All buttons have descriptive ARIA labels
- Images have meaningful alt text
- Skip link for keyboard users
- Proper heading hierarchy (h1 → h2 → h3)

### Performance Best Practices
- Dynamic imports for code splitting
- React.memo() for component optimization
- Passive event listeners
- Lazy loading images
- Optimized Next.js configuration

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** November 9, 2025
