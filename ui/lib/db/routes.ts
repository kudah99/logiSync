import {
  type Route,
  type RoutePerformanceMetrics,
  type RouteSchedule,
  RouteStatus,
  type RouteStop,
  type RouteWithId,
} from "../models/route"
import { generateId } from "../utils"

// Mock database for routes
let routes: RouteWithId[] = [
  {
    id: "RT-001",
    name: "NYC-BOS",
    code: "NYC-BOS",
    origin: "New York City",
    originCode: "NYC",
    destination: "Boston",
    destinationCode: "BOS",
    distance: 350,
    distanceUnit: "km",
    duration: 270, // 4.5 hours in minutes
    durationUnit: "minutes",
    status: RouteStatus.ACTIVE,
    type: "Express",
    frequency: "Hourly",
    firstDeparture: "06:00",
    lastDeparture: "22:00",
    basePrice: 45,
    description: "Direct express service between New York City and Boston with comfortable seating and amenities.",
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "RT-002",
    name: "BOS-NYC",
    code: "BOS-NYC",
    origin: "Boston",
    originCode: "BOS",
    destination: "New York City",
    destinationCode: "NYC",
    distance: 350,
    distanceUnit: "km",
    duration: 270, // 4.5 hours in minutes
    durationUnit: "minutes",
    status: RouteStatus.ACTIVE,
    type: "Express",
    frequency: "Hourly",
    firstDeparture: "06:00",
    lastDeparture: "22:00",
    basePrice: 45,
    description: "Direct express service between Boston and New York City with comfortable seating and amenities.",
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "RT-003",
    name: "NYC-DC",
    code: "NYC-DC",
    origin: "New York City",
    originCode: "NYC",
    destination: "Washington DC",
    destinationCode: "DC",
    distance: 380,
    distanceUnit: "km",
    duration: 300, // 5 hours in minutes
    durationUnit: "minutes",
    status: RouteStatus.ACTIVE,
    type: "Express",
    frequency: "Hourly",
    firstDeparture: "06:00",
    lastDeparture: "22:00",
    basePrice: 50,
    description:
      "Direct express service between New York City and Washington DC with comfortable seating and amenities.",
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
]

// Mock database for route stops
const routeStops: RouteStop[] = [
  {
    id: "STOP-001",
    routeId: "RT-001",
    name: "New York Port Authority Bus Terminal",
    code: "NYPABT",
    address: "625 8th Ave, New York, NY 10018",
    city: "New York",
    state: "NY",
    country: "USA",
    zipCode: "10018",
    latitude: 40.7573,
    longitude: -73.9903,
    arrivalTime: null,
    departureTime: "09:00",
    waitTime: 15,
    stopNumber: 1,
    isOrigin: true,
    isDestination: false,
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "STOP-002",
    routeId: "RT-001",
    name: "Stamford Transportation Center",
    code: "STC",
    address: "30 Station Pl, Stamford, CT 06902",
    city: "Stamford",
    state: "CT",
    country: "USA",
    zipCode: "06902",
    latitude: 41.0465,
    longitude: -73.5418,
    arrivalTime: "10:15",
    departureTime: "10:25",
    waitTime: 10,
    stopNumber: 2,
    isOrigin: false,
    isDestination: false,
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: "STOP-003",
    routeId: "RT-001",
    name: "South Station Bus Terminal",
    code: "SSBT",
    address: "700 Atlantic Ave, Boston, MA 02110",
    city: "Boston",
    state: "MA",
    country: "USA",
    zipCode: "02110",
    latitude: 42.3519,
    longitude: -71.0551,
    arrivalTime: "13:30",
    departureTime: null,
    waitTime: null,
    stopNumber: 3,
    isOrigin: false,
    isDestination: true,
    createdAt: new Date("2022-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
]

// Mock database for route schedules
const routeSchedules: RouteSchedule[] = [
  {
    id: "SCHED-001",
    routeId: "RT-001",
    departureTime: "06:00",
    arrivalTime: "10:30",
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Every day
    isActive: true,
    startDate: new Date("2023-01-01"),
    endDate: null,
    createdAt: new Date("2022-12-15"),
    updatedAt: new Date("2022-12-15"),
  },
  {
    id: "SCHED-002",
    routeId: "RT-001",
    departureTime: "09:00",
    arrivalTime: "13:30",
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Every day
    isActive: true,
    startDate: new Date("2023-01-01"),
    endDate: null,
    createdAt: new Date("2022-12-15"),
    updatedAt: new Date("2022-12-15"),
  },
  {
    id: "SCHED-003",
    routeId: "RT-001",
    departureTime: "12:00",
    arrivalTime: "16:30",
    daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Every day
    isActive: true,
    startDate: new Date("2023-01-01"),
    endDate: null,
    createdAt: new Date("2022-12-15"),
    updatedAt: new Date("2022-12-15"),
  },
]

// Mock performance metrics for routes
const routePerformanceMetrics: Record<string, RoutePerformanceMetrics> = {
  "RT-001": {
    routeId: "RT-001",
    occupancyRate: 85,
    onTimePerformance: 92,
    averageDelay: 8, // minutes
    customerSatisfaction: 4.7,
    cancellationRate: 1.2,
    profitMargin: 32,
    monthlyTrips: 240,
    monthlyRevenue: 245000,
    popularDays: ["Friday", "Sunday"],
    peakHours: ["7-9 AM", "5-7 PM"],
  },
  "RT-002": {
    routeId: "RT-002",
    occupancyRate: 82,
    onTimePerformance: 90,
    averageDelay: 10, // minutes
    customerSatisfaction: 4.5,
    cancellationRate: 1.5,
    profitMargin: 30,
    monthlyTrips: 240,
    monthlyRevenue: 235000,
    popularDays: ["Friday", "Sunday"],
    peakHours: ["7-9 AM", "5-7 PM"],
  },
  "RT-003": {
    routeId: "RT-003",
    occupancyRate: 78,
    onTimePerformance: 88,
    averageDelay: 12, // minutes
    customerSatisfaction: 4.3,
    cancellationRate: 1.8,
    profitMargin: 28,
    monthlyTrips: 180,
    monthlyRevenue: 210000,
    popularDays: ["Friday", "Sunday"],
    peakHours: ["7-9 AM", "5-7 PM"],
  },
}

// CRUD operations for routes

// Get all routes
export async function getAllRoutes(): Promise<RouteWithId[]> {
  return routes
}

// Get route by ID
export async function getRouteById(id: string): Promise<RouteWithId | null> {
  const route = routes.find((r) => r.id === id)
  return route || null
}

// Create a new route
export async function createRoute(route: Route): Promise<RouteWithId> {
  const newRoute: RouteWithId = {
    ...route,
    id: route.id || `RT-${generateId(3)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  routes.push(newRoute)
  return newRoute
}

// Update a route
export async function updateRoute(id: string, route: Partial<Route>): Promise<RouteWithId | null> {
  const index = routes.findIndex((r) => r.id === id)
  if (index === -1) return null

  const updatedRoute: RouteWithId = {
    ...routes[index],
    ...route,
    id,
    updatedAt: new Date(),
  }
  routes[index] = updatedRoute
  return updatedRoute
}

// Delete a route
export async function deleteRoute(id: string): Promise<boolean> {
  const initialLength = routes.length
  routes = routes.filter((r) => r.id !== id)
  return routes.length < initialLength
}

// Get route stops by route ID
export async function getRouteStopsByRouteId(routeId: string): Promise<RouteStop[]> {
  return routeStops.filter((stop) => stop.routeId === routeId).sort((a, b) => a.stopNumber - b.stopNumber)
}

// Get route schedules by route ID
export async function getRouteSchedulesByRouteId(routeId: string): Promise<RouteSchedule[]> {
  return routeSchedules.filter((schedule) => schedule.routeId === routeId)
}

// Get route performance metrics by route ID
export async function getRoutePerformanceMetrics(routeId: string): Promise<RoutePerformanceMetrics | null> {
  return routePerformanceMetrics[routeId] || null
}

// Get route statistics
export async function getRouteStatistics() {
  const totalRoutes = routes.length
  const activeRoutes = routes.filter((r) => r.status === RouteStatus.ACTIVE).length
  const seasonalRoutes = routes.filter((r) => r.status === RouteStatus.SEASONAL).length
  const inactiveRoutes = routes.filter((r) => r.status === RouteStatus.INACTIVE).length

  // Find most popular route based on occupancy rate
  let mostPopularRouteId = ""
  let highestOccupancy = 0

  Object.entries(routePerformanceMetrics).forEach(([routeId, metrics]) => {
    if (metrics.occupancyRate > highestOccupancy) {
      highestOccupancy = metrics.occupancyRate
      mostPopularRouteId = routeId
    }
  })

  const mostPopularRoute = routes.find((r) => r.id === mostPopularRouteId)

  // Calculate average occupancy across all routes
  const totalOccupancy = Object.values(routePerformanceMetrics).reduce((sum, metrics) => sum + metrics.occupancyRate, 0)
  const averageOccupancy = totalOccupancy / Object.keys(routePerformanceMetrics).length

  return {
    totalRoutes,
    activeRoutes,
    seasonalRoutes,
    inactiveRoutes,
    mostPopularRoute: mostPopularRoute
      ? {
          id: mostPopularRoute.id,
          name: mostPopularRoute.name,
          code: mostPopularRoute.code,
          origin: mostPopularRoute.origin,
          destination: mostPopularRoute.destination,
          occupancyRate: routePerformanceMetrics[mostPopularRouteId].occupancyRate,
        }
      : null,
    averageOccupancy,
  }
}

