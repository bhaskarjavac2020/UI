import React,{ Component } from "react";
import { Grid } from '@material-ui/core';
import { NavLink,Switch } from 'react-router-dom';
class Forgot extends React.Component{
    render(){
        return(
            <Grid>
                <h1>You are forgotten password</h1>                
            <Switch>
                <NavLink to="/home">Home</NavLink>
            </Switch>
            </Grid>
        )
    };
};
export default Forgot;