import React,{ Component } from 'react';
import { Grid, TextField, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
class AccessMaster extends Component{
    accessMaster;
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state={
            aid:'',
            aname:'',
            adesc:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault()
        localStorage.setItem('accessMaster',JSON.stringify(this.state))
    }
    componentDidMount(){
        this.documentData=JSON.parse(localStorage.getItem('accessMaster'));
        if(localStorage.getItem('accessMaster')){
            this.setState({
                aid: this.documentData.aid,
                aname:this.documentData.aname,
                adesc:this.documentData.adesc
            })
        }else{
            this.setState({
                aid:'',
                aname:'',
                adesc:''
            })
        }
    }
    render(){
        return(
            <Grid align="center">
            <Paper elevation={10} style={{margin:"30px",height:"60vh"
                ,width:280,padding:20}}>
                    <Grid>
            <h2 style={{color:"violet"}}>Access Master</h2>
      <form alignContent="center" onSubmit={this.handleFormSubmit}>
      <TextField type="text" fullWidth ref="aid" name="aid" label="Access Id" value={this.state.aid} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="aname" name="aname" label="Access Name" value={this.state.aname} onChange={this.handleChange}/>
      <TextField type="text" fullWidth ref="adesc" name="adesc" label="Description" value={this.state.adesc} onChange={this.handleChange}/><br></br>
           <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
      </form>
      <button><NavLink to="/Master">back</NavLink></button>
      </Grid>
      </Paper>
      </Grid>
        )
    }
}
export default AccessMaster;