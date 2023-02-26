import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

function ProjectDetail() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,

      },
    }}
    >
      <Paper elevation={1}>
        <Typography variant="h5">custom border</Typography>
        <p>213</p>
      </Paper>
    </Box>
  )
}

export default ProjectDetail
