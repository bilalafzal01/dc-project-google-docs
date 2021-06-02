/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from "react";
import { Spin } from "antd";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "../../layout";

const FrontendRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Suspense
          fallback={
            <div className="spin">
              <Spin />
            </div>
          }
        >
          {/* routes here */}
          <Route exact path="/" component={<div>hey</div>} />
        </Suspense>
      </Switch>
    </Layout>
  );
};

export default FrontendRoutes;
