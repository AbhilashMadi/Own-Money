import { lazy, LazyExoticComponent, FC } from "react";

import { routeObjectGenerator } from "@helpers/routes.helpers";
import { headers } from "@resources/headers";
import { Paths } from "@routes/paths";
import { type RouteObject } from "@types_/routes.types";

/**
 * Lazy import of the parent component of each page.
 * The component name should be TitleCase.
 * @example "LandingPage"
 */
const LandingPage: LazyExoticComponent<FC> = lazy(() => import("@components/pages/LandingPage"));
const Register: LazyExoticComponent<FC> = lazy(() => import("@components/pages/Register"));
const Login: LazyExoticComponent<FC> = lazy(() => import("@components/pages/Login"));

/**
 * Route Objects declaration, each object should have the following properties:
 * @param path - The URL path for the route.
 * @param element - The component to render for the route.
 * @param name - A name or identifier for the route.
 */

const routesMap = new Map<string, RouteObject>();
routesMap.set(Paths.LANDING, routeObjectGenerator(Paths.LANDING, LandingPage, false, headers.ownMoney));
routesMap.set(Paths.REGISTER, routeObjectGenerator(Paths.REGISTER, Register, false, headers.register));
routesMap.set(Paths.LOGIN_IN, routeObjectGenerator(Paths.LOGIN_IN, Login, false, headers.logIn));

export default routesMap;