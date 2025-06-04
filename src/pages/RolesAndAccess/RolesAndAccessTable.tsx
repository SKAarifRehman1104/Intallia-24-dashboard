import { Badge } from "@/components/ui/badge";
import ActionModal from "@/components/common/ActonModal";
import { DataTable, Column } from "@/components/common/DataTable";
import { Roles } from "@/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserGroup } from "@/http/api.js";

const RolesAndAccessTable = ({
  startIndex,
  endIndex,
  searchQuery,
  users = [],
}: {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
  users?: Roles[];
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isUserRoleAccessRoute = location.pathname === "/user-role-&-access";

  // React Query mutation for deleting a user group
  const deleteUserGroupMutation = useMutation({
    mutationFn: async ({ UserGroupId, CompanyId }: { UserGroupId: string; CompanyId: string }) => {
      const payload = {
        JSON: JSON.stringify({
          Header: [{ UserGroupId, CompanyId }],
          Response: [{ ResponseText: "", ErrorCode: "" }],
        }),
      };
      return await deleteUserGroup(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userGroups"] });
      window.location.reload();
    },
  });

  const userColumns: Column<Roles>[] = [
    {
      key: "UserGroupId",
      header: "User Group ID",
      render: (user) =>
        isUserRoleAccessRoute ? (
          <Link to={`/user-group-permissions/${user.UserGroupId}`} className="text-blue-600 hover:underline">
            {user.UserGroupId}
          </Link>
        ) : (
          user.UserGroupId
        ),
    },
    { key: "CompanyId", header: "Company ID", render: (user) => user.CompanyId },
    { key: "Description", header: "Description", render: (user) => user.Description },
  ];

  return (
    <DataTable
      data={users}
      columns={userColumns}
      rowKey={(user) => user.UserGroupId}
      selectable
      actions={(user) => (
        <ActionModal
          onEdit={() => navigate(`/user-group-permissions/${user.UserGroupId}`)}
          onDelete={() =>
            deleteUserGroupMutation.mutate({
              UserGroupId: user.UserGroupId,
              CompanyId: user.CompanyId,
            })
          }
          editLabel="Edit"
          deleteLabel={deleteUserGroupMutation.isPending ? "Deleting..." : "Delete"}
          disabled={deleteUserGroupMutation.isPending}
        />
      )}
    />
  );
};

export default RolesAndAccessTable;
