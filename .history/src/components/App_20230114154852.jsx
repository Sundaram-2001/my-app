import React from "react";
import Login from "./Login";

var isLoggedIn=true;


function App(){
  return(<div>
    isLoggedIn?<h2>Hello</h2>:<Login />
  )
}
  