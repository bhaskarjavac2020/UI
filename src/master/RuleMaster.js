import React,{ Component } from 'react';
import { Grid,TextField, Paper, Button } from '@material-ui/core'; 
import { NavLink } from 'react-router-dom';
class RuleMaster extends Component{
    ruleMaster;
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.state={
            rid:'',
            rname:'',
            rdesc:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleFormSubmit(e){
        e.preventDefault()
        localStorage.setItem('ruleMaster',JSON.stringify(this.state));
    }
    componentDidMount(){
       this.documentData=JSON.parse(localStorage.getItem('ruleMaster'));
       if(localStorage.getItem('ruleMaster')){
           this.setState({
               rid:this.documentData.rid,
               rname:this.documentData.rname,
               rdesc:this.documentData.rdesc
           })
       }else{
           this.setState({
               rid:'',
               rname:'',
               rdesc:''
           })
       }
    }
    render(){
        return(
            <Grid align="center">
                <Paper elevation={10} style={{margin:"30px",height:"60vh"
                    ,width:280,padding:20}}>
                <h2 style={{color:"violet"}}>Rule Master</h2>
                <Grid>
          <form alignContent="center" onSubmit={this.handleFormSubmit}>

          <TextField type="text" fullWidth ref="rid" name="rid" label="Ruler Id" value={this.state.rid} onChange={this.handleChange}/>
           <TextField type="text" fullWidth ref="rname" name="rname" label="Ruler Name" value={this.state.rname} onChange={this.handleChange}/>
           <TextField type="text" fullWidth ref="rdesc" name="rdesc" label="Description" value={this.state.rdesc} onChange={this.handleChange}/><br></br>
           <Button type="submit" fullWidth variant="contained" color="secondary" style={{margin:"8px 0"}}>save</Button>
          </form>
          <button><NavLink to="/Master">back</NavLink></button>
          </Grid>
          </Paper>
          </Grid>
        )
    }
}
export default RuleMaster;