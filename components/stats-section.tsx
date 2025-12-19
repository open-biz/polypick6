import { Card } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: DollarSign,
      value: "$12.4M",
      label: "Total Volume",
      color: "text-primary",
    },
    {
      icon: Users,
      value: "8,500+",
      label: "Active Bettors",
      color: "text-accent",
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "Avg. Payout Rate",
      color: "text-primary",
    },
    {
      icon: Zap,
      value: "2.5%",
      label: "Protocol Fee",
      color: "text-accent",
    },
  ]

  return (
    <section id="stats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            The Numbers <span className="text-primary">Don't Lie</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Real-time protocol statistics. All verifiable on-chain.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="border-border/50 bg-card p-8 text-center transition-all hover:border-primary/50"
              >
                <div className={`mb-4 flex justify-center`}>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="mb-2 text-4xl font-bold text-card-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Updated live from Polygon blockchain •{" "}
            <a href="#" className="text-primary underline-offset-4 hover:underline">
              View on Polygonscan
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
