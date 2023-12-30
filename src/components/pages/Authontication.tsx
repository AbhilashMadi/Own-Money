import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import LogInForm from "@components/forms/LogInForm";
import SignUpForm from "@components/forms/SignUpForm";
import { headers } from "@resources/headers";
import { TabKeys } from "@types_/constants.enums";

const Authontication: FC = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <Tabs
        defaultValue={TabKeys.LOGIN}
        className="w-[300px] md:w-[400px] animate-fade-down"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value={TabKeys.LOGIN}>{headers.logIn}</TabsTrigger>
          <TabsTrigger value={TabKeys.SIGNUP}>{headers.signUp}</TabsTrigger>
        </TabsList>
        <TabsContent value={TabKeys.LOGIN}>
          <LogInForm />
        </TabsContent>
        <TabsContent value={TabKeys.SIGNUP}>
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authontication;
