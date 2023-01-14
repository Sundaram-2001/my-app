import React from "react";
import Login from "./Login";

var isLoggedIn=true;
var date=new Date();
var currentTime=date.getHours();



function App(){
  return <div className="container">{

    currentTime>12 && <h1>Why are you still working!</h1>
  }


  </div>

}
export default App;