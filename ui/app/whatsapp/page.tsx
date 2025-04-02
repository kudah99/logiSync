import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideMessageSquare, LucideSettings } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function WhatsAppPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">WhatsApp Integration</h1>
              <p className="text-muted-foreground">
                Manage your WhatsApp chatbot for ticket bookings and customer support
              </p>
            </div>
            <div className="flex space-x-2">
              <Link href="/whatsapp/settings">
                <Button variant="outline">
                  <LucideSettings className="mr-2 h-4 w-4" />
                  Configure Chatbot
                </Button>
              </Link>
              <Link href="/whatsapp/templates">
                <Button>
                  <LucideMessageSquare className="mr-2 h-4 w-4" />
                  Message Templates
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
                <LucideMessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,248</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bookings via WhatsApp</CardTitle>
                <LucideMessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">324</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <LucideMessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">26%</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Chats</CardTitle>
                <LucideMessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">-3 from yesterday</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="conversations">Conversations</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp Performance</CardTitle>
                  <CardDescription>Overview of your WhatsApp chatbot performance</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="h-full w-full rounded-md border p-4">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-muted-foreground">WhatsApp performance chart will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Conversations</CardTitle>
                    <CardDescription>Your most recent WhatsApp conversations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "CHAT-001",
                          customer: "John Doe",
                          phone: "+1 (555) 123-4567",
                          lastMessage: "I'd like to book a ticket from NYC to Boston",
                          time: "10 minutes ago",
                          status: "Active",
                        },
                        {
                          id: "CHAT-002",
                          customer: "Jane Smith",
                          phone: "+1 (555) 987-6543",
                          lastMessage: "What time does the bus depart?",
                          time: "25 minutes ago",
                          status: "Active",
                        },
                        {
                          id: "CHAT-003",
                          customer: "Robert Johnson",
                          phone: "+1 (555) 456-7890",
                          lastMessage: "Thanks for the booking confirmation!",
                          time: "1 hour ago",
                          status: "Closed",
                        },
                        {
                          id: "CHAT-004",
                          customer: "Emily Davis",
                          phone: "+1 (555) 789-0123",
                          lastMessage: "Can I get a refund for my ticket?",
                          time: "2 hours ago",
                          status: "Active",
                        },
                        {
                          id: "CHAT-005",
                          customer: "Michael Wilson",
                          phone: "+1 (555) 321-6540",
                          lastMessage: "Is there WiFi on the bus?",
                          time: "3 hours ago",
                          status: "Closed",
                        },
                      ].map((chat) => (
                        <div key={chat.id} className="flex items-start space-x-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <LucideMessageSquare className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium">{chat.customer}</p>
                              <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  chat.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {chat.status}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">{chat.phone}</p>
                            <p className="text-sm">{chat.lastMessage}</p>
                            <p className="text-xs text-muted-foreground">{chat.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Queries</CardTitle>
                    <CardDescription>Most common customer queries via WhatsApp</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          query: "Booking a ticket",
                          percentage: 35,
                          count: 437,
                        },
                        {
                          query: "Checking trip status",
                          percentage: 25,
                          count: 312,
                        },
                        {
                          query: "Requesting refund",
                          percentage: 15,
                          count: 187,
                        },
                        {
                          query: "Checking bus amenities",
                          percentage: 12,
                          count: 150,
                        },
                        {
                          query: "Changing booking",
                          percentage: 8,
                          count: 100,
                        },
                        {
                          query: "Other queries",
                          percentage: 5,
                          count: 62,
                        },
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{item.query}</p>
                            <p className="text-sm text-muted-foreground">{item.count} queries</p>
                          </div>
                          <div className="h-2 w-full rounded-full bg-muted">
                            <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                          </div>
                          <p className="text-xs text-muted-foreground">{item.percentage}% of total queries</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="conversations" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Conversations</CardTitle>
                  <CardDescription>View and manage all WhatsApp conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Conversations content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="templates" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Message Templates</CardTitle>
                  <CardDescription>Manage your WhatsApp message templates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Templates content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>WhatsApp Analytics</CardTitle>
                  <CardDescription>Detailed analytics for your WhatsApp integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Analytics content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

