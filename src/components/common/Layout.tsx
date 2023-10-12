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
    <>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;