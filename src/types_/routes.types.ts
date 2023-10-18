import { LazyExoticComponent, FC } from "react";

export type RouteObject = {
  path: string;
  element: LazyExoticComponent<FC>;
  protectedRoute: boolean;
  name: string;
}