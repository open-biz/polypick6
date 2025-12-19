import { Card } from "@/components/ui/card"
import { Trophy, TrendingDown, Zap } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Trophy,
      title: "The Solvency Vault",
      description:
        "No shady backrooms. Funds are held in a transparent, verifiable smart contract. If you win, the math guarantees you get paid. Period.",
    },
    {
      icon: TrendingDown,
      title: "Dynamic Buybacks",
      description:
        "Don't trust your last pick? The Protocol offers fair-value cash outs between every leg. Take profit and live to play another day.",
    },
    {
      icon: Zap,
      title: "Powered by BNB Chain",
      description:
        "Gas fees < $0.01. Instant settlement. Your wins are in your wallet seconds after the final whistle.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            The <span className="text-primary">Alpha</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* First feature - tall card on left */}
          <Card className="group border-border/50 bg-gradient-to-br from-card to-card/50 p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:col-span-2 md:row-span-2">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Trophy className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold text-card-foreground">{features[0].title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{features[0].description}</p>
          </Card>

          {/* Second feature - wide card on top right */}
          <Card className="group border-border/50 bg-gradient-to-br from-card to-card/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                <TrendingDown className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{features[1].title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{features[1].description}</p>
              </div>
            </div>
          </Card>

          {/* Third feature - wide card on bottom right */}
          <Card className="group border-border/50 bg-gradient-to-br from-card to-card/50 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 md:col-span-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{features[2].title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{features[2].description}</p>
              </div>
            </div>
          </Card>
        </div>
        {/* </CHANGE> */}
      </div>
    </section>
  )
}
