# Advait Tare — Portfolio

A cinematic, scroll-driven personal portfolio built to push the boundaries of what a developer portfolio can feel like. The hero section features a 119-frame scroll-linked image sequence rendered on an HTML5 `<canvas>`, creating a film-like experience as you scroll. Parallax text overlays animate in and out in sync with the canvas frames, transitioning seamlessly into a rich resume section below. Built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**, the site features a dynamic navbar that morphs from a floating pill to a full-width frosted glass bar the moment you enter the resume content — all driven by an `IntersectionObserver` for pixel-perfect timing. The resume features staggered entrance animations, an infinite skills marquee, and an interactive testimonial carousel with auto-play. Every detail — from the Switzer-inspired ultra-tight typography to the `#121212` dark canvas — is designed to leave a lasting impression.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animation**: Framer Motion (scroll-linked springs, `useTransform`, `useSpring`)
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Smooth Scroll**: Lenis (`@studio-freight/react-lenis`)
- **Icons**: Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

The fastest way to deploy is with [Vercel](https://vercel.com) — just import this repo and it works out of the box.
