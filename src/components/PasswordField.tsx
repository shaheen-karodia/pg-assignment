import { typography } from "../utils/typography";
import CopyIcon from "../assets/images/icon-copy.svg?react";

interface PasswordFieldProps {
  password?: string;
}

const PasswordField = ({ password }: PasswordFieldProps) => {
  return (
    <div className="bg-dark-grey py-4 px-8 flex items-center justify-between mb-6">
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        placeholder="Password"
        disabled
        className={typography({
          treatment: "heading-l",
          className: ` text-almost-white bg-transparent ${
            password ? "" : "text-opacity-25"
          }`,
        })}
      />
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            console.log("TODO");
          }}
          className="bg-transparent border-none cursor-pointer group"
        >
          <CopyIcon className="fill-neon-green group-hover:fill-almost-white transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
