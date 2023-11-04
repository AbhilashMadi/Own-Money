import { Card, CardContent } from "@ui/card";
import { ArrowDown, ArrowUp, Car, Clapperboard, Home, Layout, MoveRight, Pizza, ShoppingBag } from "lucide-react";
import { FC, ReactNode } from "react";

interface IExpenseCard {
  expenseObj: {
    expense: string;
    price: string;
    status: "increased" | "decreased";
    statusPercentage: string;
    icon: ReactNode;
  }
}

const ExpenseCard: FC<IExpenseCard> = (props) => {
  const { expenseObj } = props;

  return <div className="flex gap-4 items-center cursor-pointer p-2">
    <div className="p-4 bg-muted rounded-md">
      {expenseObj.icon}
    </div>
    <div className="grow">
      <p className="text-gray-400 text-sm">{expenseObj.expense}</p>
      <h4 className="text-lg font-bold">{expenseObj.price}</h4>
      <div className="flex gap-2">
        <span className="text-sm">{expenseObj.statusPercentage}</span>
        {expenseObj.status === "increased"
          ? <ArrowUp className="text-red-500" size={16} />
          : <ArrowDown className="text-green-500" size={16} />}
      </div>
    </div>
    <MoveRight size={20} className="hover:text-primary transition-all" />
  </div>;
};


const ExpensesBreakdown: FC = () => {

  const expenses: Array<IExpenseCard["expenseObj"]> = [{
    icon: <Home className="text-gray-400" />,
    expense: "Housing",
    price: "$250.00",
    status: "increased",
    statusPercentage: "15%*",
  }, {
    icon: <Pizza className="text-gray-400" />,
    expense: "Food",
    price: "$350.00",
    status: "decreased",
    statusPercentage: "08%*",
  }, {
    icon: <Car className="text-gray-400" />,
    expense: "Transportation",
    price: "$50.00",
    status: "decreased",
    statusPercentage: "12%*",
  }, {
    icon: <Clapperboard className="text-gray-400" />,
    expense: "Entertainment",
    price: "$80.00",
    status: "decreased",
    statusPercentage: "15%*",
  }, {
    icon: <ShoppingBag className="text-gray-400" />,
    expense: "Shopping",
    price: "$420.00",
    status: "increased",
    statusPercentage: "25%*",
  }, {
    icon: <Layout className="text-gray-400" />,
    expense: "Others",
    price: "$650.00",
    status: "increased",
    statusPercentage: "23%*",
  }];

  return (
    <>
      <div className="flex justify-between pb-2 mt-4">
        <p className="font-sm text-gray-400">Expenses Breakdown</p>
        <p className="text-sm flex gap-1 items-center text-gray-400">*Compare to last month</p>
      </div>
      <Card className="hover:shadow-xl">
        <CardContent className="p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-4">
          {expenses.map((obj, index: number) => {
            return <ExpenseCard key={index} expenseObj={obj} />;
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default ExpensesBreakdown;