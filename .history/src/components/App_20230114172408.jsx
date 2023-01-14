import React from "react";
import Login from "./Login";

var isLoggedIn=true;
var date=new Date();
var currentTime=date.getHours();


function App(){
  return <div className="container">{
    //isLoggedIn===true ? <h2>Hello</h2> : <Login />
   { 
    currentTime>12 && currentTime<18
  }
  </div>;

}
  
export default App;