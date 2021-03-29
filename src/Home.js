import React,{ Component } from 'react';
import { Grid,Typography } from "@material-ui/core";
import {NavLink } from "react-router-dom";
class Home extends React.Component{
    render(){
        return(
            <Grid style={{textAlign:"center",backgroundColor:"aqua",height:"190vh"}}>
                <h1 style={{backgroundColor:"pink",width:"400"}}>Welcome to Vyavasaya</h1>
           <Grid>
               <Grid style={{backgroundColor:"tomato",height:"25px",width:80,padding:10,margin:"20px auto"}}>
                 
                    <Typography>
                        <NavLink to="/Login"><b>Login</b></NavLink> 
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        )
    }
};
export default Home;