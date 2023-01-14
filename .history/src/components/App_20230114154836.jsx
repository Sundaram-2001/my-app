import React from "react";
import Login from "./Login";

var isLoggedIn=true;


function App(){
  return(
    isLoggedIn?<h2>Hello</h2>:<Login />
    
}
  