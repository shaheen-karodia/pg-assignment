import { ReactNode } from "react";
import { typography } from "../utils/typography";

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
