import { Grid,Typography } from "@material-ui/core";
import React,{ Component } from "react";
import { NavLink,HashRouter,Route } from "react-router-dom";
import ServiceMaster from "./ServiceMaster";
import UserMaster from "./UserMaster";
import RoleMaster from "./RoleMaster";
import RuleMaster from "./RuleMaster";
import ServiceCatalogMaster from "./ServiceCatalogMaster";
import AccessMaster from "./AccessMaster";
import Home from "../Home";
class Master extends Component{
    state={}
    logout=()=>{
            this.props.history.push("/home");
        }
    render(){
        return(
            <HashRouter>
            <div>
                <h3 style={{color:"blue"}}>Masters</h3>
                <ul className="header">
                <li><NavLink to="/um">UserMaster</NavLink></li>
                <li><NavLink to="/rm">RuleMaster</NavLink></li>
                <li><NavLink to="/rlm">RoleMaster</NavLink></li>
                <li><NavLink to="/acm">AccessMaster</NavLink></li>
                <li><NavLink to="/sm">ServiceMaster</NavLink></li>
                <li><NavLink to="/scm">ServiceCatalogMaster</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/um" component={UserMaster}/>
                    <Route exact path="/rm" component={RuleMaster}/>
                    <Route exact path="/rlm" component={RoleMaster}/>
                    <Route exact path="/acm" component={AccessMaster}/>
                    <Route exact path="/sm" component={ServiceMaster}/>
                    <Route exact path="/scm" component={ServiceCatalogMaster}/>
                </div>
                <Typography>
                <Grid alignContent="flex-end" style={{padding:"60px auto"}}>
                <button onClick={()=>{this.logout()}} fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>Logout</button>
                </Grid> 
                    </Typography>
                    </div>
                    </HashRouter>
        )
    }
}
export default Master;