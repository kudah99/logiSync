"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideArrowLeft, LucideCalendar, LucideEdit, LucideRoute, LucideTicket, LucideUsers } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import type { RoutePerformanceMetrics, RouteStop, RouteWithId } from "@/lib/models/route"
import type { TripWithRelations } from "@/lib/models/trip"
import { formatCurrency, formatDuration, formatPercentage, formatTime } from "@/lib/utils"

export default function RouteDetailsPage({ params }: { params: { id: string } }) {
  const routeId = params.id

  const [route, setRoute] = useState<RouteWithId | null>(null)
  const [stops, setStops] = useState<RouteStop[]>([])
  const [trips, setTrips] = useState<TripWithRelations[]>([])
  const [performance, setPerformance] = useState<RoutePerformanceMetrics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        setIsLoading(true)

        // Fetch route details
        const routeResponse = await fetch(`/api/routes?id=${routeId}`)
        if (!routeResponse.ok) {
          throw new Error("Failed to fetch route details")
        }
        const routeData = await routeResponse.json()
        setRoute(routeData)

        // Fetch route stops
        const stopsResponse = await fetch(`/api/routes/${routeId}/stops`)
        if (stopsResponse.ok) {
          const stopsData = await stopsResponse.json()
          setStops(stopsData)
        }

        // Fetch route trips
        const tripsResponse = await fetch(`/api/routes/${routeId}/trips`)
        if (tripsResponse.ok) {
          const tripsData = await tripsResponse.json()
          setTrips(tripsData)
        }

        // Fetch route performance metrics
        const performanceResponse = await fetch(`/api/routes/${routeId}/performance`)
        if (performanceResponse.ok) {
          const performanceData = await performanceResponse.json()
          setPerformance(performanceData)
        }

        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching route data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setIsLoading(false)
      }
    }

    fetchRouteData()
  }, [routeId])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 md:p-10 flex items-center justify-center">
          <p>Loading route details...</p>
        </main>
      </div>
    )
  }

  if (error || !route) {
    return (
      <div className="flex min-h-screen flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 md:p-10 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Error</h2>
            <p className="text-red-500">{error || "Route not found"}</p>
            <Link href="/routes" className="mt-4 inline-block">
              <Button variant="outline">
                <LucideArrowLeft className="mr-2 h-4 w-4" />
                Back to Routes
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const fullName = `${route.origin} to ${route.destination}`
  const durationFormatted = formatDuration(route.duration)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/routes">
                <Button variant="outline" size="icon">
                  <LucideArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Route Details: {fullName}</h1>
                <p className="text-muted-foreground">
                  {route.id} • {route.distance} {route.distanceUnit} • {durationFormatted}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/trips/new?route=${routeId}`}>
                <Button variant="outline">
                  <LucideCalendar className="mr-2 h-4 w-4" />
                  Schedule Trip
                </Button>
              </Link>
              <Link href={`/routes/${routeId}/edit`}>
                <Button>
                  <LucideEdit className="mr-2 h-4 w-4" />
                  Edit Route
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Route Information</CardTitle>
                <CardDescription>Basic information about this route</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Status</span>
                    <Badge
                      variant="outline"
                      className={`${
                        route.status === "Active"
                          ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                          : route.status === "Seasonal"
                            ? "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                    >
                      {route.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Origin</span>
                    <span>{route.origin}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Destination</span>
                    <span>{route.destination}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Distance</span>
                    <span>
                      {route.distance} {route.distanceUnit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Duration</span>
                    <span>{durationFormatted}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Frequency</span>
                    <span>{route.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">First Departure</span>
                    <span>{route.firstDeparture ? formatTime(route.firstDeparture) : "N/A"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Last Departure</span>
                    <span>{route.lastDeparture ? formatTime(route.lastDeparture) : "N/A"}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Base Price</span>
                    <span>{formatCurrency(route.basePrice)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Route Performance</CardTitle>
                <CardDescription>Key performance metrics for this route</CardDescription>
              </CardHeader>
              <CardContent>
                {performance ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{formatPercentage(performance.occupancyRate)}</div>
                          <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{formatPercentage(performance.onTimePerformance)}</div>
                          <p className="text-sm text-muted-foreground">On-Time Performance</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{performance.averageDelay} minutes</div>
                          <p className="text-sm text-muted-foreground">Average Delay</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{performance.customerSatisfaction}/5</div>
                          <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{formatPercentage(performance.cancellationRate)}</div>
                          <p className="text-sm text-muted-foreground">Cancellation Rate</p>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col items-center">
                          <div className="text-2xl font-bold">{formatPercentage(performance.profitMargin)}</div>
                          <p className="text-sm text-muted-foreground">Profit Margin</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-4">
                      <h3 className="text-sm font-medium">Monthly Statistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 p-2">
                              <LucideTicket className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">Monthly Trips</p>
                              <p className="text-2xl font-bold">{performance.monthlyTrips}</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 p-2">
                              <LucideUsers className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">Avg. Occupancy</p>
                              <p className="text-2xl font-bold">{formatPercentage(performance.occupancyRate)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center justify-between">
                            <div className="rounded-full bg-primary/10 p-2">
                              <LucideRoute className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">Monthly Revenue</p>
                              <p className="text-2xl font-bold">{formatCurrency(performance.monthlyRevenue)}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground">No performance data available for this route.</p>
                )}
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="stops" className="space-y-4">
            <TabsList>
              <TabsTrigger value="stops">Stops</TabsTrigger>
              <TabsTrigger value="trips">Trip History</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="stops" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Route Stops</CardTitle>
                  <CardDescription>All stops along this route</CardDescription>
                </CardHeader>
                <CardContent>
                  {stops.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No stops defined for this route.</p>
                  ) : (
                    <div className="rounded-md border">
                      <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
                        <div>Stop</div>
                        <div className="col-span-2">Address</div>
                        <div>Arrival</div>
                        <div>Departure</div>
                        <div>Wait Time</div>
                      </div>
                      {stops.map((stop) => (
                        <div key={stop.id} className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 items-center">
                          <div className="font-medium">
                            <div className="flex items-center space-x-2">
                              <Badge
                                variant="outline"
                                className={`${
                                  stop.isOrigin
                                    ? "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                                    : stop.isDestination
                                      ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                      : "bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700"
                                }`}
                              >
                                {stop.isOrigin ? "Origin" : stop.isDestination ? "Destination" : "Stop"}
                              </Badge>
                              <span>{stop.name}</span>
                            </div>
                          </div>
                          <div className="col-span-2">{stop.address}</div>
                          <div>{stop.arrivalTime ? formatTime(stop.arrivalTime) : "-"}</div>
                          <div>{stop.departureTime ? formatTime(stop.departureTime) : "-"}</div>
                          <div>{stop.waitTime ? `${stop.waitTime} min` : "-"}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trips" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trip History</CardTitle>
                  <CardDescription>Recent trips on this route</CardDescription>
                </CardHeader>
                <CardContent>
                  {trips.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No trips found for this route.</p>
                  ) : (
                    <div className="rounded-md border">
                      <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                        <div>Trip ID</div>
                        <div>Date</div>
                        <div>Departure</div>
                        <div>Arrival</div>
                        <div>Bus</div>
                        <div>Driver</div>
                        <div>Revenue</div>
                      </div>
                      {trips.map((trip) => (
                        <div key={trip.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                          <div className="font-medium">{trip.id}</div>
                          <div>{new Date(trip.departureDate).toLocaleDateString()}</div>
                          <div>{formatTime(trip.departureTime)}</div>
                          <div>{formatTime(trip.arrivalTime)}</div>
                          <div>{trip.bus.registrationNumber}</div>
                          <div>{trip.driver.name}</div>
                          <div>{formatCurrency(trip.basePrice * trip.bookedSeats)}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Route Schedule</CardTitle>
                  <CardDescription>Regular schedule for this route</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Schedule content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Route Analytics</CardTitle>
                  <CardDescription>Detailed analytics for this route</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Analytics content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

