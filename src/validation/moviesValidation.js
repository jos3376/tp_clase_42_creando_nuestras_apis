 const { body } = require('express-validator');

const title = body('title').notEmpty().withMessage('El titulo es obligatorio.');
const rating =  body('rating').isNumeric().withMessage('El rating debe ser un número entre 0 y 10 ');
const awars =  body('awards').isNumeric().withMessage('Los premios deben ser mayor a 0');
const release_date =  body('release_date').isDate().withMessage('La fecha de estreno es obligatoria');
const length =  body('length').isInt({min: 1}).withMessage('La duración es obligatoria');
const genre_id =  body('genre_id').notEmpty().withMessage('El genero es obligatorio')

module.exports = { moviesValidation: [
title,
rating,
awars,
release_date,
length,
genre_id
]}