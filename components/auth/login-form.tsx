"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      // TODO: Implement Supabase auth login
      console.log(values)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-[400px] bg-surface border-border">
      <CardHeader className="space-y-2 border-b border-border">
        <h2 className="text-2xl font-heading text-primary tracking-wider uppercase text-center">SECURE LOGIN</h2>
        <p className="text-sm text-muted-foreground text-center font-mono">TACTICAL VPN ACCESS</p>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-heading uppercase text-xs tracking-wider">Operator ID</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="name@example.com" 
                      {...field} 
                      className="bg-background border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-heading uppercase text-xs tracking-wider">Access Code</FormLabel>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="••••••" 
                      {...field}
                      className="bg-background border-border focus:border-primary font-mono"
                    />
                  </FormControl>
                  <FormMessage className="text-destructive text-xs" />
                </FormItem>
              )}
            />
            <Button 
              className="w-full bg-primary text-background hover:bg-accent hover:text-primary font-heading uppercase tracking-wider"
              type="submit" 
              disabled={isLoading}
            >
              {isLoading ? "AUTHENTICATING..." : "AUTHENTICATE"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-border py-4">
        <Button 
          variant="link" 
          onClick={() => router.push("/auth/sign-up")}
          className="text-primary hover:text-accent font-mono text-sm"
        >
          REQUEST NEW ACCESS CODE
        </Button>
      </CardFooter>
    </Card>
  )
}
