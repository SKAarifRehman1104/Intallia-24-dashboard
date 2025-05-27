import React from 'react'
import ViewSkillAttemptTable from "./ViewSkillAttemptTable.jsx";
import { Header } from "@/components/login/Header";
import {Button} from "@/components/ui/button.js"
import Dropdown from "@/pages/SkillMatrix/ViewSkillMatrix/Dropdown.tsx"

const Score = () => {
  return (
    <div className='bg-white'>
      <Header />
      <div className="container">
        <h1 className="text-center font-normal font-plusJakarta text-[47px] tracking-[0]  text-[#404145] pt-5">
          Scoring
        </h1>
        <p className="text-center font-normal text-lg text-[#62646A] leading-[70px] ">
          Lorem ipsum dolor sit amet consectetur. Aliquam vitae risus volutpat.
        </p>

        <div className="text-center">
          <Dropdown />

          <Button className="text-white my-5 w-[300px] h-[50px]">
            Go To Skill Matrix
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#e3e3e3"
            >
              <path
                d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"
                className="text-white"
              />
            </svg>
          </Button>
        </div>
        <div>
          <ViewSkillAttemptTable />
        </div>
      </div>
    </div>
  );
}

export default Score
