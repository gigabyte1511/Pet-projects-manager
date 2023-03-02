const yup = require('yup')

const createProjectSchema = yup.object({
  name: yup
    .string('Поле должно быть строкой')
    .min(2, 'Поле должно содержать минимум 2 символа')
    .required('Поле обязательно для заполнения'),
  image: yup
    .string('Поле должно быть строкой')
    .url('Поле содержит не валидный url-адрес'),
  projectURL: yup
    .string('Поле должно быть строкой')
    .url('Поле содержит не валидный url-адрес'),
  description: yup
    .string('Поле должно быть строкой'),
})

module.exports = { createProjectSchema }
