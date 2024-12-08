import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`mx-auto w-full px-4 md:px-0 ${className}`}>{children}</div>
  );
};

export default Container;
