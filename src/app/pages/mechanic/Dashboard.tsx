import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Label } from '../../components/ui/label';
import { CheckCircle, Clock, Wrench } from 'lucide-react';

export function MechanicDashboard() {
  const [jobs] = useState([
    {
      id: 'BK-2026-001',
      vehicle: 'Honda CBR 150R',
      licensePlate: 'B 1234 XYZ',
      service: 'Oil Change',
      customer: 'John Doe',
      status: 'In Progress',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 'BK-2026-002',
      vehicle: 'Toyota Avanza',
      licensePlate: 'D 5678 ABC',
      service: 'Brake Inspection',
      customer: 'Jane Smith',
      status: 'Pending',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'BK-2025-098',
      vehicle: 'Yamaha Nmax',
      licensePlate: 'B 9012 DEF',
      service: 'Tire Rotation',
      customer: 'Bob Wilson',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-800',
    },
  ]);

  return (
    <div className="flex">
      <Sidebar role="mechanic" />
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">Mechanic Dashboard</h1>
            <p className="text-gray-600">Manage your assigned service jobs.</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Active Jobs
                </CardTitle>
                <Clock className="w-4 h-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">2</div>
                <p className="text-xs text-gray-500 mt-1">Currently working on</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Completed Today
                </CardTitle>
                <CheckCircle className="w-4 h-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">5</div>
                <p className="text-xs text-gray-500 mt-1">Jobs finished</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  This Week
                </CardTitle>
                <Wrench className="w-4 h-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">24</div>
                <p className="text-xs text-gray-500 mt-1">Total jobs completed</p>
              </CardContent>
            </Card>
          </div>

          {/* Job List */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>My Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{job.vehicle}</div>
                          <div className="text-sm text-gray-600">{job.licensePlate}</div>
                        </div>
                      </TableCell>
                      <TableCell>{job.service}</TableCell>
                      <TableCell>{job.customer}</TableCell>
                      <TableCell>
                        <Badge className={job.statusColor} variant="secondary">
                          {job.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm">
                              Update Status
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Update Job Status - {job.id}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <div className="text-sm text-gray-600 mb-1">Vehicle</div>
                                <div className="font-medium">{job.vehicle} ({job.licensePlate})</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-600 mb-1">Service</div>
                                <div className="font-medium">{job.service}</div>
                              </div>
                              <div className="space-y-2">
                                <Label>New Status</Label>
                                <Select defaultValue={job.status.toLowerCase().replace(' ', '-')}>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button className="w-full">Update Status</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
