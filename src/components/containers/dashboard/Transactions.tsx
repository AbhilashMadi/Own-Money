import { FC } from "react";
import { Card, CardContent } from "@ui/card";
import { Button } from "@ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { Shirt } from "lucide-react";

enum TransactionsTabKeys {
  ALL = "all",
  REVENUE = "revenue",
  EXPENSES = "expenses",
}

const Transactions: FC = () => {
  return (
    <main className="space-y-2">
      <h4 className="text-gray-400">Recent Transactions</h4>

      <div>
        <Tabs defaultValue={TransactionsTabKeys.ALL}>
          <TabsList>
            <TabsTrigger value={TransactionsTabKeys.ALL}>All</TabsTrigger>
            <TabsTrigger value={TransactionsTabKeys.EXPENSES}>
              Expenses
            </TabsTrigger>
            <TabsTrigger value={TransactionsTabKeys.REVENUE}>
              Revenue
            </TabsTrigger>
          </TabsList>

          <TabsContent value={TransactionsTabKeys.ALL}>
            <Card>
              <CardContent className="p-2">
                <Table>
                  <TableCaption>
                    <Button variant={"link"}>Load more...</Button>
                  </TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Items</TableHead>
                      <TableHead>Shop Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Payment Method</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Shirt size={20} className="text-gray-600" />
                      </TableCell>
                      <TableCell>ACN Fashion Mall</TableCell>
                      <TableCell>05 Nov, 2023</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>$25</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value={TransactionsTabKeys.EXPENSES}></TabsContent>
          <TabsContent value={TransactionsTabKeys.REVENUE}></TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Transactions;
