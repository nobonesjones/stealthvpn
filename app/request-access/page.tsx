"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function RequestAccess() {
  const [email, setEmail] = useState("")
  const [plan, setPlan] = useState("")
  const [paymentType, setPaymentType] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const supabase = createClientComponentClient()
      const { error } = await supabase
        .from("email_form")
        .insert({
          email,
          plan,
          Payment_type: paymentType
        })

      if (error) {
        console.error("Supabase error:", error)
        setStatus("error")
        setMessage(error.message)
      } else {
        setStatus("success")
        setMessage("You've been added to the waiting list. We'll be in touch soon.")
        setEmail("")
        setPlan("")
        setPaymentType("")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-[400px] space-y-8 border border-border/50 bg-black/50 p-8 backdrop-blur-sm">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-heading text-primary tracking-widest">
            REQUEST ACCESS
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
              >
                OPERATOR EMAIL
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="h-12 bg-black/50 border-border/50 font-mono text-primary"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="plan"
                className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
              >
                SELECT PLAN
              </label>
              <Select value={plan} onValueChange={setPlan} required>
                <SelectTrigger className="w-full h-12 font-mono bg-black border-border/50 text-muted-foreground">
                  <SelectValue placeholder="Choose your plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">$5 per month</SelectItem>
                  <SelectItem value="yearly">$55 per year</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="paymentType"
                className="text-xs font-mono text-muted-foreground uppercase tracking-wider"
              >
                PAYMENT TYPE
              </label>
              <Select value={paymentType} onValueChange={setPaymentType} required>
                <SelectTrigger className="w-full h-12 font-mono bg-black border-border/50 text-muted-foreground">
                  <SelectValue placeholder="Choose payment method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="btc">BTC</SelectItem>
                  <SelectItem value="card">Card (anonymous transaction)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {message && (
              <p className={`text-xs font-mono ${
                status === 'success' ? 'text-primary' : 'text-destructive'
              }`}>
                {message}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <Button
              type="submit"
              className="w-full h-12 font-mono text-sm tracking-wider bg-primary/90 text-background hover:bg-primary"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Processing...' : 'REQUEST ACCESS'}
            </Button>

            <Link
              href="/"
              className="block text-center text-xs font-mono text-muted-foreground hover:text-primary uppercase tracking-wider"
            >
              RETURN TO SECURE SITE
            </Link>
          </div>
        </form>

        <div className="pt-4">
          <p className="text-xs font-mono text-muted-foreground text-center px-6">
            We will email you when we go live, emails will be destroyed and you will need to create a new account to activate your access.
          </p>
        </div>
      </div>
    </div>
  )
}
