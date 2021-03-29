import React,{ Component } from 'react';
import { Grid,TextField, Paper, Button } from '@material-ui/core'; 
import { NavLink } from 'react-router-dom';
class RoleMaster extends Component{
    roleMaster;
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state={
            rlid:'',
            rlname:'',
            rldesc:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault()
        localStorage.setItem('roleMaster',JSON.stringify(this.state));
    }
    componentDidMount(){
       this.documentData=JSON.parse(localStorage.getItem('roleMaster'));
       if(localStorage.getItem('roleMaster')){
           this.setState({
               rlid:this.documentData.rlid,
               rlname:this.documentData.rlname,
               rldesc:this.documentData.rldesc
           })
       }else{
           this.setState({
               rlid:'',
               rlname:'',
               rldesc:''
           })
       }
    }
    render(){
        return(
            <Grid align="center">
                <Paper elevation={10} style={{margin:"30px",height:"60vh"
                    ,width:280,padding:20}}>
                <h2 style={{color:"violet"}}>Role Master</h2>
                <Grid>
          <form alignContent="center" onSubmit={this.handleFormSubmit}>

          <TextField type="text" fullWidth ref="rlid" name="rlid" label="Ruler Id" value={this.state.rlid} onChange={this.handleChange}/>
           <TextField type="text" fullWidth ref="rlname" name="rlname" label="Ruler Name" value={this.state.rlname} onChange={this.handleChange}/>
           <TextField type="text" fullWidth ref="rldesc" name="rldesc" label="Description" value={this.state.rldesc} onChange={this.handleChange}/><br></br>
           <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
          </form>
          <button><NavLink to="/Master">back</NavLink></button>
          </Grid>
          </Paper>
          </Grid>
        )
    }
}
export default RoleMaster;