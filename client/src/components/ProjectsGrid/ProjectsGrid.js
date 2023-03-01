import { Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'
import sbermyshop from './projectImage/sber-myshop.png'

function ProjectsGrid() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="baseline"
      >
        <Grid item xs={0}>
          <ProjectCard
            name="My Shop"
            imageUrl={sbermyshop}
            mainDiscription="SPA of a typical internet shop. It was developed during the educational process under the SBER-UNIVERSITY program."
            url="http://13.37.52.101:3001/"
            gitHubUrl="https://github.com/gigabyte1511/Sber-myShop"
            discription="The project is a single-page application designed to display various goods and products received from the Back-end application of the educational platform. The interaction with the server is performed in accordance with the REST-API architecture. Implemented authorization on JWT tokens, the mechanism and pages for adding and displaying goods in the basket and in the list. Component styling is done with CSS Modules. Routing inside the application is implemented using the React-Router-Dom library, calls to the project API are provided by the TanStack Query library. Used Formik forms and Yup validation. The search bar has a debounce optimization. The Redux Tool Kit is used to access and store global variables."
            technologyStack={[
              { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207' },
              { name: 'TanStack Query', url: 'https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' },
              { name: 'React-Router-Dom', url: 'https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png' },
              { name: 'Redux', url: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
              { name: 'Formik', url: 'https://img.stackshare.io/service/8846/preview.png' },
            ]}
          />
        </Grid>
      </Grid>
      <Outlet context={['test']} />
    </>
  )
}
export default ProjectsGrid
