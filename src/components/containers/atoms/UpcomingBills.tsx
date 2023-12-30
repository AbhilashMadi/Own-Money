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
        <p className="font-sm pb-2 text-gray-400">Total Balance</p>
        <button className="flex items-center gap-1 text-sm text-gray-400">
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
                <p className="rounded-md bg-muted px-4 py-3 text-center">
                  <span>{bill.date.split(" ")[0]}</span>
                  <span className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {bill.date.split(" ")[1]}
                  </span>
                </p>
                <p className="flex w-3/5 flex-col">
                  <span className="font-mont">{bill.company}</span>
                  <span className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {bill.subscriptionPeriod}
                  </span>
                  <span className="h-1/5 text-xs text-neutral-500">
                    {bill.lastChange}
                  </span>
                </p>
                <span className="flex w-1/5 items-center justify-center rounded-md border-[2px] border-gray-200 p-4 font-bold hover:shadow-lg">
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
