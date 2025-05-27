import React, { useState, useRef, useEffect } from "react";

const ThreeDotMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleAction = (label: string) => {
    alert(`You clicked: ${label}`);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="text-gray-600 hover:text-black text-2xl px-2 focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
      >
        ⋮
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-gray-200 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              type="button"
              onClick={() => handleAction("Assign Simulation")}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Assign Simulation
            </button>
            <button
              type="button"
              onClick={() => handleAction("View score board")}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View score board
            </button>
            <button
              type="button"
              onClick={() => handleAction("View Skill Matrix")}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              View Skill Matrix
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThreeDotMenu;
