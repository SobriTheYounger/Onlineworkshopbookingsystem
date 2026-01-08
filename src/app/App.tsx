import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CustomerDashboard } from './pages/customer/Dashboard';
import { BookService } from './pages/customer/BookService';
import { ServiceStatus } from './pages/customer/ServiceStatus';
import { Payments } from './pages/customer/Payments';
import { AdminDashboard } from './pages/admin/Dashboard';
import { ManageServices } from './pages/admin/ManageServices';
import { Reports } from './pages/admin/Reports';
import { MechanicDashboard } from './pages/mechanic/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Customer Routes */}
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/customer/book-service" element={<BookService />} />
        <Route path="/customer/service-status" element={<ServiceStatus />} />
        <Route path="/customer/payments" element={<Payments />} />
        <Route path="/customer/history" element={<ServiceStatus />} />
        <Route path="/customer/profile" element={<CustomerDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-services" element={<ManageServices />} />
        <Route path="/admin/payments" element={<Payments />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/users" element={<AdminDashboard />} />

        {/* Mechanic Routes */}
        <Route path="/mechanic/dashboard" element={<MechanicDashboard />} />
        <Route path="/mechanic/jobs" element={<MechanicDashboard />} />
        <Route path="/mechanic/profile" element={<MechanicDashboard />} />
      </Routes>
    </Router>
  );
}
