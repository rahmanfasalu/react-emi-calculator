import React from "react";
import { Route } from "react-router-dom";
import RouteType from "../../interfaces/route.type";

// Shared: Build Route
// This will build route the routes based on the RouteType
function BuildRoute({ routes }: { routes: RouteType[] }): JSX.Element {
  return (
    <>
      {routes.map(({ path, component, exact }: RouteType, key) => (
        <Route
          exact={exact ? exact : false}
          path={path}
          component={component}
          key={key}
        />
      ))}
    </>
  );
}
export default BuildRoute;
