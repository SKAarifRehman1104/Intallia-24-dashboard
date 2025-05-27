

import React from "react";
import { Transaction } from "@/types";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserTransactionProps {
  transaction: Transaction;
  onClose: () => void;
}

export const UserTransaction = ({ transaction, onClose }: UserTransactionProps) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#06B2E1]">Transaction</h2>
        <button
          onClick={onClose}
          className="rounded-full p-1 hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Name
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.userName}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Package Name
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.packageName}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.email}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone No.
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3 flex items-center">
            <span className="flex items-center mr-2">
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="India"
                className="h-4 mr-1"
              />
              +91
            </span>
            <span>{transaction.phoneNo.split(" ")[1]}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.amount}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Coupon
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.coupon}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.date}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Status
          </label>
          <div className="bg-gray-100 rounded-md px-4 py-3">
            {transaction.status}
          </div>
        </div>
      </div>

      <div className="mt-8 flex space-x-4">
        <Button
          className="bg-[#06B2E1] hover:bg-[#06B2E1]/90"
        >
          Download Invoice
        </Button>
        <Button
          variant="outline"
          className="border-[#06B2E1] text-[#06B2E1] hover:bg-[#06B2E1]/10"
        >
          Print Invoice
        </Button>
      </div>
    </div>
  );
};
