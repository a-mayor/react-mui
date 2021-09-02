import React from 'react'
import { Component } from 'react';
import { MenuItem, InputLabel,FormControl, TextField, Stack, Select, Button,} from '@material-ui/core'
export default class extends Component {

   state = this.getInitialState()

      getInitialState(){
        const { exercise } = this.props
        return exercise ? exercise:{
          title: '',
          description: '',
          muscles: ''
        }
      }

      static getDerivedStateFromProps({ exercise }){
        return exercise || null
      }


      handleChange = name => ({ target: { value } }) => 
      this.setState({
          [name]: value
      })
    
      
      handleSubmit = () => {
        this.props.onSubmit({
          id: this.state.title.toLocaleLowerCase().replace(/ /g, '-'),
          ...this.state
        })
        this.setState(
          this.getInitialState())
      }

      render(){
          const {title,muscles,description} = this.state,
         { exercise,muscles: categories } = this.props
        return <Stack
        component="form"
        sx={{
        width: '30ch',
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        >
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          variant="standard"
          margin="normal"
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="muscles">
          Muscles
        </InputLabel>
        <Select
        value={muscles}
        onChange={this.handleChange('muscles')}
        >
        {categories.map(category => (
        <MenuItem key={category} value={category}>
          {category}
        </MenuItem>
          ))}
        </Select>
        </FormControl>
          <TextField
          multiline
          label="Description"
          rows="4"
          value={description}
          onChange={this.handleChange('description')}
          variant="standard"
          margin="normal"
          />
          <Button sx={{
            backgroundColor:'#385ed6',
          }} variant="raised"onClick={this.handleSubmit}>
            {exercise ? 'Edit' : 'Create'}
          </Button>
      </Stack>
    }
}