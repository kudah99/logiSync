import { type Trip, TripStatus, type TripWithId, type TripWithRelations } from "../models/trip"
import { generateId } from "../utils"

// Mock database for trips
let trips: TripWithId[] = [
  {
    id: "TRIP-1234",
    routeId: "RT-001",
    busId: "BUS-001",
    driverId: "EMP-001",
    conductorId: "EMP-003",
    departureDate: new Date("2023-11-10"),
    departureTime: "09:00",
    arrivalDate: new Date("2023-11-10"),
    arrivalTime: "13:30",
    status: TripStatus.COMPLETED,
    capacity: 52,
    bookedSeats: 48,
    basePrice: 45,
    notes: "Regular service",
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2023-11-10"),
  },
  {
    id: "TRIP-1235",
    routeId: "RT-002",
    busId: "BUS-002",
    driverId: "EMP-002",
    conductorId: "EMP-006",
    departureDate: new Date("2023-11-10"),
    departureTime: "10:30",
    arrivalDate: new Date("2023-11-10"),
    arrivalTime: "15:00",
    status: TripStatus.COMPLETED,
    capacity: 48,
    bookedSeats: 42,
    basePrice: 45,
    notes: "Regular service",
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2023-11-10"),
  },
  {
    id: "TRIP-1236",
    routeId: "RT-003",
    busId: "BUS-003",
    driverId: "EMP-007",
    conductorId: null,
    departureDate: new Date("2023-11-10"),
    departureTime: "11:15",
    arrivalDate: new Date("2023-11-10"),
    arrivalTime: "16:15",
    status: TripStatus.COMPLETED,
    capacity: 50,
    bookedSeats: 45,
    basePrice: 50,
    notes: "Regular service",
    createdAt: new Date("2023-10-15"),
    updatedAt: new Date("2023-11-10"),
  },
]

// Mock relations data
const routeRelations = {
  "RT-001": { id: "RT-001", name: "NYC-BOS", origin: "New York City", destination: "Boston" },
  "RT-002": { id: "RT-002", name: "BOS-NYC", origin: "Boston", destination: "New York City" },
  "RT-003": { id: "RT-003", name: "NYC-DC", origin: "New York City", destination: "Washington DC" },
}

const busRelations = {
  "BUS-001": { id: "BUS-001", registrationNumber: "XYZ-1234", model: "Mercedes-Benz Tourismo" },
  "BUS-002": { id: "BUS-002", registrationNumber: "XYZ-1235", model: "Volvo 9700" },
  "BUS-003": { id: "BUS-003", registrationNumber: "XYZ-1236", model: "MAN Lion's Coach" },
}

const employeeRelations = {
  "EMP-001": { id: "EMP-001", name: "John Smith" },
  "EMP-002": { id: "EMP-002", name: "Emily Davis" },
  "EMP-003": { id: "EMP-003", name: "Michael Wilson" },
  "EMP-006": { id: "EMP-006", name: "Jennifer Taylor" },
  "EMP-007": { id: "EMP-007", name: "David Miller" },
}

// CRUD operations for trips

// Get all trips
export async function getAllTrips(): Promise<TripWithId[]> {
  return trips
}

// Get trip by ID
export async function getTripById(id: string): Promise<TripWithId | null> {
  const trip = trips.find((t) => t.id === id)
  return trip || null
}

// Get trip with relations by ID
export async function getTripWithRelationsById(id: string): Promise<TripWithRelations | null> {
  const trip = trips.find((t) => t.id === id)
  if (!trip) return null

  return {
    ...trip,
    route: routeRelations[trip.routeId],
    bus: busRelations[trip.busId],
    driver: employeeRelations[trip.driverId],
    conductor: trip.conductorId ? employeeRelations[trip.conductorId] : undefined,
  }
}

// Get trips by route ID
export async function getTripsByRouteId(routeId: string): Promise<TripWithId[]> {
  return trips.filter((trip) => trip.routeId === routeId)
}

// Get trips by route ID with relations
export async function getTripsByRouteIdWithRelations(routeId: string): Promise<TripWithRelations[]> {
  const routeTrips = trips.filter((trip) => trip.routeId === routeId)

  return routeTrips.map((trip) => ({
    ...trip,
    route: routeRelations[trip.routeId],
    bus: busRelations[trip.busId],
    driver: employeeRelations[trip.driverId],
    conductor: trip.conductorId ? employeeRelations[trip.conductorId] : undefined,
  }))
}

// Create a new trip
export async function createTrip(trip: Trip): Promise<TripWithId> {
  const newTrip: TripWithId = {
    ...trip,
    id: trip.id || `TRIP-${generateId(4)}`,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  trips.push(newTrip)
  return newTrip
}

// Update a trip
export async function updateTrip(id: string, trip: Partial<Trip>): Promise<TripWithId | null> {
  const index = trips.findIndex((t) => t.id === id)
  if (index === -1) return null

  const updatedTrip: TripWithId = {
    ...trips[index],
    ...trip,
    id,
    updatedAt: new Date(),
  }
  trips[index] = updatedTrip
  return updatedTrip
}

// Delete a trip
export async function deleteTrip(id: string): Promise<boolean> {
  const initialLength = trips.length
  trips = trips.filter((t) => t.id !== id)
  return trips.length < initialLength
}

