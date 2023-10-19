import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FC } from "react";

import { routesMap, dashboardRoutes } from "@routes/routes";
import { RouteObject } from "@types_/routes.types";
import Layout from "@components/common/Layout";
import DashboardLayout from "@components/common/DashboardLayout";
import { Paths } from "@types_/constants.enums.ts";
import { ThemProvider } from "@context/ThemeProvider";
import AppContext from "@context/AppContext";

const PageRoutes: FC = () => {

  return (
    <AppContext>
      <ThemProvider>
        <BrowserRouter>
          <Routes>
            {/* static routes (unprotected) | (unprotected) */}
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

            {/* dashboard route (protected) */}
            {[...dashboardRoutes.values()].map((page: RouteObject) => {
              return <Route
                key={page.name}
                path={page.path}
                element={<DashboardLayout>
                  <page.element />
                </DashboardLayout >} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemProvider>
    </AppContext>
  );
};

export default PageRoutes;