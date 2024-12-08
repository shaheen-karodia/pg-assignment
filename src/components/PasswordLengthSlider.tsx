import { useState } from "react";
import Typography from "./Typography";

const PasswordLengthSlider = () => {
  const [length, setLength] = useState("0");
  return (
    <>
      <div className="flex justify-between items-center">
        <Typography element="h3" treatment="body" className="text-almost-white">
          Character Length
        </Typography>
        <Typography
          className="text-neon-green"
          treatment="heading-l"
          element="h3"
        >
          {length}
        </Typography>
      </div>
      <input
        type="range"
        name="length"
        id="length"
        min="0"
        max="20"
        step="1"
        value={length}
        onChange={(e) => {
          const newValue = e.target.value;
          setLength(newValue);
        }}
        className="cursor-pointer w-full accent-neon-green"
      />
    </>
  );
};

export default PasswordLengthSlider;
