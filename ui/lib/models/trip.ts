import { z } from "zod"

// Trip status enum
export enum TripStatus {
  SCHEDULED = "Scheduled",
  ACTIVE = "Active",
  COMPLETED = "Completed",
  CANCELLED = "Cancelled",
  DELAYED = "Delayed",
}

// Trip schema for validation
export const tripSchema = z.object({
  id: z.string().optional(),
  routeId: z.string(),
  busId: z.string(),
  driverId: z.string(),
  conductorId: z.string().optional(),
  departureDate: z.date(),
  departureTime: z.string(),
  arrivalDate: z.date(),
  arrivalTime: z.string(),
  status: z.nativeEnum(TripStatus).default(TripStatus.SCHEDULED),
  capacity: z.number().min(1, "Capacity must be at least 1"),
  bookedSeats: z.number().default(0),
  basePrice: z.number().min(0, "Base price must be at least 0"),
  notes: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

// Trip type
export type Trip = z.infer<typeof tripSchema>

// Trip with ID type (for database records)
export type TripWithId = Trip & { id: string }

// Trip with related data
export type TripWithRelations = TripWithId & {
  route: {
    id: string
    name: string
    origin: string
    destination: string
  }
  bus: {
    id: string
    registrationNumber: string
    model: string
  }
  driver: {
    id: string
    name: string
  }
  conductor?: {
    id: string
    name: string
  }
}

