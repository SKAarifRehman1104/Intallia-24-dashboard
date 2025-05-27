
import React from "react";

export const SkillLevelLegend = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap justify-between w-full max-md:max-w-full ">
      <div className="flex flex-col w- max1/2 -w-[600px]">
        <div className="flex text-[17px] text-[#444446] font-normal mb-2">
          <span>Basic</span>
          <span className="pl-[67px]">Intermediate</span>
          <span className="pl-[64px]">Advanced</span>
          <span className="pl-[126px]">Expert</span>
        </div>
        <div className="flex items-center  gap-4 w-full">
          <div className="bg-[rgba(5,154,243,1)] flex w-[100px]  h-[12px] rounded-[30px]" />
          <div className="bg-[rgba(20,196,199,1)] flex w-[150px] h-[12px] rounded-[30px]" />
          <div className="bg-[rgba(29,221,175,1)] flex w-[200px] h-[12px] rounded-[30px]" />
          <div className="bg-[rgba(39,246,151,1)] flex w-[250px] h-[12px] rounded-[30px]" />
        </div>
      </div>
    </div>
  );
};
