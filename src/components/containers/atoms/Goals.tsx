import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { Edit, Goal, Medal } from "lucide-react";
import { FC, ReactNode } from "react";

const Goals: FC = () => {

  const targets: {
    icon: ReactNode;
    label: string;
    value: string;
  }[] = [
    {
      icon: <Medal size={20} className="text-neutral-600 mt-1" />,
      label: "Target Achieved",
      value: "$12,500",
    },
    {
      icon: <Goal size={20} className="text-neutral-600 mt-1" />,
      label: "This month Target",
      value: "$20,000",
    },
  ];

  return (
    <>
      <p className="font-sm text-gray-400 pb-2">Goal</p>
      <Card className="hover:shadow-xl">
        <CardHeader className="pt-4">
          <CardTitle className="flex gap-2 items-center justify-between">
            <span>
              $20,000{"  "}
              <button className="bg-muted p-2 rounded">
                <Edit size={18} />
              </button>
            </span>
            <span className="text-neutral-500 font-normal text-sm">
              May, 2023
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {targets.map((target) => {
            return <div key={target.label} className="flex gap-2">
              {target.icon}
              <div>
                <p className="text-xs text-neutral-500">{target.label}</p>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{target.value}</h4>
              </div>
            </div>;
          })}
          <div className="bg-muted p-3 rounded-[6px]">
            <span className="font-extrabold text-transparent my-auto font-mono text-7xl bg-clip-text 
          bg-gradient-to-r from-yellow-500 to-orange-500 text-center ">25%</span>
            <span className="block">
              Achieved
            </span>
          </div>
          <div className="bg-muted p-3 rounded-[6px]">
            <span className="font-extrabold text-transparent my-auto font-mono text-7xl bg-clip-text 
          bg-gradient-to-r from-yellow-500 to-orange-500 text-center ">75%</span>
            <span className="block">
              Remaining
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Goals;