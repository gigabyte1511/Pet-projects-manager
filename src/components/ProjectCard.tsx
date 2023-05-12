import {
  Avatar,
  AvatarGroup,
  Box,
  Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography
} from '@mui/material'
import { useState } from 'react'
import { type ProjectInfo } from '../types/ProjectInfo'
import ProjectDetail from './ProjectDetail'

function ProjectCard({
  name, images, mainDiscription, projectURL, discription,
  technologyStack, gitHubURL
}: ProjectInfo): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  console.log('ProjectCard', images)
  const navigateToDetail = () => {
    setIsOpen(true)
  }
  return (
    <>
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
              image={images[0]}
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
            justifyContent: 'space-between'
          }}
          >
            <CardActions>
              <Button size="small" onClick={navigateToDetail}>More</Button>
            </CardActions>
            <AvatarGroup max={8}>
              {technologyStack.map((elem) => <Avatar key={elem.labelURL} sx={{ width: 30, height: 30, backgroundColor: 'white' }} alt="Trevor Henderson" src={elem.labelURL} />)}
            </AvatarGroup>
          </Box>
        </Card>
      </Box>
      <ProjectDetail
        openProp={{
          isOpen,
          setIsOpen
        }}
        name={name}
        images={images}
        mainDiscription={mainDiscription}
        projectURL={projectURL}
        discription={discription}
        technologyStack={technologyStack}
        gitHubURL={gitHubURL}
      />
    </>
  )
}

export default ProjectCard
