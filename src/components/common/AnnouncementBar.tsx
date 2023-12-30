import { FC } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const AnnouncementBar: FC = () => {
  return (
    <header className="animate-delay-2000 animate-fade-down bg-primary text-xs md:text-sm">
      <div className="container flex p-2 align-middle">
        <div className="grow">
          <p className="flex justify-center gap-2">
            <span className="font-bold">Announcment bar</span>
            <span>- Heading goes here</span>
            <Link to="#" className="font-medium underline underline-offset-4">
              Link Text
            </Link>
          </p>
        </div>
        <X size={16} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default AnnouncementBar;
