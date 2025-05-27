
import React from "react";

interface FormButtonsProps {
  onSave: () => void;
  onSendInvite: () => void;
  onClose?: () => void;
}

export const FormButtons: React.FC<FormButtonsProps> = ({ onSave, onSendInvite, onClose }) => {
  const handleSave = () => {
    onSave();
    if (onClose) onClose();
  };

  return (
    <div className="flex gap-[30px] text-xl text-white font-semibold text-center tracking-[0.38px] leading-none mt-[30px]">
      <button
        onClick={onSendInvite}
        className="bg-[rgba(6,178,225,1)] gap-2.5 px-8 py-4 rounded-[48px] max-md:px-5 hover:opacity-90 transition-opacity"
      >
        Send Invite
      </button>
      <button
        onClick={handleSave}
        className="bg-[rgba(6,178,225,1)] gap-2.5 px-8 py-4 rounded-[48px] max-md:px-5 hover:opacity-90 transition-opacity"
      >
        Save
      </button>
    </div>
  );
};

export default FormButtons;
