import { useState } from "react";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";
import { UploadField } from "./UploadField";
import { RichTextEditorField } from "./RichTextEditor";
import { useToast } from "@/hooks/use-toast";

export const SimulationForm = () => {
  const [simulationType, setSimulationType] = useState<"guided" | "unguided">(
    "unguided",
  );
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Your simulation has been saved successfully",
    });
  };

  const softwareOptions = [
    { value: "excel", label: "MS Excel" },
    { value: "word", label: "MS Word" },
    { value: "sheets", label: "Google Sheets" },
    { value: "docs", label: "Google Docs" },
    { value: "powerpoint", label: "MS Powerpoint" },
    { value: "slides", label: "Google Slides" },
  ];

  return (
    <div className="shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.04)] bg-white w-[90%] pt-[50px] pb-[27px] px-[37px] rounded-[15px] ">
      <div className="flex items-stretch gap-5 flex-wrap justify-between mr-[26px] ">
        <h2 className="text-[#242426] text-[28px] font-medium leading-none tracking-[0.36px] my-auto">
          Simulation Details
        </h2>
        <div className="flex items-center gap-[35px] flex-wrap">
          <div className="self-stretch flex items-center gap-4 text-xl text-[#444446] font-normal tracking-[0.38px] leading-none my-auto">
            <button
              type="button"
              className={`border flex items-center justify-center w-6 h-6 rounded-[32px] ${
                simulationType === "guided"
                  ? "bg-[rgba(6,178,225,1)] border-[rgba(6,178,225,1)]"
                  : "border-[#AEAEB2] bg-white"
              }`}
              onClick={() => setSimulationType("guided")}
            >
              {simulationType === "guided" && (
                <div className="bg-white w-2 h-2 rounded-[50%]" />
              )}
            </button>
            <span>Guided</span>
          </div>
          <div className="self-stretch flex items-center gap-4 my-auto">
            <button
              type="button"
              className={`border flex items-center justify-center w-6 h-6 rounded-[32px] ${
                simulationType === "unguided"
                  ? "bg-[rgba(6,178,225,1)] border-[rgba(6,178,225,1)]"
                  : "border-[#AEAEB2] bg-white"
              }`}
              onClick={() => setSimulationType("unguided")}
            >
              {simulationType === "unguided" && (
                <div className="bg-white w-2 h-2 rounded-[50%]" />
              )}
            </button>
            <span className="text-[#444446] text-xl font-normal leading-none tracking-[0.38px]">
              Unguided
            </span>
          </div>
          <button
            type="button"
            className="justify-between items-center border border-[color:var(--grey-grey-04,#444446)] flex gap-[40px_68px] text-[17px] text-[#444446] font-medium text-center tracking-[-0.41px] leading-none pl-4 pr-2 py-2 rounded-[48px] border-solid"
          >
            <span>Select Plane</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/c1ed2dff96220200dee317799ff4d00c80aa88e8a7af842030db007fa42e5c04?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-4"
              alt="Dropdown"
            />
          </button>
        </div>
      </div>

      <form
        className="flex w-full flex-col items-stretch mt-[38px]"
        onSubmit={handleSubmit}
      >
        <TextField label="Simulation Name" required placeholder="Placeholder" />

        <TextField
          label="Card Description"
          required
          placeholder="Placeholder"
          className="mt-5"
        />

        <div className="flex w-full items-center gap-[40px_43px] flex-wrap mt-5">
          <UploadField
            label="Banner Image"
            required
            icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/4f4c37bf79ac39c63cfd3f17512a0d4b2cc7f5dd8775a1f5e2820849e33251f4?placeholderIfAbsent=true"
            placeholder="Upload Image"
            accept="image/*"
            className="w-[258px]"
          />
          <UploadField
            label="CTA Image"
            required
            icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/09e525f7fd5c650a63b5a7eb7cf1817612637b63dbbb02ff315c1de45ce98861?placeholderIfAbsent=true"
            placeholder="Upload Image"
            accept="image/*"
            className="w-[258px]"
          />
          <UploadField
            label="Card Image"
            required
            icon="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/bed87d6a4dc002519dad27c2456b96bf200e2c334181b0911b2f0b69d2941a8f?placeholderIfAbsent=true"
            placeholder="Upload Image"
            accept="image/*"
            className="w-[256px]"
          />
        </div>

        <div className="flex w-full items-center gap-[40px_67px] flex-wrap mt-5">
          <SelectField
            label="Difficulty Level"
            required
            className="flex-1 w-[362px]"
          />

          <SelectField
            label="Select Software"
            required
            className="flex-1 w-[362px]"
            options={softwareOptions}
          />
        </div>

        <TextField
          label="Tags"
          required
          defaultValue="English, Communication"
          className="mt-5 "
        />

        <RichTextEditorField
          label="Description"
          required
          onChange={setDescription}
        />

        <button
          type="submit"
          className="bg-[rgba(6,178,225,1)] gap-2.5 text-xl text-white font-semibold  text-start tracking-[0.38px] leading-none mt-5 px-8 py-4 rounded-[48px] w-[113px] h-[57px]"
        >
          Save
        </button>
      </form>
    </div>
  );
};
