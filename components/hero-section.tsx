"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { EarlyAccessModal } from "@/components/early-access-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-32 pb-20 min-h-screen flex items-center">
      <div className="absolute inset-0 -z-10">
        {/* Isometric grid layer 1 */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8247e520_1px,transparent_1px),linear-gradient(to_bottom,#8247e520_1px,transparent_1px)] bg-[size:6rem_6rem] [transform:perspective(1200px)_rotateX(60deg)_scale(1.5)] [transform-origin:50%_100px] opacity-60 animate-[float_20s_ease-in-out_infinite]" />

        {/* Isometric grid layer 2 - offset */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8820_1px,transparent_1px),linear-gradient(to_bottom,#00ff8820_1px,transparent_1px)] bg-[size:6rem_6rem] [transform:perspective(1200px)_rotateX(60deg)_scale(1.5)_translateZ(50px)] [transform-origin:50%_150px] opacity-40 animate-[float_25s_ease-in-out_infinite_reverse]" />

        {/* Floating isometric cubes */}
        <div className="absolute left-[20%] top-[30%] h-24 w-24 border-2 border-primary/30 bg-primary/10 backdrop-blur-sm [transform:rotateX(45deg)_rotateZ(45deg)] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-[25%] top-[25%] h-32 w-32 border-2 border-accent/30 bg-accent/10 backdrop-blur-sm [transform:rotateX(45deg)_rotateZ(45deg)] animate-[float_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute left-[15%] bottom-[30%] h-20 w-20 border-2 border-primary/20 bg-primary/5 backdrop-blur-sm [transform:rotateX(45deg)_rotateZ(45deg)] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute right-[20%] bottom-[25%] h-28 w-28 border-2 border-accent/20 bg-accent/5 backdrop-blur-sm [transform:rotateX(45deg)_rotateZ(45deg)] animate-[float_15s_ease-in-out_infinite_reverse]" />

        {/* Glowing orbs */}
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-pulse" />
        <div
          className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>
      {/* </CHANGE> */}

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href="https://bscscan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 transition-all hover:border-primary/50 hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Live on BNB Mainnet</span>
          </a>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            The House Always Wins. <span className="text-primary">Until Now.</span>
          </h1>

          <p className="mb-10 text-balance text-lg text-muted-foreground md:text-xl">
            The{" "}
            <span className="font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              first decentralized Parlay Protocol
            </span>
            . Transparent odds, fair payouts, and no corporate middleman skimming your winnings.
          </p>
          {/* </CHANGE> */}

          <Button
            size="lg"
            className="group h-12 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setIsModalOpen(true)}
          >
            Get Early Access
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Audited Smart Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span>100% On-Chain</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "1s" }} />
              <span>Non-Custodial</span>
            </div>
          </div>
        </div>
      </div>

      <EarlyAccessModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  )
}
