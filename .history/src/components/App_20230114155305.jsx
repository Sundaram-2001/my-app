import React from "react";
import Login from "./Login";

var isLoggedIn=true;


function App(){
  return(<div className="container">{}
    isLoggedIn===true ? <h2>Hello</h2> : <Login />
  </div>

  );
}
  
export default App;