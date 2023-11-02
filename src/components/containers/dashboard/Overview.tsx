import { FC } from "react";

import TotalBalance from "@components/containers/atoms/TotalBalance";
import Goals from "@components/containers/atoms/Goals";
import UpcomingBills from "@components/containers/atoms/UpcomingBills";
import RecentTransactions from "@components/containers/atoms/RecentTransactions";
import Statistics from "@components/containers/atoms/Statistics";
import ExpensesBreakdown from "@components/containers/atoms/ExpensesBreakdown";


const Overview: FC = () => {

  return <main className="grid grid-cols-3 gap-4">
    <div>
      <TotalBalance />
    </div>
    <div>
      <Goals />
    </div>
    <div>
      <UpcomingBills />
    </div>

    <div>
      <RecentTransactions />
    </div>
    <div className="col-span-2 flex flex-col">
      <Statistics />
      <ExpensesBreakdown />
    </div>
  </main>;
};

export default Overview;