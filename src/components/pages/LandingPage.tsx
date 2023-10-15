import { FC } from "react";

import Hero from "@components/containers/hero/Hero";
import DashbordFeatures from "@components/containers/features/DashboardFeatures";
import Redirection from "@components/containers/redirection/Redirection";
import Team from "@components/containers/team/Team";

const LandingPage: FC = () => {
  return (
    <>
      <Hero />
      <DashbordFeatures />
      <Redirection />
      <Team />
    </>
  );
};

export default LandingPage;