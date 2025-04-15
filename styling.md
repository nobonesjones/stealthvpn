FULL DESIGN SYSTEM PROMPT FOR AI CODE GENERATOR

prompt
Copy
Edit
You are updating the full design system for a dark-themed website called "Stealth VPN". The visual identity is inspired by a B-2 Spirit stealth bomber: tactical, futuristic, minimalist, grayscale, and sleek.

Apply these styles globally across the site using Tailwind CSS and custom CSS variables.

🎯 OBJECTIVE:
Update colors, fonts, and reusable component styles to reflect a tactical, stealthy, grayscale theme with sharp contrasts, geometric design cues, and a modern, premium feel. Everything should feel deliberate and stripped-down—like military-grade tech.

🌑 COLOR SCHEME (Use HSL for flexibility):
--color-background: hsl(0, 0%, 6%)       /* Jet Black */
--color-surface: hsl(0, 0%, 12%)         /* Dark Gray */
--color-muted: hsl(0, 0%, 24%)           /* Gunmetal */
--color-border: hsl(0, 0%, 36%)          /* Cool Gray */
--color-primary: hsl(0, 0%, 80%)         /* Light Gray / Soft White */
--color-accent: hsl(210, 10%, 30%)       /* Tactical Blue-Gray (Minimal) */

Apply dark background with soft grayscale highlights and thin outlines. Use accent color sparingly (e.g. links, icons, subtle hovers).

🔤 FONTS:
- Import and use the following fonts:
  - **Heading Font**: "Orbitron" (Google Fonts) — futuristic, all-caps, ideal for headings and logo text
  - **Body Font**: "Inter" — clean, modern, and highly readable

Create Tailwind font utilities:
```ts
fontFamily: {
  heading: ['Orbitron', 'sans-serif'],
  body: ['Inter', 'sans-serif']
}
Use:

font-heading for all headings and CTAs

font-body for paragraph text

🔁 COMPONENT STYLES (globals.css): Create reusable Tailwind utility classes:

css
Copy
Edit
.btn-primary {
  @apply px-5 py-2 rounded-full font-heading uppercase tracking-wide bg-[--color-primary] text-black hover:bg-white transition;
}

.section {
  @apply py-20 px-6 bg-[--color-surface] text-[--color-primary] border-b border-[--color-border];
}

.card {
  @apply p-6 bg-[--color-background] rounded-xl border border-[--color-border] text-[--color-primary] shadow-sm hover:shadow-md transition;
}

.navbar {
  @apply w-full flex justify-between items-center px-6 py-4 bg-[--color-background] border-b border-[--color-border];
}
🧱 LAYOUT:

Base background should use bg-[--color-background]

Sections alternate with bg-[--color-surface]

Use lots of spacing, minimalist borders, and hover effects via shadows or subtle lightening

Avoid large bright areas — everything should feel like it belongs in a command center

🛠️ EXTEND Tailwind config:

ts
Copy
Edit
theme: {
  extend: {
    colors: {
      background: 'hsl(0, 0%, 6%)',
      surface: 'hsl(0, 0%, 12%)',
      muted: 'hsl(0, 0%, 24%)',
      border: 'hsl(0, 0%, 36%)',
      primary: 'hsl(0, 0%, 80%)',
      accent: 'hsl(210, 10%, 30%)',
    },
    fontFamily: {
      heading: ['Orbitron', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
  },
}
💡 NOTES:

Stick to monochrome with mild blue-gray accents only when necessary.

This is a stealth brand: no saturated colors, no rounded bubbly shapes.

Think F-117 Nighthawk, tactical HUDs, and military comms interfaces.

Make sure this theme applies to all buttons, navbars, modals, cards, backgrounds, and typography across the app. Everything should feel modular and high-tech.

yaml
Copy
Edit

---

Let me know if you want me to export this as actual `tailwind.config.ts`, `globals.css`, and layout i