import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {Invitations} from "@/components/Invitations/Invitations";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Download, StickyNote } from "lucide-react";

const PInvitations = [
  {
    id: "1$R2D2$C3PO",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Simulation Attended",
    invoice: "",
  },
  {
    id: "TR%567",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Not Attended",
    invoice: "",
  },
  {
    id: "1ER003",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Simulation Attended",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Not Attended",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Not Attended",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Not Attended",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Simulation Attended",
    invoice: "",
  },
  {
    id: "RS1001",
    packageName: "#Admin4521",
    validity: "Adam Fedueh",
    price: "Data Science",
    activeUsers: "4th February 2025",
    status: "Simulation Attended",
    invoice: "",
  },
];

interface InvitationsTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
}

const InvitationsTable = ({
  startIndex,
  endIndex,
  searchQuery,
}: InvitationsTableProps) => {
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPlans([]);
    } else {
      setSelectedPlans(PInvitations.map((plan) => plan.id));
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
            <TableHead className="text-sm font-plusJakarta">User Id</TableHead>
            <TableHead className="text-sm">Candidate Name</TableHead>
            <TableHead className="text-sm">Simulation Assigned</TableHead>
            <TableHead className="text-sm">Sent On</TableHead>
            <TableHead className="text-sm">Status</TableHead>
            <TableHead className="text-sm">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {PInvitations.map((plan) => (
            <TableRow key={plan.id} className="text-sm">
              <TableCell className="py-4 text-sm">
                <input
                  type="checkbox"
                  checked={selectedPlans.includes(plan.id)}
                  onChange={() => handleSelectPlan(plan.id)}
                />
              </TableCell>

              <TableCell className="py-2 text-sm">{plan.packageName}</TableCell>
              <TableCell className="py-2 text-sm">{plan.validity}</TableCell>
              <TableCell className="py-2 text-sm">{plan.price}</TableCell>
              <TableCell className="py-2 text-sm">{plan.activeUsers}</TableCell>

              <TableCell className="py-4 text-sm">
                <Badge
                  variant={"secondary"}
                  className={
                    plan.status === "Simulation Attended"
                      ? "bg-[#ECFDF3] text-[#23C16B]"
                      : "bg-[#FEF3F2] text-[#FF3A3A]"
                  }
                >
                  {plan.status}
                </Badge>
              </TableCell>

              <TableCell className="py-4 text-sm flex items-center gap-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="w-[175.61px] h-[110px] border-[#D1D1D6] mt-20"
                    >
                      <div className="w-[164px] h-[86px] top-[228px] left-[1648.08px]">
                        <p className=" leading-[18px] font-plusJakarta  text-[#444446] pt-3 pb-2">
                          View
                        </p>
                        <hr />
                        <p className=" leading-[18px] font-plusJakarta  text-[#444446] tracking-[-0.08px] font-medium py-2">
                          View score board
                        </p>
                        <hr />
                        <p className="  leading-[18px] font-plusJakarta font-medium text-[#444446] tracking-[-0.08px] py-2">
                          View Skill Matrix
                        </p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvitationsTable;
