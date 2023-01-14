import React from "react";
import Input from "./Input";

function Login(){
  return (
  <form className="form">
  <Input type="text" placeholder="Enter your name" />
  <Input type="password" placeholder="Enter your password"/>
  <Input type="password" placeholder="Enter your password"/>
    <button type="Submit">LogIN</button>
  </form>
  );
}

export default Login;