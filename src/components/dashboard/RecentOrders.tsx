import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

interface Order {
  id: string;
  customer: string;
  items: string[];
  total: number;
  status: "completed" | "processing" | "cancelled";
  timestamp: string;
}

interface RecentOrdersProps {
  orders?: Order[];
  onExport?: () => void;
  onPageChange?: (page: number) => void;
  currentPage?: number;
  totalPages?: number;
}

const RecentOrders = ({
  orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      items: ["Classic Milk Tea", "Boba Pearls"],
      total: 8.99,
      status: "completed",
      timestamp: "2023-06-15T14:30:00Z",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      items: ["Taro Milk Tea", "Grass Jelly"],
      total: 9.5,
      status: "processing",
      timestamp: "2023-06-15T15:45:00Z",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      items: ["Brown Sugar Milk Tea", "Pudding"],
      total: 10.25,
      status: "completed",
      timestamp: "2023-06-15T16:20:00Z",
    },
    {
      id: "ORD-004",
      customer: "Sarah Williams",
      items: ["Matcha Milk Tea", "Red Bean"],
      total: 9.75,
      status: "cancelled",
      timestamp: "2023-06-15T17:10:00Z",
    },
    {
      id: "ORD-005",
      customer: "David Lee",
      items: ["Honeydew Milk Tea", "Aloe Vera"],
      total: 11.5,
      status: "completed",
      timestamp: "2023-06-15T18:05:00Z",
    },
  ],
  onExport = () => console.log("Exporting orders..."),
  onPageChange = (page) => console.log(`Navigating to page ${page}`),
  currentPage = 1,
  totalPages = 5,
}: RecentOrdersProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const getStatusBadgeVariant = (status: Order["status"]) => {
    switch (status) {
      case "completed":
        return "default";
      case "processing":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <div className="w-full rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Recent Orders</h2>
        <Button
          onClick={onExport}
          variant="outline"
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableCaption>A list of recent orders.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items.join(", ")}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(order.status)}>
                    {order.status.charAt(0).toUpperCase() +
                      order.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(order.timestamp)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
