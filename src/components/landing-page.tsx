"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Menu } from "lucide-react";

export function LandingPage({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BlockchainIcon className="h-6 w-6" />
          <span className="sr-only">L2 Enterprise Blockchain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Enterprise-Grade L2 Blockchain Solution
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Scalable, secure, and efficient blockchain infrastructure for
                  your business. Built on Avalanche, optimized for enterprise.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Our L2 Solution?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                title="High Throughput"
                description="Process thousands of transactions per second, ensuring your business never slows down."
              />
              <FeatureCard
                title="Low Costs"
                description="Benefit from significantly reduced transaction fees compared to L1 solutions."
              />
              <FeatureCard
                title="Ethereum Security"
                description="Leverage the security of Ethereum while enjoying the scalability of L2."
              />
              <FeatureCard
                title="Easy Integration"
                description="Seamlessly integrate with your existing systems and workflows."
              />
              <FeatureCard
                title="Privacy Controls"
                description="Advanced privacy features to keep your business data secure and compliant."
              />
              <FeatureCard
                title="24/7 Support"
                description="Round-the-clock expert support to ensure your blockchain operations run smoothly."
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <PricingCard
                title="Starter"
                price="$999"
                description="Perfect for small businesses and startups"
                features={[
                  "Up to 100 TPS",
                  "5 GB Storage",
                  "Basic Support",
                  "1 Custom Token",
                ]}
              />
              <PricingCard
                title="Pro"
                price="$2,999"
                description="Ideal for growing enterprises"
                features={[
                  "Up to 1,000 TPS",
                  "50 GB Storage",
                  "24/7 Priority Support",
                  "5 Custom Tokens",
                  "Advanced Analytics",
                ]}
              />
              <PricingCard
                title="Enterprise"
                price="Custom"
                description="Tailored solutions for large organizations"
                features={[
                  "Unlimited TPS",
                  "Unlimited Storage",
                  "Dedicated Support Team",
                  "Unlimited Custom Tokens",
                  "Advanced Privacy Controls",
                  "Custom Feature Development",
                ]}
              />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Contact us today to schedule a demo and see how our L2
                  blockchain solution can revolutionize your operations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Schedule a Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 L2 Enterprise Blockchain. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BlockchainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{price}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
        <ul className="mt-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Get Started</Button>
      </CardFooter>
    </Card>
  );
}
