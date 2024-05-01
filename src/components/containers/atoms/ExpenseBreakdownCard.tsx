import { FC } from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@ui/card";
import { ArrowDown, ArrowUp, ShoppingBag } from "lucide-react";

const ExpenseBreakdownCard: FC = () => {
  return (<Card className="hover:shadow-lg min-h-[15rem]">
    <CardHeader className="flex-row items-center gap-3 p-3 justify-between bg-muted">
      <div className="flex gap-3">
        <div className="p-3 bg-muted rounded-md bg-gray-300">
          <ShoppingBag
            size={20} className="text-gray-500 inline-block" />
        </div>
        <div>
          <h5 className="text-gray-400">Housing</h5>
          <span className="font-bold font-mono">$250.0</span>
        </div>
      </div>
      <div>
        <div>
          <span>23%</span>
          <ArrowUp size={20} className="text-green-600 inline-block" />
          <ArrowDown size={20} className="text-red-600 inline-block" />
        </div>
        <small className="text-gray-500">
          Compare to last month
        </small>
      </div>
    </CardHeader>
    <CardContent className="p-3">
      <div className="flex justify-between items-center border-b py-3">
        <b className="text-gray-700">
          House Rent
        </b>
        <div className="flex items-center flex-col">
          <span>
            $230.00
          </span>
          <small className="text-gray-400">
            22 Feb 2024
          </small>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        <b className="text-gray-700">
          House Rent
        </b>
        <div className="flex items-center flex-col">
          <span>
            $230.00
          </span>
          <small className="text-gray-400">
            22 Feb 2024
          </small>
        </div>
      </div>
    </CardContent>
  </Card>);
};

export default ExpenseBreakdownCard;