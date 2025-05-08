
import { useState } from "react";
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
  ChevronDown,
  Package,
  Folder
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { AddProductForm } from "@/components/products/AddProductForm";
import { AddCategoryForm } from "@/components/products/AddCategoryForm";
import { CategoryList } from "@/components/products/CategoryList";
import { toast } from "sonner";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'active' | 'out_of_stock' | 'discontinued';
};

type Category = {
  id: string;
  name: string;
  description: string;
  productCount: number;
};

// Initial product data
const initialProducts: Product[] = [
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

// Initial categories data
const initialCategories: Category[] = [
  {
    id: "CAT-1001",
    name: "Electronics",
    description: "Electronic devices and gadgets",
    productCount: 3
  },
  {
    id: "CAT-1002",
    name: "Clothing",
    description: "Apparel and fashion items",
    productCount: 2
  },
  {
    id: "CAT-1003",
    name: "Accessories",
    description: "Personal accessories and add-ons",
    productCount: 1
  },
  {
    id: "CAT-1004",
    name: "Home Goods",
    description: "Products for home and living",
    productCount: 1
  },
  {
    id: "CAT-1005",
    name: "Wearables",
    description: "Wearable technology devices",
    productCount: 1
  }
];

const statusMap = {
  active: { label: "Active", color: "bg-green-100 text-green-800" },
  out_of_stock: { label: "Out of Stock", color: "bg-amber-100 text-amber-800" },
  discontinued: { label: "Discontinued", color: "bg-red-100 text-red-800" }
};

const Products = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter categories based on search term
  const filteredCategories = categories.filter(category => 
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a new product
  const handleAddProduct = (productData: any) => {
    const newProduct: Product = {
      id: `PROD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: productData.name,
      category: categories.find(c => c.id === productData.category)?.name || "Uncategorized",
      price: `$${Number(productData.price).toFixed(2)}`,
      stock: Number(productData.stock),
      status: productData.status as 'active' | 'out_of_stock' | 'discontinued',
    };
    
    setProducts([newProduct, ...products]);
    
    // Update product count for the selected category
    if (productData.category) {
      setCategories(categories.map(cat => 
        cat.id === productData.category 
          ? { ...cat, productCount: cat.productCount + 1 } 
          : cat
      ));
    }
  };

  // Handle adding a new category
  const handleAddCategory = (categoryData: any) => {
    const newCategory: Category = {
      id: `CAT-${Math.floor(1000 + Math.random() * 9000)}`,
      name: categoryData.name,
      description: categoryData.description || "",
      productCount: 0
    };
    
    setCategories([...categories, newCategory]);
  };

  // Handle editing a category
  const handleEditCategory = (id: string) => {
    // For demo purposes, just show a toast
    const category = categories.find(c => c.id === id);
    toast.info(`Editing category: ${category?.name}`);
  };

  // Handle deleting a category
  const handleDeleteCategory = (id: string) => {
    const category = categories.find(c => c.id === id);
    
    if (category && category.productCount > 0) {
      toast.error("Cannot delete category with associated products");
      return;
    }
    
    setCategories(categories.filter(c => c.id !== id));
    toast.success("Category deleted successfully");
  };

  // Handle editing a product
  const handleEditProduct = (id: string) => {
    // For demo purposes, just show a toast
    const product = products.find(p => p.id === id);
    toast.info(`Editing product: ${product?.name}`);
  };

  // Handle deleting a product
  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast.success("Product deleted successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight mb-2">Products</h1>
          <p className="text-muted-foreground">Manage your product inventory.</p>
        </div>
        {activeTab === "products" ? (
          <Button 
            className="flex items-center gap-1"
            onClick={() => setIsAddProductOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Add Product</span>
          </Button>
        ) : (
          <Button
            className="flex items-center gap-1"
            onClick={() => setIsAddCategoryOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Add Category</span>
          </Button>
        )}
      </div>
      
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <TabsList>
            <TabsTrigger value="products" className="flex items-center gap-1">
              <Package className="h-4 w-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="categories" className="flex items-center gap-1">
              <Folder className="h-4 w-4" />
              Categories
            </TabsTrigger>
          </TabsList>
          
          <div className="flex flex-1 items-center gap-2 md:max-w-sm ml-auto">
            <Input 
              placeholder={`Search ${activeTab}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
        
        <TabsContent value="products" className="space-y-4">
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
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
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
                              <DropdownMenuItem 
                                className="flex items-center gap-2"
                                onClick={() => handleEditProduct(product.id)}
                              >
                                <Edit className="h-4 w-4" />
                                <span>Edit</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem 
                                className="flex items-center gap-2 text-red-600"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                <Trash className="h-4 w-4" />
                                <span>Delete</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        {searchTerm ? "No products matching your search" : "No products found. Add your first product!"}
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="categories">
          {filteredCategories.length > 0 ? (
            <CategoryList 
              categories={filteredCategories} 
              onEditCategory={handleEditCategory}
              onDeleteCategory={handleDeleteCategory}
            />
          ) : (
            <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
              <p className="text-muted-foreground">
                {searchTerm ? "No categories matching your search" : "No categories found. Add your first category!"}
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
      
      {/* Add Product Dialog */}
      <AddProductForm 
        open={isAddProductOpen} 
        onClose={() => setIsAddProductOpen(false)}
        categories={categories}
        onAddProduct={handleAddProduct}
      />
      
      {/* Add Category Dialog */}
      <AddCategoryForm 
        open={isAddCategoryOpen}
        onClose={() => setIsAddCategoryOpen(false)}
        onAddCategory={handleAddCategory}
      />
    </div>
  );
};

export default Products;
