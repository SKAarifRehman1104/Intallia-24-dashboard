import { SelectHTMLAttributes } from "react";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options?: { value: string; label: string }[];
}

export const SelectField = ({
  label,
  required,
  options = [],
  ...props
}: SelectFieldProps) => {
  return (
    <div className="flex flex-col items-stretch">
      <div className="flex items-center gap-1">
        <label className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
          {label}
        </label>
        {required && (
          <span className="text-[#FF3A3A] text-sm leading-none">*</span>
        )}
      </div>
      <div className="items-center rounded border border-[color:var(--grey-grey-00,#E5E5EA)] bg-white flex min-h-12 w-full gap-2 text-base text-[#7C7C80] whitespace-nowrap tracking-[-0.32px] leading-none mt-2 px-4 py-3 border-solid">
        <select
          className="self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent outline-none"
          {...props}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
