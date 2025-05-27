import React from "react";
import profileImg from "@/assets/headerIcon.svg";

export const Header: React.FC = () => {
  return (
    <div className="shadow-[0px_4px_10px_0px_rgba(0,0,0,0.05)] bg-white flex w-full flex-col items-center text-center justify-center px-[70px] py-[9px] max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1650px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
        <div className="flex gap-0.5">
          <div className="flex flex-col justify-center">
          <img src="/Group 2337.svg" alt="" />
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/9a046439126958e6faf921914c1c658b679babfd?placeholderIfAbsent=true"
          alt="Profile"
          className="aspect-[1] object-contain w-10 shrink-0 my-auto rounded-[50%]"
        />
      </div>
    </div>
  );
};
