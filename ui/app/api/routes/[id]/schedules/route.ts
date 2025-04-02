import { type NextRequest, NextResponse } from "next/server"
import { getRouteSchedulesByRouteId } from "@/lib/db/routes"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const routeId = params.id
    const schedules = await getRouteSchedulesByRouteId(routeId)

    if (!schedules || schedules.length === 0) {
      return NextResponse.json({ error: "No schedules found for this route" }, { status: 404 })
    }

    return NextResponse.json(schedules)
  } catch (error) {
    console.error("Error fetching route schedules:", error)
    return NextResponse.json({ error: "Failed to fetch route schedules" }, { status: 500 })
  }
}

