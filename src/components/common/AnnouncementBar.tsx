import { FC } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const AnnouncementBar: FC = () => {

  return (
    <header className="bg-primary animate-fade-down animate-delay-2000 text-xs md:text-sm">
      <div className="p-2 flex container">
        <div className="grow">
          <p className="flex justify-center gap-2">
            <span className="font-bold">Announcment bar</span>
            <span>- Heading goes here</span>
            <Link to="#" className="underline underline-offset-4 font-medium">Link Text</Link>
          </p>
        </div>
        <X size={16} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default AnnouncementBar;