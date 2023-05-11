import './App.css'
import {
  Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery,
} from '@mui/material'
import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import SiteDrawer from './components/Drawer/SiteDrawer'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(
    () => createTheme({
      palette: (prefersDarkMode) ? ({
        mode: 'dark',
        primary: { main: '#0288d1', dark: '#ffa726' },
      }) : ({
        mode: 'light',
        primary: { main: '#0288d1', dark: '#ffa726' },
        background: { default: 'rgba(230, 230, 230, 0.7)' },
      }),
    }),
    [prefersDarkMode],
  )
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteDrawer component={<Outlet />} />
    </ThemeProvider>
  )
}

export default App
