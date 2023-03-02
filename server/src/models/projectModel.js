// Определение модели продукта
const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const ProjectModel = sequelize.define('project', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Default description',
  },
  image: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png',
  },
  projectURL: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png',
  },
})

module.exports = { ProjectModel }
