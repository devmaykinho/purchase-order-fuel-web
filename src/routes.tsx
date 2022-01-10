/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginPage } from "./app/pages/login/LoginPage";
import ProtectedRoute from "./app/components/protectedRoute/protectedRoute";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact 
        path="/">
        {<Redirect to="/home" />}
      </Route>      
      <Route path="/home"
        exact>
        <ProtectedRoute routeName="download" />
      </Route>
    </Switch>
    <Switch>
      <Route path="/login"
        exact>
        <LoginPage />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
