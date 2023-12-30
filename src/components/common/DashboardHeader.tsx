import { FC } from "react";
import {
  ChevronRight,
  Bell,
  Sun,
  Moon,
  Minimize,
  Maximize,
} from "lucide-react";
import { Button } from "@ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@ui/dropdown-menu";

import NavigationMenu from "@components/custom/Navigation";
import { useTheme } from "../context/context";
import { Paths, ThemeKeys } from "@types_/constants.enums";
import { useLocation } from "react-router-dom";

const DashboardHeader: FC = () => {
  const { setTheme, isFullScreen, toggleFullScreen } = useTheme();
  const { pathname } = useLocation();

  return (
    <header
      className="sticky left-0 right-0 top-0 z-30 flex justify-between border-b bg-background/95 bg-opacity-50 
      bg-clip-padding p-3 backdrop-blur backdrop-filter supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex grow-[1] gap-4 align-middle">
        {pathname === Paths.OVERVIEW && (
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Hello @User
          </h4>
        )}
        <div className="flex items-center gap-4 text-gray-400">
          <span className="flex">
            <ChevronRight size={20} />
            <ChevronRight size={20} className="-mx-3" />
          </span>
          <div className="text-xs text-inherit">
            <p>September 20 2023</p>
            <p>Monday</p>
          </div>
        </div>
      </div>
      <div className="flex grow-[2] flex-row-reverse items-center gap-2">
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
          {isFullScreen ? (
            <Minimize onClick={toggleFullScreen} size={20} />
          ) : (
            <Maximize onClick={toggleFullScreen} size={20} />
          )}
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
