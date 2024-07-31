const { body } = require('express-validator');

const firstName = body('first_name').notEmpty()
.withMessage('El nombre es obligatorio.')
.isLength({ max: 100 })
.withMessage('El nombre no puede tener más de 100 caracteres.');


const lastName = body('last_name').notEmpty()
.withMessage('El apellido es obligatorio.')
.isLength({ max: 100 })
.withMessage('El apellido no puede tener más de 100 caracteres.');

const rating = body('rating')
.isFloat({ min: 0, max: 10 })
.withMessage('El rating debe ser un número decimal entre 0 y 10.');

const favoriteMovie = body('favorite_movie_id')
.optional().isInt({ min: 1 })
.withMessage('El ID de la película favorita debe ser un número entero positivo.')

module.exports = { actorsValidations: [firstName, lastName, rating, favoriteMovie]}