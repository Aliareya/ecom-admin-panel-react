
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Filter, 
  MoreHorizontal, 
  ChevronDown,
  Eye,
  FileText
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Order = {
  id: string;
  customer: string;
  date: string;
  paymentStatus: 'paid' | 'pending' | 'failed';
  fulfillmentStatus: 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: string;
};

const orders: Order[] = [
  { 
    id: "ORD-7851", 
    customer: "Sarah Johnson", 
    date: "May 7, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "processing", 
    total: "$156.99" 
  },
  { 
    id: "ORD-7850", 
    customer: "Michael Chen", 
    date: "May 7, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "shipped", 
    total: "$243.50" 
  },
  { 
    id: "ORD-7849", 
    customer: "Emma Wilson", 
    date: "May 6, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "delivered", 
    total: "$89.99" 
  },
  { 
    id: "ORD-7848", 
    customer: "James Rodriguez", 
    date: "May 6, 2025", 
    paymentStatus: "failed", 
    fulfillmentStatus: "cancelled", 
    total: "$127.45" 
  },
  { 
    id: "ORD-7847", 
    customer: "Olivia Taylor", 
    date: "May 5, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "delivered", 
    total: "$324.75" 
  },
  { 
    id: "ORD-7846", 
    customer: "Noah Smith", 
    date: "May 5, 2025", 
    paymentStatus: "pending", 
    fulfillmentStatus: "processing", 
    total: "$85.25" 
  },
  { 
    id: "ORD-7845", 
    customer: "Ava Brown", 
    date: "May 4, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "shipped", 
    total: "$189.00" 
  },
  { 
    id: "ORD-7844", 
    customer: "William Jones", 
    date: "May 4, 2025", 
    paymentStatus: "paid", 
    fulfillmentStatus: "delivered", 
    total: "$78.50" 
  },
];

const paymentStatusMap = {
  paid: { label: "Paid", color: "bg-green-100 text-green-800" },
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  failed: { label: "Failed", color: "bg-red-100 text-red-800" }
};

const fulfillmentStatusMap = {
  processing: { label: "Processing", color: "bg-blue-100 text-blue-800" },
  shipped: { label: "Shipped", color: "bg-amber-100 text-amber-800" },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-800" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800" }
};

const Orders = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Orders</h1>
        <p className="text-muted-foreground">Manage customer orders and shipments.</p>
      </div>
      
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1">
          <Input placeholder="Search orders..." />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline">Export</Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
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
                        paymentStatusMap[order.paymentStatus].color
                      )}
                    >
                      {paymentStatusMap[order.paymentStatus].label}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "font-normal",
                        fulfillmentStatusMap[order.fulfillmentStatus].color
                      )}
                    >
                      {fulfillmentStatusMap[order.fulfillmentStatus].label}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span>View Details</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          <span>View Invoice</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
