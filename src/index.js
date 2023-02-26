import React from 'react'
import ReactDOM from 'react-dom/client'
import { Container } from '@mui/material'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import ProjectDetail from './components/ProjectDetail/ProjectDetail'
import SiteDrawer from './components/Drawer/SiteDrawer'
import ProjectsGrid from './components/Main/ProjectsGrid'
import Main from './components/Preview/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'main',
        element: <ProjectsGrid />,
      },
      {
        path: 'detail',
        element: <ProjectDetail />,
      },
      {
        path: 'drawer',
        element: <SiteDrawer />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
