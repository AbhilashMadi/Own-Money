import { FC } from "react";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { Label } from "@ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { headers } from "@resources/headers";
import { text } from "@resources/text";
import { labels } from "@resources/labels";

const SignUpForm: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{headers.details}</CardTitle>
        <CardDescription>
          {text.enterDetails}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="email">{labels.email}</Label>
          <Input id="email" type="email" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">{labels.password}</Label>
          <Input id="password" type="password" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="confirm">{labels.confirmPassword}</Label>
          <Input id="confirm" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button className="w-1/2" variant={"outline"} type="reset">{labels.reset}</Button>
        <Button className="w-1/2" type="submit">{labels.getOTP}</Button>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;