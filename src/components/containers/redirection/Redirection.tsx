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
    <section className="p-8 space-y-8 text-center" ref={ref}>
      <div className="space-y-5">
        <h2
          className={cn(
            "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl bg-gradient-to-tr from-orange-600 to-orange-300 inline-block text-transparent bg-clip-text",
            isInView && "animate-fade-up",
          )}
        >
          {redirectionConfig.headline}
        </h2>
        <p
          className={cn(
            "md:w-3/4 mx-auto leading-6 [&:not(:first-child)]:mt-6 font-mont",
            isInView && "animate-fade-up animate-delay-100",
          )}
        >
          {redirectionConfig.description}
        </p>
      </div>

      <div className="flex flex-wrap align-middle justify-center gap-10">
        {redirectionConfig.redirections.map((item) => {
          return <IconCard item={item} />;
        })}
      </div>
    </section>
  );
};

export default Redirection;
