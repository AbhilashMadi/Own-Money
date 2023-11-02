import { Card } from "@ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { FC, ReactNode } from "react";
import { Gamepad, ShoppingBag } from "lucide-react";

enum TransactionKeys {
  REVENUE = "revenue",
  EXPENSES = "expenses",
}

type Transaction = {
  title: string;
  icon: ReactNode;
  category: string;
  price: string;
  date: string;
  type: TransactionKeys,
}

const ExpensesCard: FC<{ obj: Transaction }> = (props) => {
  const { obj } = props;

  return <div className="flex gap-4 py-2 items-center border-b">
    <div className="bg-muted p-4 grid items-center rounded-lg">{obj.icon}</div>
    <div className="grow">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">{obj.title}</h4>
      <p className="text-gray-400 text-sm">{obj.category}</p>
    </div>
    <div>
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">{obj.price}</h4>
      <span className="text-gray-400 text-sm">{obj?.date}</span>
    </div>
  </div>;
};

const RecentTransactions: FC = () => {
  const tempTransactions: Transaction[] = [{
    icon: <Gamepad />,
    title: "GTR 5",
    category: "Gadget & Gear",
    price: "$160.00",
    date: "17 May 2023",
    type: TransactionKeys.REVENUE,
  }, {
    icon: <Gamepad />,
    title: "GTR 5",
    category: "Gadget & Gear",
    price: "$160.00",
    date: "17 May 2023",
    type: TransactionKeys.REVENUE,
  }, {
    icon: <Gamepad />,
    title: "GTR 5",
    category: "Gadget & Gear",
    price: "$160.00",
    date: "17 May 2023",
    type: TransactionKeys.REVENUE,
  }, {
    icon: <Gamepad />,
    title: "GTR 5",
    category: "Gadget & Gear",
    price: "$160.00",
    date: "17 May 2023",
    type: TransactionKeys.REVENUE,
  }, {
    icon: <Gamepad />,
    title: "GTR 5",
    category: "Gadget & Gear",
    price: "$160.00",
    date: "17 May 2023",
    type: TransactionKeys.REVENUE,
  }, {
    icon: <ShoppingBag />,
    title: "Keyboard",
    category: "Gadget & Gear",
    price: "$22.00",
    date: "17 May 2023",
    type: TransactionKeys.EXPENSES,
  }, {
    icon: <ShoppingBag />,
    title: "Keyboard",
    category: "Gadget & Gear",
    price: "$22.00",
    date: "17 May 2023",
    type: TransactionKeys.EXPENSES,
  }, {
    icon: <ShoppingBag />,
    title: "Keyboard",
    category: "Gadget & Gear",
    price: "$22.00",
    date: "17 May 2023",
    type: TransactionKeys.EXPENSES,
  }, {
    icon: <ShoppingBag />,
    title: "Keyboard",
    category: "Gadget & Gear",
    price: "$22.00",
    date: "17 May 2023",
    type: TransactionKeys.EXPENSES,
  }, {
    icon: <ShoppingBag />,
    title: "Keyboard",
    category: "Gadget & Gear",
    price: "$22.00",
    date: "17 May 2023",
    type: TransactionKeys.EXPENSES,
  }];

  return (
    <>
      <p className="font-sm text-gray-400 pb-2">Recent Transactions</p>
      <Card className="hover:shadow-xl p-4">
        <Tabs defaultValue="all">
          <TabsList className="w-full [&>*]:flex-grow">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="expenses">Expenses</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {tempTransactions.map((obj, index: number) => {
              return <ExpensesCard key={index} obj={obj} />;
            })}
          </TabsContent>
          <TabsContent value="revenue">
            {tempTransactions.filter((obj) => obj.type === TransactionKeys.REVENUE).map((obj, index: number) => {
              return <ExpensesCard key={index} obj={obj} />;
            })}
          </TabsContent>
          <TabsContent value="expenses">
            {tempTransactions.filter((obj) => obj.type === TransactionKeys.EXPENSES).map((obj, index: number) => {
              return <ExpensesCard key={index} obj={obj} />;
            })}
          </TabsContent>
        </Tabs>
      </Card>
    </>
  );
};

export default RecentTransactions;