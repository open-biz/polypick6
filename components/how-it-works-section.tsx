import { Card } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Wallet",
      description:
        "Link your Web3 wallet (MetaMask, WalletConnect, etc.). No account creation, no personal info required.",
    },
    {
      number: "02",
      title: "Select Your Picks",
      description: "Browse live games and choose up to 6 picks for your parlay. See real-time odds and pool liquidity.",
    },
    {
      number: "03",
      title: "Lock In Your Bet",
      description:
        "Review your parlay, confirm the smart contract transaction. Your bet is now immutably recorded on-chain.",
    },
    {
      number: "04",
      title: "Track & Get Paid",
      description:
        "Watch your picks resolve in real-time. Win? Funds are automatically sent to your wallet. No waiting.",
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
            How It <span className="text-accent">Works</span>
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Four simple steps from connection to payout. No bureaucracy, no friction.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border/50 bg-card p-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="font-mono text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="text-xl font-bold text-card-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
