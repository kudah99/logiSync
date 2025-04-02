import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LucideArrowUpRight,
  LucideBarChart,
  LucideBus,
  LucideCalendar,
  LucideMessageSquare,
  LucideRoute,
  LucideTicket,
  LucideUsers,
  LucideWrench,
} from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import TripsList from "@/components/trips-list"
import RevenueChart from "@/components/revenue-chart"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's an overview of your bus operations.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <LucideBarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Trips</CardTitle>
                <LucideBus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 scheduled for today</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                <LucideTicket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,345</div>
                <p className="text-xs text-muted-foreground">+15% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                <LucideUsers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Routes</CardTitle>
                <LucideRoute className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">16 active, 2 seasonal</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Buses</CardTitle>
                <LucideBus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">18 active, 4 in maintenance</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <LucideUsers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">24 drivers, 12 conductors, 6 admin</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">WhatsApp Bookings</CardTitle>
                <LucideMessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trips">Trips</TabsTrigger>
              <TabsTrigger value="routes">Routes</TabsTrigger>
              <TabsTrigger value="fleet">Fleet</TabsTrigger>
              <TabsTrigger value="employees">Employees</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <RevenueChart />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Upcoming Trips</CardTitle>
                    <CardDescription>You have 6 trips scheduled for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <TripsList />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/trips/new">
                        <Button variant="outline" className="w-full justify-start">
                          <LucideCalendar className="mr-2 h-4 w-4" />
                          New Trip
                        </Button>
                      </Link>
                      <Link href="/routes">
                        <Button variant="outline" className="w-full justify-start">
                          <LucideRoute className="mr-2 h-4 w-4" />
                          Manage Routes
                        </Button>
                      </Link>
                      <Link href="/buses">
                        <Button variant="outline" className="w-full justify-start">
                          <LucideBus className="mr-2 h-4 w-4" />
                          Manage Fleet
                        </Button>
                      </Link>
                      <Link href="/employees">
                        <Button variant="outline" className="w-full justify-start">
                          <LucideUsers className="mr-2 h-4 w-4" />
                          Employees
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base">Popular Routes</CardTitle>
                    <Link href="/routes">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <LucideArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View all</span>
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { route: "New York to Boston", occupancy: "85%", trips: "8/day" },
                        { route: "Boston to New York", occupancy: "82%", trips: "8/day" },
                        { route: "New York to Washington DC", occupancy: "78%", trips: "6/day" },
                      ].map((route, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <LucideRoute className="h-3 w-3 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{route.route}</p>
                              <p className="text-xs text-muted-foreground">
                                {route.trips} • {route.occupancy} occupancy
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <CardTitle className="text-base">Maintenance Alerts</CardTitle>
                    <Link href="/buses">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <LucideArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View all</span>
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        { id: "BUS-004", issue: "Oil change due", priority: "High" },
                        { id: "BUS-007", issue: "Tire replacement", priority: "Medium" },
                        { id: "BUS-012", issue: "Brake inspection", priority: "High" },
                      ].map((alert, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <LucideWrench className="h-3 w-3 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{alert.id}</p>
                              <p className="text-xs text-muted-foreground">{alert.issue}</p>
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className={`${
                              alert.priority === "High"
                                ? "bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700"
                                : "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                            }`}
                          >
                            {alert.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="trips" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Management</CardTitle>
                  <CardDescription>Create, edit, and manage your bus trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Trip management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="routes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Route Management</CardTitle>
                  <CardDescription>Manage your bus routes and schedules</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Route management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fleet" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fleet Management</CardTitle>
                  <CardDescription>Manage your bus fleet and maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Fleet management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="employees" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Employee Management</CardTitle>
                  <CardDescription>Manage your drivers, conductors, and staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Employee management content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

