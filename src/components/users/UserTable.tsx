import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import ThreeDotMenu from "@/components/common/ActonModal";
import { DataTable, Column } from "@/components/common/DataTable";
import { User } from "@/types/index";

const userColumns: Column<(User)>[] = [
  { key: "userID", header: "User ID", render: (user)=> user.UserId},
  { key: "name", header: "Name", render: (user) => user.UserGroupId },
  { key: "email", header: "Email", render: (user) => user.Email },
  { key: "phone", header: "Phone Number" },

];

interface UserTableProps {
  startIndex: number;
  endIndex: number;
  searchQuery: string;
  users?: User[];
}

export const UserTable = ({
  startIndex,
  endIndex,
  searchQuery,
  users = [],
}: UserTableProps) => {
  // const filteredUsers = users.filter((user) => {
  //   const searchStr = searchQuery.toLowerCase();
  //   return (
  //     user.id.toLowerCase().includes(searchStr) ||
  //     user.name.toLowerCase().includes(searchStr) ||
  //     user.email.toLowerCase().includes(searchStr) ||
  //     user.phone.toLowerCase().includes(searchStr)
  //   );
  // });

  // const displayedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <DataTable
      data={users}
      columns={userColumns}
      rowKey={(user) => user.UserId}
      selectable
      actions={() => <ThreeDotMenu company={undefined} />}
    />
  );
};
