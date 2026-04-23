# 🚀 Rahul Raj Jaiswal — Developer Portfolio

### 🌌 Modern SaaS-Style Portfolio with Interactive UI & Advanced Animations

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38BDF8)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## ⚡ TL;DR

* ⚡ High-performance portfolio with **Next.js 14 (App Router)**
* 🎨 Advanced UI with **glassmorphism + gradient themes**
* 🧠 Interactive UX (3D tilt cards, cursor glow, animations)
* 📩 Production-ready **secure contact system (Resend)**

---

## 🌟 Overview

This is a **modern, production-ready developer portfolio** designed with a **SaaS-inspired aesthetic** and advanced UI interactions.

It combines **performance, design, and interactivity** to deliver a premium user experience while maintaining clean architecture and scalability.

---

## ✨ Key Features

### 🎨 Dynamic Theme System

* 🌙 **Dark Mode:** Deep space UI with glowing neon accents
* ☀️ **Light Mode:** Web3-inspired gradient
  `#c7d2fe → #a7f3d0 → #d8b4fe`
* 💎 Glassmorphism + blur effects for modern UI depth

---

### 🧠 Interactive Experience

* 🌀 **3D Tilt Cards** — respond to mouse movement
* ✨ **Cursor Glow Effect** — radial gradient tracking
* 🎬 Smooth transitions powered by Framer Motion
* 🔄 Scroll restoration + reveal animations

---

### 📂 Smart Project Filtering

* Filter by categories:

  * Blockchain
  * AI
  * Security
  * Web
* Real-time filtering with animated transitions

---

### 📩 Production-Ready Contact System

* Integrated with **Resend API**
* Secure server-side email handling
* Clean form validation

---

### ⚡ Performance Optimized

* Zero hydration errors
* Lightweight animations (CSS + Motion optimized)
* SEO-ready metadata
* Fast loading and smooth interactions

---

## 🛠 Tech Stack

| Layer      | Technologies            |
| ---------- | ----------------------- |
| Framework  | Next.js 14 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS            |
| Animations | Framer Motion           |
| Icons      | Lucide React            |
| Backend    | Server Actions          |
| Email      | Resend API              |

---

## 🏗 Architecture

```id="arch1"
UI (Next.js + Tailwind)
   ↓
Animations (Framer Motion)
   ↓
State Management (Hooks + Zustand)
   ↓
Server Actions (Email handling)
```

---

## 📂 Project Structure

```id="struct1"
src/
├── app/
│   ├── actions.ts         # Email logic (Resend)
│   ├── layout.tsx         # Root layout + SEO
│   ├── page.tsx           # Main UI + scroll logic
│   └── globals.css        # Themes + animations
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx     # Glass UI + theme toggle
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProjectsSection.tsx
│       └── OtherSections.tsx
│
├── data/
│   └── portfolio.ts       # Content management
│
├── hooks/
│   └── usePortfolio.ts    # Custom UI logic
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash id="cmd1"
npm install
```

### 2️⃣ Setup Environment

```env id="env1"
RESEND_API_KEY=re_your_api_key_here
```

### 3️⃣ Run Development Server

```bash id="cmd2"
npm run dev
```

🌐 Open: http://localhost:3000

---

## 🎨 Customization

Update portfolio content inside:

📁 `src/data/portfolio.ts`

* Personal Info
* Projects
* Social Links
* Hero Text

---

## 👨‍💻 My Contribution

* Designed and developed **full-stack portfolio architecture**
* Built advanced **UI/UX interactions and animations**
* Implemented **dynamic theming system**
* Integrated **secure email backend with Resend**

---

## 🔮 Future Enhancements

* 🌐 Deploy on Vercel with analytics
* 📊 Add admin dashboard for project updates
* 🎤 Voice-based interaction (experimental)
* 🧠 AI-powered portfolio assistant

---

## 📜 License

MIT License

---

## ❤️ Built With Passion

Designed and developed by **Rahul Raj Jaiswal**
