import { FC, ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Paths } from "@types_/constants.enums";
import DashboardLayout from "@components/common/DashboardLayout";

interface IRequireAuth {
  children: ReactNode;
  title: string;
}

const RequireAuth: FC<IRequireAuth> = (props) => {
  const { children, title } = props;
  const from = useLocation();
  const auth = false;

  document.title = title || "";

  return auth
    ? <DashboardLayout>
      {children}
    </DashboardLayout>
    : <Navigate to={Paths.AUTHONTICATION} state={{ from }} replace />;
};

export default RequireAuth;