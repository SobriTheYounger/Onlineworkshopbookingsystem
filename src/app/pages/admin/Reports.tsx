import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Download, FileText } from 'lucide-react';

export function Reports() {
  const reportData = [
    { date: 'Jan 1-7, 2026', bookings: 45, revenue: 'Rp 12,500,000', customers: 38 },
    { date: 'Dec 25-31, 2025', bookings: 52, revenue: 'Rp 14,200,000', customers: 42 },
    { date: 'Dec 18-24, 2025', bookings: 48, revenue: 'Rp 13,100,000', customers: 40 },
    { date: 'Dec 11-17, 2025', bookings: 41, revenue: 'Rp 11,800,000', customers: 35 },
  ];

  return (
    <div className="flex">
      <Sidebar role="admin" />
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">Reports</h1>
            <p className="text-gray-600">Generate and export business reports.</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">Total Bookings (Jan 2026)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">186</div>
                <p className="text-sm text-green-600 mt-1">↑ 15% vs last month</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">Total Revenue (Jan 2026)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">Rp 48.2M</div>
                <p className="text-sm text-green-600 mt-1">↑ 22% vs last month</p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-600">New Customers (Jan 2026)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">142</div>
                <p className="text-sm text-green-600 mt-1">↑ 8% vs last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Filter and Export */}
          <Card className="shadow-md mb-6">
            <CardHeader>
              <CardTitle>Filter Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input type="date" />
                </div>
                <div className="flex items-end gap-2">
                  <Button className="flex-1">Generate Report</Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Excel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Report Table */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Weekly Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Period</TableHead>
                    <TableHead>Bookings</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Customers</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reportData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.date}</TableCell>
                      <TableCell>{row.bookings}</TableCell>
                      <TableCell>{row.revenue}</TableCell>
                      <TableCell>{row.customers}</TableCell>
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
