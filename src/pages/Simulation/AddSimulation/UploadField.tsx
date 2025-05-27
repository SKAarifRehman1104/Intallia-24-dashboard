import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface UploadFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  icon: string;
  placeholder?: string;
  className?: string;
}

export const UploadField = ({
  label,
  required,
  icon,
  placeholder = "Upload",
  className,
  ...props
}: UploadFieldProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (file) {
      // Check file size (limit to 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);

      // Create preview for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPreviewUrl(null);
      }

      toast({
        title: "File selected",
        description: `${file.name} has been selected`,
      });
    }
  };

  return (
    <div className={`flex flex-col items-stretch ${className}`}>
      <div className="flex items-center gap-1">
        <label className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
          {label}
        </label>
        {required && (
          <span className="text-[#FF3A3A] text-sm leading-none">*</span>
        )}
      </div>

      <label className="cursor-pointer">
        <div className="items-center rounded border border-[color:var(--grey-grey-00,#E5E5EA)] bg-white flex min-h-12 w-full gap-2 text-base text-[#7C7C80] tracking-[-0.32px] leading-none mt-2 px-4 py-3.5 border-solid hover:bg-gray-50 transition-colors">
          <img
            src={icon}
            className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            alt="Upload icon"
          />
          <span className="self-stretch flex-1 shrink basis-[0%] my-auto truncate">
            {selectedFile ? selectedFile.name : placeholder}
          </span>
          {previewUrl && (
            <div className="w-8 h-8 rounded overflow-hidden">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          {...props}
        />
      </label>
    </div>
  );
};
