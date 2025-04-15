import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col space-y-4">
          {/* Logo */}
          <div className="flex justify-between items-center">
            <Image
              src="/images/your-logo.png"
              alt="Stealth VPN"
              width={120}
              height={24}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Tagline and Legal Links */}
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground font-mono">
              It's like you were never here. That's the point.
            </p>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
