import {Typography,Button,Avatar,TextField, Grid, Paper } from "@material-ui/core";
import React,{ Component } from "react";
import HttpsIcon from '@material-ui/icons/Https';
import {NavLink,Switch} from "react-router-dom";
import Master from "./master/Master";
class Login extends React.Component{
    veriFy=()=>{
        if(this.refs.uname!=="admin"&&this.refs.pwd!=="admin"){
            this.props.history.push("/Master");
        }else{
            alert("Invalid password");
        }
    }
    render(){
        return(
            <Grid>
                <center><Paper elevation={10} style={{backgroundColor:"aqua",margin:"30px",height:"70vh"
                    ,width:280,padding:20}}>
                        <Grid align="center">
                            <Avatar style={{backgroundColor:"royalblue"}}><HttpsIcon/></Avatar>
                    <h2>Signin</h2>
                    </Grid>
                    <TextField ref="uname" color="primary" label="username" fullWidth required/>
                    <TextField ref="pwd" color="primary" type="Password" label="password" fullWidth required/><br></br><br></br>
                    <Button onClick={()=>{this.veriFy()}} fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>Login</Button>
               <Switch>
                   <Typography>
                   <NavLink to="/forgot">Forgot Password ?</NavLink><br></br>
                          <NavLink to="/home">Home</NavLink>
                   </Typography>
               </Switch>
                </Paper></center>
            </Grid>
        )
    };
};
export default Login;