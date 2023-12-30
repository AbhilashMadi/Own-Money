import { LazyExoticComponent, FC } from "react";

export function routeObjectGenerator(
  path: string,
  element: LazyExoticComponent<FC>,
  protectedRoute: boolean,
  name: string,
) {
  return {
    path,
    element,
    protectedRoute,
    name,
  };
}
