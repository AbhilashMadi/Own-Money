import { FC } from "react";

import { teamConfig } from "@temp/teamConfig";
import { useInView } from "react-intersection-observer";
import { cn } from "@lib/utils";

const Team: FC = () => {
  const [ref, isInView] = useInView({
    triggerOnce: false,
  });

  return (
    <section className="p-8 space-y-8" ref={ref}>
      <div className={cn("text-center", isInView && "animate-fade-up animate-delay-200")}>
        <h3 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">{teamConfig.healine}</h3>
        <p className="md:w-3/4 mx-auto leading-6 [&:not(:first-child)]:mt-6 font-mont">{teamConfig.description}</p>
      </div>

      <div className={cn("flex gap-y-10 gap-x-4 flex-wrap justify-center items-center", isInView && "animate-fade-up animate-delay-500")}>
        {teamConfig.team.map((item) => {
          return <div key={item.name} className="text-center space-y-4">
            <img src={item.img} alt={item.name} className="h-64 w-56 object-cover hover:scale-105 hover:shadow-md rounded-lg  transition-all overflow-hidden mb-4" />
            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{item.name}</h4>
              <p className="font-mont">{item.position}</p>
            </div>
          </div>;
        })}
      </div>

    </section>
  );
};

export default Team;