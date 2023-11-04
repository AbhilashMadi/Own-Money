import { Button } from "@ui/button";
import { Card, CardContent, CardFooter } from "@ui/card";
import { FC } from "react";

type Detail = {
  label: string;
  value: string;
}

const Detail: FC<{ detail: Detail }> = (props) => {
  const { detail } = props;

  return <div className="p-4 space-y-1">
    <p className="text-sm text-muted-foreground">{detail.label}</p>
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{detail.value}</h4>
  </div>;
};

const AccountDetails: FC = () => {
  const details: Detail[] = [{
    label: "Bank Name",
    value: "AB Bank Ltd",
  }, {
    label: "Account Type",
    value: "Checking",
  }, {
    label: "Balance",
    value: "$25,056,000",
  }, {
    label: "Branch Name",
    value: "Park Street Branch",
  }, {
    label: "Account Number",
    value: "1356 2343 4534",
  }];

  return (
    <>
      <p className="text-gray-400 pb-2">Account Details</p>
      <Card className="shadow-lg">
        <CardContent className="p-4 grid grid-cols-3">
          {details.map((detail: Detail, index: number) => {
            return <Detail detail={detail} key={index} />;
          })}
        </CardContent>
        <CardFooter>
          <Button>Edit Details</Button>
          <Button className="ml-6" variant="outline">Remove</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default AccountDetails;