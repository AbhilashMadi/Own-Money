import { FC } from "react";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { Label } from "@ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { labels } from "@resources/labels";
import { headers } from "@resources/headers";
import { text } from "@resources/text";

const LogIn: FC = () => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>{headers.credentials}</CardTitle>
        <CardDescription>
          {text.enterCredentials}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">{labels.email}</Label>
          <Input id="name" defaultValue="example@gmail.com" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">{labels.password}</Label>
          <Input id="username" defaultValue="@peduarte" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button className="w-1/2" variant={"outline"} type="reset">{labels.reset}</Button>
        <Button className="w-1/2" type="submit">{labels.enter}</Button>
      </CardFooter>
    </Card>
  );
};

export default LogIn;
