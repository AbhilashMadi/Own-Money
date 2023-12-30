import { Column, ColumnConfig } from "@ant-design/plots";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { FC } from "react";

const Statistics: FC = () => {
  const generateRandomData = (
    months: string[],
    days: number,
    minValue: number,
    maxValue: number,
  ): {
    name: string;
    date: string;
    value: number;
  }[] => {
    const data: {
      name: string;
      date: string;
      value: number;
    }[] = [];

    months.forEach((month) => {
      for (let day = 1; day <= days; day++) {
        const randomValue = Math.floor(
          Math.random() * (maxValue - minValue + 1) + minValue,
        );
        data.push({
          name: month,
          date: day.toString().padStart(2, "0"),
          value: randomValue,
        });
      }
    });

    return data;
  };

  const config: ColumnConfig = {
    data: generateRandomData(["September", "October"], 15, 100, 1000),
    isGroup: true,
    xField: "date",
    yField: "value",
    seriesField: "name",
    dodgePadding: 2,
    intervalPadding: 20,
    color: ["#E8E8E8", "#f6812e"],
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
    <>
      <p className="font-sm pb-2 text-gray-400">Statistics</p>
      <Card className="hover:shadow-xl">
        <CardHeader>
          <CardTitle>Comparision</CardTitle>
          {/* <CardDescription className="text-xs">
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <Column {...config} />
        </CardContent>
      </Card>
    </>
  );
};

export default Statistics;
