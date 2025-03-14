import { useState } from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import SalesOverview from "./dashboard/SalesOverview";
import PopularItems from "./dashboard/PopularItems";
import DailyRevenue from "./dashboard/DailyRevenue";
import RecentOrders from "./dashboard/RecentOrders";
import InventoryAlert from "./dashboard/InventoryAlert";

function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title="Dashboard" />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-6">
            <SalesOverview />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PopularItems />
              <DailyRevenue />
            </div>
            <RecentOrders />
            <InventoryAlert />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
