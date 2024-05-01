import { Button } from "@ui/button";
import { Card, CardContent, CardFooter } from "@ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";
import { FC } from "react";

type Detail = {
  label: string;
  value: string;
};

type Invoice = {
  date: string;
  status: "Completed" | "Pending" | "Failed";
  transactionType: string;
  receipt: string;
  amount: string;
};

const Detail: FC<{ detail: Detail }> = (props) => {
  const { detail } = props;
  // const { accountId } = useParams();

  return (
    <div className="space-y-1 p-4">
      <p className="text-sm text-muted-foreground">{detail.label}</p>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {detail.value}
      </h4>
    </div>
  );
};

const AccountDetails: FC = () => {
  const details: Detail[] = [
    {
      label: "Bank Name",
      value: "AB Bank Ltd",
    },
    {
      label: "Account Type",
      value: "Checking",
    },
    {
      label: "Balance",
      value: "$25,056,000",
    },
    {
      label: "Branch Name",
      value: "Park Street Branch",
    },
    {
      label: "Account Number",
      value: "1356 2343 4534",
    },
  ];

  const invoices: Invoice[] = [
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
    {
      date: "4 Oct 2023",
      status: "Completed",
      transactionType: "Credit",
      receipt: "43543545645DFS",
      amount: "$160",
    },
  ];

  return (
    <main className="space-y-6">
      {/* Details Card */}
      <div>
        <p className="pb-2 text-gray-400">Account Details</p>
        <Card className="shadow-lg">
          <CardContent className="grid grid-cols-3 p-4">
            {details.map((detail: Detail, index: number) => {
              return <Detail detail={detail} key={index} />;
            })}
          </CardContent>
          <CardFooter>
            <Button>Edit Details</Button>
            <Button className="ml-6" variant="outline">
              Remove
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Transaction History */}
      <div>
        <p className="pb-2 text-gray-400">Transactions History</p>
        <Card className="shadow-lg">
          <CardContent className="p-4">
            <Table>
              <TableCaption>
                A list of September month Transactions
                <Button variant="link">Load more ...</Button>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Transaction Type</TableHead>
                  <TableHead>Receipt</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice: Invoice, index: number) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell>{invoice.status}</TableCell>
                      <TableCell>{invoice.transactionType}</TableCell>
                      <TableCell>{invoice.receipt}</TableCell>
                      <TableCell>{invoice.amount}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AccountDetails;
