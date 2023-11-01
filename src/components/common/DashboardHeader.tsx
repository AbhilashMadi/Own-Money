import { FC } from "react";
import { ChevronRight, Bell, Sun, Moon, Minimize, Maximize } from "lucide-react";
import { Button } from "@ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@ui/dropdown-menu";

import NavigationMenu from "@components/custom/Navigation";
import { useTheme } from "../context/context";
import { ThemeKeys } from "@types_/constants.enums";


const DashboardHeader: FC = () => {
  const { setTheme, isFullScreen, toggleFullScreen } = useTheme();


  return (
    <header className="p-3 flex justify-between border-b bg-white dark:bg-black sticky top-0 left-0 
      right-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 z-30">
      <div className="grow-[1] flex align-middle gap-4">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Hello @User</h4>
        <div className="flex text-gray-400 gap-4 items-center">
          <span className="flex">
            <ChevronRight size={20} />
            <ChevronRight size={20} className="-mx-3" />
          </span>
          <div className="text-inherit text-xs">
            <p>September 20 2023</p>
            <p>Monday</p>
          </div>
        </div>
      </div>
      <div className="grow-[2] flex flex-row-reverse items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme(ThemeKeys.LIGHT)}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(ThemeKeys.DARK)}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme(ThemeKeys.SYSTEM)}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" size="icon">
          {isFullScreen
            ? <Minimize onClick={toggleFullScreen} size={20} />
            : <Maximize onClick={toggleFullScreen} size={20} />
          }
        </Button>
        <Button variant="outline" size="icon">
          <Bell size={16} />
        </Button>
        <NavigationMenu />
      </div>
    </header>
  );
};

export default DashboardHeader;