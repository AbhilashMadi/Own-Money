import { FC } from "react";

import Hero from "@components/containers/hero/Hero";
import DashbordFeatures from "@components/containers/features/DashboardFeatures";

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <DashbordFeatures/>
    </>
  );
};

export default LandingPage;