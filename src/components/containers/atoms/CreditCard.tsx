import { FC } from "react";

import { MoveUpRight } from "lucide-react";
import { Chip } from "@assets";

const CreditCard: FC = () => {
  return (
    <div
      className="flex justify-between rounded-[0.5rem] bg-gradient-to-b from-orange-600
    to-orange-400 p-4 text-white"
    >
      <div className="space-y-2">
        <p className="opacity-70">Account Type</p>
        <h4 className="py-4scroll-m-20 text-2xl font-semibold tracking-tight">
          Credit Card
        </h4>
        <p className="font-mono">**** **** **** 2598</p>
      </div>

      <div className="flex flex-col items-center justify-between">
        <img
          src={Chip}
          alt="Credit Card Chip"
          className="ml-auto object-cover"
        />
        <h4 className="flex items-center justify-between gap-4">
          <span className="scroll-m-20 text-xl font-semibold tracking-tight">
            $25000
          </span>
          <MoveUpRight
            size={25}
            className="rounded-full bg-white p-1 text-primary"
          />
        </h4>
      </div>
    </div>
  );
};

export default CreditCard;
