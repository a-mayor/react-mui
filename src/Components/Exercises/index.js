import {React, Fragment } from 'react';
import { 
  Box, 
  Grid, 
  List, 
  Paper, 
  ListItem,
  Typography, 
  IconButton,
  ListItemText, 
  ListItemButton, 
  ListItemSecondaryAction, 
} from '@material-ui/core'
import { styled } from '@material-ui/core/styles';
import { Delete, Edit } from '@material-ui/icons';
import Form from './Form'
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  textTransform:'capitalize',
  height:330,
  overflowY:'auto'
}));
export default (({ 
  exercises,
  category,
  editMode,
  muscles,
  exercise,
  onSelect, 
   exercise:{
    id,
    title="Welcome!",
    description="We are happy to be of service to you."
   },
    onDelete,
    onSelectEdit,
    onEdit
    }) =>
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
  <Grid item xs={4}>
  <Item>
    {exercises.map(([group,exercises]) => (
       !category || category === group
       ? <Fragment key={group}>
        <Typography variant="h6" style={{ textTransform:"capitalize"}}>
          {group}
        </Typography>
       <List component="nav">
         {exercises.map(({id,title}) => (
          <ListItem disablePadding key={id}>
          <ListItemButton  onClick={() => onSelect(id)}>
            <ListItemText primary={title}/>
          </ListItemButton>
          <ListItemSecondaryAction>
              <IconButton onClick={() => onSelectEdit(id)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => onDelete(id)}>
                <Delete />
              </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
         ))}
       </List>
       </Fragment>
       :null
    ))}
  </Item>
  </Grid>
  <Grid item xs={8}>
  <Item>
  {
  editMode 
  ? <Form
  exercise={exercise}
  muscles={muscles}
  onSubmit={onEdit}
  /> 
  : <Fragment>
      <Typography variant="h6">
     {title}
    </Typography>
    <Typography variant="body2" style={{marginTop:"20px"}}>
      {description}
    </Typography>
    </Fragment>
  }
  </Item>
  </Grid>
</Grid>
</Box>
)