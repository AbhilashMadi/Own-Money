import { FC, ReactNode } from "react";
import Navbar from "@components/common/Navbar";
import Footer from "@components/common/Footer";
import AnnouncementBar from "@components/common/AnnouncementBar";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props;

  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;