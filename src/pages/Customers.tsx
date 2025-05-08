
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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { 
  Filter, 
  Plus, 
  MoreHorizontal, 
  User,
  Mail,
  ShoppingBag,
  ChevronDown 
} from "lucide-react";

type Customer = {
  id: string;
  name: string;
  email: string;
  ordersCount: number;
  totalSpent: string;
  lastOrder: string;
  avatarUrl?: string;
};

const customers: Customer[] = [
  {
    id: "CUST-1001",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    ordersCount: 8,
    totalSpent: "$856.42",
    lastOrder: "May 7, 2025",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: "CUST-1002",
    name: "Michael Chen",
    email: "michael.c@example.com",
    ordersCount: 5,
    totalSpent: "$643.50",
    lastOrder: "May 7, 2025",
  },
  {
    id: "CUST-1003",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    ordersCount: 12,
    totalSpent: "$1,289.99",
    lastOrder: "May 6, 2025",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: "CUST-1004",
    name: "James Rodriguez",
    email: "james.r@example.com",
    ordersCount: 3,
    totalSpent: "$327.45",
    lastOrder: "May 6, 2025",
  },
  {
    id: "CUST-1005",
    name: "Olivia Taylor",
    email: "olivia.t@example.com",
    ordersCount: 7,
    totalSpent: "$924.75",
    lastOrder: "May 5, 2025",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: "CUST-1006",
    name: "Noah Smith",
    email: "noah.s@example.com",
    ordersCount: 2,
    totalSpent: "$185.25",
    lastOrder: "May 5, 2025",
  },
  {
    id: "CUST-1007",
    name: "Ava Brown",
    email: "ava.b@example.com",
    ordersCount: 9,
    totalSpent: "$1,089.00",
    lastOrder: "May 4, 2025",
    avatarUrl: "https://github.com/shadcn.png",
  },
  {
    id: "CUST-1008",
    name: "William Jones",
    email: "william.j@example.com",
    ordersCount: 4,
    totalSpent: "$478.50",
    lastOrder: "May 4, 2025",
  },
];

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

const Customers = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Customers</h1>
          <p className="text-muted-foreground">Manage your customer accounts.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Customer</span>
        </Button>
      </div>
      
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1">
          <Input placeholder="Search customers..." />
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
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        {customer.avatarUrl ? (
                          <AvatarImage src={customer.avatarUrl} />
                        ) : null}
                        <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{customer.name}</div>
                        <div className="text-xs text-gray-500">{customer.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.ordersCount}</TableCell>
                  <TableCell>{customer.totalSpent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
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
                          <User className="h-4 w-4" />
                          <span>View Profile</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <span>Send Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2">
                          <ShoppingBag className="h-4 w-4" />
                          <span>View Orders</span>
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

export default Customers;
