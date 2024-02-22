import { generateExpensesData } from "@/helpers/generators.helpers";
import { Column, type ColumnConfig } from "@ant-design/plots";
import { Card, CardContent } from "@ui/card";
import { FC } from "react";
import ExpenseBreakdownCard from "../atoms/ExpenseBreakdownCard";

const Expenses: FC = () => {

  const config: ColumnConfig = {
    data: generateExpensesData(),
    isGroup: true,
    xField: "date",
    yField: "value",
    seriesField: "name",
    dodgePadding: 2,
    intervalPadding: 20,
    color: ["#E8E8E8", "#f6812e"],
    style: {
      fontFamily: "var(--font-inter)",
    },
    columnStyle: {
      radius: [3, 3, 0, 0],
    },
    legend: {
      position: "top-right",
    },
    label: {
      position: "top",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
    height: 250,
  };

  return (
    <main className="space-y-8">
      <section>
        <p className="font-sm pb-2 text-gray-400">Expenses Comparison</p>
        <Card className="hover:shadow-xl pt-4">
          <CardContent>
            <Column
              {...config}
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <p className="font-sm pb-2 text-gray-400">Expenses Breakdown</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {new Array(6).fill(null).map(() => <ExpenseBreakdownCard />)}
        </div>
      </section>
    </main>
  );
};

export default Expenses;