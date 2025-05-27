import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import SidebarActions from "@/components/users/SidebarActions";

export const ViewPackage: React.FC = () => {
  const handleAddNewPackage = () => {
    console.log("Add New Company clicked");
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
      text: "Add New package",
      onClick: handleAddNewPackage,
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
          <h1 className="page-heading">Add New Package</h1>

          <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] bg-white flex items-stretch gap-5 flex-wrap justify-between mt-[30px] px-[45px] py-[31px] rounded-[15px]  h-[88vh] sticky top-0 overflow-y-scroll">
            {/* Package  Form*/}
            <div className="flex font-plusJakarta  flex-col gap-5 overflow-y-auto">
              <div className="w-full">
                <section className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] leading-5 ">
                          Package Name
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type="text"
                        // placeholder="Enter Package Name"
                        className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          Amount
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type="text"
                        // placeholder="Enter Amount"
                        className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          Validity(In Year)
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type=""
                        // placeholder="Enter a Validity Year"
                        className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          No .of Cash Study
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type=""
                        // placeholder="Enter a Validity Year"
                        className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          No .of Users
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type=""
                        // placeholder="Enter a Validity Year"
                        className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          Modified On
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type=""
                        placeholder="DD/MM/YYYY"
                        className="rounded border border-[#E5E5EA] bg-[#F2F2F7] min-h-12 px-4 py-3.5"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          Modified By
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Admin Name"
                        className="rounded border border-[#E5E5EA] min-h-12 px-4 py-3.5  bg-[#F2F2F7]"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-1">
                        <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                          Created By
                        </span>
                        <span className="text-[#FF3A3A] text-sm">*</span>
                      </label>
                      <input
                        type=""
                        className="rounded border border-[#E5E5EA] bg-[#F2F2F7] min-h-12 px-4 py-3.5"
                        placeholder="Admin Name"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </div>
            {/* Close */}
            <SidebarActions actions={actions} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
