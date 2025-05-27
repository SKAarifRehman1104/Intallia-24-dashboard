import React from 'react'
import Image5 from '@/assets/Ellipse 3.svg';
import { MainLayout } from "@/components/layout/MainLayout";
import { PackageX } from 'lucide-react';
import { SkillCard } from '../SkillCard.js';
import ViewSkillAttemptTable from './ViewSkillAttemptTable.jsx'

const skills = [
  { name: "HTML/CSS", level: "expert" as const },
  { name: "Java Script", level: "advanced" as const },
  { name: "Python", level: "intermediate" as const },
  { name: "SQL", level: "basic" as const },
  { name: "CI/CD Tools" },
  { name: "Cloud\nServices" },
  { name: "Security\nProtocols" },
  { name: "Problem\nSolving" },
  { name: "Team\nCollaboration" },
  { name: "Writing\nDocumentation" },
];


const ViewSkillMatrix = () => {
  return (
    <MainLayout>
      <div className="flex min-h-screen bg-background">
        <main className="flex-1 p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="page-heading">Alexa Campbell</h1>

              <div className="flex gap-3">
                <button className="bg-[rgba(6,178,225,1)] self-stretch text-white font-semibold my-auto px-4 py-2 rounded-[48px]">
                  Download PDF
                </button>
                <button className="border self-stretch my-auto px-4 py-2 rounded-[48px] border-[rgba(6,178,225,1)] border-solid">
                  Share Skill Matrix
                </button>
              </div>
            </div>

            <div className="w-full  rounded-xl my-2 flex-wrap bg-white mx-auto ">
              <div className=" w-full flex px-16 py-16 rounded-xl flex-wrap">
                <div className=" w-[45%]  mx-auto">
                  <div className="h-[204px] w-[204px] rounded-full border-2 hover:ring-4 border-spacing-10 overflow-hidden relative">
                    <img
                      className="w-[100%] h-[200px] absolute "
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

                  <div className=" flex gap-[12%] leading-[200%]">
                    <p className="bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text font-medium">
                      Gender:
                    </p>
                    <p className="font-normal text-[#7C7C80]">Female</p>
                  </div>

                  <div className=" flex gap-[15%] leading-[200%]">
                    <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                      Email:
                    </p>
                    <p className="font-normal text-[#7C7C80]">abcd@gmail.com</p>
                  </div>

                  <div className=" flex gap-[13%] leading-[200%]">
                    <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                      Phone:
                    </p>
                    <p className="font-normal text-[#7C7C80]">
                      +91 96304 27532
                    </p>
                  </div>

                  <div className=" flex gap-[7%] leading-[200%]">
                    <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                      Experience:
                    </p>
                    <p className="font-normal text-[#7C7C80]">5+ Years</p>
                  </div>

                  <div className=" flex gap-[4%] leading-[200%] mb-2">
                    <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                      Qualification:
                    </p>
                    <p className="font-normal text-[#7C7C80]">Bcom, MBA, PHD</p>
                  </div>

                  <div className="flex gap-[11%] ">
                    <p className="font-medium bg-gradient-to-l from-[#09CE88] to-[#06B2E1] text-transparent bg-clip-text">
                      Address:
                    </p>
                    <p className="font-normal text-[#7C7C80]">
                      FH 89 Scheme no. 54 <br />
                      Vijaynagar, Indore, <br /> MP, 452010
                    </p>
                  </div>

                  <div className="flex flex-col   leading-[200%]">
                    <p className="text-[#0499F2] font-medium">Summary:</p>
                    <p className="font-normal text-[#7C7C80] border-gray-200 border-2 px-3 py-3 rounded-2xl mt-2 text-sm w-[58%] ">
                      Lorem ipsum dolor sit amet consectetur. Sit consectetur
                      neque rhoncus tincidunt. Vitae ultricies turpis platea
                      arcu. Ac condimentum netus tincidunt pellentesque maecenas
                      nunc luctus venenatis mauris. Semper lacus enim libero
                      urna id feugiat. Integer iaculis nunc risus penatibus
                      egestas. Lectus. <br />
                      <span className="text-[#09CE88] border-[#09CE88] border-1 border-b">
                        Read More
                      </span>
                    </p>
                  </div>
                </div>

                <div className="w-[55%] h-screen">
                  <div className="border-2 p-4 w-full max-w-2xl mx-auto bg-gray-100 rounded-2xl flex items-center justify-start gap-[3%]">
                    <div className="text-gray-800 font-semibold mb-2">
                      Skill Progress Meter :
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex flex-col w-[60px]">
                        <span className="text-sm mb-1">Basic</span>
                        <div className="w-full h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex flex-col w-[100px]">
                        <span className="text-sm mb-1">Intermediate</span>
                        <div className="w-full h-3 bg-cyan-500 rounded-full"></div>
                      </div>
                      <div className="flex flex-col  w-[110px]">
                        <span className="text-sm mb-1">Advanced</span>
                        <div className="w-full h-3 bg-emerald-400 rounded-full"></div>
                      </div>
                      <div className="flex flex-col  w-[120px]">
                        <span className="text-sm mb-1">Expert</span>
                        <div className="w-full h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-[100%] mx-auto bg-white p-6 rounded-lg border-2 border-gray-200 space-y-6 mt-6 ">
                    <SkillCard candidateName={""} skills={skills} />
                  </div>
                </div>
                <ViewSkillAttemptTable />
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default ViewSkillMatrix
