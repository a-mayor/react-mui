import { Paper, Tabs } from '@material-ui/core'
import { Tab } from '@material-ui/core'
import React from 'react'

export default ({ muscles,category,onSelect }) => {
  const index = category
  ? muscles.findIndex(muscle => muscle === category) + 1
  : 0
  const onIndexSelect = (e,index) =>
    onSelect(index === 0 ? '': muscles[index - 1])
 

return <Paper>
  <Tabs
  value={index}
  onChange={onIndexSelect}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="All" />
    {muscles.map((group) => (<Tab key={group} label={group}/>))}
  </Tabs>
</Paper>
}