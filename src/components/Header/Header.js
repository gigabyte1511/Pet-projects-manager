import {
  AppBar, Box, Button, IconButton, Toolbar, Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import React from 'react'
import { ShoppingBag } from '@mui/icons-material'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <ShoppingBag />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
