import { Badge } from "@/components/ui/badge";
import { Company } from "@/types/index";
import ActionModal from "@/components/common/ActonModal";
import { DataTable, Column } from "@/components/common/DataTable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCompany } from "@/http/api.js";
import { useNavigate } from "react-router-dom";
import React from "react";

const tableColumns: Column<Company>[] = [
  {
    key: "companyid",
    header: "Company ID",
    render: (company) => company.CompanyId,
  },
  {
    key: "name",
    header: "Company Name",
    render: (company) => company.CompanyName,
  },
  {
    key: "email",
    header: "Email",
    render: (company) => (
      <span
        className="inline-block max-w-full truncate overflow-hidden whitespace-nowrap cursor-pointer"
        title={company.Email}
      >
        {company.Email}
      </span>
    ),
  },
  {
    key: "phone",
    header: "Phone Number",
    render: (company) => company.PhoneNumber,
  },
  {
    key: "status",
    header: "Status",
    render: (company) => {
      const status = company.Status
        ? company.Status.charAt(0).toUpperCase() + company.Status.slice(1).toLowerCase()
        : "";
      return (
        <Badge
          variant="secondary"
          className={
            status === "Active"
              ? "bg-[#ECFDF3] text-[#23C16B]"
              : status === "Inactive"
              ? "bg-[#FEF3F2] text-[#FF3A3A]"
              : ""
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    key: "website",
    header: "Website",
    render: (company) => (
      <span
        className="inline-block max-w-full truncate overflow-hidden whitespace-nowrap cursor-pointer text-blue-600"
        title={company.Website}
      >
        {company.Website}
      </span>
    ),
  },
];

interface CTableProps {
  searchQuery: string;
  companies: Company[];
}

export const CTable = ({
  searchQuery,
  companies,
}: CTableProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteCompanyMutation = useMutation({
    mutationFn: async (companyId: string) => {
      const payload = {
        JSON: JSON.stringify({
          Header: [{ CompanyId: companyId }],
          Response: [{ ResponseText: "", ErrorCode: "" }],
        }),
      };
      return await deleteCompany(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["companies"] });
    },
  });

  return (
    <DataTable
      data={companies}
      columns={tableColumns}
      rowKey={(company) => company.CompanyId}
      selectable
      actions={(company) =>
        company && company.CompanyId ? (
          <ActionModal
            onEdit={() => navigate(`/add-company?companyId=${company.CompanyId}`)}
            onDelete={() => deleteCompanyMutation.mutate(company.CompanyId)}
            deleteLabel={deleteCompanyMutation.isPending ? "Deleting..." : "Delete"}
            disabled={deleteCompanyMutation.isPending}
          />
        ) : null
      }
    />
  );
};
