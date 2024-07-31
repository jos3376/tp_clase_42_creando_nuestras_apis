const db = require('../../database/models')


module.exports = {
   
    list: (req,res) =>{
        db.Genre.findAll()
        .then(genre =>{
            let response = {
                meta:{
                    status: 200,
                    total: genre.length,
                    url: 'url/genres'
                },
            data: genre
            }
            res.json(response)
        })
        .catch(err =>{
            res.status(500).json({
                ok: false,
                msg: err.message
            })
        })
    },

    detail: (req,res) => {
        const {id} = req.params;

        db.Genre.findByPk(id)
        .then(genre =>{
        let respuesta = {
            meta: {
                status: 200,
                total: genre.length,
                url: 'api/genres' + id
            },
            data: genre
        }
            res.json(respuesta);
            })
            .catch(err =>{
                res.status(500).json({
                    ok: false,
                    msg: err.message
                })
            })
        } 
}
