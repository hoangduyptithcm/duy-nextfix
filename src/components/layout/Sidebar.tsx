import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  userName?: string;
  userRole?: string;
  userAvatar?: string;
}

const Sidebar = ({
  collapsed = false,
  onToggle = () => {},
  userName = "John Doe",
  userRole = "Shop Manager",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navigationItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Inventory", path: "/inventory", icon: <Package size={20} /> },
    { name: "Orders", path: "/orders", icon: <ShoppingCart size={20} /> },
    { name: "Customers", path: "/customers", icon: <Users size={20} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="h-full w-[280px] bg-background border-r flex flex-col">
      {/* Logo and Brand */}
      <div className="p-4 flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">QD</span>
          </div>
          {!collapsed && (
            <h1 className="text-xl font-bold">Quán Trà Sữa Tên Duy</h1>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onToggle}
        >
          <ChevronRight size={18} className={collapsed ? "rotate-180" : ""} />
        </Button>
      </div>

      <Separator />

      {/* Navigation */}
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navigationItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <TooltipProvider key={item.path}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to={item.path}>
                      <Button
                        variant={isActive ? "secondary" : "ghost"}
                        className={`w-full justify-start ${collapsed ? "px-2" : "px-3"}`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {!collapsed && <span>{item.name}</span>}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right">{item.name}</TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </nav>
      </div>

      <Separator />

      {/* User Profile */}
      <div className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>
              {userName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{userName}</p>
              <p className="text-xs text-muted-foreground truncate">
                {userRole}
              </p>
            </div>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
