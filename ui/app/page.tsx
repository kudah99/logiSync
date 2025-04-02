import Link from "next/link"
import {
  LucideArrowRight,
  LucideBarChart,
  LucideBus,
  LucideCalendar,
  LucideMessageSquare,
  LucideReceipt,
  LucideTicket,
  LucideUsers,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <LucideBus className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold text-xl">LogiSync</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Get Started</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Streamline Your Bus Fleet Operations
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  LogiSync helps bus operators manage trips, create tickets, handle accounting, and deliver digital
                  receipts—all in one platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Start Free Trial
                    <LucideArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="outline">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[400px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-md">
                    <div className="flex items-center gap-4 mb-4">
                      <LucideBus className="h-10 w-10 text-primary" />
                      <h3 className="text-2xl font-bold">LogiSync Dashboard</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-4 bg-background rounded border">
                        <LucideCalendar className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Trip Management</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-background rounded border">
                        <LucideTicket className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Ticketing</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-background rounded border">
                        <LucideBarChart className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Accounting</span>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-background rounded border">
                        <LucideReceipt className="h-8 w-8 text-primary mb-2" />
                        <span className="text-sm font-medium">Receipts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Fleet Management
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your bus operations efficiently
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideCalendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Trip Management</h3>
              <p className="text-muted-foreground text-center">
                Create, schedule, and manage trips with real-time tracking and driver assignments.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideTicket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Ticketing System</h3>
              <p className="text-muted-foreground text-center">
                Create and manage tickets with customizable pricing, seat selection, and booking links.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideBarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Accounting Modules</h3>
              <p className="text-muted-foreground text-center">
                Track revenue, expenses, and generate financial reports for better business insights.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideReceipt className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Digital Receipts</h3>
              <p className="text-muted-foreground text-center">
                Generate and send digital receipts via email or SMS, and print physical receipts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideMessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">WhatsApp Integration</h3>
              <p className="text-muted-foreground text-center">
                Allow customers to book tickets and receive updates through WhatsApp chatbot.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-background">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LucideUsers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Customer Management</h3>
              <p className="text-muted-foreground text-center">
                Maintain customer profiles, booking history, and preferences for personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Bus Operations?
              </h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join hundreds of bus operators already using LogiSync to streamline their business.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="gap-1">
                  Start Free Trial
                  <LucideArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <LucideBus className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">LogiSync</span>
              </div>
              <p className="text-sm text-muted-foreground">Streamlining bus operations since 2023</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Updates
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2023 LogiSync. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

