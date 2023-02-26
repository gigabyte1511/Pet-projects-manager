import {
  BottomNavigation, BottomNavigationAction, Box, Link, Paper, Typography,
} from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Paper
      sx={{
        position: 'relative', bottom: 0, left: 0, right: 0,
      }}
      elevation={3}
    >
      <Typography gutterBottom variant="h6" component="div" padding={1} margin={0}>
        <Link href="https://github.com/gigabyte1511">GitHub</Link>
        {' '}
        <br />
        Gabets Denis Nikolaevich test
      </Typography>
    </Paper>
  )
}

export default Footer
