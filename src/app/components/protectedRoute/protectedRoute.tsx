//eslint-disable-next-line
import React from "react";
import { LoginPage } from "../../pages/login/LoginPage";

export interface IProtectedRouter {
  routeName: string
}

const ProtectedRoute: React.FC<IProtectedRouter> = (props: IProtectedRouter) => {
  const { routeName } = props;
  return (
    <LoginPage/>
  );
};

export default ProtectedRoute;
