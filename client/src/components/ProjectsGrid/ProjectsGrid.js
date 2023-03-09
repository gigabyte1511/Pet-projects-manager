import { Box, Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import ProjectCard from '../ProjectCard/ProjectCard'
import sbermyshop from './projectImage/sber-myshop.png'
import greencorp from './projectImage/green-corp.png'
import plantscontroller from './projectImage/plants-controller.png'
import AlmatyBigLake from './projectImage/almaty-parallax.png'

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
        <Grid item xs={0}>
          <ProjectCard
            name="Green corp landing"
            imageUrl={greencorp}
            mainDiscription="Simple landing site. It was developed during the educational process under the SBER-UNIVERSITY program."
            url="https://gigabyte1511.github.io/green-corp-landing/"
            gitHubUrl="https://github.com/gigabyte1511/green-corp-landing"
            discription="This project is a page that, with the help of a brief presentation of the product, encourages the user to take a targeted action."
            technologyStack={[
              { name: 'Canvas js', url: 'https://img.stackshare.io/service/3324/SSbwsRam_400x400.jpg' },
              { name: 'CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'HTML', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Plants controller"
            imageUrl={plantscontroller}
            mainDiscription="SPA, it is a graphical interface designed to control the Plants controller system. Was designed to study IoT technology."
            url="https://gigabyte1511.github.io/PlantsController/"
            gitHubUrl="https://github.com/gigabyte1511/PlantsController"
            discription="This graphical interface is designed to manage and configure the Plant Control system, designed to automate the care of house plants."
            technologyStack={[
              { name: 'HTML', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'JS', url: 'https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg' },
              { name: 'C++', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' },
              { name: 'ESP32', url: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/ELE013.jpg' },
              { name: 'Arduino', url: 'https://toppng.com/uploads/preview/arduino-logo-11563227354ny21akychx.png' },
              { name: 'IoT', url: 'https://img.freepik.com/premium-vector/smart-home-internet-things-logo_108855-3717.jpg?w=2000' },
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Big Almaty lake"
            imageUrl={AlmatyBigLake}
            mainDiscription="Single page landing to demonstrate the parallax effect"
            url="https://gigabyte1511.github.io/Parallax-effect/"
            gitHubUrl="https://github.com/gigabyte1511/Parallax-effect"
            discription="This graphical interface is designed to manage and configure the Plant Control system, designed to automate the care of house plants."
            technologyStack={[
              { name: 'HTML', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
            ]}
          />
        </Grid>
      </Grid>

      <Outlet context={['test']} />
    </>
  )
}
export default ProjectsGrid
