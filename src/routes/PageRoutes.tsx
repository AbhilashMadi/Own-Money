import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FC } from "react";

import { routesMap } from "@routes/routes";
import { RouteObject } from "@types_/routes.types";
import Layout from "@components/common/Layout";
import { ThemProvider } from "@context/ThemeProvider";
import RequireAuth from "@components/common/RequireAuth";
import AppContext from "@context/AppContext";

const PageRoutes: FC = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <ThemProvider>
          <Routes>
            {[...routesMap.values()].map((route: RouteObject) => {
              return (
                <Route
                  path={route.path}
                  element={
                    route.protectedRoute ? (
                      <RequireAuth title={route.name}>
                        <route.element />
                      </RequireAuth>
                    ) : (
                      <Layout>
                        <route.element />
                      </Layout>
                    )
                  }
                />
              );
            })}
          </Routes>
        </ThemProvider>
      </AppContext>
    </BrowserRouter>
  );
};

export default PageRoutes;
