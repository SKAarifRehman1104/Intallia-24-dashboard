import React from "react";
import sideimg from "@/assets/profilesidebar.svg";

export const ProfileSidebar: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center text-center w-full px-10 py-[35px] rounded-[20px] max-md:mt-10 max-md:px-5 border-1">
      <img
        src={sideimg}
        alt="Complete Profile"
        className="aspect-[1.34] object-contain w-full self-stretch"
      />
      <div className="text-[#242426] text-[22px] font-semibold leading-none tracking-[0.35px] mt-7">
        Complete your profile
      </div>
      <div className="text-[#7C7C80] text-[17px] font-normal leading-[22px] tracking-[-0.41px] w-[248px] mt-3.5">
        Please complete your profile to help us match you better.
      </div>
    </div>
  );
};
