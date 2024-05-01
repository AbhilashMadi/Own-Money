import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { redirectionConfig } from "@temp/redirectionConfig";
import IconCard from "@components/containers/redirection/IconCard";
import { cn } from "@lib/utils";

const Redirection: FC = () => {
  const [ref, isInView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="space-y-8 p-8 text-center" ref={ref}>
      <div className="space-y-5">
        <h2
          className={cn(
            "inline-block scroll-m-20 bg-gradient-to-tr from-orange-600 to-orange-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent lg:text-4xl",
            isInView && "animate-fade-up",
          )}
        >
          {redirectionConfig.headline}
        </h2>
        <p
          className={cn(
            "mx-auto font-mont leading-6 md:w-3/4 [&:not(:first-child)]:mt-6",
            isInView && "animate-fade-up animate-delay-100",
          )}
        >
          {redirectionConfig.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 align-middle">
        {redirectionConfig.redirections.map((item) => {
          return <IconCard item={item} />;
        })}
      </div>
    </section>
  );
};

export default Redirection;
