import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideArrowDown, LucideArrowUp, LucideBarChart, LucideDownload, LucideFileText } from "lucide-react"
import DashboardHeader from "@/components/dashboard-header"

export default function AccountingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Accounting</h1>
              <p className="text-muted-foreground">Manage your finances, track revenue, and generate reports</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">
                <LucideFileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button>
                <LucideDownload className="mr-2 h-4 w-4" />
                Export Data
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <LucideBarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
                <LucideBarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$32,450.75</div>
                <p className="text-xs text-muted-foreground">+12.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
                <LucideArrowUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,781.14</div>
                <p className="text-xs text-muted-foreground">+35.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
                <LucideArrowUp className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.3%</div>
                <p className="text-xs text-muted-foreground">+5.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="expenses">Expenses</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                  <CardDescription>View your financial performance over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="h-full w-full rounded-md border p-4">
                    <div className="flex h-full items-center justify-center">
                      <p className="text-sm text-muted-foreground">Financial overview chart will be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                    <CardDescription>Your most recent financial transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: "TRX-001",
                          description: "Ticket Sales - NYC to Boston",
                          amount: "+$1,245.00",
                          date: "Today, 10:30 AM",
                          type: "income",
                        },
                        {
                          id: "TRX-002",
                          description: "Fuel Expenses",
                          amount: "-$850.75",
                          date: "Today, 09:15 AM",
                          type: "expense",
                        },
                        {
                          id: "TRX-003",
                          description: "Driver Salary - John Smith",
                          amount: "-$320.00",
                          date: "Yesterday, 04:30 PM",
                          type: "expense",
                        },
                        {
                          id: "TRX-004",
                          description: "Ticket Sales - Boston to DC",
                          amount: "+$980.50",
                          date: "Yesterday, 02:45 PM",
                          type: "income",
                        },
                        {
                          id: "TRX-005",
                          description: "Vehicle Maintenance",
                          amount: "-$450.25",
                          date: "Yesterday, 11:20 AM",
                          type: "expense",
                        },
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`rounded-full p-2 ${
                                transaction.type === "income" ? "bg-green-100" : "bg-red-100"
                              }`}
                            >
                              {transaction.type === "income" ? (
                                <LucideArrowUp className="h-4 w-4 text-green-600" />
                              ) : (
                                <LucideArrowDown className="h-4 w-4 text-red-600" />
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium">{transaction.description}</p>
                              <p className="text-xs text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          <p
                            className={`text-sm font-medium ${
                              transaction.type === "income" ? "text-green-600" : "text-red-600"
                            }`}
                          >
                            {transaction.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Revenue Breakdown</CardTitle>
                    <CardDescription>Revenue by route and service type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] w-full rounded-md border p-4">
                      <div className="flex h-full items-center justify-center">
                        <p className="text-sm text-muted-foreground">Revenue breakdown chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="revenue" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Details</CardTitle>
                  <CardDescription>Detailed breakdown of your revenue sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Revenue details content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="expenses" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Expense Details</CardTitle>
                  <CardDescription>Detailed breakdown of your expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Expense details content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="reports" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Reports</CardTitle>
                  <CardDescription>Generate and download financial reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Financial reports content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

