import {
  Box,
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material'
import React from 'react'

function ProjectCard({ headerText, imageUrl, text }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin={2}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          sx={{ height: 300, width: 500 }}
          image={imageUrl}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {headerText}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Подробнее</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ProjectCard
