
import { HeroConfig } from "@types_/temp.config";
import { HeroBackground, HeroImage } from "@assets";
import { GaugeCircle, FileLineChart, BadgeDollarSign, HeartHandshake } from "lucide-react";

export const heroConfig: HeroConfig = {
  background: HeroBackground,
  heroImage: HeroImage,
  tagline: "own Income",
  headline: "Effortless Expense Management for a Balanced Life.",
  description: "Revolutionize your financial management with our cutting-edge app. Enjoy a sophisticated dashboard, meticulous expense tracking, robust budgeting features, and data-driven insights. Elevate your fiscal control and make informed financial decisions effortlessly.",

  highlights: [{
    icon: <GaugeCircle />,
    healine: "Financial Command Center",
    description: "Experience total financial control with our comprehensive dashboard. Visualize your financial landscape, track expenses, and set budgets effortlessly.",
  }, {
    icon: <FileLineChart />,
    healine: "Seamless Expense Tracking",
    description: "Simplify your daily expense management with our intuitive tracking system. Easily categorize and analyze your spending patterns in real-time.",
  }, {
    icon: <BadgeDollarSign />,
    healine: "Strategize for Financial Success",
    description: "Achieve your financial goals with our robust budgeting tools. Create, customize, and stick to budgets that pave the way for a secure financial future.",
  }, {
    icon: <HeartHandshake />,
    healine: "Insights for Informed Decisions",
    description: "Harness the power of data-driven insights to make informed financial choices. Access valuable analytics and recommendations to optimize your financial well-being.",
  }],
};