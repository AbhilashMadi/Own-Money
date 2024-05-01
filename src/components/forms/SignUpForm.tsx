import { headers } from "@resources/headers";
import { labels } from "@resources/labels";
import { text } from "@resources/text";
import { Button } from "@ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Input } from "@ui/input";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form";

const formSchema = z
  .object({
    email: z.string().email({ message: "Email must be a valid email" }),
    password: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Password should be at least 8 characters" }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const SignUpForm: FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{headers.details}</CardTitle>
        <CardDescription>{text.enterDetails}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Form {...form}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.email}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.password}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.confirmPassword}</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between gap-4">
        <Button
          className="w-1/2"
          variant="outline"
          type="reset"
          onClick={() => form.reset()}
        >
          {labels.reset}
        </Button>
        <Button
          className="w-1/2"
          type="submit"
          onClick={form.handleSubmit(onSubmit)}
        >
          {labels.getOTP}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignUpForm;
