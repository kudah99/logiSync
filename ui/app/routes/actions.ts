"use server"

import { createRoute, deleteRoute, updateRoute } from "@/lib/db/routes"
import { type Route, type RouteStatus, routeSchema } from "@/lib/models/route"
import { revalidatePath } from "next/cache"

// Create a new route
export async function createRouteAction(formData: FormData) {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const code = formData.get("code") as string
    const origin = formData.get("origin") as string
    const originCode = formData.get("originCode") as string
    const destination = formData.get("destination") as string
    const destinationCode = formData.get("destinationCode") as string
    const distance = Number.parseFloat(formData.get("distance") as string)
    const distanceUnit = formData.get("distanceUnit") as "km" | "miles"
    const duration = Number.parseInt(formData.get("duration") as string)
    const durationUnit = formData.get("durationUnit") as "minutes" | "hours"
    const status = formData.get("status") as RouteStatus
    const type = formData.get("type") as string
    const frequency = formData.get("frequency") as string
    const firstDeparture = formData.get("firstDeparture") as string
    const lastDeparture = formData.get("lastDeparture") as string
    const basePrice = Number.parseFloat(formData.get("basePrice") as string)
    const description = formData.get("description") as string

    // Create route object
    const routeData: Route = {
      name,
      code,
      origin,
      originCode,
      destination,
      destinationCode,
      distance,
      distanceUnit,
      duration,
      durationUnit,
      status,
      type,
      frequency,
      firstDeparture,
      lastDeparture,
      basePrice,
      description,
    }

    // Validate route data
    const validatedData = routeSchema.parse(routeData)

    // Create route in database
    const newRoute = await createRoute(validatedData)

    // Revalidate routes page
    revalidatePath("/routes")

    return { success: true, route: newRoute }
  } catch (error) {
    console.error("Error creating route:", error)
    return { success: false, error: "Failed to create route" }
  }
}

// Update an existing route
export async function updateRouteAction(id: string, formData: FormData) {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const code = formData.get("code") as string
    const origin = formData.get("origin") as string
    const originCode = formData.get("originCode") as string
    const destination = formData.get("destination") as string
    const destinationCode = formData.get("destinationCode") as string
    const distance = Number.parseFloat(formData.get("distance") as string)
    const distanceUnit = formData.get("distanceUnit") as "km" | "miles"
    const duration = Number.parseInt(formData.get("duration") as string)
    const durationUnit = formData.get("durationUnit") as "minutes" | "hours"
    const status = formData.get("status") as RouteStatus
    const type = formData.get("type") as string
    const frequency = formData.get("frequency") as string
    const firstDeparture = formData.get("firstDeparture") as string
    const lastDeparture = formData.get("lastDeparture") as string
    const basePrice = Number.parseFloat(formData.get("basePrice") as string)
    const description = formData.get("description") as string

    // Create route object
    const routeData: Partial<Route> = {
      name,
      code,
      origin,
      originCode,
      destination,
      destinationCode,
      distance,
      distanceUnit,
      duration,
      durationUnit,
      status,
      type,
      frequency,
      firstDeparture,
      lastDeparture,
      basePrice,
      description,
    }

    // Update route in database
    const updatedRoute = await updateRoute(id, routeData)

    if (!updatedRoute) {
      return { success: false, error: "Route not found" }
    }

    // Revalidate routes page and route detail page
    revalidatePath("/routes")
    revalidatePath(`/routes/${id}`)

    return { success: true, route: updatedRoute }
  } catch (error) {
    console.error("Error updating route:", error)
    return { success: false, error: "Failed to update route" }
  }
}

// Delete a route
export async function deleteRouteAction(id: string) {
  try {
    const success = await deleteRoute(id)

    if (!success) {
      return { success: false, error: "Route not found" }
    }

    // Revalidate routes page
    revalidatePath("/routes")

    return { success: true }
  } catch (error) {
    console.error("Error deleting route:", error)
    return { success: false, error: "Failed to delete route" }
  }
}

