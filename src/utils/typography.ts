import { cva } from "class-variance-authority";

export const typography = cva(["font-mono", "font-bold"], {
  variants: {
    treatment: {
      "heading-l": ["text-[32px]", "leading-[43px]"],
      "heading-m": ["text-2xl", "leading-[31px]"],
      body: ["text-lg", "leading-[23px]"],
    },
  },
  defaultVariants: {
    treatment: "body",
  },
});
