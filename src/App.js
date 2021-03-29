import React,{ Component } from "react";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Forgot from "./Forgot";
import Master from "./master/Master";
//import UserMaster from "./master/UserMaster";
class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Forgot" component={Forgot}/>
          <Route path="/Master" component={Master}/>
        </Switch>
      </Router>
      //<UserMaster></UserMaster>
    )
  };
};
export default App;