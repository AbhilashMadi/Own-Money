import { generateRandomData } from "@/helpers/generators.helpers";
import { Column, ColumnConfig } from "@ant-design/plots";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { FC } from "react";

const Statistics: FC = () => {

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
        </CardHeader>
        <CardContent>
          <Column {...config} />
        </CardContent>
      </Card>
    </>
  );
};

export default Statistics;
