import {Button,Grid, Paper, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class UserMaster extends Component {
    userMaster;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.master={};
        this.state = {
            uid: '',
            uname: '',
            udesc: ''
        }
    }
    
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit.
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('userMaster',JSON.stringify(this.state));
   this.master=JSON.parse(localStorage.getItem('userMaster'));

}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('userMaster'));
    if (localStorage.getItem('userMaster')) {
        this.setState({
            uid: this.documentData.uid,
           uname: this.documentData.uname,
           udesc: this.documentData.udesc
    })
} else {
    this.setState({
        uid: '',
        uname: '',
        udesc: ''
    })
}
}
 
render() {
    return (
        <Grid className="container" align="center" margin="30px auto">
            <Paper elevation={10} style={{margin:"30px",height:"60vh"
                ,width:280,padding:20,align:'center'}}>
            <Grid>
                
            <form alignContent="center" onSubmit={this.handleFormSubmit}>
                <h2 style={{color:"violet"}}>User Master</h2><br></br>
                    <TextField fullWidth type="text" name="uid" label="User ID" value={this.state.uid} onChange={this.handleChange}/>
                    <TextField fullWidth type="text" name="uname" label="Username" value={this.state.uname} onChange={this.handleChange} />
                  <TextField fullWidth type="text" name="udesc" label="Description" value={this.state.udesc} onChange={this.handleChange} /><br></br><br></br>
                  <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
            </form>
            <button><NavLink to="/Master">back</NavLink></button>
            </Grid>
            </Paper>
            
    <table border="1" width="40%">
    <tr>
    <th>UID</th>
    <th>UNAME</th>
    <th>UDESC</th>
    </tr>
    <tr>
    <td>{this.master.uid}</td>
    <td>{this.master.uname}</td>
    <td>{this.master.udesc}</td>
    </tr>
    </table>       
        </Grid>
    )
}
}
        