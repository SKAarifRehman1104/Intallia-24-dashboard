import React, { useState, useEffect } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

interface DraftEditorProps {
  label: string;
  required?: boolean;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const DraftEditor: React.FC<DraftEditorProps> = ({
  label,
  required,
  onChange,
  defaultValue,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (onChange) {
      onChange(editorState.getCurrentContent().getPlainText());
    }
  }, [editorState, onChange]);

  return (
    <div className="w-full mt-5">
      <div className="flex items-center gap-1 mb-2">
        <label className="text-[#444446] text-[15px] leading-none tracking-[-0.24px]">
          {label}
        </label>
        {required && (
          <span className="text-[#FF3A3A] text-sm leading-none">*</span>
        )}
      </div>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
};

export default DraftEditor;
