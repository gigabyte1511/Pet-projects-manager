import Modal from '@mui/material/Modal'
import {
  Box, Card, CardActions, Divider, Link, Typography, styled
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import { type ProjectInfo } from '../types/ProjectInfo'
import { ListComponent } from './ListComponent'
import { ImageCarousel } from './layouts/ImageCarousel'

const ProjectCard = styled(Card)({
  position: 'absolute',
  left: '50%',
  top: '5vw',
  transform: 'translate(-50%)',
  boxShadow: '0 0 24px rgba(0, 0, 0, 0.5)',
  padding: 20,
  overflow: 'scroll'
})

const CarouselContainer = styled('div')({
  width: '50vw',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 10
})

interface Props extends ProjectInfo {
  openProp: {
    isOpen: boolean
    setIsOpen: (param: boolean) => void
  }
}
export default function ProjectDetail({
  openProp, name, images, mainDiscription, projectURL, discription, technologyStack, gitHubURL
}: Props): JSX.Element {
  const handleClose = (): void => {
    openProp.setIsOpen(false)
  }
  return (
    <Modal
      sx={{
        overflow: 'scroll'
      }}
      open={openProp.isOpen}
      onClose={handleClose}
    >
      <ProjectCard>
        <CarouselContainer>
          <ImageCarousel images={images} />
        </CarouselContainer>
        <Divider />
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {mainDiscription}
        </Typography>
        <Divider />
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            padding: 3
          }}
        >
          {discription}
        </Typography>
        <Divider />

        <CardActions sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        >
          <Box sx={{
            display: 'flex',
            gap: 10
          }}
          >
            <Link
              href={projectURL}
              target="_blank"
              sx={{
                display: 'flex'
              }}
            >
              <PlayCircleFilledWhiteIcon />
              Go to project
            </Link>

            <Link
              href={gitHubURL}
              target="_blank"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <GitHubIcon />
              GitHub
            </Link>
          </Box>
        </CardActions>
        <Divider />
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
        >
          {technologyStack.map((technologyStackObj) => <ListComponent key={technologyStackObj.name} technologyStackObj={technologyStackObj} />)}
        </Box>
        <Divider />

      </ProjectCard>
    </Modal>
  )
}
