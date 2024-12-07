import { ReactNode } from "react";
import { cva } from "class-variance-authority";

const typography = cva(["font-mono", "font-bold"], {
  variants: {
    treatment: {
      "heading-l": ["text-4xl", "leading-[43px]"],
      "heading-m": ["text-2xl", "leading-[31px]"],
      body: ["text-lg", "leading-[23px]"],
    },
  },
  defaultVariants: {
    treatment: "body",
  },
});

interface TypographyProps {
  children: ReactNode;
  className?: string;
  treatment: "heading-l" | "heading-m" | "body";
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}

const Typography = ({
  children,
  treatment,
  element,
  className,
}: TypographyProps) => {
  const Component = element;
  return (
    <Component className={typography({ treatment, className })}>
      {children}
    </Component>
  );
};

export default Typography;
