import { LazyExoticComponent, FC } from "react";

export function routeObjectGenerator(path: string,
  element: LazyExoticComponent<FC>,
  name: string) {
  return {
    path,
    element,
    name,
  };
}