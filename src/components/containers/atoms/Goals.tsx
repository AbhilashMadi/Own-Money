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
      icon: <Medal size={20} className="mt-1 text-neutral-600" />,
      label: "Target Achieved",
      value: "$12,500",
    },
    {
      icon: <Goal size={20} className="mt-1 text-neutral-600" />,
      label: "This month Target",
      value: "$20,000",
    },
  ];

  return (
    <>
      <p className="font-sm pb-2 text-gray-400">Goal</p>
      <Card className="hover:shadow-xl">
        <CardHeader className="pt-4">
          <CardTitle className="flex items-center justify-between gap-2">
            <span>
              $20,000{"  "}
              <button className="rounded bg-muted p-2">
                <Edit size={18} />
              </button>
            </span>
            <span className="text-sm font-normal text-neutral-500">
              May, 2023
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          {targets.map((target) => {
            return (
              <div key={target.label} className="flex gap-2">
                {target.icon}
                <div>
                  <p className="text-xs text-neutral-500">{target.label}</p>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {target.value}
                  </h4>
                </div>
              </div>
            );
          })}
          <div className="rounded-[6px] bg-muted p-3">
            <span
              className="my-auto bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-center 
          font-mono text-7xl font-extrabold text-transparent "
            >
              25%
            </span>
            <span className="block">Achieved</span>
          </div>
          <div className="rounded-[6px] bg-muted p-3">
            <span
              className="my-auto bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-center 
          font-mono text-7xl font-extrabold text-transparent "
            >
              75%
            </span>
            <span className="block">Remaining</span>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Goals;
