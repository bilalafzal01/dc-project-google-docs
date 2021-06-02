/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthLayout from "../../layout";
import home from "./home";

const FrontendRoutes = () => {
  return (
    <AuthLayout>
      <Switch>
        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          {/* routes here */}
          <Route exact path="/" component={home} />
        </Suspense>
      </Switch>
    </AuthLayout>
  );
};

export default FrontendRoutes;
