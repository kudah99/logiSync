import { Badge } from "@/components/ui/badge"
import { LucideArrowRight } from "lucide-react"

export default function TripsList() {
  const trips = [
    {
      id: "TRIP-1234",
      from: "New York",
      to: "Boston",
      departure: "09:00 AM",
      arrival: "01:30 PM",
      status: "On Time",
      occupancy: "85%",
    },
    {
      id: "TRIP-1235",
      from: "Boston",
      to: "Washington DC",
      departure: "10:30 AM",
      arrival: "04:45 PM",
      status: "Delayed",
      occupancy: "72%",
    },
    {
      id: "TRIP-1236",
      from: "New York",
      to: "Philadelphia",
      departure: "11:15 AM",
      arrival: "01:45 PM",
      status: "On Time",
      occupancy: "90%",
    },
    {
      id: "TRIP-1237",
      from: "Washington DC",
      to: "New York",
      departure: "02:00 PM",
      arrival: "06:30 PM",
      status: "On Time",
      occupancy: "65%",
    },
  ]

  return (
    <div className="space-y-4">
      {trips.map((trip) => (
        <div key={trip.id} className="flex flex-col space-y-2 rounded-md border p-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="font-medium">{trip.id}</div>
            <Badge
              variant={trip.status === "On Time" ? "outline" : "destructive"}
              className={
                trip.status === "On Time" ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700" : ""
              }
            >
              {trip.status}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <div className="font-medium">{trip.from}</div>
              <LucideArrowRight className="h-3 w-3" />
              <div className="font-medium">{trip.to}</div>
            </div>
            <div className="text-muted-foreground">
              {trip.departure} - {trip.arrival}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs">
            <div className="text-muted-foreground">Occupancy</div>
            <div className="font-medium">{trip.occupancy}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

