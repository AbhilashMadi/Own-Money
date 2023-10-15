import { DashboardIcon, AboutIcon, TryForFreeIcon } from "@assets";

export type Redirection = {
  link: string;
  href: string;
  iconImg: string;
}

export type RedirectionConfig = {
  headline: string;
  description: string;

  redirections: Redirection[]
};

export const redirectionConfig: RedirectionConfig = {
  headline: "Own Income",
  description: "Ready to take control of your finances? Sign up now to access all the features and start managing your money like a pro for free.",

  redirections: [{
    link: "Dashboard",
    href: "#",
    iconImg: DashboardIcon,
  }, {
    link: "Try for Free",
    href: "#",
    iconImg: TryForFreeIcon,
  }, {
    link: "Know More",
    href: "",
    iconImg: AboutIcon,
  }],
};