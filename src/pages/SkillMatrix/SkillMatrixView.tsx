import React from 'react'
import { Header } from "@/components/login/Header";
import Image5 from "@/assets/image.svg"
import  {SkillCard}  from "../SkillMatrix/SkillCard";


const skills = [
  { name: "Excel Proficiency", level: "expert" as const },
  { name: "Inventory Management", level: "advanced" as const },
  { name: "Communication Skills", level: "intermediate" as const },
  { name: "Knowledge of ERP", level: "basic" as const },
  { name: "Supply Chain KPIs" },
  { name: "Attention to Detail" },
  { name: "Power BI Proficiency" },
  { name: "Professional Email" },
  { name: "Procurement Process" },
  { name: "Cost Analysis" },
  { name: "Time Management" },
  { name: "Process Mapping" },
];

const SkillMatrixView = () => {
  return (
    <div>
      <Header />
      <div className="w-full rounded-xl my-2  bg-white mx-auto ">
        <h1 className="text-center text-5xl font-normal leading-[10rem] pl-[12%] text[#404145]">
          Skill Matrix
        </h1>
        <div className=" w-full flex pr-[100px] rounded-xl flex-wrap">
          <div className=" w-[20%] mx-auto">
            <div className="h-[204px] w-[204px] rounded-full border-2 hover:ring-4 border-spacing-10 overflow-hidden relative ring-blue-600-500 ring-">
              <img
                className="w-full h-[200px] absolute "
                src={Image5}
                alt="Image"
              />
            </div>

            <div className=" flex gap-20 mt-5 leading-[200%]">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Name:
              </p>
              <p className="font-normal text-[#7C7C80]">Alexa Campbell</p>
            </div>

            <div className=" flex gap-[22%] leading-[200%]">
              <p className="bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text font-medium">
                Gender:
              </p>
              <p className="font-normal text-[#7C7C80] ">Female</p>
            </div>

            <div className=" flex gap-[27%] leading-[200%]">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Email:
              </p>
              <p className="font-normal text-[#7C7C80]">abcd@gmail.com</p>
            </div>

            <div className=" flex gap-[24%] leading-[200%]">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Phone:
              </p>
              <p className="font-normal text-[#7C7C80]">+91 96304 27532</p>
            </div>

            <div className=" flex gap-[12%] leading-[200%]">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Experience:
              </p>
              <p className="font-normal text-[#7C7C80]">5+ Years</p>
            </div>

            <div className=" flex gap-[8%] leading-[200%] mb-2">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Qualification:
              </p>
              <p className="font-normal text-[#7C7C80]">Bcom, MBA, PHD</p>
            </div>

            <div className="flex gap-[20%] ">
              <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                Address:
              </p>
              <p className="font-normal text-[#7C7C80]">
                FH 89 Scheme no. 54 <br />
                Vijaynagar, Indore, <br /> MP, 452010
              </p>
            </div>

            <div className="flex flex-col ">
              <p className="text-[#0499F2] font-medium">Summary:</p>
              <p className="font-normal text-[#7C7C80] text-[13px] border-gray-200 border-2 px-3 py-3 rounded-2xl mt-2 ">
                Highly analytical and results-driven professional with a BCom,
                MBA, and PhD, possessing extensive experience in supply chain
                and proven ability to lead cross-functional teams and drive
                strategic initiatives. Expertise in financial modeling, data
                analysis... <br />
                <span className="text-[#09CE88] border-[#09CE88] border-1 border-b">
                  Read More
                </span>
              </p>
            </div>
          </div>

          <div className="w-[55%] h-screen">
            <div className="border-2  w-full max-w-2xl mx-auto bg-gray-100 rounded-lg flex items-center justify-start gap-[4%]">
              <div className="text-gray-800 font-semibold my-5 pl-4">
                Skill Progress Meter :
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col w-[60px]">
                  <span className="text-sm mb-1 font-normal">Basic</span>
                  <div className="w-full h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div className="flex flex-col w-[100px]">
                  <span className="text-sm mb-1 font-normal">Intermediate</span>
                  <div className="w-full h-2 bg-cyan-500 rounded-full"></div>
                </div>
                <div className="flex flex-col  w-[110px]">
                  <span className="text-sm mb-1 font-normal">Advanced</span>
                  <div className="w-full h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="flex flex-col  w-[120px]">
                  <span className="text-sm mb-1 font-normal">Expert</span>
                  <div className="w-full h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="lg:w-[85%] h-[33rem] mx-auto bg-white p-5 rounded-3xl border-2 border-gray-200 space-y-6 mt-6 ">
              <SkillCard candidateName={""} skills={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillMatrixView;
