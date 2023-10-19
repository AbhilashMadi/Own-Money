import { FC, ReactNode } from "react";
import Sider from "@components/common/Sider";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = (props) => {
  const { children } = props;

  return (
    <div className="flex">
      <Sider />
      <main className="flex-1 overflow-y-scroll max-h-screen">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
