import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideBus, LucideFilter, LucidePlus, LucideSearch, LucideWrench } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"

export default function BusesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Bus Fleet Management</h1>
              <p className="text-muted-foreground">Manage your bus fleet, track maintenance, and monitor performance</p>
            </div>
            <Link href="/buses/new">
              <Button>
                <LucidePlus className="mr-2 h-4 w-4" />
                Add New Bus
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search buses by ID, model, or registration..."
                className="w-full pl-8"
              />
            </div>
            <Button variant="outline" size="icon">
              <LucideFilter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Buses</CardTitle>
                <LucideBus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+2 added this month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Buses</CardTitle>
                <LucideBus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">75% of total fleet</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">In Maintenance</CardTitle>
                <LucideWrench className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">16.7% of total fleet</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Age</CardTitle>
                <LucideBus className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.5 years</div>
                <p className="text-xs text-muted-foreground">-0.5 years from last year</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Buses</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="maintenance">In Maintenance</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Buses</CardTitle>
                  <CardDescription>View and manage all buses in your fleet</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Bus ID</div>
                      <div>Registration</div>
                      <div>Model</div>
                      <div>Capacity</div>
                      <div>Age</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        id: "BUS-001",
                        registration: "XYZ-1234",
                        model: "Mercedes-Benz Tourismo",
                        capacity: "52 seats",
                        age: "2 years",
                        status: "Active",
                      },
                      {
                        id: "BUS-002",
                        registration: "XYZ-1235",
                        model: "Volvo 9700",
                        capacity: "48 seats",
                        age: "3 years",
                        status: "Active",
                      },
                      {
                        id: "BUS-003",
                        registration: "XYZ-1236",
                        model: "MAN Lion's Coach",
                        capacity: "50 seats",
                        age: "1.5 years",
                        status: "Active",
                      },
                      {
                        id: "BUS-004",
                        registration: "XYZ-1237",
                        model: "Scania Touring",
                        capacity: "54 seats",
                        age: "4 years",
                        status: "Maintenance",
                      },
                      {
                        id: "BUS-005",
                        registration: "XYZ-1238",
                        model: "Neoplan Cityliner",
                        capacity: "46 seats",
                        age: "5 years",
                        status: "Active",
                      },
                      {
                        id: "BUS-006",
                        registration: "XYZ-1239",
                        model: "Setra ComfortClass",
                        capacity: "50 seats",
                        age: "3.5 years",
                        status: "Maintenance",
                      },
                      {
                        id: "BUS-007",
                        registration: "XYZ-1240",
                        model: "Mercedes-Benz Citaro",
                        capacity: "42 seats",
                        age: "6 years",
                        status: "Inactive",
                      },
                      {
                        id: "BUS-008",
                        registration: "XYZ-1241",
                        model: "Volvo 9900",
                        capacity: "48 seats",
                        age: "2.5 years",
                        status: "Active",
                      },
                    ].map((bus) => (
                      <div key={bus.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{bus.id}</div>
                        <div>{bus.registration}</div>
                        <div>{bus.model}</div>
                        <div>{bus.capacity}</div>
                        <div>{bus.age}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={`${
                              bus.status === "Active"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                : bus.status === "Maintenance"
                                  ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                                  : "bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                            }`}
                          >
                            {bus.status}
                          </Badge>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <Link href={`/buses/${bus.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            <Link href={`/buses/${bus.id}/edit`}>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Buses</CardTitle>
                  <CardDescription>View and manage currently active buses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Active buses content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="maintenance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Buses in Maintenance</CardTitle>
                  <CardDescription>View and manage buses currently in maintenance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Maintenance buses content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="inactive" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Inactive Buses</CardTitle>
                  <CardDescription>View and manage inactive buses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Inactive buses content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

