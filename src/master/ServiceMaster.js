import React,{ Component } from 'react';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
class ServiceMaster extends Component{
    serviceMaster;
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state={
            sid:'',
            sname:'',
            sdesc:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault()
        localStorage.setItem('serviceMaster',JSON.stringify(this.state))
    }
    componentDidMount(){
        this.documentData=JSON.parse(localStorage.getItem('serviceMaster'));
        if(localStorage.getItem('serviceMaster')){
            this.setState({
                sid: this.documentData.sid,
                sname:this.documentData.sname,
                sdesc:this.documentData.sdesc
            })
        }else{
            this.setState({
                sid:'',
                sname:'',
                sdesc:''
            })
        }
    }
    render(){
        return(
            <Grid align="center">
            <Paper elevation={10} style={{margin:"30px",height:"60vh"
                ,width:280,padding:20}}>
                    <Grid>
            <h2 style={{color:"violet"}}>Service Master</h2>
      <form alignContent="center" onSubmit={this.handleFormSubmit}>
      <TextField type="text" fullWidth ref="sid" name="sid" label="Service Id" value={this.state.sid} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="sname" name="sname" label="Service Name" value={this.state.sname} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="sdesc" name="sdesc" label="Description" value={this.state.sdesc} onChange={this.handleChange}/><br></br>
           <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
      </form>
      <button><NavLink to="/Master">back</NavLink></button>
      </Grid>
      </Paper>
      </Grid>
        )
    }
}
export default ServiceMaster;