import { FC, ReactNode } from "react";
import { cn } from "@lib/utils";

interface IWrapper {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<IWrapper> = (props) => {
  const { children, className } = props;

  return (
    <main className={cn("", className)}>
      {children}
    </main>
  );
};

export default Wrapper;