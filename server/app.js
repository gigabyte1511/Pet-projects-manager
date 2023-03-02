// require('dotenv').config()
// const express = require('express')
// const cors = require('cors')

// // const { managerSideRouter } = require('./src/routes/managerSideRouter')
// const { sequelize } = require('./src/models/index')

// const server = express()
// const PORT = process.env.SERVER_PORT

// // server.use('/img', express.static(`${__dirname}/html/img`));
// // server.use('/', express.static(`${__dirname}/html`));

// server.use('/', express.static(`${__dirname}/build`))

// server.use(cors())
// // sequelize.sync({ force: true })
// sequelize.sync({ alter: true })
//   .then(() => {
//     console.log('The DB has been succesfuly synced')
//   })
//   .catch((err) => {
//     console.log(`Failed to sync DB: ${err.message}`)
//   })

// server.use(express.json())
// // // Роут сайта клиента
// // server.use('/api/v0.1/client', clientSideRouter)
// // // Роут админки
// // server.use('/api/v0.1/admin', adminSideRouter)

// // server.use('/api/v0.1/manager', managerSideRouter)

// server.listen(PORT, () => {
//   console.log(`Server has been started on port: ${PORT}`)
// })

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(9000)
