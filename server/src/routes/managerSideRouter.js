// Роут описывает взамидействие администратора над содержимым базы данных
const express = require('express')
const projectController = require('../controllers/projectController')

const { checkAuth } = require('../middlewares/authGuard')

const managerSideRouter = express.Router()

// Действия администратора над продуктами
managerSideRouter.route('/projects/')
  // Получить все продукты
  .get(projectController.getAllProjects)
  // Создать новый продукт
  .post(projectController.createNewProject)

// Действия администратора над конкретным продуктом по ID
managerSideRouter.route('/products/:id')
  // Получить продукт по ID
  .get(projectController.getProjectByID)
  // Удалить продукт по ID
  .delete(checkAuth, projectController.deleteProjectByID)
  // Редактировать продукт по ID
  .patch(checkAuth, projectController.updateProjectByID)

module.exports = { managerSideRouter }
