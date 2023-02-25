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
      <Typography gutterBottom variant="p" component="div" padding={1} margin={0}>
        <p>Габец Денис Николаевич</p>
        <Link href="https://github.com/gigabyte1511">https://github.com/gigabyte1511</Link>
      </Typography>
    </Paper>
  )
}

export default Footer
