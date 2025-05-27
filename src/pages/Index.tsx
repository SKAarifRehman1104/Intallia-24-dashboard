import { CategorySales } from "@/components/dashboard/CategorySales";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TransactionsTable } from "@/components/dashboard/TransactionsTable";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Wallet } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <MainLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="page-heading">Dashboard</h1>

          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className=" text-[#06B2E1] px-2 py-4 font-medium w-32 text-base  ring-[#06B2E1] rounded-full ring-1 border-[#06B2E1] hover:bg-[#06B2E1] hover:text-white"
                >
                  {startDate ? format(startDate, "dd/MM/yyyy") : "12/04/2024"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <span className="text-sm text-muted-foreground">To</span>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className=" text-[#06B2E1] px-2 py-4 font-medium w-32 text-base  ring-[#06B2E1] rounded-full ring-1 border-[#06B2E1] hover:bg-[#06B2E1] hover:text-white"
                >
                  {endDate ? format(endDate, "dd/MM/yyyy") : "12/4/2024"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value="12,000"
            icon={<Wallet className="h-6 w-6 text-primary text-white" />}
          />
          <StatsCard
            title="Paid Users"
            value="12,000"
            icon={<Wallet className="h-6 w-6 text-primary text-white" />}
          />
          <StatsCard
            title="New Users"
            value="12,000"
            icon={<Wallet className="h-6 w-6 text-primary text-white" />}
          />
          <StatsCard
            title="Unpaid Users"
            value="12,000"
            icon={<Wallet className="h-6 w-6 text-primary text-white" />}
          />
          <StatsCard
            title="Total Sales"
            value="₹ 25,12,200"
            icon={<Wallet className="h-6 w-6 text-primary text-white" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <CategorySales />
          </div>
        </div>

        <TransactionsTable />
      </div>
    </MainLayout>
  );
};

export default Index;
