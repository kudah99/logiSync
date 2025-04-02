import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LucideArrowLeft, LucideCalendar, LucideEdit, LucideMapPin, LucidePhone, LucideUser } from "lucide-react"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard-header"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function EmployeeDetailsPage({ params }: { params: { id: string } }) {
  // This would normally fetch data based on the ID
  const employeeId = params.id

  // Mock data for the example
  const employeeData = {
    id: employeeId,
    name: "John Smith",
    avatar: "JS",
    role: "Driver",
    status: "Active",
    email: "john.smith@logisync.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, New York, NY 10001",
    dateOfBirth: "1985-05-15",
    joinDate: "2020-01-10",
    licenseNumber: "DL-12345678",
    licenseExpiry: "2025-01-10",
    emergencyContact: "Mary Smith (+1 555-987-6543)",
    department: "Operations",
    manager: "Sarah Brown",
    salary: "$65,000/year",
    bankDetails: "Bank of America - ****4567",
    currentAssignment: "Bus BUS-001 (NYC to Boston route)",
    skills: ["Long Distance Driving", "Customer Service", "First Aid", "Vehicle Maintenance"],
    performance: "Excellent",
    attendance: "98%",
  }

  // Mock trip assignments
  const tripAssignments = [
    {
      id: "TRIP-1234",
      route: "New York to Boston",
      bus: "BUS-001",
      date: "2023-11-10",
      departureTime: "09:00 AM",
      arrivalTime: "01:30 PM",
      status: "Completed",
    },
    {
      id: "TRIP-1235",
      route: "Boston to New York",
      bus: "BUS-001",
      date: "2023-11-11",
      departureTime: "03:00 PM",
      arrivalTime: "07:30 PM",
      status: "Completed",
    },
    {
      id: "TRIP-1240",
      route: "New York to Boston",
      bus: "BUS-001",
      date: "2023-11-12",
      departureTime: "09:00 AM",
      arrivalTime: "01:30 PM",
      status: "Completed",
    },
    {
      id: "TRIP-1245",
      route: "Boston to New York",
      bus: "BUS-001",
      date: "2023-11-13",
      departureTime: "03:00 PM",
      arrivalTime: "07:30 PM",
      status: "Scheduled",
    },
  ]

  // Mock attendance records
  const attendanceRecords = [
    {
      date: "2023-11-10",
      checkIn: "08:15 AM",
      checkOut: "06:45 PM",
      status: "Present",
      hours: "10.5",
    },
    {
      date: "2023-11-11",
      checkIn: "08:10 AM",
      checkOut: "07:00 PM",
      status: "Present",
      hours: "10.8",
    },
    {
      date: "2023-11-12",
      checkIn: "08:20 AM",
      checkOut: "06:30 PM",
      status: "Present",
      hours: "10.2",
    },
    {
      date: "2023-11-13",
      checkIn: "-",
      checkOut: "-",
      status: "Scheduled",
      hours: "-",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 p-6 md:p-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center space-x-4">
              <Link href="/employees">
                <Button variant="outline" size="icon">
                  <LucideArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back</span>
                </Button>
              </Link>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Employee Profile: {employeeData.name}</h1>
                <p className="text-muted-foreground">
                  {employeeData.role} • {employeeData.id}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Link href={`/employees/${employeeId}/schedule`}>
                <Button variant="outline">
                  <LucideCalendar className="mr-2 h-4 w-4" />
                  View Schedule
                </Button>
              </Link>
              <Link href={`/employees/${employeeId}/edit`}>
                <Button>
                  <LucideEdit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Employee Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4 border-b pb-4 mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={`/placeholder.svg?height=96&width=96`} alt={employeeData.name} />
                    <AvatarFallback className="text-2xl">{employeeData.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h2 className="text-xl font-bold">{employeeData.name}</h2>
                    <p className="text-sm text-muted-foreground">{employeeData.role}</p>
                    <Badge
                      variant="outline"
                      className="mt-2 bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                    >
                      {employeeData.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <LucidePhone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{employeeData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LucideUser className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{employeeData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LucideMapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{employeeData.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <LucideCalendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined: {employeeData.joinDate}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h3 className="text-sm font-medium mb-2">Current Assignment</h3>
                  <p className="text-sm">{employeeData.currentAssignment}</p>
                </div>

                <div className="mt-6 pt-4 border-t">
                  <h3 className="text-sm font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {employeeData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Employee Details</CardTitle>
                <CardDescription>Detailed information about this employee</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Department</span>
                      <span>{employeeData.department}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Manager</span>
                      <span>{employeeData.manager}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Date of Birth</span>
                      <span>{employeeData.dateOfBirth}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">License Number</span>
                      <span>{employeeData.licenseNumber}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">License Expiry</span>
                      <span>{employeeData.licenseExpiry}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Emergency Contact</span>
                      <span>{employeeData.emergencyContact}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Salary</span>
                      <span>{employeeData.salary}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Bank Details</span>
                      <span>{employeeData.bankDetails}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Performance</span>
                      <span>{employeeData.performance}</span>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="font-medium">Attendance</span>
                      <span>{employeeData.attendance}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="trips" className="space-y-4">
            <TabsList>
              <TabsTrigger value="trips">Trip Assignments</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="trips" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Trip Assignments</CardTitle>
                  <CardDescription>Recent and upcoming trips assigned to this employee</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                      <div>Trip ID</div>
                      <div className="col-span-2">Route</div>
                      <div>Date</div>
                      <div>Departure</div>
                      <div>Arrival</div>
                      <div>Status</div>
                    </div>
                    {tripAssignments.map((trip) => (
                      <div key={trip.id} className="grid grid-cols-7 gap-4 p-4 border-b last:border-0 items-center">
                        <div className="font-medium">{trip.id}</div>
                        <div className="col-span-2">{trip.route}</div>
                        <div>{trip.date}</div>
                        <div>{trip.departureTime}</div>
                        <div>{trip.arrivalTime}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={`${
                              trip.status === "Completed"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                : "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                            }`}
                          >
                            {trip.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="attendance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Records</CardTitle>
                  <CardDescription>Recent attendance records for this employee</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                      <div>Date</div>
                      <div>Check In</div>
                      <div>Check Out</div>
                      <div>Status</div>
                      <div>Hours</div>
                    </div>
                    {attendanceRecords.map((record, index) => (
                      <div key={index} className="grid grid-cols-5 gap-4 p-4 border-b last:border-0 items-center">
                        <div>{record.date}</div>
                        <div>{record.checkIn}</div>
                        <div>{record.checkOut}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={`${
                              record.status === "Present"
                                ? "bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
                                : "bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700"
                            }`}
                          >
                            {record.status}
                          </Badge>
                        </div>
                        <div>{record.hours}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Performance evaluation and metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Performance metrics content will be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documents</CardTitle>
                  <CardDescription>Employee documents and certifications</CardDescription>
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

