import { FC } from "react";

import { type FeatureCad } from "@temp/featuresConfig";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { useInView } from "react-intersection-observer";
import { cn } from "@lib/utils";

interface IDashbordFeatureCard {
  item: FeatureCad;
}

const DashboardFeatureCard: FC<IDashbordFeatureCard> = (props) => {
  const { item } = props;
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Card
      ref={ref}
      className={cn(
        "hover:shadow-lg transition-shadow",
        inView && "animate-fade-up animate-delay-100",
      )}
    >
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
