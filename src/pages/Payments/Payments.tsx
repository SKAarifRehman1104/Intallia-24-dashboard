import Pagination from "@/components/common/Pagination";
import { MainLayout } from "@/components/layout/MainLayout";
import { UserTableActions } from "@/components/users/UserTableActions";
import { useState } from "react";
import { PaymentTable } from "./PaymentTable";
import { payments } from "@/data/users"; // Import payments data
import { Payment } from "@/types"; // Import Payment type

const Payments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 8;
  const totalPages = Math.ceil(payments.length / usersPerPage); // Ensure correct pagination

  // ✅ Filter users based on search query
  const filteredUsers: Payment[] = payments
    .map((payment) => ({
      ...payment,
      amount: Number(payment.amount), // Ensure amount is a number
    }))
    .filter((payment) =>
      [
        payment.id?.toString(),
        payment.name?.toLowerCase(),
        payment.email?.toLowerCase(),
      ].some((field) => field?.includes(searchQuery.toLowerCase())),
    );

  // ✅ Calculate correct start and end index
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = Math.min(startIndex + usersPerPage, filteredUsers.length);

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading">Payment</h1>
            </div>

            <UserTableActions onSearch={setSearchQuery} />
            <div className="bg-white p-6 rounded-lg">
              {/* ✅ Pass the filtered users correctly */}
              <PaymentTable
                startIndex={startIndex}
                endIndex={endIndex}
                searchQuery={searchQuery}
                filteredUsers={filteredUsers} // Now properly defined
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Payments;
