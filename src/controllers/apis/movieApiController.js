const { where } = require('sequelize');

const db = require('../../database/models');



module.exports = {

    create: (req, res) => {
        const { title, rating, awards, release_date, length, genre_id } = req.body;

        if (!title || !rating || !awards || !release_date || !length || !genre_id) {
            return res.status(400).json({
                ok: false,
                msg: 'title, rating, awards, release_date, length y genre_id son requeridos.'
            });
        }

        db.Movie.create({
            title,
            rating,
            awards,
            release_date,
            length,
            genre_id
        })
            .then(movies => {
                res.status(201).json({
                    meta:{
                        status: 201,
                        total: movies.length,
                        url: 'api/movies'
                    },
                    data: movies
                })
            })
            .catch(err => {
                res.status(500).json({
                    ok: false,
                    msg: err.message
                })
            })
    },
    destroy: (req, res) => {
        const { id } = req.params;

        db.Movie.destroy({
            where:{
                id
            }
        })
        .then(movie => {
            res.status(200).json({
                meta:{
                    status: 200,
                    total: movie.length,
                    url: 'api/movies/' + id
                },
                data: movie
            })
        })
        .catch(err => {
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    }
}
