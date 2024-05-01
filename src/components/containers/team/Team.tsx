import { FC } from "react";

import { teamConfig } from "@temp/teamConfig";
import { useInView } from "react-intersection-observer";
import { cn } from "@lib/utils";

const Team: FC = () => {
  const [ref, isInView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="space-y-8 p-8" ref={ref}>
      <div
        className={cn(
          "text-center",
          isInView && "animate-fade-up animate-delay-200",
        )}
      >
        <h3 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          {teamConfig.healine}
        </h3>
        <p className="mx-auto font-mont leading-6 md:w-3/4 [&:not(:first-child)]:mt-6">
          {teamConfig.description}
        </p>
      </div>

      <div
        className={cn(
          "flex flex-wrap items-center justify-center gap-x-4 gap-y-10",
          isInView && "animate-fade-up animate-delay-500",
        )}
      >
        {teamConfig.team.map((item) => {
          return (
            <div key={item.name} className="space-y-4 text-center">
              <img
                src={item.img}
                alt={item.name}
                className="mb-4 h-64 w-56 overflow-hidden rounded-lg object-cover  transition-all hover:scale-105 hover:shadow-md"
              />
              <div>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {item.name}
                </h4>
                <p className="font-mont">{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
