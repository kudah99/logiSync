import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideFilter, LucidePlus, LucideSearch, LucideUser, LucideUsers } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EmployeesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Employee Management</h1>
              <p className="text-muted-foreground">Manage your drivers, conductors, and other staff members</p>
            </div>
            <Link href="/employees/new">
              <Button>
                <LucidePlus className="mr-2 h-4 w-4" />
                Add New Employee
              </Button>
            </Link>
          </div>

          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="relative flex-1">
              <LucideSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search employees by name, ID, or role..." className="w-full pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <LucideFilter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
                <LucideUsers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">+3 hired this quarter</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Drivers</CardTitle>
                <LucideUser className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">57% of total staff</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conductors</CardTitle>
                <LucideUser className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">28.5% of total staff</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Admin Staff</CardTitle>
                <LucideUser className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6</div>
                <p className="text-xs text-muted-foreground">14.5% of total staff</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Employees</TabsTrigger>
              <TabsTrigger value="drivers">Drivers</TabsTrigger>
              <TabsTrigger value="conductors">Conductors</TabsTrigger>
              <TabsTrigger value="admin">Admin Staff</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Employees</CardTitle>
                  <CardDescription>View and manage all your employees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Employee ID</div>
                      <div className="col-span-2">Name</div>
                      <div>Role</div>
                      <div>Status</div>
                      <div>Joined</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        id: "EMP-001",
                        name: "John Smith",
                        avatar: "JS",
                        role: "Driver",
                        status: "Active",
                        joined: "Jan 2020",
                      },
                      {
                        id: "EMP-002",
                        name: "Emily Davis",
                        avatar: "ED",
                        role: "Driver",
                        status: "Active",
                        joined: "Mar 2021",
                      },
                      {
                        id: "EMP-003",
                        name: "Michael Wilson",
                        avatar: "MW",
                        role: "Conductor",
                        status: "Active",
                        joined: "Jun 2019",
                      },
                      {
                        id: "EMP-004",
                        name: "Sarah Brown",
                        avatar: "SB",
                        role: "Admin",
                        status: "Active",
                        joined: "Feb 2022",
                      },
                      {
                        id: "EMP-005",
                        name: "Robert Johnson",
                        avatar: "RJ",
                        role: "Driver",
                        status: "On Leave",
                        joined: "Apr 2020",
                      },
                      {
                        id: "EMP-006",
                        name: "Jennifer Taylor",
                        avatar: "JT",
                        role: "Conductor",
                        status: "Active",
                        joined: "Aug 2021",
                      },
                      {
                        id: "EMP-007",
                        name: "David Miller",
                        avatar: "DM",
                        role: "Driver",
                        status: "Active",
                        joined: "Nov 2019",
                      },
                      {
                        id: "EMP-008",
                        name: "Jessica Anderson",
                        avatar: "JA",
                        role: "Admin",
                        status: "Active",
                        joined: "Jul 2022",
                      },
                    ].map((employee) => (
                      <div key={employee.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{employee.id}</div>
                        <div className="col-span-2 flex items-center space-x-3">
                          <Avatar>
                            <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={employee.name} />
                            <AvatarFallback>{employee.avatar}</AvatarFallback>
                          </Avatar>
                          <span>{employee.name}</span>
                        </div>
                        <div>{employee.role}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={`${
                              employee.status === "Active"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                : "bg-yellow-50 text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700"
                            }`}
                          >
                            {employee.status}
                          </Badge>
                        </div>
                        <div>{employee.joined}</div>
                        <div>
                          <div className="flex space-x-2">
                            <Link href={`/employees/${employee.id}`}>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </Link>
                            <Link href={`/employees/${employee.id}/edit`}>
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="drivers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Drivers</CardTitle>
                  <CardDescription>View and manage your bus drivers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Drivers content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="conductors" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Conductors</CardTitle>
                  <CardDescription>View and manage your bus conductors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Conductors content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="admin" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Staff</CardTitle>
                  <CardDescription>View and manage your administrative staff</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Admin staff content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

