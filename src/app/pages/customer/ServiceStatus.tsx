import { Sidebar } from '../../components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Search } from 'lucide-react';

export function ServiceStatus() {
  const bookings = [
    {
      id: 'BK-2026-001',
      vehicle: 'B 1234 XYZ',
      service: 'Oil Change',
      status: 'In Progress',
      estimatedFinish: 'Jan 8, 2026 - 3:00 PM',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 'BK-2026-002',
      vehicle: 'D 5678 ABC',
      service: 'Brake Inspection',
      status: 'Scheduled',
      estimatedFinish: 'Jan 11, 2026 - 10:00 AM',
      statusColor: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'BK-2025-098',
      vehicle: 'B 9012 DEF',
      service: 'Tire Rotation',
      status: 'Completed',
      estimatedFinish: 'Dec 28, 2025 - 2:00 PM',
      statusColor: 'bg-green-100 text-green-800',
    },
    {
      id: 'BK-2025-087',
      vehicle: 'B 3456 GHI',
      service: 'General Checkup',
      status: 'Completed',
      estimatedFinish: 'Dec 15, 2025 - 11:00 AM',
      statusColor: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <div className="flex">
      <Sidebar role="customer" />
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">Service Status</h1>
            <p className="text-gray-600">Track your service bookings in real-time.</p>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>All Bookings</CardTitle>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search bookings..."
                    className="pl-10"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Service Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Estimated Finish</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.id}</TableCell>
                      <TableCell>{booking.vehicle}</TableCell>
                      <TableCell>{booking.service}</TableCell>
                      <TableCell>
                        <Badge className={booking.statusColor} variant="secondary">
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-600">{booking.estimatedFinish}</TableCell>
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
