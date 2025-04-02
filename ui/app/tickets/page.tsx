import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideFilter, LucideSearch, LucideTicket } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function TicketsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Ticket Management</h1>
              <p className="text-muted-foreground">Create, issue, and manage tickets for your bus trips</p>
            </div>
            <Link href="/tickets/new">
              <Button>
                <LucideTicket className="mr-2 h-4 w-4" />
                Create New Ticket
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tickets by ID, passenger, or trip..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <LucideFilter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Tickets</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="used">Used</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Tickets</CardTitle>
                  <CardDescription>View and manage all your tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Ticket ID</div>
                      <div>Passenger</div>
                      <div className="col-span-2">Trip</div>
                      <div>Date</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        id: "TKT-5678",
                        passenger: "John Doe",
                        trip: "New York to Boston (TRIP-1234)",
                        date: "Today, 09:00 AM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5679",
                        passenger: "Jane Smith",
                        trip: "Boston to Washington DC (TRIP-1235)",
                        date: "Today, 10:30 AM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5680",
                        passenger: "Robert Johnson",
                        trip: "New York to Philadelphia (TRIP-1236)",
                        date: "Today, 11:15 AM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5681",
                        passenger: "Emily Davis",
                        trip: "Washington DC to New York (TRIP-1237)",
                        date: "Today, 02:00 PM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5682",
                        passenger: "Michael Wilson",
                        trip: "Philadelphia to Boston (TRIP-1238)",
                        date: "Tomorrow, 08:30 AM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5683",
                        passenger: "Sarah Brown",
                        trip: "Boston to New York (TRIP-1239)",
                        date: "Tomorrow, 09:45 AM",
                        status: "Active",
                      },
                      {
                        id: "TKT-5684",
                        passenger: "David Miller",
                        trip: "New York to Washington DC (TRIP-1230)",
                        date: "Yesterday, 07:00 AM",
                        status: "Used",
                      },
                      {
                        id: "TKT-5685",
                        passenger: "Jennifer Taylor",
                        trip: "Philadelphia to Washington DC (TRIP-1231)",
                        date: "Yesterday, 08:15 AM",
                        status: "Used",
                      },
                    ].map((ticket) => (
                      <div key={ticket.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{ticket.id}</div>
                        <div>{ticket.passenger}</div>
                        <div className="col-span-2">{ticket.trip}</div>
                        <div>{ticket.date}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              ticket.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : ticket.status === "Used"
                                  ? "bg-gray-100 text-gray-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {ticket.status}
                          </span>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <Link href={`/tickets/${ticket.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            {ticket.status === "Active" && (
                              <Link href={`/tickets/${ticket.id}/edit`}>
                                <Button variant="outline" size="sm">
                                  Edit
                                </Button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Tickets</CardTitle>
                  <CardDescription>View and manage currently active tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Active tickets content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="used" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Used Tickets</CardTitle>
                  <CardDescription>View history of used tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Used tickets content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cancelled" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Cancelled Tickets</CardTitle>
                  <CardDescription>View history of cancelled tickets</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Cancelled tickets content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

