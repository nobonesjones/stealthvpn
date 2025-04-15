'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'
import type { User } from '@supabase/auth-helpers-nextjs'
import { Shield } from 'lucide-react'
import { Lock } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null)
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <nav className="w-full h-16 backdrop-blur-sm border-b border-border fixed top-0 z-50">
      <div className="container flex h-16 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center pl-16">
            <Image
              src="/images/your-logo.png"
              alt="Stealth VPN Logo"
              width={75}
              height={75}
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="font-mono uppercase text-sm hover:text-accent"
                >
                  <Link href="/dashboard">
                    COMMAND CENTER
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="font-mono uppercase text-sm border-primary text-primary hover:bg-primary hover:text-background"
                >
                  DISENGAGE
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  asChild
                  className="font-mono uppercase text-sm hover:bg-primary hover:text-background"
                >
                  <Link href="/request-access">
                    REQUEST ACCESS
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  className="font-mono uppercase text-sm flex items-center gap-2 text-muted-foreground cursor-not-allowed"
                  disabled
                >
                  <Lock className="w-4 h-4" />
                  SECURE LOGIN
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}