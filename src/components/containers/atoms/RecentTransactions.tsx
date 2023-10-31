import { Card } from "@ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { FC } from "react";

const RecentTransactions: FC = () => {
  return (
    <>
      <p className="font-sm text-gray-400 pb-2">Recent Transactions</p>
      <Card className="hover:shadow-xl p-4">
        <Tabs defaultValue="all">
          <TabsList className="w-full [&>*]:flex-grow">
            <TabsTrigger value="all">Account</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            all
          </TabsContent>
          <TabsContent value="revenue">
            revenue
          </TabsContent>
          <TabsContent value="expenses">
            expenses
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default RecentTransactions;