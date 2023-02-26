import { Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'

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
          <ProjectCard headerText="My Shop" imageUrl="https://v4.mui.com/static/images/themes-light.jpg" text="Индивидуальный учебный pet-проект" />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard headerText="Green Corp" imageUrl="https://v4.mui.com/static/images/themes-light.jpg" text="First SPA aplication" />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard headerText="Green Corp" imageUrl="https://v4.mui.com/static/images/themes-light.jpg" text="First SPA aplication" />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard headerText="Green Corp" imageUrl="https://v4.mui.com/static/images/themes-light.jpg" text="First SPA aplication" />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard headerText="Green Corp" imageUrl="https://v4.mui.com/static/images/themes-light.jpg" text="First SPA aplication" />
        </Grid>
      </Grid>
      <Outlet context={['test']} />
    </>
  )
}
export default ProjectsGrid
