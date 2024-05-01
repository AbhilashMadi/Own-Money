import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Button } from "@ui/button";
import { text } from "@resources/text";
import { headers } from "@resources/headers";
import { labels } from "@resources/labels";
import { Input } from "@ui/input";

const OTPForm: FC = () => {
  return (
    <div className="grid h-screen animate-fade-down place-items-center">
      <section>
        <Card className="w-[300px] md:w-[400px]">
          <CardHeader>
            <CardTitle>{headers.otpVerification}</CardTitle>
            <CardDescription>{text.weHaveSentOTP}</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-4">
              <div>
                <Input
                  type="text"
                  className="h-12 w-14 animate-thrice invalid:animate-shake"
                  pattern="[0-9]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  className="h-12 w-14 animate-thrice invalid:animate-shake"
                  pattern="[0-9]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  className="h-12 w-14 animate-thrice invalid:animate-shake"
                  pattern="[0-9]"
                />
              </div>
              <div>
                <Input
                  type="text"
                  className="h-12 w-14 animate-thrice invalid:animate-shake"
                  pattern="[0-9]"
                />{" "}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex gap-4">
            <Button className="w-full" variant={"outline"}>
              {labels.resend}
            </Button>
            <Button className="w-full">{labels.verifyAccount}</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default OTPForm;
