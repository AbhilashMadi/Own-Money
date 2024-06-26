import { FC, ReactNode } from "react";
import { cn } from "@lib/utils";

interface IWrapper {
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<IWrapper> = (props) => {
  const { children, className } = props;

  return (
    <main
      className={cn(
        "mx-auto w-full max-w-screen-xl space-y-12 px-2.5 md:px-20",
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Wrapper;
