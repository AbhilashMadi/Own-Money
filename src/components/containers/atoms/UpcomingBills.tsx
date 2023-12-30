import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { ChevronRight } from "lucide-react";

const UpcomingBills: FC = () => {
  const bills = [
    {
      date: "Oct \n31",
      company: "Figma",
      subscriptionPeriod: "Figma Monthly",
      lastChange: "Last Change - 30 May, 2023",
      price: "$150",
    },
    {
      date: "Oct \n31",
      company: "Adobe",
      subscriptionPeriod: "Adobe Yearly",
      lastChange: "Last Change -  31 Jan, 2023",
      price: "$559",
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <p className="font-sm text-gray-400 pb-2">Total Balance</p>
        <button className="text-sm flex gap-1 items-center text-gray-400">
          View All
          <ChevronRight size={16} />
        </button>
      </div>
      <Card className="hover:shadow-xl">
        <CardHeader>
          <CardTitle>Bills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          {bills.map((bill) => {
            return (
              <div key={bill.subscriptionPeriod} className="flex gap-4">
                <p className="text-center py-3 px-4 bg-muted rounded-md">
                  <span>{bill.date.split(" ")[0]}</span>
                  <span className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {bill.date.split(" ")[1]}
                  </span>
                </p>
                <p className="flex flex-col w-3/5">
                  <span className="font-mont">{bill.company}</span>
                  <span className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {bill.subscriptionPeriod}
                  </span>
                  <span className="text-neutral-500 text-xs h-1/5">
                    {bill.lastChange}
                  </span>
                </p>
                <span className="border-gray-200 p-4 w-1/5 flex items-center justify-center rounded-md font-bold border-[2px] hover:shadow-lg">
                  {bill.price}
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default UpcomingBills;
