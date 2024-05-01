import { FC, ReactNode } from "react";

import Sider from "@components/common/Sider";
import DashboardHeader from "@components/common/DashboardHeader";

interface IDashboardLayout {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = (props) => {
  const { children } = props;

  return (
    <div className="flex scroll-smooth font-inter antialiased">
      <Sider />
      <main className="max-h-screen flex-1 overflow-y-scroll">
        <DashboardHeader />
        <div className="dark:bg-muted">
          <div className="min-h-[calc(100dvh-4rem)] overflow-x-hidden p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
