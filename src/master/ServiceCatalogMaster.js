import React,{ Component } from 'react';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
class ServiceCatalogMaster extends Component{
    serviceCatalogMaster;
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state={
            scid:'',
            scname:'',
            scdesc:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault()
        localStorage.setItem('serviceCatalogMaster',JSON.stringify(this.state))
    }
    componentDidMount(){
        this.documentData=JSON.parse(localStorage.getItem('serviceCatalogMaster'));
        if(localStorage.getItem('serviceCatalogMaster')){
            this.setState({
                scid: this.documentData.scid,
                scname:this.documentData.scname,
                scdesc:this.documentData.scdesc
            })
        }else{
            this.setState({
                scid:'',
                scname:'',
                scdesc:''
            })
        }
    }
    render(){
        return(
            <Grid align="center">
            <Paper elevation={10} style={{margin:"30px",height:"60vh"
                ,width:280,padding:20}}>
                    <Grid>
            <h2 style={{color:"violet"}}>Service Catalog Master</h2>
      <form alignContent="center" onSubmit={this.handleFormSubmit}>
      <TextField type="text" fullWidth ref="scid" name="scid" label="SC Id" value={this.state.scid} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="scname" name="scname" label="SC Name" value={this.state.scname} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="scdesc" name="scdesc" label="Description" value={this.state.scdesc} onChange={this.handleChange}/><br></br>
           <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
      </form>
      <button><NavLink to="/Master">back</NavLink></button>
      </Grid>
      </Paper>
      </Grid>
        )
    }
}
export default ServiceCatalogMaster;