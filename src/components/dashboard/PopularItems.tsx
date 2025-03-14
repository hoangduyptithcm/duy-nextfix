import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, TrendingUp, Coffee } from "lucide-react";

interface PopularItemProps {
  items?: {
    name: string;
    quantity: number;
    revenue: number;
    percentage: number;
  }[];
  title?: string;
  subtitle?: string;
}

const PopularItems = ({
  items = [
    {
      name: "Classic Milk Tea",
      quantity: 156,
      revenue: 780,
      percentage: 28,
    },
    {
      name: "Taro Milk Tea",
      quantity: 129,
      revenue: 645,
      percentage: 23,
    },
    {
      name: "Brown Sugar Boba",
      quantity: 98,
      revenue: 490,
      percentage: 18,
    },
    {
      name: "Matcha Latte",
      quantity: 87,
      revenue: 435,
      percentage: 16,
    },
    {
      name: "Strawberry Milk Tea",
      quantity: 76,
      revenue: 380,
      percentage: 14,
    },
  ],
  title = "Popular Items",
  subtitle = "Top selling drinks this week",
}: PopularItemProps) => {
  return (
    <Card className="w-full h-full bg-white overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <BarChart className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    ${item.revenue.toFixed(2)}
                  </span>
                  <div className="flex items-center text-emerald-500 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {item.percentage}%
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{item.quantity} sold</span>
                <span>${item.revenue.toFixed(2)} revenue</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularItems;
