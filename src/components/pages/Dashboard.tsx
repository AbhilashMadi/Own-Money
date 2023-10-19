import { FC } from "react";
import Sider from "@components/common/Sider";

const Dashboard: FC = () => {
  return (
    <div className="flex">
      <Sider />
      <main className="flex-1 overflow-y-scroll max-h-screen">
        <div className="min-h-[1200px]">lorem2000</div>
      </main>
    </div>
  );
};

export default Dashboard;
