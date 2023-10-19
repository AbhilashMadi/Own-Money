import { Wallet, ArrowRightLeft, Receipt, Coins, Crosshair, Settings, LayoutDashboard, LogOut, LucideIcon } from "lucide-react";

type SidebarConfig = {
  logo: string;
  navigations: { icon: LucideIcon, path: string, label: string }[];
  logout: { icon: LucideIcon, label: string };
}

export const sidebarConfig: SidebarConfig = {
  logo: "",
  navigations: [
    { icon: LayoutDashboard, path: "", label: "Overview" },
    { icon: Wallet, path: "", label: "Balances" },
    { icon: ArrowRightLeft, path: "", label: "Transactions" },
    { icon: Receipt, path: "", label: "Bills" },
    { icon: Coins, path: "", label: "Expenses" },
    { icon: Crosshair, path: "", label: "Goals" },
    { icon: Settings, path: "", label: "Settings" },
  ],
  logout: {
    icon: LogOut,
    label: "Logout",
  },
};