"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { EarlyAccessModal } from "@/components/early-access-modal"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="font-mono text-lg font-bold text-primary-foreground">P6</span>
            </div>
            <span className="text-xl font-bold">PolyPick6</span>
          </div>

          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Get Early Access
          </Button>
        </div>
      </header>

      <EarlyAccessModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  )
}
