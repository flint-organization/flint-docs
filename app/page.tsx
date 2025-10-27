import Link from 'next/link';
import { Button } from '@flint-org/ui';
import { ArrowRight, BookOpen, Package, Code2, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Flint UI</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="https://flint-three.vercel.app"
              target="_blank"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Demo
            </Link>
            <Link
              href="https://flint-organization.github.io/flint-ui"
              target="_blank"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Storybook
            </Link>
            <Link
              href="https://github.com/flint-organization/flint-ui"
              target="_blank"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container flex flex-col items-center gap-8 py-24 md:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Enterprise-grade React Components</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Beautiful components
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                built for speed
              </span>
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              50+ production-ready components with TypeScript, dark mode, and
              accessibility built-in. Built on Radix UI, styled with Tailwind
              CSS, animated with Framer Motion.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/docs">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://flint-three.vercel.app" target="_blank">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>

          {/* Quick Start Code */}
          <div className="w-full max-w-2xl">
            <div className="rounded-lg border bg-muted/50 p-6">
              <div className="mb-2 text-sm font-medium">Quick Start</div>
              <pre className="overflow-x-auto text-sm">
                <code>{`npm install @flint-org/ui framer-motion tailwindcss

import { Button, Card } from '@flint-org/ui'
import '@flint-org/ui/styles'

export default function App() {
  return <Button>Click me</Button>
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">50+ Components</h3>
              <p className="text-muted-foreground">
                Comprehensive library covering all enterprise needs from buttons
                to data tables with animated components.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Code2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">TypeScript First</h3>
              <p className="text-muted-foreground">
                100% TypeScript with full type definitions and IntelliSense
                support for the best developer experience.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Fully Documented</h3>
              <p className="text-muted-foreground">
                Comprehensive documentation with live examples, Storybook, and
                interactive demos for every component.
              </p>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="container border-t py-16">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-3xl font-bold">Explore Flint UI</h2>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/docs"
                className="flex flex-col gap-2 rounded-lg border p-6 transition-colors hover:bg-muted"
              >
                <BookOpen className="h-8 w-8" />
                <h3 className="font-semibold">Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Complete guides and API reference
                </p>
              </Link>

              <a
                href="https://flint-three.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-lg border p-6 transition-colors hover:bg-muted"
              >
                <Sparkles className="h-8 w-8" />
                <h3 className="font-semibold">Live Demo</h3>
                <p className="text-sm text-muted-foreground">
                  See components in real applications
                </p>
              </a>

              <a
                href="https://flint-organization.github.io/flint-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-lg border p-6 transition-colors hover:bg-muted"
              >
                <Code2 className="h-8 w-8" />
                <h3 className="font-semibold">Storybook</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive component explorer
                </p>
              </a>

              <a
                href="https://github.com/flint-organization/flint-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-lg border p-6 transition-colors hover:bg-muted"
              >
                <Package className="h-8 w-8" />
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-sm text-muted-foreground">
                  View source and contribute
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ by the Flint UI Team
          </p>
          <div className="flex gap-4">
            <Link
              href="https://github.com/flint-organization/flint-ui"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/@flint-org/ui"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              NPM
            </Link>
            <Link
              href="https://github.com/flint-organization/flint-ui/issues"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Issues
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
