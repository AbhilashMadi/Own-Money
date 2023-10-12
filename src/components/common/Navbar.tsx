import { FC } from "react";

import { useTheme } from "@context/context";

const Navbar: FC = () => {
  const { theme } = useTheme();

  return (
    <nav>
      {theme}
    </nav>
  );
};

export default Navbar;