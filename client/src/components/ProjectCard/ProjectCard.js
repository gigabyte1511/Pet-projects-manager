import {
  Avatar,
  AvatarGroup,
  Box,
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function ProjectCard({
  name, imageUrl, mainDiscription, url, discription,
  technologyStack, gitHubUrl,
}) {
  const test = { test: 123 }
  const navigate = useNavigate()
  const navigateToDetail = () => navigate('detail', {
    state: {
      name, imageUrl, mainDiscription, url, discription, technologyStack, gitHubUrl,
    },
  })
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin={2}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 300, width: 500, cursor: 'pointer' }}
            image={imageUrl}
            title="green iguana"
            onClick={navigateToDetail}
          />
        </CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mainDiscription}
          </Typography>
        </CardContent>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        >
          <CardActions>
            <Button size="small" onClick={navigateToDetail}>More</Button>
          </CardActions>
          <AvatarGroup>
            {technologyStack.map((elem) => <Avatar key={elem.url} sx={{ width: 30, height: 30, backgroundColor: 'white' }} alt="Trevor Henderson" src={elem.url} />)}
          </AvatarGroup>
        </Box>
      </Card>
    </Box>
  )
}

export default ProjectCard
