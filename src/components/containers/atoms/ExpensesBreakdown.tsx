import { Card, CardContent } from "@ui/card";
import { ArrowDown, ArrowUp, Car, Clapperboard, Home, Layout, MoveRight, Pizza, ShoppingBag } from "lucide-react";
import { FC, ReactNode } from "react";

interface IExpenseCard {
  expenseObj: {
    expense: string;
    price: string;
    status: "increased" | "decreased";
    statusPercentage: "string";
    icon: ReactNode;
  }
}

const ExpenseCard: FC<IExpenseCard> = (props) => {
  const { expenseObj } = props;

  return <div className="flex gap-4 items-center">
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
    <MoveRight size={20} />
  </div>;
};



const ExpensesBreakdown: FC = () => {

  const expenses: Array<IExpenseCard["expenseObj"]> = [{
    icon: <Home />,
    expense: "Housing",
    price: "$250.00",
    status: "increased",
    statusPercentage: "15%*",
  }, {
    icon: <Pizza />,
    expense: "Food",
    price: "$350.00",
    status: "decreased",
    statusPercentage: "08%*",
  }, {
    icon: <Car />,
    expense: "Transportation",
    price: "$50.00",
    status: "decreased",
    statusPercentage: "12%*",
  }, {
    icon: <Clapperboard />,
    expense: "Entertainment",
    price: "$80.00",
    status: "decreased",
    statusPercentage: "15%*",
  }, {
    icon: <ShoppingBag />,
    expense: "Shopping",
    price: "$420.00",
    status: "increased",
    statusPercentage: "25%*",
  }, {
    icon: <Layout />,
    expense: "Others",
    price: "$650.00",
    status: "increased",
    statusPercentage: "23%*",
  }];

  return (
    <>
      <p className="font-sm text-gray-400 pb-2 mt-4">Expenses Breakdown</p>
      <Card className="hover:shadow-xl">
        <CardContent className="p-4 grid grid-cols-3 gap-x-20 gap-y-4">
          {expenses.map((obj, index: number) => {
            return <ExpenseCard key={index} expenseObj={obj} />;
          })}
        </CardContent>
      </Card>
    </>
  );
};

export default ExpensesBreakdown;