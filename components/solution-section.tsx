import { Card } from "@/components/ui/card"
import { Shield, Code, Users, Zap } from "lucide-react"

export function SolutionSection() {
  return (
    <section className="relative py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            Enter <span className="text-primary">PolyPick6</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            A decentralized parlay protocol where the rules are code, odds are transparent, and no one can change the
            game mid-play.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="border-primary/30 bg-card p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">100% Transparent</h3>
            <p className="text-muted-foreground">
              Every odd, every payout, every bet is on-chain. No hidden margins. No secret algorithms. Just pure,
              verifiable math.
            </p>
          </Card>

          <Card className="border-accent/30 bg-card p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
              <Code className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Powered by Smart Contracts</h3>
            <p className="text-muted-foreground">
              Audited code that can't be changed. Your bets are locked in with guaranteed fair payouts. No house
              discretion.
            </p>
          </Card>

          <Card className="border-primary/30 bg-card p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Community-Driven Pool</h3>
            <p className="text-muted-foreground">
              You bet against the pool, not a corporate entity. Winners are paid from the collective stake. True
              peer-to-peer action.
            </p>
          </Card>

          <Card className="border-accent/30 bg-card p-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
              <Zap className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Instant, Global Access</h3>
            <p className="text-muted-foreground">
              No KYC. No geographic restrictions. No account limits. If you have a wallet, you can play. Period.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
