import { FC } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const AnnouncementBar: FC = () => {

  return (
    <header className="bg-primary text-sm ">
      <div className="container inline-grid items-center p-2 grid-cols-3">
        <div></div>
        <p className="flex items-center gap-2 place-content-center">
          <span className="font-bold">
            Announcment bar
          </span>
          <span>
            - Heading goes here
          </span>
          <Link to="/" className="underline-offset-4 underline">
            link text
          </Link>
        </p>

        <div className="flex place-content-end rounded-full">
          <X size={16} className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default AnnouncementBar;