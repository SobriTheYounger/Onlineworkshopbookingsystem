import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Edit, Plus, Trash2 } from 'lucide-react';

export function ManageServices() {
  const [services, setServices] = useState([
    { id: 1, name: 'Oil Change', price: 'Rp 250,000', duration: '1 hour' },
    { id: 2, name: 'Brake Service', price: 'Rp 450,000', duration: '2 hours' },
    { id: 3, name: 'Tire Rotation', price: 'Rp 180,000', duration: '45 minutes' },
    { id: 4, name: 'General Checkup', price: 'Rp 200,000', duration: '1.5 hours' },
  ]);

  return (
    <div className="flex">
      <Sidebar role="admin" />
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">Manage Services</h1>
              <p className="text-gray-600">Add, edit, or remove service offerings.</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Service
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Service</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Service Name</Label>
                    <Input placeholder="e.g., Oil Change" />
                  </div>
                  <div className="space-y-2">
                    <Label>Price</Label>
                    <Input placeholder="e.g., Rp 250,000" />
                  </div>
                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <Input placeholder="e.g., 1 hour" />
                  </div>
                  <Button className="w-full">Add Service</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>All Services</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell>{service.price}</TableCell>
                      <TableCell>{service.duration}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
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
