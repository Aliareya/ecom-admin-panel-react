
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

type Product = {
  name: string;
  category: string;
  sold: number;
  revenue: string;
  stock: number;
};

const products: Product[] = [
  { 
    name: "Wireless Earbuds Pro", 
    category: "Electronics", 
    sold: 124, 
    revenue: "$6,745.50", 
    stock: 85 
  },
  { 
    name: "Premium Fitness Watch", 
    category: "Wearables", 
    sold: 98, 
    revenue: "$9,267.00", 
    stock: 42 
  },
  { 
    name: "Organic Cotton T-shirt", 
    category: "Clothing", 
    sold: 156, 
    revenue: "$3,432.00", 
    stock: 230 
  },
  { 
    name: "Ultra HD Smart TV", 
    category: "Electronics", 
    sold: 48, 
    revenue: "$32,450.00", 
    stock: 15 
  },
];

export function TopProductsTable() {
  // Calculate max sales for relative progress bar width
  const maxSold = Math.max(...products.map(p => p.sold));
  
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h3 className="font-semibold">Top Selling Products</h3>
        <a href="/products" className="text-sm text-brand-600 hover:underline">
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Sold</TableHead>
              <TableHead>Revenue</TableHead>
              <TableHead>Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.name}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-24">
                      <Progress 
                        value={(product.sold / maxSold) * 100}
                        className="h-2 bg-gray-100" 
                      />
                    </div>
                    <span>{product.sold}</span>
                  </div>
                </TableCell>
                <TableCell>{product.revenue}</TableCell>
                <TableCell>{product.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
