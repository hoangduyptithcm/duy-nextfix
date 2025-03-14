import React from "react";
import { AlertCircle, ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InventoryItem {
  id: string;
  name: string;
  currentStock: number;
  minStock: number;
  unit: string;
  category: string;
}

interface InventoryAlertProps {
  items?: InventoryItem[];
  onViewInventory?: () => void;
}

const InventoryAlert = ({
  items = [
    {
      id: "1",
      name: "Milk Powder",
      currentStock: 5,
      minStock: 10,
      unit: "kg",
      category: "Base Ingredients",
    },
    {
      id: "2",
      name: "Tapioca Pearls",
      currentStock: 3,
      minStock: 8,
      unit: "kg",
      category: "Toppings",
    },
    {
      id: "3",
      name: "Brown Sugar",
      currentStock: 2,
      minStock: 5,
      unit: "kg",
      category: "Sweeteners",
    },
    {
      id: "4",
      name: "Jasmine Tea",
      currentStock: 4,
      minStock: 6,
      unit: "boxes",
      category: "Tea Base",
    },
  ],
  onViewInventory = () => console.log("View inventory clicked"),
}: InventoryAlertProps) => {
  const lowStockItems = items.filter(
    (item) => item.currentStock < item.minStock,
  );

  return (
    <Card className="w-full bg-white border-red-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <CardTitle className="text-lg font-bold text-red-500">
            Low Stock Alert
          </CardTitle>
        </div>
        <span className="text-sm font-medium text-red-500">
          {lowStockItems.length} items below minimum stock level
        </span>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lowStockItems.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg border border-red-100 bg-red-50 flex flex-col"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
                  {item.category}
                </span>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                Current:{" "}
                <span className="font-semibold text-red-600">
                  {item.currentStock} {item.unit}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                Minimum:{" "}
                <span className="font-semibold">
                  {item.minStock} {item.unit}
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                <div
                  className={cn(
                    "h-2 rounded-full",
                    item.currentStock === 0
                      ? "bg-red-500"
                      : item.currentStock < item.minStock / 2
                        ? "bg-orange-500"
                        : "bg-yellow-500",
                  )}
                  style={{
                    width: `${Math.min(100, (item.currentStock / item.minStock) * 100)}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          variant="outline"
          className="ml-auto text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
          onClick={onViewInventory}
        >
          View Inventory
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InventoryAlert;
