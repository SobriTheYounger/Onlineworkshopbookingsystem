import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  Calendar, 
  ClipboardList, 
  CreditCard, 
  History, 
  User, 
  Settings,
  LogOut,
  Wrench,
  FileText,
  Users
} from 'lucide-react';

interface SidebarProps {
  role: 'customer' | 'admin' | 'mechanic';
}

export function Sidebar({ role }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const customerLinks = [
    { to: '/customer/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/customer/book-service', icon: Calendar, label: 'Book Service' },
    { to: '/customer/service-status', icon: ClipboardList, label: 'Service Status' },
    { to: '/customer/payments', icon: CreditCard, label: 'Payments' },
    { to: '/customer/history', icon: History, label: 'Booking History' },
    { to: '/customer/profile', icon: User, label: 'Profile' },
  ];

  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/manage-services', icon: Settings, label: 'Manage Services' },
    { to: '/admin/payments', icon: CreditCard, label: 'Payments' },
    { to: '/admin/reports', icon: FileText, label: 'Reports' },
    { to: '/admin/users', icon: Users, label: 'Users' },
  ];

  const mechanicLinks = [
    { to: '/mechanic/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/mechanic/jobs', icon: Wrench, label: 'My Jobs' },
    { to: '/mechanic/profile', icon: User, label: 'Profile' },
  ];

  const links = role === 'customer' ? customerLinks : role === 'admin' ? adminLinks : mechanicLinks;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900">WorkshopPro</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-600 hover:text-gray-900"
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </aside>
  );
}
