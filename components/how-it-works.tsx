import { Card } from "@/components/ui/card"
import { Coins, Target, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Coins,
      step: "Step 1",
      title: "Mint Your Card",
      description:
        "Pay 10 USDC to enter the daily Pick 6 Parlay. Select 6 binary outcomes (Sports, Finance, News) verified by Polymarket oracles.",
    },
    {
      icon: Target,
      step: "Step 2",
      title: "Survive The Sequence",
      description:
        "Rounds happen sequentially. You must survive every leg to advance. The Vault optimizes liquidity in the background.",
    },
    {
      icon: TrendingUp,
      step: "Step 3",
      title: "Claim or Crash",
      description:
        'Hit 6/6 to trigger the Jackpot Payout, or "Paper Hand" your ticket back to the protocol early for guaranteed profit.',
    },
  ]

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground">Three simple steps to start winning</p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="group border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="rounded-full bg-primary/10 px-3 py-1">{step.step}</span>
                </div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-card-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Card>
            )
          })}
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
