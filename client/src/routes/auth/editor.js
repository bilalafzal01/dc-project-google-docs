import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

const EditorPage = lazy(() => import("../../containers/EditorPage"));

const HomeRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={EditorPage} />
    </Switch>
  );
};

export default HomeRoutes;
