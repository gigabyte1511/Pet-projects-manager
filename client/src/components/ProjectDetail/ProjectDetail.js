import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import {
  Avatar,
  Card, CardActions, CardContent, CardMedia, Divider, Link, List, ListItem, ListItemAvatar, ListItemText,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite'
import ListComponent from '../ListComponent/ListComponent'

const style = {
  position: 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -48%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,

}

export default function BasicModal() {
  const { state } = useLocation()
  const {
    name, imageUrl, mainDiscription, url, discription, technologyStack, gitHubUrl,
  } = state

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(true)
  const handleClose = () => {
    setOpen(false)
    navigate('..')
  }

  return (
    <Modal
      sx={{ overflow: 'scroll' }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <CardMedia
          sx={{ height: 500, width: 900 }}
          image={imageUrl}
          title="green iguana"
        />
        <CardContent sx={{
          padding: 0,
        }}
        >
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
        </CardContent>
        <Divider />

        <CardActions sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        >
          <Link
            href={url}
            target="_blank"
            sx={{
              display: 'flex',
              alignItems: 'center',
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

        </CardActions>
        <Divider />
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
        >
          {technologyStack.map((technologyStackObj) => <ListComponent technologyStackObj={technologyStackObj} />)}
        </Box>
      </Card>
    </Modal>
  )
}
