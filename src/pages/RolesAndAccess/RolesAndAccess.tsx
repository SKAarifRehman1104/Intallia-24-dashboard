import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getScreen } from "@/http/api.js"; // using getScreen from your existing api.js
import { MainLayout } from "@/components/layout/MainLayout";
import { UserTableActions } from "@/components/users/UserTableActions";
import Pagination from "@/components/common/Pagination";
import RolesAndAccessTable from "./RolesAndAccessTable";
import { autoTable } from "jspdf-autotable";
import { jsPDF } from "jspdf";
import * as XLSX from "xlsx";

const RolesAndAccess = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const payload = {
    ScreenName: "UserGroup",
    LookUpKey: "GetList",
    Filter1: "",
    Filter2: "",
    Filter3: "",
    Filter4: "",
    Filter5: "",
  };

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["userGroups"],
    queryFn: () => getScreen(payload),
    enabled: false, // prevent automatic fetching
    select: (res) => res?.LookupData || [],
  });

  useEffect(() => {
    refetch();
  }, []);

  const filteredData = useMemo(() => {
    return (data || []).filter(
      (item) =>
        item?.UserGroupId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item?.Description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [data, searchQuery]);

  const usersPerPage = 8;
  const totalPages = Math.ceil(filteredData.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = filteredData.slice(startIndex, endIndex);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const headers = ["UserGroupId", "CompanyId", "Description", "Status"];
    const body = filteredData.map((usergroup) => [
      usergroup.UserGroupId ?? "",
      usergroup.CompanyId ?? "",
      usergroup.Description ?? "",
      usergroup.Status ?? "",
    ]);

    autoTable(doc, {
      head: [headers],
      body,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [13, 175, 220] },
    });
    doc.save("usergroup.pdf");
  };

  const exportInExcel = () => {
    const headers = ["UserGroupId", "CompanyId", "Description", "Status"];
    const worksheet = XLSX.utils.json_to_sheet(filteredData, { header: headers });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserGroups");
    XLSX.writeFile(workbook, "usergroups.xlsx");
  };

  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading">Roles And Access</h1>
            </div>

            <UserTableActions
              onSearch={setSearchQuery}
              exportInExcel={exportInExcel}
              handleDownload={handleDownloadPDF}
            />

            <div className="bg-white p-6 rounded-lg">
              {isLoading ? (
                <p>Loading...</p>
              ) : isError ? (
                <p className="text-red-500">Failed to fetch data.</p>
              ) : (
                <>
                  <RolesAndAccessTable
                    users={paginatedUsers}
                    startIndex={startIndex}
                    endIndex={endIndex}
                    searchQuery={searchQuery}
                  />
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default RolesAndAccess;
