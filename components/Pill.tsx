import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 border rounded-full bg-gray-200 hover:bg-gray-300 transition"
    >
      {label}
    </button>
  );
};

export default Pill;
