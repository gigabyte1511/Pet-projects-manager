import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Preview() {
  return (
    <Paper
      sx={{
        position: 'relative', bottom: 0, left: 0, right: 0,
      }}
      elevation={1}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          padding: 2,
          textAlign: 'center',
        }}
      >
        Добро пожаловать на демонстрационную страницу моих Pet-проектов
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          padding: 2,
          textAlign: 'center',
        }}
      >
        Приложение разработано с целью ознакомления работодателей с моими разработками в рамках учебного процесса
      </Typography>
      <Typography
        variant="p"
        component="div"
        sx={{
          padding: 2,
        }}
      >
        В боковом меню во вкладке &quot;Сетка проектов&quot; вы можете получить таблицу карточек с описанием моих проектов и непосредственно перейти на сайты проектов
      </Typography>
      <Typography variant="h6" component="div" padding={1} margin={0}>
        <Link href="https://github.com/gigabyte1511">GitHub</Link>
      </Typography>
    </Paper>
  )
}

export default Preview
