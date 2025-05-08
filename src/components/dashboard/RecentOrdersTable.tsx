
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Order = {
  id: string;
  customer: string;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: string;
};

const orders: Order[] = [
  {
    id: "ORD-7851",
    customer: "Sarah Johnson",
    date: "May 7, 2025",
    status: "processing",
    total: "$156.99"
  },
  {
    id: "ORD-7850",
    customer: "Michael Chen",
    date: "May 7, 2025",
    status: "shipped",
    total: "$243.50"
  },
  {
    id: "ORD-7849",
    customer: "Emma Wilson",
    date: "May 6, 2025",
    status: "delivered",
    total: "$89.99"
  },
  {
    id: "ORD-7848",
    customer: "James Rodriguez",
    date: "May 6, 2025",
    status: "cancelled",
    total: "$127.45"
  },
  {
    id: "ORD-7847",
    customer: "Olivia Taylor",
    date: "May 5, 2025",
    status: "delivered",
    total: "$324.75"
  }
];

const statusMap = {
  processing: { label: "Processing", color: "bg-blue-100 text-blue-800" },
  shipped: { label: "Shipped", color: "bg-amber-100 text-amber-800" },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-800" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800" }
};

export function RecentOrdersTable() {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h3 className="font-semibold">Recent Orders</h3>
        <a href="/orders" className="text-sm text-brand-600 hover:underline">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "font-normal",
                      statusMap[order.status].color
                    )}
                  >
                    {statusMap[order.status].label}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
