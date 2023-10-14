import { FC } from "react";

import Hero from "@components/containers/hero/Hero";
import DashbordFeatures from "@components/containers/features/DashboardFeatures";
import Redirection from "@components/containers/redirection/Redirection";

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <DashbordFeatures />
      <Redirection />
    </>
  );
};

export default LandingPage;