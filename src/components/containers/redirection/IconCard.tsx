import { FC } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import { Redirection } from "@temp/redirectionConfig";
import { cn } from "@lib/utils";

interface IIconCard {
  item: Redirection;
}

const IconCard: FC<IIconCard> = (props) => {
  const { item } = props;
  const [ref, isInView] = useInView({
    triggerOnce: false,
  });

  return (
    <div ref={ref} className={cn("self-stretch font-medium underline underline-offset-4 text-primary flex flex-col cursor-pointer", isInView && "animate-fade-up animate-delay-100")}>
      <img src={item.iconImg} alt={item.link} className="my-auto h-[10rem] w-auto hover:-translate-y-3 drop-shadow-xl mt-4 transition-all"/>
      <Link to={item.href} className="mt-8">{item.link}</Link>
    </div>
  );
};

export default IconCard;