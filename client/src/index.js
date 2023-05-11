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

import ProjectsGrid from './components/ProjectsGrid/ProjectsGrid'
import Preview from './components/Preview/Preview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Preview />,
      },
      {
        path: 'projects',
        element: <ProjectsGrid />,
        children: [
          {
            path: 'detail',
            element: <ProjectDetail />,
          }],
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
