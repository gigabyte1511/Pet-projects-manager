import {
  Avatar, List, ListItem, ListItemAvatar, ListItemText
} from '@mui/material'
import { type TechnologyStack } from '../types/ProjectInfo'

export function ListComponent({ technologyStackObj }: { technologyStackObj: TechnologyStack }): JSX.Element {
  return (
    <List sx={{
      width: '100%',
      maxWidth: 360
    }}
    >
      <ListItem sx={{
        margin: 0,
        padding: 0
      }}
      >
        <ListItemAvatar>
          <Avatar
            src={technologyStackObj.labelURL}
            sx={{
              width: 30,
              height: 30
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
