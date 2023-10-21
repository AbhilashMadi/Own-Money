import { FC } from "react";

import Widget from "@components/custom/Widget";
import { labels } from "@resources/labels";
import CreditCard from "@components/containers/atoms/CreditCard";


const Overview: FC = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        <Widget widgetTitle={labels.totalBalance}
          isHeader
          title="$240,399"
          headerNavigatin={{ label: labels.allAccounts, href: "#" }}
          contnt={<>
            <CreditCard />
          </>} />
        <Widget widgetTitle={labels.goals} contnt={<></>} />
        <Widget widgetTitle={labels.upcomingBills} contnt={<></>} viewAll="/" />
        <Widget widgetTitle={labels.recentTransactions} contnt={<></>} viewAll="/" />
        <div className="col-span-2 grid grid-cols-1 gap-6">
          <Widget widgetTitle={labels.statistics} contnt={<></>} viewAll="/" />
          <Widget widgetTitle={labels.expensesBreakdown} contnt={<></>} viewAll="/" />
        </div>
      </div>
    </>
  );
};

export default Overview;