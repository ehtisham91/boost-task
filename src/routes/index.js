import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import LoadingScreen from "../components/LoadingScreen";
import routes from "./routesList";

export const renderRoutes = () => (
  <Suspense fallback={<LoadingScreen key="loadingScreen" />}>
    <Routes>
      {routes.map((route, i) => {
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={<Component />}
          />
        );
      })}
    </Routes>
  </Suspense>
);
