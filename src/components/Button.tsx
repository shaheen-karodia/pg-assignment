import React from "react";
import ArrowIcon from "../assets/images/icon-arrow-right.svg?react";
import Typography from "./Typography";

interface Button {
  onClick: () => void;
  label: string;
}

const Button: React.FC<Button> = ({ onClick, label }) => {
  return (
    <button
      className="bg-neon-green hover:bg-dark-grey border-2 border-neon-green flex justify-center items-center w-full group p-5"
      onClick={() => {
        onClick();
      }}
    >
      <Typography
        element="span"
        treatment="body"
        className="mr-[18px] text-dark-grey uppercase group-hover:text-neon-green transition-colors"
      >
        {label}
      </Typography>
      <ArrowIcon className="group-hover:fill-neon-green fill-dark-grey transition-colors" />
    </button>
  );
};

export default Button;
