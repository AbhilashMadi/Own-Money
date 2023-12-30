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
    <div
      ref={ref}
      className={cn(
        "flex cursor-pointer flex-col self-stretch font-medium text-primary underline underline-offset-4",
        isInView && "animate-fade-up animate-delay-100",
      )}
    >
      <img
        src={item.iconImg}
        alt={item.link}
        className="my-auto mt-4 h-[10rem] w-auto drop-shadow-xl transition-all hover:-translate-y-3"
      />
      <Link to={item.href} className="mt-8">
        {item.link}
      </Link>
    </div>
  );
};

export default IconCard;
