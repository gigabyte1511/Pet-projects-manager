import * as React from 'react'
import Modal from '@mui/material/Modal'
import { useNavigate, useOutletContext } from 'react-router-dom'
import {
  Box, Card, CardActions, Divider, Link, Typography, styled,
} from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import { ImageCarousel } from '../ImageCarousel/ImageCarousel'
import ListComponent from '../ListComponent/ListComponent'

const ProjectCard = styled(Card)({
  position: 'absolute',
  left: '50%',
  top: '5vw',
  transform: 'translate(-50%)',
  boxShadow: 24,
  padding: 20,
  overflow: 'scroll',
})

export default function ProjectDetail({
  openProp, name, images, mainDiscription, url, discription, technologyStack, gitHubUrl,
}) {
  const handleClose = () => {
    openProp.setIsOpen(false)
  }
  return (
    <Modal
      sx={{
        overflow: 'scroll',
      }}
      open={openProp.isOpen}
      onClose={handleClose}
    >
      <ProjectCard>
        <ImageCarousel images={images} />
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
            padding: 3,
          }}
        >
          {discription}
        </Typography>
        <Divider />

        <CardActions sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Box sx={{
            display: 'flex',
            gap: 10,
          }}
          >
            <Link
              href={url}
              target="_blank"
              sx={{
                display: 'flex',
              }}
            >
              <PlayCircleFilledWhiteIcon />
              Go to project
            </Link>

            <Link
              href={gitHubUrl}
              target="_blank"
              sx={{
                display: 'flex',
                alignItems: 'center',
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
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
        >
          {technologyStack.map((technologyStackObj) => <ListComponent technologyStackObj={technologyStackObj} />)}
        </Box>
        <Divider />

      </ProjectCard>
    </Modal>
  )
}
