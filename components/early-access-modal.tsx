"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

interface EarlyAccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EarlyAccessModal({ open, onOpenChange }: EarlyAccessModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsLoading(false)
  }

  const handleClose = () => {
    onOpenChange(false)
    // Reset state after animation completes
    setTimeout(() => {
      setSubmitted(false)
      setEmail("")
    }, 300)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-background border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-balance">
            {submitted ? "You're on the list!" : "Get Early Access"}
          </DialogTitle>
          <DialogDescription className="text-balance">
            {submitted
              ? "We'll notify you when PolyPick6 launches. Get ready to beat the house."
              : "Join the waitlist and be among the first to experience truly fair sports betting."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <Check className="h-8 w-8 text-accent" />
            </div>
            <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-primary/20 focus-visible:ring-primary"
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
