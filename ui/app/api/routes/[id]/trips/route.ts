import { type NextRequest, NextResponse } from "next/server"
import { getTripsByRouteIdWithRelations } from "@/lib/db/trips"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const routeId = params.id
    const trips = await getTripsByRouteIdWithRelations(routeId)

    if (!trips || trips.length === 0) {
      return NextResponse.json({ error: "No trips found for this route" }, { status: 404 })
    }

    return NextResponse.json(trips)
  } catch (error) {
    console.error("Error fetching route trips:", error)
    return NextResponse.json({ error: "Failed to fetch route trips" }, { status: 500 })
  }
}

