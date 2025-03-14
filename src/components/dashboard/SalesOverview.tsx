import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

interface SalesMetric {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

interface SalesOverviewProps {
  metrics?: SalesMetric[];
  chartData?: { date: string; revenue: number }[];
}

const SalesOverview = ({
  metrics = [
    {
      title: "Total Revenue",
      value: "$12,456",
      change: 12.5,
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Orders",
      value: "356",
      change: 8.2,
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      title: "Avg. Order Value",
      value: "$35.28",
      change: -2.4,
      icon: <BarChart3 className="h-4 w-4" />,
    },
  ],
  chartData = [
    { date: "Mon", revenue: 1200 },
    { date: "Tue", revenue: 1800 },
    { date: "Wed", revenue: 2400 },
    { date: "Thu", revenue: 1600 },
    { date: "Fri", revenue: 2800 },
    { date: "Sat", revenue: 3200 },
    { date: "Sun", revenue: 2600 },
  ],
}: SalesOverviewProps) => {
  // Calculate max value for chart scaling
  const maxRevenue = Math.max(...chartData.map((item) => item.revenue));

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Sales Overview</CardTitle>
        <CardDescription>View your sales analytics and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center p-4 border rounded-lg"
            >
              <div className="p-2 rounded-full bg-primary/10 mr-4">
                {metric.icon}
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </p>
                <h4 className="text-2xl font-bold">{metric.value}</h4>
                <div className="flex items-center mt-1">
                  {metric.change > 0 ? (
                    <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span
                    className={`text-sm ${metric.change > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {Math.abs(metric.change)}% from last week
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-medium mb-4">Weekly Revenue</h4>
          <div className="h-64 flex items-end space-x-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="w-full bg-primary rounded-t-md"
                  style={{
                    height: `${(item.revenue / maxRevenue) * 100}%`,
                    minHeight: "4px",
                  }}
                />
                <span className="text-xs mt-2">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center">
            <TrendingUp className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium">
              Sales are up 24% from last month
            </span>
          </div>
          <button className="text-sm text-primary font-medium">
            View detailed report
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesOverview;
