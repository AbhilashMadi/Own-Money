import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FC } from "react";

import routesMap from "@routes/routes";
import { RouteObject } from "@types_/routes.types";
import Layout from "@components/common/Layout";
import { Paths } from "@types_/constants.enums.ts";
import { ThemProvider } from "@context/ThemeProvider";

const PageRoutes: FC = () => {

  return (
    <ThemProvider>
      <BrowserRouter>
        <Routes>
          {[...routesMap.values()].map((page: RouteObject) => {
            return <Route index={page.path === Paths.LANDING}
              key={page.path}
              path={page.path}
              element={page.protectedRoute
                ? <p>Protected Route</p>
                : <Layout>
                  <page.element />
                </Layout>} />;
          })}
        </Routes>
      </BrowserRouter>
    </ThemProvider>
  );
};

export default PageRoutes;