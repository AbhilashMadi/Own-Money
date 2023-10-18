import { FC, ReactNode } from "react";
// import Navbar from "@components/common/Navbar";
// import Footer from "@components/common/Footer";
// import AnnouncementBar from "@components/common/AnnouncementBar";
import Wrapper from "@components/common/Wrapper";

interface ILayout {
  children: ReactNode;
}

const Layout: FC<ILayout> = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen w-full font-inter">
      {/* <AnnouncementBar /> */}
      {/* <Navbar /> */}
      <Wrapper>
        {children}
      </Wrapper>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;