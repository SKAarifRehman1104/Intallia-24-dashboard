import { ChevronDown } from "lucide-react";
import React from "react";
import india from "@/assets/indiaflag.svg"



export const PersonalDetailsForm: React.FC = () => {
  return (
    <div className="mt-10 max-w-xl px-4">
      <h2 className="text-2xl font-semibold text-teal-500 mb-6 text-left">Personal Details</h2>
      <form className="space-y-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[45%]">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="max-w-full w-full rounded-md border border-gray-300 bg-teal-50 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex-1 min-w-[45%]">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="max-w-full w-full rounded-md border border-gray-300 bg-teal-50 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[45%]">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="max-w-full w-full rounded-md border border-gray-300 bg-teal-50 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
            <div className="flex-1 min-w-[45%]">
              <label className="block text-gray-700 font-medium mb-1" htmlFor="phoneNumber">
                Number
              </label>
              <div className="flex items-center rounded-md border border-gray-300 bg-teal-50 px-3">
                <div className="flex items-center gap-2 pr-8 border-r border-gray-300">
                  <img
                    src={india}
                    className="w-4 h-auto"
                  />
                  <span className="text-gray-700 font-normal">+91</span>

                    <ChevronDown size={30}/>

                </div>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="flex-1 bg-transparent text-gray-800 font-medium focus:outline-none px-6 py-2"
                />
              </div>
            </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[45%]">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="linkedUrl">
              Linked URL
            </label>
            <input
              id="linkedUrl"
              type="url"
              placeholder="url"
              className="max-w-full w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          <div className="flex-1 min-w-[45%]">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="dob">
              DOB
            </label>
            <input
              id="dob"
              type="text"
              placeholder="DD/MM/YYYY"
              className="max-w-full w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="Address"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>
      </form>
    </div>
  );
};
