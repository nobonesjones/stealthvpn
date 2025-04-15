import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
// Import Orbitron and Inter fonts
import { Orbitron, Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

export const dynamic = 'force-dynamic'

// Configure Orbitron for headings
const fontHeading = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['400', '700', '900'], // Example weights
})

// Configure Inter for body
const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata = {
  title: 'Stealth VPN',
  description: 'Tactical-grade VPN service.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}