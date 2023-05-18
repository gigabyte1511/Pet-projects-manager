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

import whereto from '../../assets/whereto/whereto_main.png'

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
            date="15.02.2023"
            images={[sber_myshop_main, sber_myshop_1, sber_myshop_2]}
            mainDiscription="SPA - приложение типичного интернет-магазина"
            projectURL="https://sber-my-shop-e7lik2zbo-gigabyte1511.vercel.app/main?search=&sort=Disable"
            gitHubURL="https://github.com/gigabyte1511/Sber-myShop"
            discription="Проект представляет собой одностраничное приложение, предназначенное для отображения различных товаров и продуктов, полученных из Back-end приложения образовательной платформы SberUniversity. Взаимодействие с сервером осуществляется в соответствии с архитектурой REST-API. Реализована авторизация на токенах JWT, механизм добавления, редактирования и отображения товаров. Стилизация компонентов выполняется с помощью модулей CSS. Маршрутизация внутри приложения реализована с помощью библиотеки React-Router-Dom, обращения к API проекта обеспечиваются библиотекой TanStack Query. Используемые формы Formik и проверка Yup. Панель поиска имеет debounce оптимизацию. Для хранения и получения доступа к глобальным переменным используется Redux Tool Kit."
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
            date="29.10.2022"
            images={[green_corp_main, green_corp_1, green_corp_2]}
            mainDiscription="Сайт-лендинг"
            projectURL="https://gigabyte1511.github.io/green-corp-landing/"
            gitHubURL="https://github.com/gigabyte1511/green-corp-landing"
            discription="Простой одностраничный сайт - ленинг, разработанный в ходе обучения по образовательной программе SberUniversity"
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
            date="10.06.2022"
            images={[plants_controller_main, plants_controller_1, plants_controller_2]}
            mainDiscription="Демонтрационная версия графического интерфейса системы мониторинга и ухода за домашними растениями"
            projectURL="https://gigabyte1511.github.io/PlantsController/"
            gitHubURL="https://github.com/gigabyte1511/PlantsController"
            discription="Представляет собой одностраничное приложение, навигация по которому выполнено при поможи вкладок-табов. На первой вкладке отображаются текущие показания датчиков системы, а также есть возможность выбора режима работы канала контроля. Во второй вкладке реализован планировщик задач системы на 24 часа. Третья вкладка служит для анализа показаний датчиков системы в виде графиков. В четвертой вкладке располагается сервисное меню. Отображение показаний устройств недоступны на данный момент всвязи с отключением системы."
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
            date="02.03.2023"
            images={[almaty_main]}
            mainDiscription="Single page landing to demonstrate the parallax effect"
            projectURL="https://gigabyte1511.github.io/Parallax-effect/"
            gitHubURL="https://github.com/gigabyte1511/Parallax-effect"
            discription=""
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="Lawyer landing site"
            date="15.04.2023"
            images={[lawyer_landing_main, lawyer_landing_1, lawyer_landing_2]}
            mainDiscription="Демонстрационная версия лендинга специалиста по оказанию юридических услуг"
            projectURL="https://di-lawyer-landing-dw668udj0-gigabyte1511.vercel.app/"
            gitHubURL="https://github.com/gigabyte1511/di_lawyer_landing_app"
            discription="Демонстрационнное SPA-приложение, представляющее собой лендинг бизнес-проекта частного юриста. На сайте есть возможность записаться на консультацию, ознакомится с перечнем услуг и кейсами специалиста. Приложение имеет оптимизациу под мобильные устройства на основе медиа-запросов с определением диапазонов вьюпортов устройств."
            technologyStack={[
              { name: 'HTML', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
              { name: 'CSS', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
              { name: 'TypeScript', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="MyIOT Admin panel MUI"
            date="02.05.2023"
            images={[myiot_admin_main, myiot_admin_1]}
            mainDiscription="Панель управления IOT устройствами и аналитики данных"
            projectURL="https://gigabyte1511.github.io/PlantsController/"
            gitHubURL="https://github.com/gigabyte1511/MyIOT_admin_MUI"
            discription="Представляет собой SPA, слущащее для отображения, анализа и редактирования данных, полученных от устройств интернет вещей. Графики реализованы при помощи бибилиотеки ChartJS. Данные предоставляются серверным node.js приложением, которое принимает показания от IOT-устройств, выполняет их валидацию и сохраняет в удаленой SQL базе данных. Подробнее можете узнать GitHub репозитории проекта."
            technologyStack={[
              { name: 'TypeScript', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
              { name: 'React', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207' },
              { name: 'TanStack Query', labelURL: 'https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' },
              { name: 'React-Router-Dom', labelURL: 'https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png' },
              { name: 'Formik', labelURL: 'https://img.stackshare.io/service/8846/preview.png' },
              { name: 'MUI', labelURL: 'https://mui.com/static/logo.png' }
            ]}
          />
        </Grid>
        <Grid item xs={0}>
          <ProjectCard
            name="WhereTo subsonic"
            date="24.03.2023"
            images={[whereto]}
            mainDiscription="Приложение для отображение музыкальных альбомов сервиса SubSonic"
            projectURL="http://13.37.52.101:3051"
            gitHubURL="https://github.com/gigabyte1511/MyIOT_admin_MUI"
            discription="Представляет собой одностраничное веб-приложение, слущащее для отображения музыкальных альбомов в виде бесконечной карусели и сожержащих их музыкальных композиций. Данные о музыкальных альбомах приложение получает от API Subsonic. Карусель изображений реализована при помощи стандартых React-интструментов без использования сторонних бибилиотек скролов и анимаций."
            technologyStack={[
              { name: 'React', labelURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207' },
              { name: 'TanStack Query', labelURL: 'https://react-query-v3.tanstack.com/_next/static/images/emblem-light-628080660fddb35787ff6c77e97ca43e.svg' },
              { name: 'React-Router-Dom', labelURL: 'https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png' }
            ]}
          />
        </Grid>
      </Grid>
    </>
  )
}
