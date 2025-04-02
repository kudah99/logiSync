import { type NextRequest, NextResponse } from "next/server"
import { getAllRoutes, getRouteById, getRouteStatistics } from "@/lib/db/routes"

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get("id")
    const stats = url.searchParams.get("stats")

    if (stats === "true") {
      const statistics = await getRouteStatistics()
      return NextResponse.json(statistics)
    }

    if (id) {
      const route = await getRouteById(id)
      if (!route) {
        return NextResponse.json({ error: "Route not found" }, { status: 404 })
      }
      return NextResponse.json(route)
    }

    const routes = await getAllRoutes()
    return NextResponse.json(routes)
  } catch (error) {
    console.error("Error fetching routes:", error)
    return NextResponse.json({ error: "Failed to fetch routes" }, { status: 500 })
  }
}

