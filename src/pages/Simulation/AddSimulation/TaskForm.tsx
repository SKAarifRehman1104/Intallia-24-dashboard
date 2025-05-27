import { useState } from "react";
import { TextField } from "./TextField";
import { SelectField } from "./SelectField";
import { RichTextEditorField } from "./RichTextEditor";
import { useToast } from "@/hooks/use-toast";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Image,
  Link,
  File,
  Video,
  Undo,
  Redo,
} from "lucide-react";

interface Task {
  id: string;
  description: string;
  sheetName?: string;
  cellLocation?: string;
  selectType?: "Cell" | "Range";
  fromRange?: string;
  toRange?: string;
  skillName?: string;
  skillScore?: string;
  hint?: string;
}

interface TaskFormProps {
  sectionId: string;
  software: string;
  taskNumber: number;
  onAddTask: (task: Task) => void;
}

export const TaskForm = ({
  sectionId,
  software,
  taskNumber,
  onAddTask,
}: TaskFormProps) => {
  const { toast } = useToast();
  const [selectType, setSelectType] = useState<"Cell" | "Range">("Cell");
  const [description, setDescription] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [cellLocation, setCellLocation] = useState("");
  const [fromRange, setFromRange] = useState("");
  const [toRange, setToRange] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillScore, setSkillScore] = useState("");
  const [hint, setHint] = useState("");

  const isExcelOrSheets =
    software === "MS Excel" || software === "Google Sheets";

  const handleSubmit = () => {
    if (!description) {
      toast({
        title: "Error",
        description: "Task Description is required",
        variant: "destructive",
      });
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      description,
      ...(isExcelOrSheets && { sheetName }),
      ...(isExcelOrSheets && { selectType }),
      ...(isExcelOrSheets && selectType === "Cell" && { cellLocation }),
      ...(isExcelOrSheets && selectType === "Range" && { fromRange, toRange }),
      skillName,
      skillScore,
      hint,
    };

    onAddTask(newTask);

    // Reset form
    setDescription("");
    setSheetName("");
    setCellLocation("");
    setFromRange("");
    setToRange("");
    setSkillName("");
    setSkillScore("");
    setHint("");
  };

  return (
    <div className="bg-[#F8F8F8] rounded-lg p-4 mb-4">
      <h5 className="font-medium mb-4">Task {taskNumber}</h5>

      <SelectField
        label="Select Type"
        value={selectType}
        onChange={(e) => setSelectType(e.target.value as "Cell" | "Range")}
        className="mt-4"
      >
        <option value="Cell">Cell</option>
        <option value="Range">Range</option>
      </SelectField>
      <TextField
        label="Task Description"
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description"
      />

      {isExcelOrSheets && (
        <>
          <TextField
            label="Sheet Name"
            required
            value={sheetName}
            onChange={(e) => setSheetName(e.target.value)}
            placeholder="Enter sheet name"
            className="mt-4"
          />

          <div className="mt-4">
            <div className="flex items-center gap-1 mb-2 mt-4">
              <label className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
                Select
              </label>
              <span className="text-[#FF3A3A] text-sm leading-none">*</span>
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selectType === "Cell"}
                  onChange={() => setSelectType("Cell")}
                  className="accent-[#06B2E1]"
                />
                <span>Cell</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={selectType === "Range"}
                  onChange={() => setSelectType("Range")}
                  className="accent-[#06B2E1]"
                />
                <span>Range</span>
              </label>
            </div>
          </div>

          <TextField
            label="Result Cell Location"
            required
            value={cellLocation}
            onChange={(e) => setCellLocation(e.target.value)}
            placeholder="e.g., A1, B2"
            className="mt-4"
          />
          <div className="flex gap-4 mt-4">
            <TextField
              label="From"
              required
              value={fromRange}
              onChange={(e) => setFromRange(e.target.value)}
              placeholder="e.g., A1"
              className="flex-1"
            />
            <TextField
              label="To"
              required
              value={toRange}
              onChange={(e) => setToRange(e.target.value)}
              placeholder="e.g., B5"
              className="flex-1"
            />
          </div>
        </>
      )}

      <RichTextEditorField
        label="Hint"
        onChange={(value) => setHint(value)}
        defaultValue={hint}
      />

      <div className="flex gap-4 mt-4">
        <TextField
          label="Skill Name"
          required
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="e.g., SKI, SK2"
          className="flex-1"
        />
        <TextField
          label="Skill Score"
          required
          value={skillScore}
          onChange={(e) => setSkillScore(e.target.value)}
          placeholder="e.g., 45, 15"
          className="flex-1"
        />
      </div>

      <button
        className="bg-[#06B2E1] text-white rounded-full px-6 py-3 mt-6"
        onClick={handleSubmit}
      >
        Add Task
      </button>
    </div>
  );
};
