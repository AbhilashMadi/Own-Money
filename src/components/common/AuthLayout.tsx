import { FC, ReactNode } from "react";

interface IAuthLayout {
  children: ReactNode;
}

const AuthLayout: FC<IAuthLayout> = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default AuthLayout;