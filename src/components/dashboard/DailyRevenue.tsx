import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ArrowDown, ArrowUp, Clock } from "lucide-react";

interface DailyRevenueProps {
  data?: {
    today: number;
    yesterday: number;
    percentageChange: number;
    hourlyData: {
      hour: string;
      revenue: number;
    }[];
  };
}

const DailyRevenue = ({ data }: DailyRevenueProps) => {
  // Default mock data if none is provided
  const defaultData = {
    today: 1250.75,
    yesterday: 1100.5,
    percentageChange: 13.7,
    hourlyData: [
      { hour: "8AM", revenue: 75.25 },
      { hour: "9AM", revenue: 120.5 },
      { hour: "10AM", revenue: 180.75 },
      { hour: "11AM", revenue: 210.25 },
      { hour: "12PM", revenue: 250.5 },
      { hour: "1PM", revenue: 225.75 },
      { hour: "2PM", revenue: 175.25 },
      { hour: "3PM", revenue: 125.5 },
      { hour: "4PM", revenue: 150.75 },
      { hour: "5PM", revenue: 190.25 },
      { hour: "6PM", revenue: 210.5 },
      { hour: "7PM", revenue: 160.75 },
    ],
  };

  const revenueData = data || defaultData;
  const isPositiveChange = revenueData.percentageChange >= 0;

  // Find the max revenue to calculate relative heights
  const maxRevenue = Math.max(
    ...revenueData.hourlyData.map((item) => item.revenue),
  );

  return (
    <Card className="w-full h-full bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Daily Revenue</CardTitle>
        <CardDescription className="text-muted-foreground">
          Hourly breakdown of today's sales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-3xl font-bold">
              ${revenueData.today.toFixed(2)}
            </p>
            <div className="flex items-center mt-1">
              <span
                className={`flex items-center ${isPositiveChange ? "text-green-500" : "text-red-500"}`}
              >
                {isPositiveChange ? (
                  <ArrowUp className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 mr-1" />
                )}
                {Math.abs(revenueData.percentageChange)}%
              </span>
              <span className="text-muted-foreground ml-2">vs yesterday</span>
            </div>
          </div>
          <Tabs defaultValue="today" className="w-[200px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Hourly Revenue Chart */}
        <div className="mt-6">
          <div className="flex items-end justify-between h-[200px] mt-4">
            {revenueData.hourlyData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-8 bg-primary/80 hover:bg-primary rounded-t-sm transition-all"
                  style={{
                    height: `${(item.revenue / maxRevenue) * 180}px`,
                  }}
                ></div>
                <span className="text-xs mt-2">{item.hour}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          <span>Last updated: Today at 7:45 PM</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyRevenue;
