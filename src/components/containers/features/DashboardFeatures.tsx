import { FC } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import DashbordFeatureCard from "@components/containers/features/DashboardFeatureCard";
import { featuresConfig } from "@temp/featuresConfig";
import { useInView } from "react-intersection-observer";
import { cn } from "@lib/utils";

const DashboardFeatures: FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="p-8 space-y-8" ref={ref}>
      <div
        className={cn(
          "flex items-center justify-between flex-wrap gap-4",
          isInView && "animate-fade-up animate-delay-100",
        )}
      >
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl bg-gradient-to-br from-zinc-900 to-neutral-50 dark:to-zinc-900 dark:from-neutral-50 inline-block text-transparent bg-clip-text">
          {featuresConfig.headline}
        </h2>
        <Link
          to="#"
          className="flex gap-3 font-medium underline underline-offset-4 text-primary"
        >
          {featuresConfig.link}
          <ChevronRight className="animate-fade-right" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {featuresConfig.featureCard.map((item) => {
          return <DashbordFeatureCard key={item.header} item={item} />;
        })}
      </div>
    </section>
  );
};

export default DashboardFeatures;
