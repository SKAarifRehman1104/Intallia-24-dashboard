import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Payments from "@/pages/Payments/Payments";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, StickyNote } from "lucide-react";

const packages = [
  {
    id: "1$R2D2$C3PO",
    packageName: "Package",
    validity: "14 Jan 2022 - 14 Feb 2022",
    price: "45,000",
    activeUsers: "50",
    status: "Active",
    invoice: "",
  },
  {
    id: "TR%567",
    packageName: "Package",
    validity: "14 Jan 2022 - 14 Feb 2022",
    price: "45,000",
    activeUsers: "50",
    status: "Active",
    invoice: "",
  },
  {
    id: "1ER003",
    packageName: "Package",
    validity: "14 Jan 2022 - 14 Feb 2022",
    price: "45,000",
    activeUsers: "50",
    status: "Active",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "Package",
    validity: "14 Jan 2022 - 14 Feb 2022",
    price: "45,000",
    activeUsers: "50",
    status: "Active",
    invoice: "",
  },
];

interface PTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
}

const PTable = () => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPlans([]);
    } else {
      setSelectedPlans(packages.map((plan) => plan.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectPlan = (planId: string) => {
    if (selectedPlans.includes(planId)) {
      setSelectedPlans(selectedPlans.filter((id) => id !== planId));
    } else {
      setSelectedPlans([...selectedPlans, planId]);
    }
  };

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9FAFB]">
            <TableHead className="py-4 font-plusJakarta">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </TableHead>
            {/* <TableHead className="text-sm ">User ID</TableHead> */}
            <TableHead className="text-sm font-plusJakarta">
              PackageName
            </TableHead>
            <TableHead className="text-sm">validity</TableHead>
            <TableHead className="text-sm">Price</TableHead>
            <TableHead className="text-sm">ActiveUsers</TableHead>
            <TableHead className="text-sm">Status</TableHead>
            <TableHead className="text-sm">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((plan) => (
            <TableRow key={plan.id} className="text-sm">
              <TableCell className="py-4 text-sm">
                <input
                  type="checkbox"
                  checked={selectedPlans.includes(plan.id)}
                  onChange={() => handleSelectPlan(plan.id)}
                />
              </TableCell>
              {/* <TableCell className="py-4 text-sm">
                                <Link
                                    to={`/plan/${plan.id}`}
                                    className="text-blue-600"
                                >
                                    {plan.id}
                                </Link>
                            </TableCell> */}
              <TableCell className="py-4 text-sm">{plan.packageName}</TableCell>
              <TableCell className="py-4 text-sm">{plan.validity}</TableCell>
              <TableCell className="py-4 text-sm">RS. {plan.price}</TableCell>
              <TableCell className="py-4 text-sm">{plan.activeUsers}</TableCell>
              {/* <TableCell className="py-4 text-blue-600 text-sm">
                                {plan.status}
                            </TableCell> */}
              <TableCell className="py-4 text-sm">
                <Badge
                  variant={"secondary"}
                  className={
                    plan.status === "Active"
                      ? "bg-[#ECFDF3] text-[#23C16B]"
                      : "bg-[#FEF3F2] text-[#FF3A3A]"
                  }
                >
                  {plan.status}
                </Badge>
              </TableCell>
              <TableCell className="py-4 text-sm flex items-center gap-2">
                <div className="  rounded-full flex items-center gap-2">
                  <div className="p-2 bg-[#06B2E1] rounded-full text-white">
                    <StickyNote className="w-4 h-4  " />
                  </div>
                  Download Invoice
                  {plan.invoice}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PTable;
