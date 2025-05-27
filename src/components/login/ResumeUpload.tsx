
import React from "react";

export const ResumeUpload: React.FC = () => {
  return (
    <div className="mt-10 max-w-xl px-4">
      <h2 className="text-2xl font-semibold text-teal-500 mb-6 text-left">Resume Upload</h2>
      <div>
        <label
          className="block text-gray-700 font-medium mb-1"
          htmlFor="resume-upload"
        >
          Upload Resume
        </label>
        <label className="flex items-center w-full bg-white border border-gray-300 px-3 py-2 rounded-md cursor-pointer hover:bg-teal-50 transition-colors text-gray-500 text-base font-normal">
          <span className="flex-1">PDF, DOC (Max 10MB)</span>
          <input
            type="file"
            id="resume-upload"
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/0ab1356627588e59c3c9e660b38afeae87550f61?placeholderIfAbsent=true"
            alt="Upload"
            className="w-5 h-5 ml-2"
            draggable={false}
          />
        </label>
      </div>
    </div>
  );
};
