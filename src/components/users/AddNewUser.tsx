import React from "react";

import { SearchBar } from "../common/SearchBar";
import { ActionButton } from "../common/ActionButton";
import { UserForm } from "./UserForm";
import { MainLayout } from "../layout/MainLayout";
import SidebarActions from "./SidebarActions";

export const AddNewUser: React.FC = () => {
  const handleDownloadResume = () => {
    console.log("Add Download Resume clicked");
  };
  const handleAddNewCompany = () => {
    console.log("Add New Company clicked");
  };

  const handleAddNewUser = () => {
    console.log("Add New User clicked");
  };

  const handleSaveAndExit = () => {
    console.log("Save & Exit clicked");
  };

  const handleSave = () => {
    console.log("Save clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const actions: {
    variant: "primary" | "outline" | "danger";
    text: string;
    onClick?: () => void;
  }[] = [
    {
      variant: "primary",
      text: "Download Resume",
      onClick: handleDownloadResume,
    },
    {
      variant: "primary",
      text: "Add New Company",
      onClick: handleAddNewCompany,
    },
    {
      variant: "primary",
      text: "Add New User",
      onClick: handleAddNewUser,
    },
    {
      variant: "outline",
      text: "Save & Exit",
      onClick: handleSaveAndExit,
    },
    { variant: "outline", text: "Save", onClick: handleSave },
    { variant: "danger", text: "Delete", onClick: handleDelete },
  ];

  return (
    <MainLayout>
      <div className="bg-[#F8F9FA] flex items-start gap-[35px] overflow-hidden flex-wrap p-8">
        <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit">
          <h1 className="page-heading">Add New User</h1>

          <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex items-stretch gap-5 flex-wrap justify-between mt-[30px] px-[45px] py-[31px] rounded-[15px] h-[88vh] sticky top-0 overflow-y-scroll">
            <UserForm />
            <SidebarActions actions={actions} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
