import React from "react";
import { useNavigate } from "react-router-dom";

interface SimulationCardProps {
  title: string;
  description: string;
  createdDate: string;
  isGuided?: boolean;
  isPaid?: boolean;
  id?: number;
}

export const SimulationCard: React.FC<SimulationCardProps> = ({
  title,
  description,
  createdDate,
  isGuided,
  isPaid,
  id = 1,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/simulation/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="text-left shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.04)] bg-white flex flex-col items-stretch justify-center w-[225px] h-[260px] px-4 py-[30px] rounded-[15px]"
    >
      <div className="flex flex-col items-stretch h-full px-5">
        <div className="w-full">
          <div className="text-[22px] font-medium leading-[28px] tracking-[0.36px] bg-clip-text bg-[linear-gradient(90deg,#0DAFDC_0%,#22E9A2_100%)] text-center font-plusJakarta text-[#06B2E1] ">
            <h1 className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              {title}
            </h1>
          </div>
          <div className="text-[#7C7C80]  font-regular  tracking-[-0.32px] mt-[12px] text-center text-[12px] ">
            {description}
          </div>
        </div>
        <div className="self-center w-full max-w-full text-sm text-[#242426] font-normal tracking-[-0.32px] leading-none mt-auto text-center font-regular">
          <div>Created On: {createdDate}</div>
          {isGuided && <div className="mt-[10px] ">Guided</div>}
          {isPaid && <div className="mt-[10px]">Paid</div>}
        </div>
      </div>
    </button>
  );
};
