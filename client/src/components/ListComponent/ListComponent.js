import {
  Avatar, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material'
import React from 'react'

function ListComponent({ technologyStackObj }) {
  return (
    <List sx={{
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
    }}
    >
      <ListItem sx={{
        margin: 0,
        padding: 0,
      }}
      >
        <ListItemAvatar>
          <Avatar
            src={technologyStackObj.url}
            sx={{
              width: 30,
              height: 30,
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={technologyStackObj.name}
        />
      </ListItem>
    </List>
  )
}

export default ListComponent
