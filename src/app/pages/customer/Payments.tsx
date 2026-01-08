import { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Input } from '../../components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../components/ui/dialog';
import { Upload } from 'lucide-react';

export function Payments() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  const payments = [
    {
      id: 'INV-2026-001',
      service: 'Oil Change',
      vehicle: 'B 1234 XYZ',
      amount: 'Rp 250,000',
      status: 'Pending',
      date: 'Jan 5, 2026',
      statusColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      id: 'INV-2025-098',
      service: 'Tire Rotation',
      vehicle: 'B 9012 DEF',
      amount: 'Rp 180,000',
      status: 'Paid',
      date: 'Dec 28, 2025',
      statusColor: 'bg-green-100 text-green-800',
    },
  ];

  return (
    <div className="flex">
      <Sidebar role="customer" />
      <main className="flex-1 bg-gray-50">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl text-gray-900 mb-2">Payments</h1>
            <p className="text-gray-600">Manage your service payments.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {payments.map((payment) => (
              <Card key={payment.id} className="shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{payment.id}</CardTitle>
                    <Badge className={payment.statusColor} variant="secondary">
                      {payment.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Service</div>
                      <div className="font-medium text-gray-900">{payment.service}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Vehicle</div>
                      <div className="font-medium text-gray-900">{payment.vehicle}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Date</div>
                      <div className="font-medium text-gray-900">{payment.date}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Amount</div>
                      <div className="text-xl font-bold text-blue-600">{payment.amount}</div>
                    </div>
                  </div>

                  {payment.status === 'Pending' && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Make Payment</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Complete Payment - {payment.id}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm text-gray-600 mb-2">Total Amount</div>
                            <div className="text-3xl font-bold text-gray-900">{payment.amount}</div>
                          </div>

                          <div className="space-y-2">
                            <Label>Payment Method</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select payment method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                                <SelectItem value="e-wallet">E-Wallet</SelectItem>
                                <SelectItem value="credit-card">Credit Card</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Upload Proof of Payment</Label>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                              <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                              <Input type="file" className="hidden" accept="image/*" />
                            </div>
                          </div>

                          <Button className="w-full">Submit Payment</Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
