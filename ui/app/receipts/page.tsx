import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideFilter, LucidePrinter, LucideReceipt, LucideSearch, LucideSend } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"

export default function ReceiptsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Receipt Management</h1>
              <p className="text-muted-foreground">Generate, send, and manage receipts for your customers</p>
            </div>
            <Link href="/receipts/new">
              <Button>
                <LucideReceipt className="mr-2 h-4 w-4" />
                Generate New Receipt
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search receipts by ID, customer, or amount..."
                className="w-full pl-8"
              />
            </div>
            <Button variant="outline" size="icon">
              <LucideFilter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Receipts</TabsTrigger>
              <TabsTrigger value="digital">Digital</TabsTrigger>
              <TabsTrigger value="printed">Printed</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Receipts</CardTitle>
                  <CardDescription>View and manage all your receipts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Receipt ID</div>
                      <div>Customer</div>
                      <div>Ticket/Trip</div>
                      <div>Date</div>
                      <div>Amount</div>
                      <div>Type</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        id: "RCT-9012",
                        customer: "John Doe",
                        ticket: "TKT-5678 (NYC to Boston)",
                        date: "Today, 10:35 AM",
                        amount: "$45.00",
                        type: "Digital",
                      },
                      {
                        id: "RCT-9013",
                        customer: "Jane Smith",
                        ticket: "TKT-5679 (Boston to DC)",
                        date: "Today, 10:40 AM",
                        amount: "$65.00",
                        type: "Digital",
                      },
                      {
                        id: "RCT-9014",
                        customer: "Robert Johnson",
                        ticket: "TKT-5680 (NYC to Philadelphia)",
                        date: "Today, 11:20 AM",
                        amount: "$35.00",
                        type: "Printed",
                      },
                      {
                        id: "RCT-9015",
                        customer: "Emily Davis",
                        ticket: "TKT-5681 (DC to NYC)",
                        date: "Today, 02:05 PM",
                        amount: "$55.00",
                        type: "Digital",
                      },
                      {
                        id: "RCT-9016",
                        customer: "Michael Wilson",
                        ticket: "TKT-5682 (Philadelphia to Boston)",
                        date: "Yesterday, 09:15 AM",
                        amount: "$60.00",
                        type: "Digital",
                      },
                      {
                        id: "RCT-9017",
                        customer: "Sarah Brown",
                        ticket: "TKT-5683 (Boston to NYC)",
                        date: "Yesterday, 10:30 AM",
                        amount: "$45.00",
                        type: "Printed",
                      },
                      {
                        id: "RCT-9018",
                        customer: "David Miller",
                        ticket: "TKT-5684 (NYC to DC)",
                        date: "Yesterday, 01:45 PM",
                        amount: "$70.00",
                        type: "Digital",
                      },
                      {
                        id: "RCT-9019",
                        customer: "Jennifer Taylor",
                        ticket: "TKT-5685 (Philadelphia to DC)",
                        date: "Yesterday, 03:20 PM",
                        amount: "$50.00",
                        type: "Printed",
                      },
                    ].map((receipt) => (
                      <div key={receipt.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{receipt.id}</div>
                        <div>{receipt.customer}</div>
                        <div>{receipt.ticket}</div>
                        <div>{receipt.date}</div>
                        <div>{receipt.amount}</div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              receipt.type === "Digital" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {receipt.type}
                          </span>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            <Link href={`/receipts/${receipt.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            {receipt.type === "Digital" ? (
                              <Button variant="outline" size="sm">
                                <LucideSend className="h-3 w-3 mr-1" />
                                Resend
                              </Button>
                            ) : (
                              <Button variant="outline" size="sm">
                                <LucidePrinter className="h-3 w-3 mr-1" />
                                Print
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="digital" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Digital Receipts</CardTitle>
                  <CardDescription>View and manage digital receipts sent via email or SMS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Digital receipts content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="printed" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Printed Receipts</CardTitle>
                  <CardDescription>View and manage printed physical receipts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Printed receipts content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

