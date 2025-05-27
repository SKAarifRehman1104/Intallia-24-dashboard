import { useState } from "react";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer 
          transition-all duration-300 ${
            isOn ? "bg-gradient-to-r from-cyan-400 to-green-400" : "bg-gray-300"
          }`}
        onClick={() => setIsOn(!isOn)}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transform 
            transition-all duration-300 ${
              isOn ? "translate-x-6" : "translate-x-0"
            }`}
        ></div>
      </div>
    </div>
  );
}
