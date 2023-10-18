import { LazyExoticComponent, FC } from "react";

export function routeObjectGenerator(path: string,
  element: LazyExoticComponent<FC>,
  protectedRoute: boolean,
  isLayout: boolean,
  name: string) {
  return {
    path,
    element,
    protectedRoute,
    isLayout,
    name,
  };
}
