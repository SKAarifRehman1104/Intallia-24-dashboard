import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, StickyNote } from "lucide-react";

const transactions = [
  {
    name: "Olivia Rhye",
    email: "OliviaRhye@gmail.com",
    category: "Data Science",
    date: "04/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Jackson Smith",
    email: "jackson.s@gmail.com",
    category: "Machine Learning",
    date: "04/05/2024",
    amount: "₹ 55,000",
  },
  {
    name: "Emma Wilson",
    email: "emma.w@gmail.com",
    category: "Web Development",
    date: "03/05/2024",
    amount: "₹ 35,000",
  },
  {
    name: "Liam Johnson",
    email: "liam.j@gmail.com",
    category: "Data Science",
    date: "03/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Sophia Brown",
    email: "sophia.b@gmail.com",
    category: "Machine Learning",
    date: "02/05/2024",
    amount: "₹ 50,000",
  },
  {
    name: "Noah Davis",
    email: "noah.d@gmail.com",
    category: "Web Development",
    date: "02/05/2024",
    amount: "₹ 40,000",
  },
  {
    name: "Ava Miller",
    email: "ava.m@gmail.com",
    category: "Data Science",
    date: "01/05/2024",
    amount: "₹ 45,000",
  },
  {
    name: "Lucas Garcia",
    email: "lucas.g@gmail.com",
    category: "Machine Learning",
    date: "01/05/2024",
    amount: "₹ 55,000",
  },
  {
    name: "Isabella Martinez",
    email: "isabella.m@gmail.com",
    category: "Web Development",
    date: "30/04/2024",
    amount: "₹ 35,000",
  },
  {
    name: "Mason Anderson",
    email: "mason.a@gmail.com",
    category: "Data Science",
    date: "30/04/2024",
    amount: "₹ 45,000",
  },
];

export function TransactionsTable() {
  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="pt-6 px-6 flex items-center justify-between">
        <h2 className="font-medium font-plusJakarta text-[22px] leading-[28px]">
          Transactions
        </h2>

        <Button
          variant="outline"
          className=" text-[#06B2E1] px-2 py-4 font-medium w-32 text-base  ring-[#06B2E1] rounded-full ring-1 border-[#06B2E1] hover:bg-[#06B2E1] hover:text-white"
        >
          Export to PDF
        </Button>
      </div>

      <ScrollArea className="h-[400px] p-6">
        <Table>
          <TableHeader className="bg-[#F9FAFB]">
            <TableRow>
              <TableHead className="py-4 px-6">Name</TableHead>
              <TableHead className="py-4 px-6">Email</TableHead>
              <TableHead className="py-4 px-6">Package Category</TableHead>
              <TableHead className="py-4 px-6">Date</TableHead>
              <TableHead className="py-4 px-6">Amount</TableHead>
              <TableHead className="py-4 px-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="py-4 px-6">{transaction.name}</TableCell>
                <TableCell className="py-4 px-6">{transaction.email}</TableCell>
                <TableCell className="py-4 px-6">
                  {transaction.category}
                </TableCell>
                <TableCell className="py-4 px-6">{transaction.date}</TableCell>
                <TableCell className="py-4 px-6">
                  {transaction.amount}
                </TableCell>
                <TableCell className="py-4 px-6">
                  <Button variant="ghost" size="sm" className="gap-2 ">
                    <div className="  rounded-full flex items-center gap-2">
                      <div className="p-2 bg-[#06B2E1] rounded-full text-white">
                        <StickyNote className="w-4 h-4  " />
                      </div>
                      Download Invoice
                    </div>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}
