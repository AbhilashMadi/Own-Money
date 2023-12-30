import { FC } from "react";
import { Card, CardContent } from "@ui/card";
import { Button } from "@ui/button";

import BalanceCard from "@components/containers/atoms/BalanceCard";

const Balances: FC = () => {
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {[...new Array(9)].map((_, ind: number) => {
        return <BalanceCard key={ind} />;
      })}

      <Card className="flex min-h-[250px] items-center justify-center">
        <CardContent className="space-y-2">
          <Button className="block">Add Accounts</Button>
          <Button variant="outline">Edit Accounts</Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default Balances;
