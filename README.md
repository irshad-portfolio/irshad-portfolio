# 🛡️ Irshad N – HSE Officer Portfolio

A premium, cinematic portfolio website for HSE professionals built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Cinematic dark UI** — obsidian background, electric cyan + amber accents
- **Glassmorphism cards** — frosted glass effect with glow borders
- **Particle network hero** — animated canvas particle system
- **Custom cursor glow** — desktop cursor with trailing ring effect
- **Loading screen** — cinematic bootup sequence
- **Smooth scroll animations** — Framer Motion entrance effects on all sections
- **Responsive** — mobile-first, tested on all screen sizes
- **SEO optimized** — metadata, sitemap, robots.txt
- **ATS-compatible structure** — semantic HTML, clean content hierarchy
- **Fast** — Next.js App Router, font optimization, compression

---

## 🗂️ Project Structure

```
irshad-portfolio/
├── app/
│   ├── layout.tsx        # Root layout with fonts + SEO metadata
│   ├── page.tsx          # Main page
│   ├── globals.css       # Global styles, glassmorphism, cursor, animations
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── LoadingScreen.tsx  # Cinematic boot animation
│   ├── CursorGlow.tsx     # Custom cursor with ring effect
│   ├── Navbar.tsx         # Glass navbar with active section tracking
│   ├── Hero.tsx           # Particle canvas, name, CTA
│   ├── About.tsx          # Bio, animated skill bars, strengths
│   ├── Experience.tsx     # Vertical timeline – work + education
│   ├── Projects.tsx       # Achievement cards with hover animation
│   ├── Skills.tsx         # HSE skill categories with tags
│   ├── Contact.tsx        # Form + WhatsApp + Email
│   └── Footer.tsx
├── public/
│   ├── favicon.svg
│   ├── site.webmanifest
│   └── Irshad_N_HSE_Resume.pdf   ← ADD YOUR CV HERE
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
cd irshad-portfolio
npm install
```

### 2. Add your CV
Place your PDF resume in `public/` as:
```
public/Irshad_N_HSE_Resume.pdf
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## ☁️ Deploy on Vercel (Free – Recommended)

1. Push this folder to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the repo → click **Deploy**
4. Your site goes live at `https://your-project.vercel.app`

### Custom domain (optional)
In Vercel dashboard → Settings → Domains → add `irshadn.com` or similar.

---

## 🔧 Customization Guide

### Update personal info
Edit `components/Hero.tsx`:
```tsx
// Change phone, email, location
{ icon: Phone, text: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' }
```

### Update contact form to actually send emails
Replace the mock handler in `components/Contact.tsx` with [Formspree](https://formspree.io):
```tsx
// 1. Sign up at formspree.io, create a form, get your form ID
// 2. Replace handleSubmit with:
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setSending(true)
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSending(false)
  setSent(true)
}
```

### Update WhatsApp link
In `components/Contact.tsx` change:
```tsx
href: 'https://wa.me/918089651072?text=Hi%20Irshad...'
```

### Update site URL for SEO
In `app/layout.tsx` and `app/sitemap.ts`, replace:
```
https://irshadn.vercel.app
```
with your actual deployment URL.

### Add your photo
Replace the SVG shield in `components/About.tsx` with:
```tsx
import Image from 'next/image'
// ...
<Image src="/irshad-photo.jpg" alt="Irshad N" width={192} height={192}
  className="rounded-3xl object-cover" />
```
Place `irshad-photo.jpg` in the `public/` folder.

---

## 🎨 Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--cyan` | `#00d4ff` | Primary accent, links, glows |
| `--amber` | `#ff6b2b` | Secondary accent, fire safety |
| `--obsidian` | `#050a14` | Main background |
| `--navy` | `#0a1628` | Card backgrounds |
| `--ice` | `#e0e8f7` | Primary text |
| `--ice-dim` | `#8a9ab5` | Secondary text |

Fonts: **Orbitron** (display) + **Exo 2** (body)

---

## 📱 Browser Support

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS Safari, Android Chrome

---

## 📄 License

Personal use. Customized for Irshad N.

---

**Built with ❤️ for safety professionals who deserve a premium digital presence.**
