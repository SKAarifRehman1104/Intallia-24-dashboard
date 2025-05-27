
export interface Skill {
  id: number;
  name: string;
  selected: boolean;
}

export interface AssignSimulationFormProps {
  onClose?: () => void;
}
