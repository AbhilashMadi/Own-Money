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
const LandingPage: LazyExoticComponent<FC> = lazy(
  () => import("@components/pages/LandingPage"),
);
const Authontication: LazyExoticComponent<FC> = lazy(
  () => import("@components/pages/Authontication"),
);
const OTPForm: LazyExoticComponent<FC> = lazy(
  () => import("@components/forms/OTPForm"),
);
const NotFound: LazyExoticComponent<FC> = lazy(
  () => import("@components/pages/NotFound"),
);

///////DASHBOARD PAGES//////////
const Overview: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/Overview"),
);
const Balances: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/Balances"),
);
const AccountDetails: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/AccountDetails"),
);
const Transactions: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/Transactions"),
);
const Bills: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/Bills"),
);
const Expenses: LazyExoticComponent<FC> = lazy(
  () => import("@components/containers/dashboard/Expenses"),
);

////////////////////////////////

/**
 * Route Objects declaration, each object should have the following properties:
 * @param path - The URL path for the route.
 * @param element - The component to render for the route.
 * @param name - A name or identifier for the route.
 */

const routesMap = new Map<string, RouteObject>();
routesMap.set(
  Paths.LANDING,
  routeObjectGenerator(Paths.LANDING, LandingPage, false, headers.ownMoney),
);
routesMap.set(
  Paths.AUTHONTICATION,
  routeObjectGenerator(
    Paths.AUTHONTICATION,
    Authontication,
    false,
    headers.account,
  ),
);
routesMap.set(
  Paths.OTP,
  routeObjectGenerator(Paths.OTP, OTPForm, false, headers.otpVerification),
);
routesMap.set(
  Paths.NOT_FOUND,
  routeObjectGenerator(Paths.NOT_FOUND, NotFound, false, headers.notFound),
);

//////DASHBOARD ROUTES////////
routesMap.set(
  Paths.OVERVIEW,
  routeObjectGenerator(Paths.OVERVIEW, Overview, true, headers.overview),
);
routesMap.set(
  Paths.BALANCES,
  routeObjectGenerator(Paths.BALANCES, Balances, true, headers.balances));

routesMap.set(
  Paths.ACCOUNT_DETAILS,
  routeObjectGenerator(
    Paths.ACCOUNT_DETAILS,
    AccountDetails,
    true,
    headers.AccountDetails,
  ));

routesMap.set(
  Paths.TRANSACTIONS,
  routeObjectGenerator(
    Paths.TRANSACTIONS,
    Transactions,
    true,
    headers.transactions,
  ));

routesMap.set(
  Paths.BILLS,
  routeObjectGenerator(Paths.BILLS, Bills, true, headers.Bills));

routesMap.set(
  Paths.EXPENSES,
  routeObjectGenerator(Paths.EXPENSES, Expenses, true, headers.expenses));
/////////////////////////////

export { routesMap };
