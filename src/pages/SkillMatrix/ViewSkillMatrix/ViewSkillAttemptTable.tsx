import React, { useState } from "react";

const ViewSkillAttemptTable = () => {
  const [activeTab, setActiveTab] = useState(1);

  const data = [
    { id: 1, task: "Lorem ipsum dolor sit amet consectetur...", result: "Correct" },
    { id: 2, task: "Lorem ipsum dolor sit amet consectetur...", result: "Correct" },
    { id: 3, task: "Lorem ipsum dolor sit amet consectetur...", result: "Correct" },
    { id: 4, task: "Lorem ipsum dolor sit amet consectetur...", result: "Correct" },
  ];

  return (
    <div className=" w-full p-4">
      {/* Tabs */}
      <div className="flex gap-20 ">
        {[1, 2, 3].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm font-medium w-full ${
              activeTab === tab
                ? "text-[#0499F2] border-b-2 border-[#0499F2]"
                : "text-gray-400 "
            }`}
          >
            Attempt {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-4 md:w-full">
        <table className="min-w-full w-full table-auto">
          <thead className="text-left bg-gray-50 text-gray-600 border-2 border-gray-100 w-full">
            <tr className="w-full">
              <th className="px-4 py-2 text-sm font-medium ">S.no</th>
              <th className="px-4 py-2 text-sm font-medium">Task</th>
              <th className="px-4 py-2 text-sm font-medium">Result</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border  hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-700">{row.id}</td>
                <td className=" px-4 py-3 text-sm text-gray-700 ">
                  {row.task}
                </td>
                <td
                  style={{ background: "#ECFDF3", width: "75px" }}
                  className={`rounded-full flex text-xs px-4 py-2  mt-1 font-medium
    ${
      row.result === "Correct"
        ? "bg-green-300 text-[#23C16B]"
        : "bg-red-300 text-red-600"
    }`}
                >
                  {row.result}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewSkillAttemptTable;
