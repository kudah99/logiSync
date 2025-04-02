import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideArrowLeft, LucideEdit, LucideMapPin, LucideUser, LucideWrench } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"

export default function BusDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const busId = params.id

  // Mock data for the example
  const busData = {
    id: busId,
    registration: "XYZ-1234",
    model: "Mercedes-Benz Tourismo",
    manufacturer: "Mercedes-Benz",
    year: "2021",
    capacity: "52 seats",
    status: "Active",
    fuelType: "Diesel",
    mileage: "45,678 km",
    lastMaintenance: "2023-10-15",
    nextMaintenance: "2024-04-15",
    assignedDriver: "John Smith",
    features: ["WiFi", "USB Charging", "Air Conditioning", "Restroom", "Entertainment System"],
    location: "New York City Bus Terminal",
    purchaseDate: "2021-05-10",
    purchasePrice: "$320,000",
    insuranceExpiry: "2024-05-10",
    licensePlate: "BUS-1234",
  }

  // Mock maintenance history
  const maintenanceHistory = [
    {
      id: "MNT-001",
      date: "2023-10-15",
      type: "Regular Service",
      description: "Oil change, filter replacement, brake inspection",
      cost: "$850",
      technician: "Mike Johnson",
    },
    {
      id: "MNT-002",
      date: "2023-07-22",
      type: "Tire Replacement",
      description: "Replaced all 6 tires",
      cost: "$3,200",
      technician: "Robert Davis",
    },
    {
      id: "MNT-003",
      date: "2023-04-05",
      type: "Regular Service",
      description: "Oil change, filter replacement, fluid check",
      cost: "$750",
      technician: "Mike Johnson",
    },
    {
      id: "MNT-004",
      date: "2023-01-18",
      type: "Engine Repair",
      description: "Fixed minor engine issue, replaced fan belt",
      cost: "$1,250",
      technician: "Sarah Williams",
    },
  ]

  // Mock trip history
  const tripHistory = [
    {
      id: "TRIP-1234",
      route: "New York to Boston",
      date: "2023-11-10",
      driver: "John Smith",
      distance: "350 km",
      passengers: "48/52",
      revenue: "$2,400",
    },
    {
      id: "TRIP-1235",
      route: "Boston to New York",
      date: "2023-11-11",
      driver: "John Smith",
      distance: "350 km",
      passengers: "50/52",
      revenue: "$2,500",
    },
    {
      id: "TRIP-1236",
      route: "New York to Washington DC",
      date: "2023-11-12",
      driver: "Emily Davis",
      distance: "380 km",
      passengers: "45/52",
      revenue: "$2,700",
    },
    {
      id: "TRIP-1237",
      route: "Washington DC to New York",
      date: "2023-11-13",
      driver: "Emily Davis",
      distance: "380 km",
      passengers: "47/52",
      revenue: "$2,820",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/buses">
                <Button variant="outline" size="icon">
                  <LucideArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Bus Details: {busData.id}</h1>
                <p className="text-muted-foreground">
                  {busData.model} • {busData.registration}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/buses/${busId}/maintenance/new`}>
                <Button variant="outline">
                  <LucideWrench className="mr-2 h-4 w-4" />
                  Schedule Maintenance
                </Button>
              </Link>
              <Link href={`/buses/${busId}/edit`}>
                <Button>
                  <LucideEdit className="mr-2 h-4 w-4" />
                  Edit Bus
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Bus Information</CardTitle>
                <CardDescription>Detailed information about this bus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Status</span>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {busData.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Registration</span>
                    <span>{busData.registration}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Model</span>
                    <span>{busData.model}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Manufacturer</span>
                    <span>{busData.manufacturer}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Year</span>
                    <span>{busData.year}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Capacity</span>
                    <span>{busData.capacity}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Fuel Type</span>
                    <span>{busData.fuelType}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Mileage</span>
                    <span>{busData.mileage}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">License Plate</span>
                    <span>{busData.licensePlate}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Purchase Date</span>
                    <span>{busData.purchaseDate}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Purchase Price</span>
                    <span>{busData.purchasePrice}</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="font-medium">Insurance Expiry</span>
                    <span>{busData.insuranceExpiry}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Current Status</CardTitle>
                <CardDescription>Current status and assignment information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <LucideUser className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Assigned Driver</h3>
                        <p className="text-sm">{busData.assignedDriver}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <LucideMapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Current Location</h3>
                        <p className="text-sm">{busData.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2">
                        <LucideWrench className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Maintenance Status</h3>
                        <p className="text-sm">Last: {busData.lastMaintenance}</p>
                        <p className="text-sm">Next: {busData.nextMaintenance}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-2 text-sm font-medium">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {busData.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="trips" className="space-y-4">
            <TabsList>
              <TabsTrigger value="trips">Trip History</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance History</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="trips" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trip History</CardTitle>
                  <CardDescription>Recent trips made by this bus</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Trip ID</div>
                      <div className="col-span-2">Route</div>
                      <div>Date</div>
                      <div>Driver</div>
                      <div>Passengers</div>
                      <div>Revenue</div>
                    </div>
                    {tripHistory.map((trip) => (
                      <div key={trip.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{trip.id}</div>
                        <div className="col-span-2">{trip.route}</div>
                        <div>{trip.date}</div>
                        <div>{trip.driver}</div>
                        <div>{trip.passengers}</div>
                        <div>{trip.revenue}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="maintenance" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Maintenance History</CardTitle>
                    <CardDescription>Record of all maintenance activities</CardDescription>
                  </div>
                  <Link href={`/buses/${busId}/maintenance/new`}>
                    <Button size="sm">
                      <LucideWrench className="mr-2 h-4 w-4" />
                      Add Maintenance
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
                      <div>ID</div>
                      <div>Date</div>
                      <div>Type</div>
                      <div className="col-span-2">Description</div>
                      <div>Cost</div>
                    </div>
                    {maintenanceHistory.map((maintenance) => (
                      <div
                        key={maintenance.id}
                        className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 items-center"
                      >
                        <div className="font-medium">{maintenance.id}</div>
                        <div>{maintenance.date}</div>
                        <div>{maintenance.type}</div>
                        <div className="col-span-2">{maintenance.description}</div>
                        <div>{maintenance.cost}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="expenses" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Expenses</CardTitle>
                  <CardDescription>All expenses related to this bus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Expenses content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Registration, insurance, and other documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Documents content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

