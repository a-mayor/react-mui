import React,{ Component,Fragment } from 'react'
import { 
  Dialog,
  Button, 
  DialogTitle,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';
import { Add } from '@material-ui/icons'
import Form from './Form';


export default class extends Component{
  state = {
    open: false
  }
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleFormSubmit = exercise => {
    this.handleToggle()
    this.props.onCreate(exercise)
  }
  render(){
    const { open } = this.state,
          { muscles } = this.props
    return <Fragment>
    <Button sx={{
      width:2,
      height:1,
      padding:2,
      color:"black",
      borderRadius:"50%",
      backgroundColor:"#dddddd"
    }} variant="contained" onClick={this.handleToggle} mini="true">
      <Add />
    </Button>
  <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>
            Create a new Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form
            muscles={muscles} 
            onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
  </Fragment>
  }
}
