import { type NextRequest, NextResponse } from "next/server"
import { getRoutePerformanceMetrics } from "@/lib/db/routes"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const routeId = params.id
    const metrics = await getRoutePerformanceMetrics(routeId)

    if (!metrics) {
      return NextResponse.json({ error: "No performance metrics found for this route" }, { status: 404 })
    }

    return NextResponse.json(metrics)
  } catch (error) {
    console.error("Error fetching route performance metrics:", error)
    return NextResponse.json({ error: "Failed to fetch route performance metrics" }, { status: 500 })
  }
}

