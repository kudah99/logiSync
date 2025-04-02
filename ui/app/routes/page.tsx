"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideFilter, LucidePlus, LucideRoute, LucideSearch } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import type { RouteWithId } from "@/lib/models/route"
import { formatPercentage } from "@/lib/utils"

type RouteStatistics = {
  totalRoutes: number
  activeRoutes: number
  seasonalRoutes: number
  inactiveRoutes: number
  mostPopularRoute: {
    id: string
    name: string
    code: string
    origin: string
    destination: string
    occupancyRate: number
  } | null
  averageOccupancy: number
}

export default function RoutesPage() {
  const [routes, setRoutes] = useState<RouteWithId[]>([])
  const [statistics, setStatistics] = useState<RouteStatistics | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)

        // Fetch routes
        const routesResponse = await fetch("/api/routes")
        if (!routesResponse.ok) {
          throw new Error("Failed to fetch routes")
        }
        const routesData = await routesResponse.json()
        setRoutes(routesData)

        // Fetch statistics
        const statsResponse = await fetch("/api/routes?stats=true")
        if (!statsResponse.ok) {
          throw new Error("Failed to fetch route statistics")
        }
        const statsData = await statsResponse.json()
        setStatistics(statsData)

        setIsLoading(false)
      } catch (err) {
        console.error("Error fetching data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // Filter routes based on search term
  const filteredRoutes = routes.filter(
    (route) =>
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.id.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Route Management</h1>
              <p className="text-muted-foreground">Create, manage, and optimize your bus routes</p>
            </div>
            <Link href="/routes/new">
              <Button>
                <LucidePlus className="mr-2 h-4 w-4" />
                Add New Route
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search routes by name, origin, or destination..."
                className="w-full pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
                <CardTitle className="text-sm font-medium">Total Routes</CardTitle>
                <LucideRoute className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{isLoading ? "Loading..." : statistics?.totalRoutes || 0}</div>
                <p className="text-xs text-muted-foreground">
                  {isLoading ? "" : `${statistics?.activeRoutes || 0} active routes`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Routes</CardTitle>
                <LucideRoute className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{isLoading ? "Loading..." : statistics?.activeRoutes || 0}</div>
                <p className="text-xs text-muted-foreground">
                  {isLoading
                    ? ""
                    : `${statistics?.totalRoutes ? ((statistics.activeRoutes / statistics.totalRoutes) * 100).toFixed(0) : 0}% of total routes`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Most Popular</CardTitle>
                <LucideRoute className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? "Loading..." : statistics?.mostPopularRoute?.code || "N/A"}
                </div>
                <p className="text-xs text-muted-foreground">
                  {isLoading
                    ? ""
                    : statistics?.mostPopularRoute
                      ? `${statistics.mostPopularRoute.origin} to ${statistics.mostPopularRoute.destination}`
                      : "No data available"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Occupancy</CardTitle>
                <LucideRoute className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? "Loading..." : statistics ? formatPercentage(statistics.averageOccupancy) : "N/A"}
                </div>
                <p className="text-xs text-muted-foreground">Across all active routes</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Routes</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="profitable">Most Profitable</TabsTrigger>
              <TabsTrigger value="seasonal">Seasonal</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Routes</CardTitle>
                  <CardDescription>View and manage all your bus routes</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center items-center h-40">
                      <p>Loading routes...</p>
                    </div>
                  ) : error ? (
                    <div className="flex justify-center items-center h-40">
                      <p className="text-red-500">{error}</p>
                    </div>
                  ) : filteredRoutes.length === 0 ? (
                    <div className="flex justify-center items-center h-40">
                      <p>No routes found. {searchTerm && "Try a different search term."}</p>
                    </div>
                  ) : (
                    <div className="rounded-md border">
                      <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                        <div>Route ID</div>
                        <div>Name</div>
                        <div>Origin</div>
                        <div>Destination</div>
                        <div>Distance</div>
                        <div>Status</div>
                        <div>Actions</div>
                      </div>
                      {filteredRoutes.map((route) => (
                        <div key={route.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                          <div className="font-medium">{route.id}</div>
                          <div>{route.name}</div>
                          <div>{route.origin}</div>
                          <div>{route.destination}</div>
                          <div>
                            {route.distance} {route.distanceUnit}
                          </div>
                          <div>
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
                          <div>
                            <div className="flex space-x-2">
                              <Link href={`/routes/${route.id}`}>
                                <Button variant="outline" size="sm">
                                  View
                                </Button>
                              </Link>
                              <Link href={`/routes/${route.id}/edit`}>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="popular" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Routes</CardTitle>
                  <CardDescription>Routes with the highest passenger volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Popular routes content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profitable" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Most Profitable Routes</CardTitle>
                  <CardDescription>Routes with the highest revenue and profit margin</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Profitable routes content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="seasonal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Routes</CardTitle>
                  <CardDescription>Routes that operate during specific seasons</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Seasonal routes content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

