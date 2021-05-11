// Vamos a gestionar aquí todos los endpoints relacionados con las funcinalidades sobre los gatitos

const express = require('express')
const router = express.Router()

// Importamos el modelo que queremos usar
const photos = require('../models/BBDD_photos')

// Importamos el controlador de gatos
const photosController = require('../controllers/photos')

// En este endpoints vamos a mostrar todos los gatitos que tenemos en nuestra BBDD
router.get('/', photosController.getAllPhotos)

// Cread un endpoint que recibe una query string con un parámetro 'race', y nos va a renderizar la misma vista 'cats/index'; pero esta vez filtrando por raza

// http://localhost:3000/cats/filter/?race=Vulgaris
// renderizar la vista 'cats/index' pasandole
// solo los gatos cuya raza sea la misma 
// que la del valor del parámetro 'race'

// Si no existe ningun animal para la 'race' 
// que le pasamos, mostrar un mensaje 'No existen gatos de dicha raza'. No debe renderizar la tabla

// renderiza el formulario
// router.get('/add-photo', photosController.getAddPhoto)

// router.post('/add-photo', photosController.postAddPhoto)

// Como estas rutas las quiero exportar a otras partes de la aplicación, las tengo que exponer
module.exports = router

