import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Shield, Lock, Zap, Eye } from 'lucide-react'
import { FloatingPaths } from "@/components/ui/floating-paths"
import { MotionDiv } from "@/components/providers/motion-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        {/* Background Paths */}
        <div className="absolute inset-0 w-screen">
          <FloatingPaths position={1} />
          <FloatingPaths position={-1} />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative min-h-[calc(100vh-4rem)] flex items-center">
          <MotionDiv 
            className="relative z-10 max-w-3xl mx-auto text-center space-y-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading tracking-wider text-primary uppercase font-black">
                STEALTH VPN
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground font-mono">
                MILITARY-GRADE PRIVACY COMING SOON
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-access">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto font-heading bg-primary text-background hover:bg-accent hover:text-primary uppercase tracking-wider text-lg backdrop-blur-sm bg-primary/90"
                >
                  REQUEST ACCESS
                </Button>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Privacy Comparison Section */}
      <section className="container mx-auto px-4 py-24 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <h2 className="relative z-10 inline-block bg-background px-6 text-4xl sm:text-5xl font-heading text-primary uppercase tracking-wider font-black">
              True Privacy Begins With Disappearing
            </h2>
          </div>
          <p className="text-xl text-muted-foreground font-mono leading-relaxed max-w-3xl mx-auto mb-16">
            If anyone can see your activity — you're not private.
            At Stealth VPN, we don't ask. We don't store. We don't know.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* No VPN Card */}
          <Card className="bg-surface border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-destructive uppercase tracking-wider flex items-center justify-center gap-2">
                <Eye className="w-6 h-6" /> NO VPN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading">Visible to:</p>
              <ul className="space-y-3 text-destructive font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive"></span>
                  Your ISP
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive"></span>
                  Governments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive"></span>
                  Hackers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive"></span>
                  WiFi Providers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-destructive"></span>
                  Network Admins
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Most VPNs Card */}
          <Card className="bg-surface border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-warning uppercase tracking-wider flex items-center justify-center gap-2">
                <Shield className="w-6 h-6" /> MOST VPNs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading">Still visible to:</p>
              <ul className="space-y-3 text-warning font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warning"></span>
                  VPN Providers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warning"></span>
                  Jurisdictions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warning"></span>
                  Ad Networks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-warning"></span>
                  Rogue Employees
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Stealth VPN Card */}
          <Card className="bg-surface border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary uppercase tracking-wider flex items-center justify-center gap-2">
                <Lock className="w-6 h-6" /> STEALTH VPN
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-heading">Visible to:</p>
              <ul className="space-y-3 text-primary font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  No one
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Not even us
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  Not even you, once you disconnect
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* No Tradeoffs Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <h2 className="relative z-10 inline-block bg-background px-6 text-3xl sm:text-4xl font-heading text-primary uppercase tracking-wider">
              No Tradeoffs
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-mono max-w-xl mx-auto mb-16">
            Lightning-fast speeds. Rock-solid uptime.
            Whether you're streaming, downloading, or working — Stealth VPN doesn't slow you down.
          </p>
        </div>
      </section>

      {/* Protection Stack */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <h2 className="relative z-10 inline-block bg-background px-6 text-3xl sm:text-4xl font-heading text-primary uppercase tracking-wider">
              Protection Stack
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-mono max-w-xl mx-auto mb-16">
            Military-grade security at every layer
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">IPv6 Leak Protection</span>
                </div>
              </div>
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">DNS Leak Protection</span>
                </div>
              </div>
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">WebRTC Protection</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">6000+ High-Security Servers</span>
                </div>
              </div>
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">96+ Global Locations</span>
                </div>
              </div>
              <div className="group p-4 bg-surface border border-border rounded hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">✅</span>
                  <span className="font-mono text-lg text-primary">Autonomous Server Rotation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/50"></div>
              </div>
              <h2 className="relative z-10 inline-block bg-background px-8 text-3xl sm:text-4xl font-heading text-primary uppercase tracking-wider">
                How It Works
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono">
              Your path to complete digital invisibility
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="group flex items-start gap-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <span className="text-base font-mono text-primary">01</span>
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <h3 className="text-lg font-heading text-primary uppercase tracking-wider">
                  Request Access
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  You get a randomly generated access key.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex items-start gap-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <span className="text-base font-mono text-primary">02</span>
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <h3 className="text-lg font-heading text-primary uppercase tracking-wider">
                  Launch Stealth Mode
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-mono">
                    Download the app and enter your access key.
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    You're instantly connected to our encrypted network.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex items-start gap-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <span className="text-base font-mono text-primary">03</span>
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <h3 className="text-lg font-heading text-primary uppercase tracking-wider">
                  Browse Undetected
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-mono">
                    Your data is tunneled through hardened, zero-log servers.
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    Your IP is masked. Your identity is untraceable.
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    No DNS leaks. No tracking. No compromises.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex items-start gap-10">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <span className="text-base font-mono text-primary">04</span>
                </div>
              </div>
              <div className="space-y-3 pt-3">
                <h3 className="text-lg font-heading text-primary uppercase tracking-wider">
                  Leave No Trace
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-mono">
                    When your session ends, it's burned.
                  </p>
                  <p className="text-sm text-muted-foreground font-mono">
                    No logs. No history. No trace you were ever online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}