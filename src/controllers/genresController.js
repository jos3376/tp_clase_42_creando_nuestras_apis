const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genre => {
                res.render('genres/genresList.ejs', {genre})
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genres/genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;