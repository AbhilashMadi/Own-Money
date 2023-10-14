import { FC } from "react";

import { type FeatureCad } from "@temp/featuresConfig";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/card";

interface IDashbordFeatureCard {
  item: FeatureCad;
}

const DashboardFeatureCard: FC<IDashbordFeatureCard> = (props) => {
  const { item } = props;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{item.header}</CardTitle>
      </CardHeader>
      <CardContent className="md:h-[8.5rem]">
        <p className="font-mont">{item.description}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">{item.footerLine}</p>
      </CardFooter>
    </Card>
  );
};

export default DashboardFeatureCard;