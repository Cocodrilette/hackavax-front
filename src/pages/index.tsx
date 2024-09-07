import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layers, Zap, Lock, BarChart3, Globe2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Section } from "@/components/ui/section";
import { Layout } from "@/components/layout";

export default function Home() {
  return (
    <Layout hide={{ header: true }}>
      {/* 
        Header
      */}
      <main className="flex-1">
        {/* 
          Section 1
        */}
        <Section className="bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  UniChain: The Ultimate DeFi Liquidity Hub
                </h1>
                <p className="mx-auto max-w-[700px] text-lg sm:text-xl text-primary-foreground/80">
                  Concentrate liquidity from multiple blockchains and
                  supercharge your DeFi applications with UniChain.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/dashboard">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-accent text-accent-foreground bg-gradient-to-r from-red-500 to-orange-500"
                  >
                    Get Started
                  </Button>
                </Link>
                <a href="#features">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-black border-primary-foreground"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section id="features" className="bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose UniChain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Experience blazing fast transaction speeds and low latency.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
                <p className="text-muted-foreground">
                  Built with cutting-edge security measures to protect your
                  assets.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart3 className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Concentrated Liquidity
                </h3>
                <p className="text-muted-foreground">
                  Access deep liquidity pools from multiple blockchains in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How UniChain Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Cross-Chain Liquidity Aggregation
                </h3>
                <p className="text-muted-foreground">
                  UniChain uses advanced bridging technology to aggregate
                  liquidity from multiple blockchains, creating a unified pool
                  of assets that can be easily accessed and utilized by DeFi
                  applications.
                </p>
                <h3 className="text-2xl font-bold">Optimized for DeFi</h3>
                <p className="text-muted-foreground">
                  Our blockchain is specifically designed to support complex
                  DeFi operations, with built-in support for smart contracts,
                  atomic swaps, and advanced financial instruments.
                </p>
              </div>
              <div className="flex justify-center">
                <Globe2 className="h-64 w-64 text-accent" />
              </div>
            </div>
          </div>
        </Section>
        <Section id="developers" className="bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Build the Future of DeFi
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our growing ecosystem of developers and create innovative
                DeFi applications on UniChain.
              </p>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Start Building <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Section>
        <Section className="bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the UniChain revolution and unlock the full potential of
                DeFi.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Sign up to receive updates about UniChain.{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
