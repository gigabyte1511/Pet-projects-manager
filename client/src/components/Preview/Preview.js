import { Link, Paper, Typography } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <Paper
      sx={{
        position: 'relative', bottom: 0, left: 0, right: 0,
      }}
      elevation={1}
    >
      <Typography
        variant="h6"
        sx={{
          padding: 1,
          textAlign: 'center',
        }}
      >
        Welcome to the demo page of my Pet projects
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          padding: 1,
          textAlign: 'center',
        }}
      >
        The application was developed to familiarize employers with my developments as part of the educational process
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          padding: 2,
        }}
      >

        In the side menu in the &quot;Project Grid&quot; tab you can get a table of cards describing my projects and jump directly to them.
      </Typography>
    </Paper>

  )
}

export default Preview
