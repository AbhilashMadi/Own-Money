import { FC } from "react";

import { ChevronRight, Bell } from "lucide-react";
import NavigationMenu from "@components/custom/Navigation";


const DashboardHeader: FC = () => {
  return (
    <header className="p-4 flex justify-between border dark:bg-">
      <div className="grow-[1] flex align-middle gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Hello @User</h4>
        <div className="flex text-gray-400 gap-4 items-center">
          <span className="flex">
            <ChevronRight size={20} />
            <ChevronRight size={20} className="-mx-3" />
          </span>
          <div className="text-inherit text-xs">
            <p>September 20 2023</p>
            <p>Monday</p>
          </div>
        </div>
      </div>
      <div className="grow-[2] flex flex-row-reverse items-center gap-4">
        <Bell />
        <NavigationMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;