import { Card } from "@/components/ui/card"
import { AlertTriangle, Eye, DollarSign, TrendingDown } from "lucide-react"

export function ProblemSection() {
  const problems = [
    {
      icon: Eye,
      title: "Hidden Odds Manipulation",
      description:
        "Traditional books adjust odds in real-time to maximize their edge, not to reflect true probability.",
    },
    {
      icon: DollarSign,
      title: "Unfair House Edge",
      description: "Margins built into every bet, every parlay. You're playing against rigged math from the start.",
    },
    {
      icon: TrendingDown,
      title: "Opaque Parlay Pricing",
      description:
        "Parlays priced with hidden multipliers that favor the house. The bigger your parlay, the worse your odds.",
    },
    {
      icon: AlertTriangle,
      title: "Account Restrictions",
      description: "Win too much? Get limited or banned. Traditional books punish successful bettors.",
    },
  ]

  return (
    <section id="problem" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            Traditional Sportsbooks Are <span className="text-destructive">Rigged Against You</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Every bet you place is designed to extract maximum value for the house. Here's how they do it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className="border-border/50 bg-card p-6 transition-colors hover:bg-card/80">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">{problem.title}</h3>
                <p className="text-sm text-muted-foreground">{problem.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
