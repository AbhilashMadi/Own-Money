import { FC } from "react";

import { Highlight } from "@types_/temp.config";

interface IFeatureItem {
  item: Highlight;
}

const FeatureItem: FC<IFeatureItem> = (props) => {
  const { item } = props;

  return (
    <div className="flex animate-fade-up gap-4 animate-delay-300">
      <span className="self-start pt-1 text-primary">{item.icon}</span>
      <div>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {item.headline}
        </h4>
        <p className="font-mont leading-6 [&:not(:first-child)]:mt-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default FeatureItem;
