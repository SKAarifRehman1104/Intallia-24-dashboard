import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getUserTransaction } from "@/data/users";
import { Transaction, Payment } from "@/types";
import { UserTransaction } from "@/components/users/UserTransaction";
interface PaymentTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
  filteredUsers: Payment[]; // ✅ Now correctly typed
}

export const PaymentTable = ({
  startIndex,
  endIndex,
  searchQuery,
  filteredUsers,
}: PaymentTableProps) => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [transaction, setTransaction] = useState<Transaction | null>(null);

  // Get paginated data
  const displayedPayments = filteredUsers.slice(startIndex, endIndex);

  // Handle Select All
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((user) => user.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle Selecting a Single User
  const handleSelectUser = (userId: string) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  // Handle User Click for Transaction Details
  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    setTransaction(getUserTransaction(userId));
    setIsDialogOpen(true);
  };

  return (
    <div className="rounded-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#F9FAFB]  ">
            <TableHead className="py-4 font-plusJakarta ">
              <input
                // Add margin to the checkbox
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="text-sm">User ID</TableHead>
            <TableHead className="text-sm">Name</TableHead>
            <TableHead className="text-sm">Email</TableHead>
            <TableHead className="text-sm">Date</TableHead>
            <TableHead className="text-sm">Package Category</TableHead>
            <TableHead className="text-sm">Amount</TableHead>
            <TableHead className="text-sm">Status</TableHead>
            <TableHead className="text-sm">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedPayments.length > 0 ? (
            displayedPayments.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell>
                  <input
                    className="h-10"
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </TableCell>
                <TableCell>
                  <button
                    onClick={() => handleUserClick(user.id)}
                    className="text-blue-600 hover:underline focus:outline-none"
                  >
                    {user.id}
                  </button>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.date}</TableCell>
                <TableCell>{user.packageCategory}</TableCell>
                <TableCell>{user.amount}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      user.type === "Paid"
                        ? "bg-[#ECFDF3] text-[#23C16B]"
                        : "bg-[#FEF3F2] text-[#FF3A3A]"
                    }`}
                  >
                    {user.type}
                  </span>
                </TableCell>
                <div className="flex justify-center items-center">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-4 h-4 mt-8" />
                  </Button>
                </div>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={8} className="text-center text-gray-500 py-4">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Transaction Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[650px]" hideCloseButton>
          {transaction && (
            <UserTransaction
              transaction={transaction}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
