import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";

import routesMap from "./routes";
import { RouteObject } from "@types_/routes.types";
import Layout from "@components/common/Layout";
import { Paths } from "@routes/paths";

const PageRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {[...routesMap.values()].map((page: RouteObject) => {
          return <Route
            index={page.path === Paths.LANDING}
            element={<Layout>
              <page.element />
            </Layout>}
          />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;