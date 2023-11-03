import { lazy, LazyExoticComponent, FC } from "react";

import { routeObjectGenerator } from "@helpers/routes.helpers";
import { headers } from "@resources/headers";
import { Paths } from "@types_/constants.enums";
import { type RouteObject } from "@types_/routes.types";

/**
 * Lazy import of the parent component of each page.
 * The component name should be TitleCase.
 * @example "LandingPage"
 */
const LandingPage: LazyExoticComponent<FC> = lazy(() => import("@components/pages/LandingPage"));
const Authontication: LazyExoticComponent<FC> = lazy(() => import("@components/pages/Authontication"));
const OTPForm: LazyExoticComponent<FC> = lazy(() => import("@components/forms/OTPForm"));
const NotFound: LazyExoticComponent<FC> = lazy(() => import("@components/pages/NotFound"));

///////DASHBOARD ROUTES//////////
const Overview: LazyExoticComponent<FC> = lazy(() => import("@components/containers/dashboard/Overview"));
const Balances: LazyExoticComponent<FC> = lazy(() => import("@components/containers/dashboard/Balances"));
////////////////////////////////

/**
 * Route Objects declaration, each object should have the following properties:
 * @param path - The URL path for the route.
 * @param element - The component to render for the route.
 * @param name - A name or identifier for the route.
 */

const routesMap = new Map<string, RouteObject>();
routesMap.set(Paths.LANDING, routeObjectGenerator(Paths.LANDING, LandingPage, false, headers.ownMoney));
routesMap.set(Paths.AUTHONTICATION, routeObjectGenerator(Paths.AUTHONTICATION, Authontication, false, headers.account));
routesMap.set(Paths.OTP, routeObjectGenerator(Paths.OTP, OTPForm, false, headers.otpVerification));
routesMap.set(Paths.NOT_FOUND, routeObjectGenerator(Paths.NOT_FOUND, NotFound, false, headers.notFound));

const dashboardRoutes = new Map<string, RouteObject>();
dashboardRoutes.set(Paths.OVERVIEW, routeObjectGenerator(Paths.OVERVIEW, Overview, false, headers.overview));
dashboardRoutes.set(Paths.BALANCES, routeObjectGenerator(Paths.BALANCES, Balances, false, headers.Balances));

export { routesMap, dashboardRoutes };