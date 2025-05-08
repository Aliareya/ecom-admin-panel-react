
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from './SidebarProvider';
import {
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  BarChart, 
  Store,
  Folder
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/',
    },
    {
      title: 'Products',
      icon: Package,
      href: '/products',
    },
    {
      title: 'Categories',
      icon: Folder,
      href: '/products?tab=categories',
    },
    {
      title: 'Orders',
      icon: ShoppingCart,
      href: '/orders',
    },
    {
      title: 'Customers',
      icon: Users,
      href: '/customers',
    },
    {
      title: 'Analytics',
      icon: BarChart,
      href: '/analytics',
    },
    {
      title: 'Settings',
      icon: Settings,
      href: '/settings',
    },
  ];

  return (
    <aside className={cn(
      'bg-white border-r border-gray-200 fixed left-0 top-0 h-full transition-all duration-300 z-30',
      isOpen ? 'w-64' : 'w-20'
    )}>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        <div className={cn(
          "flex items-center gap-2 transition-all duration-300",
          !isOpen && "opacity-0"
        )}>
          <Store className="h-8 w-8 text-brand-500" />
          <span className={cn(
            "font-bold text-xl transition-all duration-300 overflow-hidden",
            !isOpen ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            ShopAdmin
          </span>
        </div>
        <button onClick={toggle} className="p-1 rounded-md hover:bg-gray-100 transition-colors">
          {isOpen ? (
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>

      <nav className="mt-6 px-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            // Special handling for the Categories tab
            const isActive = item.href === '/products?tab=categories' 
              ? location.pathname === '/products' && location.search.includes('tab=categories')
              : location.pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'flex items-center py-2.5 px-3 rounded-md transition-colors group',
                    isActive
                      ? 'bg-brand-100 text-brand-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-brand-500" : "text-gray-500 group-hover:text-gray-600"
                  )} />
                  
                  <span className={cn(
                    "ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap",
                    !isOpen ? "w-0 opacity-0" : "w-auto opacity-100"
                  )}>
                    {item.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
