const db = require('../database/models');
const { Op } = require("sequelize");
const {validationResult } = require('express-validator')

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const actorController = {
    'list': (req, res) => {
        db.Actor.findAll()
            .then(actors => {
                res.render('actors/actorsList.ejs', { actors });
            })
            .catch(error => res.status(500).send(error));
    },
    'detail': (req, res) => {
        db.Actor.findByPk(req.params.id)
            .then(actor => {
                if (!actor) {
                    return res.send('Actor no encontrado');
                }
                res.render('actors/actorsDetail.ejs', { actor });
            })
            .catch(error => res.status(500).send(error));
    },

    //Aqui dispongo las rutas para trabajar con el CRUD
    'add': (req, res) => {
    db.Movie.findAll()
        .then(movie => {
            
            const oldData = req.session ? req.session.oldData : null;

            res.render('actors/actorsAdd.ejs', { movie, oldData, errors: [] });
        })
        .catch(error => res.status(500).send(error));
},
    'create': 
     (req,res) => {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            const { first_name, last_name, rating, favorite_movie_id} = req.body;
            db.Actor.create({
                first_name,
                last_name,
                rating,
                favorite_movie_id
            })
            .then(() => {
                res.redirect('/actors')
            })
            .catch(err => {
                res.send(err.message)
            });
        }else {
            db.Movie.findAll()
            .then(movies => {
                return res.render('actors/actorsAdd.ejs', {
                    movies,
                    old: req.body,
                    errors: errors.mapped()
                })
            })
            .catch(err => {
                res.send(err.message)
            })
        }
    },

    'edit': (req,res) => {
        const actor_id = req.params.id;
        
        db.Actor.findByPk(actor_id)
        .then(Actor => {
            db.Movie.findAll().then(movies =>{
                res.render("actors/actorsEdit.ejs", {Actor, movies })
            })
        })

    },
    'update': (req, res) => {
        const { id } = req.params;
        const { first_name, last_name, rating, favorite_movie_id } = req.body;
        
        db.Actor.update({
            first_name,
            last_name,
            rating,
            favorite_movie_id
        },{ where: {id} })
        .then(() => {
            res.redirect('/actors')})
        .catch(err => {
            res.send(err.message)
        })
    },

    delete: (req, res) => {
        const { id } = req.params;
        db.Actor.findByPk(id)
        .then(actor => {
            res.render('actors/actorsDelete.ejs', { actor })
        })
        .catch(err => {
            res.send(err.message)
        })
    },
    
    'destroy': (req,res) => {
    const actor_id = req.param;

    db.Actor.destroy({
        where: {actor_id}
    }).then (()=>{
        res.redirect('/actors');
    }).catch(error => res.status(500).send(error))
    }
}

module.exports = actorController;