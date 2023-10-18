import { FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import LogIn from "@components/pages/LogIn";
import SignUp from "@components/pages/SignUp";
import { headers } from "@resources/headers";

const Authontication: FC = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <Tabs defaultValue="logIn" className="w-[300px] md:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="logIn">{headers.logIn}</TabsTrigger>
          <TabsTrigger value="signUp">{headers.signUp}</TabsTrigger>
        </TabsList>
        <TabsContent value="logIn">
          <LogIn />
        </TabsContent>
        <TabsContent value="signUp">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authontication;