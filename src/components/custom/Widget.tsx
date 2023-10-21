import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { ChevronRight } from "lucide-react";
import { labels } from "@resources/labels";

interface IWidget {
  isFooter?: boolean;
  isHeader?: boolean;
  contnt: ReactNode;
  footer?: ReactNode;
  title?: string;
  header?: ReactNode;
  discription?: string;
  viewAll?: string;
  className?: string;
  widgetTitle?: string;
  headerNavigatin?: {
    label: string;
    href: string;
  };
}

const Widget: FC<IWidget> = (props) => {
  const {
    isFooter = false,
    isHeader = false,
    contnt = <></>,
    footer = <></>,
    header = <></>,
    widgetTitle = "",
    title = "",
    discription = "",
    viewAll = "",
    className = "",
    headerNavigatin = { label: "", href: "" },
  } = props;

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <p className="pb-2 text-gray-400">{widgetTitle}</p>
        {!!viewAll && <Link to={viewAll}
          className="text-xs text-gray-400">{labels.viewAll}{" "}
          <ChevronRight size={16} className="inline" />
        </Link>}
      </div>
      <Card className="border-0 shadow-widget">
        {isHeader
          ? <>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {title}
                <Link to={headerNavigatin.href}
                  className="text-sm text-gray-600 font-normal">
                  {headerNavigatin.label}
                </Link>
              </CardTitle>
              <CardDescription>
                {discription}
              </CardDescription>
            </CardHeader>
          </>
          : header}
        <CardContent>
          {contnt}
        </CardContent>
        {isFooter && <CardFooter>{footer}</CardFooter>}
      </Card >
    </div>
  );
};

export default Widget;