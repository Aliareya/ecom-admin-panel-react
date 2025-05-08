
import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, 
  Edit, 
  Trash,
  Folder
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Category = {
  id: string;
  name: string;
  description: string;
  productCount: number;
};

interface CategoryListProps {
  categories: Category[];
  onEditCategory: (id: string) => void;
  onDeleteCategory: (id: string) => void;
}

export function CategoryList({ 
  categories, 
  onEditCategory, 
  onDeleteCategory 
}: CategoryListProps) {
  return (
    <div className="bg-white rounded-lg border shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Products</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Folder className="h-4 w-4 text-brand-500" />
                  {category.name}
                </TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                    {category.productCount} products
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
                        onClick={() => onEditCategory(category.id)}
                        className="flex items-center gap-2"
                      >
                        <Edit className="h-4 w-4" />
                        <span>Edit</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={() => onDeleteCategory(category.id)}
                        className="flex items-center gap-2 text-red-600"
                      >
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
  );
}
