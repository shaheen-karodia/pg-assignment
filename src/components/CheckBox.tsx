import Typography from "./Typography";
import IconCheck from "../assets/images/icon-check.svg?react";
interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  return (
    <button
      onClick={() => onChange(!checked)}
      className="flex items-center cursor-pointer mb-5"
    >
      {!checked && <span className="h-5 w-5 border-2 border-almost-white" />}
      {checked && (
        <span className="h-5 w-5 border-2 border-neon-green bg-neon-green flex items-center justify-center">
          <IconCheck fill="#A4FFAF" />
        </span>
      )}
      <Typography
        element="span"
        treatment="body"
        className="text-almost-white ml-6"
      >
        {label}
      </Typography>
    </button>
  );
};

export default CheckBox;
