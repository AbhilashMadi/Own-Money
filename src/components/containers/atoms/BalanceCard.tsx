import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { buttonVariants } from "@ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Paths } from "@/types_/constants.enums";

const BalanceCard: FC = () => {
  return (
    <Card className="shadow-lg transition-all hover:-translate-y-2">
      <CardHeader>
        <CardTitle>Credit Card</CardTitle>
        <CardDescription>Master Card</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold leading-tight">
            3388 4556 8860 8***
          </h4>
          <p className="text-sm text-muted-foreground">Account Number</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold leading-tight">$25000</h4>
          <p className="text-sm text-muted-foreground">Total amount</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between py-2">
        <button className="text-primary">Remove</button>
        <Link
          to={Paths.ACCOUNT_DETAILS.replace(
            ":accountId",
            "accountIdToNavigate",
          )}
          className={buttonVariants({ variant: "default" })}
        >
          Details
          <ChevronRight size={16} />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BalanceCard;
