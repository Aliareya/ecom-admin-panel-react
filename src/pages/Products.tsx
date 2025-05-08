
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
  Plus, 
  MoreHorizontal,
  Edit,
  Trash,
  ChevronDown
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'active' | 'out_of_stock' | 'discontinued';
};

const products: Product[] = [
  { 
    id: "PROD-1001", 
    name: "Wireless Earbuds Pro", 
    category: "Electronics", 
    price: "$89.99", 
    stock: 85,
    status: "active"
  },
  { 
    id: "PROD-1002", 
    name: "Premium Fitness Watch", 
    category: "Wearables", 
    price: "$149.99", 
    stock: 42,
    status: "active"
  },
  { 
    id: "PROD-1003", 
    name: "Organic Cotton T-shirt", 
    category: "Clothing", 
    price: "$24.99", 
    stock: 230,
    status: "active"
  },
  { 
    id: "PROD-1004", 
    name: "Ultra HD Smart TV", 
    category: "Electronics", 
    price: "$799.99", 
    stock: 15,
    status: "active"
  },
  { 
    id: "PROD-1005", 
    name: "Leather Travel Backpack", 
    category: "Accessories", 
    price: "$79.99", 
    stock: 68,
    status: "active"
  },
  { 
    id: "PROD-1006", 
    name: "Stainless Steel Water Bottle", 
    category: "Home Goods", 
    price: "$29.99", 
    stock: 125,
    status: "active"
  },
  { 
    id: "PROD-1007", 
    name: "Bluetooth Speaker", 
    category: "Electronics", 
    price: "$59.99", 
    stock: 0,
    status: "out_of_stock"
  },
  { 
    id: "PROD-1008", 
    name: "Vintage Denim Jacket", 
    category: "Clothing", 
    price: "$89.99", 
    stock: 0,
    status: "discontinued"
  }
];

const statusMap = {
  active: { label: "Active", color: "bg-green-100 text-green-800" },
  out_of_stock: { label: "Out of Stock", color: "bg-amber-100 text-amber-800" },
  discontinued: { label: "Discontinued", color: "bg-red-100 text-red-800" }
};

const Products = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory.</p>
        </div>
        <Button className="flex items-center gap-1">
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </Button>
      </div>
      
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1">
          <Input placeholder="Search products..." />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg border shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "font-normal",
                        statusMap[product.status].color
                      )}
                    >
                      {statusMap[product.status].label}
                    </Badge>
                  </TableCell>
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
                          <Edit className="h-4 w-4" />
                          <span>Edit</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                          <Trash className="h-4 w-4" />
                          <span>Delete</span>
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

export default Products;
