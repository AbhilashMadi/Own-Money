import { FC } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { CalendarDays } from "lucide-react";
import { sidebarConfig } from "@temp/dashboardConfig";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/avatar";
import { useData } from "@context/context";
import { Paths } from "@types_/constants.enums";

const Sider: FC = () => {
  const { navigateToRoute } = useData();

  return (
    <aside className="w-56 transition-all">
      {/*---- TOGGLE BUTTON ----*/}
      {/* <Button className="md:hidden"><LayoutDashboard /></Button> */}
      {/*-----------------------*/}

      <Card className="min-h-screen rounded-none">
        <CardHeader>
          <CardTitle
            role="button"
            onClick={() => navigateToRoute(Paths.OVERVIEW)}
          >
            <span className="font-bold">OWN</span>
            <span className="font-light"> MONEY</span>
            <p className="font-mont text-sm font-medium tracking-wider text-foreground">
              Version 1.0
            </p>
          </CardTitle>
          <CardDescription className="text-xs">
            Effortless Expense Management for a Balanced Life
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          {sidebarConfig.navigations.map((obj) => {
            return (
              <button
                key={obj.label}
                className="flex w-full items-center gap-3 rounded p-2 hover:bg-primary hover:text-white"
                onClick={() => navigateToRoute(obj.path)}
              >
                <obj.icon size={20} /> <span>{obj.label}</span>
              </button>
            );
          })}
        </CardContent>

        <CardFooter className="flex-col space-y-2">
          <div
            className="flex w-full items-center gap-3 rounded bg-muted p-2 hover:bg-red-400 hover:text-white"
            role="button"
          >
            <sidebarConfig.logout.icon size={20} />{" "}
            <span>{sidebarConfig.logout.label}</span>
          </div>
          <div
            className="flex justify-between space-x-4 rounded bg-muted px-4 py-3"
            role="button"
          >
            <Avatar className="my-auto">
              <AvatarImage
                src="https://media.licdn.com/dms/image/D5603AQHZ07VC0tKOUw/profile-displayphoto-shrink_800_800/0/1672216526335?e=1703116800&v=beta&t=QbUz2Dd42XoYRUrSh1dbs-nQWwDGAamCyvs7uiOGZ6Q"
                alt="@AbhilashKumar"
              />
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
