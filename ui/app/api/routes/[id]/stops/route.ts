import { type NextRequest, NextResponse } from "next/server"
import { getRouteStopsByRouteId } from "@/lib/db/routes"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const routeId = params.id
    const stops = await getRouteStopsByRouteId(routeId)

    if (!stops || stops.length === 0) {
      return NextResponse.json({ error: "No stops found for this route" }, { status: 404 })
    }

    return NextResponse.json(stops)
  } catch (error) {
    console.error("Error fetching route stops:", error)
    return NextResponse.json({ error: "Failed to fetch route stops" }, { status: 500 })
  }
}

