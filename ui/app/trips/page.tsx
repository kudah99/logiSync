import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideCalendarPlus, LucideFilter, LucideSearch } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function TripsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Trip Management</h1>
              <p className="text-muted-foreground">Create, schedule, and manage your bus trips</p>
            </div>
            <Link href="/trips/new">
              <Button>
                <LucideCalendarPlus className="mr-2 h-4 w-4" />
                Create New Trip
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search trips by ID, route, or date..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <LucideFilter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Trips</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Trips</CardTitle>
                  <CardDescription>View and manage all your trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Trip ID</div>
                      <div className="col-span-2">Route</div>
                      <div>Departure</div>
                      <div>Status</div>
                      <div>Occupancy</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        id: "TRIP-1234",
                        route: "New York to Boston",
                        departure: "Today, 09:00 AM",
                        status: "Active",
                        occupancy: "85%",
                      },
                      {
                        id: "TRIP-1235",
                        route: "Boston to Washington DC",
                        departure: "Today, 10:30 AM",
                        status: "Delayed",
                        occupancy: "72%",
                      },
                      {
                        id: "TRIP-1236",
                        route: "New York to Philadelphia",
                        departure: "Today, 11:15 AM",
                        status: "Scheduled",
                        occupancy: "90%",
                      },
                      {
                        id: "TRIP-1237",
                        route: "Washington DC to New York",
                        departure: "Today, 02:00 PM",
                        status: "Scheduled",
                        occupancy: "65%",
                      },
                      {
                        id: "TRIP-1238",
                        route: "Philadelphia to Boston",
                        departure: "Tomorrow, 08:30 AM",
                        status: "Scheduled",
                        occupancy: "45%",
                      },
                      {
                        id: "TRIP-1239",
                        route: "Boston to New York",
                        departure: "Tomorrow, 09:45 AM",
                        status: "Scheduled",
                        occupancy: "38%",
                      },
                      {
                        id: "TRIP-1230",
                        route: "New York to Washington DC",
                        departure: "Yesterday, 07:00 AM",
                        status: "Completed",
                        occupancy: "92%",
                      },
                      {
                        id: "TRIP-1231",
                        route: "Philadelphia to Washington DC",
                        departure: "Yesterday, 08:15 AM",
                        status: "Completed",
                        occupancy: "88%",
                      },
                    ].map((trip) => (
                      <div key={trip.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{trip.id}</div>
                        <div className="col-span-2">{trip.route}</div>
                        <div>{trip.departure}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              trip.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : trip.status === "Delayed"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : trip.status === "Scheduled"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {trip.status}
                          </span>
                        </div>
                        <div>{trip.occupancy}</div>
                        <div>
                          <div className="flex space-x-2">
                            <Link href={`/trips/${trip.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            <Link href={`/trips/${trip.id}/edit`}>
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
                  <CardTitle>Active Trips</CardTitle>
                  <CardDescription>View and manage currently active trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Active trips content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="scheduled" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Trips</CardTitle>
                  <CardDescription>View and manage upcoming scheduled trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Scheduled trips content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Trips</CardTitle>
                  <CardDescription>View history of completed trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Completed trips content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cancelled" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cancelled Trips</CardTitle>
                  <CardDescription>View history of cancelled trips</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cancelled trips content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

