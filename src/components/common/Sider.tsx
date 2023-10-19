import { FC } from "react";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { CalendarDays } from "lucide-react";
import { sidebarConfig } from "@temp/dashboardConfig";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";

const Sider: FC = () => {
  return (
    <aside className="w-64 transition-all">

      {/*---- TOGGLE BUTTON ----*/}
      {/* <Button className="md:hidden"><LayoutDashboard /></Button> */}
      {/*-----------------------*/}

      <Card className="rounded-none min-h-screen">
        <CardHeader>
          <CardTitle>
            <span className="font-bold">OWN</span>
            <span className="font-light"> MONEY</span>
            <p className="text-sm text-foreground font-mont tracking-wider font-medium">Version 1.0</p>
          </CardTitle>
          <CardDescription className="text-xs">
            Effortless Expense Management for a Balanced Life
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          {sidebarConfig.navigations.map((obj) => {
            return <div key={obj.label}
              className="flex gap-3 p-3 rounded hover:text-white hover:bg-primary"
              role="button">
              <obj.icon size={20} />{" "}
              <span>{obj.label}</span>
            </div>;
          })}
        </CardContent>

        <CardFooter className="space-y-2 flex-col">
          <div className="flex gap-3 p-3 bg-muted w-full rounded hover:bg-red-400 hover:text-white" role="button">
            <sidebarConfig.logout.icon size={20}/>{" "}
            <span>{sidebarConfig.logout.label}</span>
          </div>
          <div className="flex justify-between space-x-4 bg-muted py-3 px-4 rounded" role="button">
            <Avatar className="my-auto">
              <AvatarImage src="https://media.licdn.com/dms/image/D5603AQHZ07VC0tKOUw/profile-displayphoto-shrink_800_800/0/1672216526335?e=1703116800&v=beta&t=QbUz2Dd42XoYRUrSh1dbs-nQWwDGAamCyvs7uiOGZ6Q" alt="@AbhilashKumar" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <h4 className="text-sm font-semibold">@abhilash</h4>
              <div className="flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined Oct 2023
                </span>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </aside>
  );
};

export default Sider;