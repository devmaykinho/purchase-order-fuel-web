import React from "react";
import './login.css';
import Link from "../../components/link";
import Input from "../../components/input";
import Button from "../../components/button";
import { SubTitle } from "./LoginPageStyled";

interface ILoginPageViewProps {}

const LoginPageView: React.FC<ILoginPageViewProps> = () => {
  return (
    <form>
      <SubTitle>GTA Login</SubTitle>
      <Input />
      <Input />
      <Button />
      <Link />
    </form>
  );
};

export default LoginPageView;
