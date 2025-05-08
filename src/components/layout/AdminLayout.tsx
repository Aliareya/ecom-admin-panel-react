
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useSidebar } from './SidebarProvider';

const AdminLayout = () => {
  const { isOpen } = useSidebar();
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-20'}`}>
        <Header />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
