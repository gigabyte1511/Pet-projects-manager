import { Grid } from '@mui/material'
import green_corp_main from '../../assets/green_corp/green_corp_main.png'
import green_corp_1 from '../../assets/green_corp/green_corp_1.png'
import green_corp_2 from '../../assets/green_corp/green_corp_2.png'

import almaty_main from '../../assets/big_almaty_lake/almaty_main.png'

import sber_myshop_main from '../../assets/sber_myshop/sber_myshop_main.png'
import sber_myshop_1 from '../../assets/sber_myshop/sber_myshop_1.png'
import sber_myshop_2 from '../../assets/sber_myshop/sber_myshop_2.png'

import plants_controller_main from '../../assets/plants_controller/plants_controller_main.png'
import plants_controller_1 from '../../assets/plants_controller/plants_controller_1.png'
import plants_controller_2 from '../../assets/plants_controller/plants_controller_2.png'

import lawyer_landing_main from '../../assets/lawyer_landing/lawyer_landing_main.png'
import lawyer_landing_1 from '../../assets/lawyer_landing/lawyer_landing_1.png'
import lawyer_landing_2 from '../../assets/lawyer_landing/lawyer_landing_2.png'

import myiot_admin_main from '../../assets/myiot_admin/myiot_admin_main.png'
import myiot_admin_1 from '../../assets/myiot_admin/myiot_admin_1.png'

import ProjectCard from '../ProjectCard'

export function ProjectsPage(): JSX.Element {
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
            images={[sber_myshop_main, sber_myshop_1, sber_myshop_2]}
            mainDiscription="SPA of a typical internet shop. It was developed during the educational process under the SBER-UNIVERSITY program."
            projectURL="http://13.37.52.101:3001/"
            gitHubURL="https://github.com/gigabyte1511/Sber-myShop"
            discription="The project is a single-page application designed to display various goods and products received from the Back-end application of the educational platform. The interaction with the server is performed in accordance with the REST-API architecture. Implemented authorization on JWT tokens, the mechanism and pages for adding and displaying goods in the basket and in the list. Component styling is done with CSS Modules. Routing inside the application is implemented using the React-Router-Dom library, calls to the project API are provided by the TanStack Query library. Used Formik forms and Yup validation. The search bar has a debounce optimization. The Redux Tool Kit is used to access and store global variables.The project is a single-page application designed to display various goods and products received from the Back-end application of the educational platform. The interaction with the server is performed in accordance with the REST-API architecture. Implemented authorization on JWT tokens, the mechanism and pages for adding and displaying goods in the basket and in the list. Component styling is done with CSS Modules. Routing inside the application is implemented using the React-Router-Dom library, calls to the project API are provided by the TanStack Query library. Used Formik forms and Yup validation. The search bar has a debounce optimization. The Redux Tool Kit is used to access and store global variables.The project is a single-page application designed to display various goods and products received from the Back-end application of the educational platform. The interaction with the server is performed in accordance with the REST-API architecture. Implemented authorization on JWT tokens, the mechanism and pages for adding and displaying goods in the basket and in the list. Component styling is done with CSS Modules. Routing inside the application is implemented using the React-Router-Dom library, calls to the project API are provided by the TanStack Query library. Used Formik forms and Yup validation. The search bar has a debounce optimization. The Redux Tool Kit is used to access and store global variables."
            technologyStack={[
              { name: 'React', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207' },
              { name: 'TanStack Query', labelURL: 'https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' },
              { name: 'React-Router-Dom', labelURL: 'https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png' },
              { name: 'Redux', labelURL: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
              { name: 'Formik', labelURL: 'https://img.stackshare.io/service/8846/preview.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Green corp landing"
            images={[green_corp_main, green_corp_1, green_corp_2]}
            mainDiscription="Simple landing site. It was developed during the educational process under the SBER-UNIVERSITY program."
            projectURL="https://gigabyte1511.github.io/green-corp-landing/"
            gitHubURL="https://github.com/gigabyte1511/green-corp-landing"
            discription="This project is a page that, with the help of a brief presentation of the product, encourages the user to take a targeted action."
            technologyStack={[
              { name: 'Canvas js', labelURL: 'https://img.stackshare.io/service/3324/SSbwsRam_400x400.jpg' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Plants controller"
            images={[plants_controller_main, plants_controller_1, plants_controller_2]}
            mainDiscription="SPA, it is a graphical interface designed to control the Plants controller system. Was designed to study IoT technology."
            projectURL="https://gigabyte1511.github.io/PlantsController/"
            gitHubURL="https://github.com/gigabyte1511/PlantsController"
            discription="This graphical interface is designed to manage and configure the Plant Control system, designed to automate the care of house plants."
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'JS', labelURL: 'https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg' },
              { name: 'C++', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' },
              { name: 'ESP32', labelURL: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/ELE013.jpg' },
              { name: 'Arduino', labelURL: 'https://toppng.com/uploads/preview/arduino-logo-11563227354ny21akychx.png' },
              { name: 'IoT', labelURL: 'https://img.freepik.com/premium-vector/smart-home-internet-things-logo_108855-3717.jpg?w=2000' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Big Almaty lake"
            images={[almaty_main]}
            mainDiscription="Single page landing to demonstrate the parallax effect"
            projectURL="https://gigabyte1511.github.io/Parallax-effect/"
            gitHubURL="https://github.com/gigabyte1511/Parallax-effect"
            discription="This graphical interface is designed to manage and configure the Plant Control system, designed to automate the care of house plants."
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Lawyer landing site"
            images={[lawyer_landing_main, lawyer_landing_1, lawyer_landing_2]}
            mainDiscription="123"
            projectURL="https://di-lawyer-landing-dw668udj0-gigabyte1511.vercel.app/"
            gitHubURL="https://github.com/gigabyte1511/di_lawyer_landing_app"
            discription="123"
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'TypeScript', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Plants controller"
            images={[myiot_admin_main, myiot_admin_1]}
            mainDiscription="SPA, it is a graphical interface designed to control the Plants controller system. Was designed to study IoT technology."
            projectURL="https://gigabyte1511.github.io/PlantsController/"
            gitHubURL="https://github.com/gigabyte1511/PlantsController"
            discription="This graphical interface is designed to manage and configure the Plant Control system, designed to automate the care of house plants."
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'JS', labelURL: 'https://i.pinimg.com/736x/28/75/3d/28753ddf79d70042ba86564947e13bf5.jpg' },
              { name: 'C++', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png' },
              { name: 'ESP32', labelURL: 'https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/ELE013.jpg' },
              { name: 'Arduino', labelURL: 'https://toppng.com/uploads/preview/arduino-logo-11563227354ny21akychx.png' },
              { name: 'IoT', labelURL: 'https://img.freepik.com/premium-vector/smart-home-internet-things-logo_108855-3717.jpg?w=2000' }
            ]}
          />
        </Grid>
      </Grid>
    </>
  )
}
