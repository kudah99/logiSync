import { z } from "zod"

// Route status enum
export enum RouteStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  SEASONAL = "Seasonal",
  DISCONTINUED = "Discontinued",
}

// Route type enum
export enum RouteType {
  EXPRESS = "Express",
  LOCAL = "Local",
  SHUTTLE = "Shuttle",
  CHARTER = "Charter",
}

// Route frequency enum
export enum RouteFrequency {
  HOURLY = "Hourly",
  DAILY = "Daily",
  WEEKLY = "Weekly",
  BIWEEKLY = "Bi-Weekly",
  MONTHLY = "Monthly",
  CUSTOM = "Custom",
}

// Route schema for validation
export const routeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  code: z.string().min(2, "Code must be at least 2 characters"),
  origin: z.string().min(2, "Origin must be at least 2 characters"),
  originCode: z.string().min(2, "Origin code must be at least 2 characters"),
  destination: z.string().min(2, "Destination must be at least 2 characters"),
  destinationCode: z.string().min(2, "Destination code must be at least 2 characters"),
  distance: z.number().min(1, "Distance must be at least 1"),
  distanceUnit: z.enum(["km", "miles"]).default("km"),
  duration: z.number().min(1, "Duration must be at least 1"),
  durationUnit: z.enum(["minutes", "hours"]).default("minutes"),
  status: z.nativeEnum(RouteStatus).default(RouteStatus.ACTIVE),
  type: z.nativeEnum(RouteType).default(RouteType.EXPRESS),
  frequency: z.nativeEnum(RouteFrequency).default(RouteFrequency.DAILY),
  firstDeparture: z.string().optional(),
  lastDeparture: z.string().optional(),
  basePrice: z.number().min(0, "Base price must be at least 0"),
  description: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

// Route type
export type Route = z.infer<typeof routeSchema>

// Route with ID type (for database records)
export type RouteWithId = Route & { id: string }

// Route stop schema
export const routeStopSchema = z.object({
  id: z.string().optional(),
  routeId: z.string(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  code: z.string().min(2, "Code must be at least 2 characters"),
  address: z.string().min(2, "Address must be at least 2 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  country: z.string().min(2, "Country must be at least 2 characters"),
  zipCode: z.string().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  arrivalTime: z.string().optional(),
  departureTime: z.string().optional(),
  waitTime: z.number().optional(),
  stopNumber: z.number().min(1, "Stop number must be at least 1"),
  isOrigin: z.boolean().default(false),
  isDestination: z.boolean().default(false),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

// Route stop type
export type RouteStop = z.infer<typeof routeStopSchema>

// Route stop with ID type (for database records)
export type RouteStopWithId = RouteStop & { id: string }

// Route schedule schema
export const routeScheduleSchema = z.object({
  id: z.string().optional(),
  routeId: z.string(),
  departureTime: z.string(),
  arrivalTime: z.string(),
  daysOfWeek: z.array(z.number().min(0).max(6)),
  isActive: z.boolean().default(true),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

// Route schedule type
export type RouteSchedule = z.infer<typeof routeScheduleSchema>

// Route schedule with ID type (for database records)
export type RouteScheduleWithId = RouteSchedule & { id: string }

// Route performance metrics type
export type RoutePerformanceMetrics = {
  routeId: string
  occupancyRate: number
  onTimePerformance: number
  averageDelay: number
  customerSatisfaction: number
  cancellationRate: number
  profitMargin: number
  monthlyTrips: number
  monthlyRevenue: number
  popularDays: string[]
  peakHours: string[]
}

