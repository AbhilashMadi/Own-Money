
export type FeatureCad = {
  header: string;
  description: string;
  footerLine: string;
};

export type FeaturesConfig = {
  headline: string;
  link: string;

  featureCard: FeatureCad[];
};

export const featuresConfig = {
  headline: "The Future of Finance, Right in Your Dashboard",
  link: "Visit Dashboard",

  featureCard: [{
    header: "Invest",
    description: "Discover opportunities to grow your wealth, explore investment options, and make informed decisions about your financial future.",
    footerLine: "Crypto Prices at Your Fingertips",
  }, {
    header: "Budget",
    description: "Efficiently manage your money with budgeting tools, track your expenses, and plan your spending to achieve your financial goals.",
    footerLine: "Unlock Proactive Spending Insights",
  }, {
    header: "Analyze",
    description: "Access in-depth financial insights, gain a better understanding of your financial health, and optimize your financial strategies with detailed analytics.",
    footerLine: "Financial Empowerment",
  }],
};