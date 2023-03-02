const { getPreparedErrorsFromYup } = require('../validators/utils')
const projectValidator = require('../validators/projectValidator')
const { ProjectModel } = require('../models/projectModel')

const getAllProjects = async (req, res) => {
  try {
    const allProductsObj = await ProjectModel.findAll()
    res
      .status(200)
      .json(allProductsObj)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const createNewProject = async (req, res) => {
  try {
    await projectValidator.createProjectSchema.validate(req.body, { abortEarly: false })
  } catch (error) {
    res
      .status(400)
      .json(getPreparedErrorsFromYup(error))
    return
  }
  try {
    const newProductFromDB = await ProjectModel.create(req.body)
    res
      .status(201)
      .json({ ...newProductFromDB.dataValues })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const getProjectByID = async (req, res) => {
  try {
    const { id } = req.params
    const productById = await ProjectModel.findByPk(id)
    res
      .status(201)
      .json(productById)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
const deleteProjectByID = async (req, res) => {
  try {
    const { id } = req.params
    const resFromDB = await ProjectModel.destroy({
      where: {
        id: [id],
      },
    })
    if (resFromDB === 0) {
      console.log(resFromDB)
      res
        .status(400)
        .json('Продукт не найден')
      return
    }
    console.log(resFromDB)
    res
      .status(200)
      .json('Продукт успешно удален')
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

const updateProjectByID = async (req, res) => {
  try {
    const { id } = req.params
    await ProjectModel.update(req.body, {
      where: {
        id: [id],
      },
    })
    const productById = await ProjectModel.findByPk(id)
    res
      .status(200)
      .json(productById)
  } catch (error) {
    console.log(error)
    res
      .sendStatus(500)
  }
}

module.exports = {
  getAllProjects, createNewProject, getProjectByID, deleteProjectByID, updateProjectByID,
}
