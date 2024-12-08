import { cva } from "class-variance-authority";
import Typography from "./Typography";

const bar = cva(["h-[28px]", "w-[10px]"], {
  variants: {
    strength: {
      empty: ["bg-transparent", "border-almost-white border-2"],
      "too-weak": ["bg-1-red"],
      weak: ["bg-2-orange"],
      medium: ["bg-3-yellow"],
      strong: ["bg-neon-green"],
    },
  },
  defaultVariants: {
    strength: "empty",
  },
});

const MAX_BARS = 4;
const BAR_FILL_MAP = {
  "too-weak": 1,
  weak: 2,
  medium: 3,
  strong: 4,
} as const;

interface PasswordStrengthIndicatorProps {
  strength: "too-weak" | "weak" | "medium" | "strong";
  className?: string;
}

const PasswordStrengthIndicator = ({
  strength,
  className,
}: PasswordStrengthIndicatorProps) => {
  const text = strength === "too-weak" ? "Too weak!" : strength;

  const filledBars: boolean[] = Array(MAX_BARS)
    .fill(false)
    .fill(true, 0, BAR_FILL_MAP[strength]);

  console.log(filledBars);

  return (
    <div
      className={`${className} flex justify-between items-center bg-very-dark-grey px-8 py-5`}
    >
      <Typography
        element="span"
        treatment="body"
        className="text-grey uppercase"
      >
        strength
      </Typography>

      <div className="flex items-center justify-between">
        <Typography
          element="span"
          treatment="heading-m"
          className="text-almost-white uppercase mr-4"
        >
          {text}
        </Typography>

        {filledBars.map((isFilled, index) => (
          <span
            key={index}
            className={bar({
              strength: isFilled ? strength : "empty",
              className: "mr-2 last:mr-0",
            })}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
