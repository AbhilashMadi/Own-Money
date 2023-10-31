import { FC, ReactNode } from "react";

import Sider from "@components/common/Sider";
import DashboardHeader from "@components/common/DashboardHeader";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = (props) => {
  const { children } = props;

  return (
    <div className="flex antialiased scroll-smooth font-inter">
      <Sider />
      <main className="flex-1 overflow-y-scroll max-h-screen">
        <DashboardHeader />
        <div className="bg-gray-100 dark:bg-muted">
          <div className="overflow-x-hidden p-6 min-h-[calc(100dvh-4rem)]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
