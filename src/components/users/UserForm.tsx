import React from "react";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";

export const UserForm: React.FC = () => {
  return (
    <div className="flex font-plusJakarta  flex-col gap-5 overflow-y-auto">
      <div className="w-full">
        <section className="">
          <h2 className="text-xl font-medium tracking-[0.38px] bg-clip-text bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-transparent ">
            Personal Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] leading-5 ">
                  First Name
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                  Last Name
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                  Email
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                  Number
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <div className="flex items-center rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/b3e578b8881e144097eda901ab80255224febf55ffe07d1428a77e2beb4c1939"
                      alt="Country flag"
                      className="w-5 h-3.5"
                    />
                    <span>+91</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/4e93f2d3d72f4b58b47d979bd758d34a/610bae2bd3fec3226daeb553c69952d46dcb01bf137f75b31b35e8b80820ae1e"
                      alt="Dropdown"
                      className="w-4 h-4"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="12344568"
                    className="w-full outline-none placeholder:pl-4 placeholder:text-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                  LinkedIn URL
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <input
                type="url"
                placeholder="Enter LinkedIn URL"
                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1">
                <span className="text-[15px] text-[#444446] tracking-[-0.24px]">
                  DOB
                </span>
                <span className="text-[#FF3A3A] text-sm">*</span>
              </label>
              <input
                type="date"
                className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <label className="flex items-center gap-1">
              <span className="text-[15px] text-[#444446] font-normal">
                Company Name
              </span>
              <span className="text-[#FF3A3A] text-sm">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter company name"
              className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
            />
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <label className="flex items-center gap-1">
              <span className="text-[15px] text-[#444446] font-normal">
                Address
              </span>
              <span className="text-[#FF3A3A] text-sm">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="rounded border border-[#E5E5EA] bg-white min-h-12 px-4 py-3.5"
            />
          </div>
        </section>

        <EducationSection onAdd={() => console.log("Add education")} />
        <ExperienceSection onAdd={() => console.log("Add experience")} />
      </div>
    </div>
  );
};
