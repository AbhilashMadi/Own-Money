import { FC } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { Button } from "@ui/button";
import { ChevronRight } from "lucide-react";

const BalanceCard: FC = () => {

  return (
    <Card className="shadow-lg transition-all hover:-translate-y-2">
      <CardHeader>
        <CardTitle>
          Credit Card
        </CardTitle>
        <CardDescription>
          Master Card
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold leading-tight text-lg">3388 4556  8860 8***</h4>
          <p className="text-sm text-muted-foreground">Account Number</p>
        </div>

        <div>
          <h4 className="font-semibold leading-tight text-lg">$25000</h4>
          <p className="text-sm text-muted-foreground">Total amount</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between py-2">
        <button className="text-primary">Remove</button>
        <Button>
          Details
          <ChevronRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BalanceCard;