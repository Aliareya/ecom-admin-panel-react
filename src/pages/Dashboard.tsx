
import StatCard from "@/components/dashboard/StatCard";
import { ShoppingCart, Users, DollarSign, Store } from "lucide-react";
import SalesChart from "@/components/dashboard/SalesChart";
import { RecentOrdersTable } from "@/components/dashboard/RecentOrdersTable";
import { TopProductsTable } from "@/components/dashboard/TopProductsTable";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Your store at a glance.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$54,763.84"
          icon={<DollarSign className="h-6 w-6 text-dashboard-revenue" />}
          trend={12.5}
          trendLabel="from last month"
          color="dashboard-revenue"
        />
        
        <StatCard
          title="Orders"
          value="2,456"
          icon={<ShoppingCart className="h-6 w-6 text-dashboard-orders" />}
          trend={8.2}
          trendLabel="from last month"
          color="dashboard-orders"
        />
        
        <StatCard
          title="Customers"
          value="1,893"
          icon={<Users className="h-6 w-6 text-dashboard-customers" />}
          trend={5.1}
          trendLabel="from last month"
          color="dashboard-customers"
        />
        
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          icon={<Store className="h-6 w-6 text-dashboard-conversion" />}
          trend={-1.8}
          trendLabel="from last month"
          color="dashboard-conversion"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <div className="space-y-6">
          <RecentOrdersTable />
        </div>
      </div>

      <div className="mt-6">
        <TopProductsTable />
      </div>
    </div>
  );
};

export default Dashboard;
