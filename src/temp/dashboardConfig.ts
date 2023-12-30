import { Paths } from "@/types_/constants.enums";
import {
  Wallet,
  ArrowRightLeft,
  Receipt,
  Coins,
  Crosshair,
  Settings,
  LayoutDashboard,
  LogOut,
  LucideIcon,
} from "lucide-react";

type SidebarConfig = {
  logo: string;
  navigations: { icon: LucideIcon; path: string; label: string }[];
  logout: { icon: LucideIcon; label: string };
};

export const sidebarConfig: SidebarConfig = {
  logo: "",
  navigations: [
    { icon: LayoutDashboard, path: Paths.OVERVIEW, label: "Overview" },
    { icon: Wallet, path: Paths.BALANCES, label: "Balances" },
    { icon: ArrowRightLeft, path: Paths.TRANSACTIONS, label: "Transactions" },
    { icon: Receipt, path: Paths.BILLS, label: "Bills" },
    { icon: Coins, path: "", label: "Expenses" },
    { icon: Crosshair, path: "", label: "Goals" },
    { icon: Settings, path: "", label: "Settings" },
  ],
  logout: {
    icon: LogOut,
    label: "Logout",
  },
};
