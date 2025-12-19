import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-32">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-4xl font-bold md:text-6xl">Ready to Beat the House?</h2>
          <p className="mb-10 text-balance text-lg text-muted-foreground md:text-xl">
            Join thousands of bettors who've switched to transparent, fair, on-chain parlays. No account. No limits.
            Just connect and bet.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-14 gap-2 bg-primary px-8 text-lg text-primary-foreground hover:bg-primary/90"
            >
              Launch App Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 border-border/50 px-8 text-lg hover:bg-secondary bg-transparent"
            >
              Read the Docs
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            First-time user? Get 0.1 MATIC from our faucet to try your first parlay risk-free.
          </p>
        </div>
      </div>
    </section>
  )
}
